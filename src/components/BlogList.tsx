'use client';

import { startTransition, use, useOptimistic } from 'react';
import { Blog } from '@/types/blogs';
import BlogCard from './BlogCard';
import NoBlogs from './NoBlog';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebaseClient';
import { showToast } from '@/lib/utils';
import { toggleFavorite } from '@/lib/actions/blogs';

export default function BlogList({ blogs }: { blogs: Promise<Blog[]> }) {
  const blogsData = use(blogs);

  const [optimisticBlogs, updateOptimisticBlogs] = useOptimistic(
    blogsData,
    (state, { id, value }: { id: string; value: boolean }) =>
      state.map((blog) =>
        blog.id === id ? { ...blog, favorite: value } : blog
      )
  );

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'blogs', id));
      showToast('Blog deleted successfully!', 'success');
    } catch {
      showToast('Failed to delete blog. Please try again.', 'error');
    }
  };

  const handleToggleFavorite = async (id: string, value: boolean) => {
    startTransition(() => {
      updateOptimisticBlogs({ id, value });
    });
    await toggleFavorite(id, value);
  };

  if (!optimisticBlogs || optimisticBlogs.length === 0) {
    return <NoBlogs />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 max-w-4xl mx-auto border border-gray-200 rounded-3xl bg-white dark:bg-gray-900 p-6">
      {optimisticBlogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onDelete={handleDelete}
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
    </div>
  );
}
