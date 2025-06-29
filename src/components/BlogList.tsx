'use client';

import { use } from 'react';
import { Trash2, FileQuestion } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebaseClient';
import { Blog } from '@/types/blogs';
import LinkPreview from './LinkPreview';

function NoBlogs() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-gray-400">
      <FileQuestion className="w-12 h-12 mb-2" />
      <p className="text-lg font-medium">No blogs available</p>
      <p className="text-sm text-gray-500">Start by adding your first blog!</p>
    </div>
  );
}

export default function BlogList({ blogs }: { blogs: Promise<Blog[]> }) {
  const blogsData = use(blogs);

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm('Are you sure you want to delete this blog?');
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, 'blogs', id));
      alert('Blog deleted! Please refresh to see the update.');
    } catch (err) {
      console.error('Delete failed', err);
      alert('Failed to delete the blog');
    }
  };

  if (!blogsData || blogsData.length === 0) {
    return <NoBlogs />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 max-w-3xl mx-auto">
      {blogsData.map((blog) => (
        <Card
          key={blog.id}
          className="hover:shadow-xl transition-shadow duration-200 border border-border bg-white dark:bg-gray-900 dark:border-gray-700 flex flex-col h-full"
        >
          <CardContent className="p-5 space-y-3 flex flex-col h-full">
            <div className="flex justify-between items-start gap-3 mb-2">
              <h3 className="text-xl font-semibold text-foreground">
                {blog.title}
              </h3>
              <button
                onClick={() => handleDelete(blog.id)}
                className="text-red-500 hover:text-red-700 transition mt-1"
                title="Delete Blog"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 flex flex-col">
              <LinkPreview url={blog.url} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
