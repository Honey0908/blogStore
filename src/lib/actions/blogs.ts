'use server';

import { dbAdmin } from '@/lib/firebaseAdmin';
import { Blog } from '@/types/blogs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

/**
 * Get all blogs for the current user
 * @returns Promise<Blog[]>
 */
export async function getBlogs() {
  const cookieStore = await cookies();
  const uid = cookieStore.get('uid')?.value;
  if (!uid) {
    redirect('/login');
  }
  const snapshot = await dbAdmin
    .collection('blogs')
    .where('userId', '==', uid)
    .get();

  const blogs = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return blogs as Blog[];
}

/**
 * Add a new blog post
 * @param _ - Unused parameter for server action signature
 * @param formData
 * @returns
 */
export async function addBlog(_: unknown, formData: FormData) {
  const cookieStore = await cookies();
  const uid = cookieStore.get('uid')?.value;
  if (!uid) {
    redirect('/login');
  }

  const title = formData.get('title') as string;
  const url = formData.get('url') as string;

  if (!title || !url) return { success: false };

  await dbAdmin.collection('blogs').add({
    title,
    url,
    userId: uid,
  });

  // 🔄 Revalidate the blog page path
  revalidatePath('/blogs');

  return { success: true };
}

/**
 * Toggle the favorite status of a blog post
 * @param blogId The ID of the blog post
 * @param value The new favorite status
 * @returns A promise that resolves to an object indicating success
 */
export async function toggleFavorite(blogId: string, value: boolean) {
  await dbAdmin.collection('blogs').doc(blogId).update({ favorite: value });
  revalidatePath('/blogs');
  return { success: true };
}
