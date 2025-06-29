'use client';

import { use } from 'react';
import { Blog } from '@/types/blogs';
import BlogCard from './BlogCard';
import NoBlogs from './NoBlog';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebaseClient';
import { showToast } from '@/lib/utils';

export default function BlogList({ blogs }: { blogs: Promise<Blog[]> }) {
  const blogsData = use(blogs);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'blogs', id));
      showToast('Blog deleted successfully!', 'success');
    } catch {
      showToast('Failed to delete blog. Please try again.', 'error');
    }
  };

  if (!blogsData || blogsData.length === 0) {
    return <NoBlogs />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 max-w-4xl mx-auto">
      {blogsData.map((blog) => (
        <BlogCard key={blog.id} blog={blog} onDelete={handleDelete} />
      ))}
    </div>
  );
}
