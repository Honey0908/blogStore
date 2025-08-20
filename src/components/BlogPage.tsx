import BlogList from '@/components/BlogList';
import { getBlogs } from '@/lib/actions/blogs';
import { Suspense } from 'react';
import BlogListSkeleton from './BlogListSkeleton';
import { after } from 'next/server';
import { logPageView } from '@/lib/actions/common';

export default function BlogPage() {
  const blogData = getBlogs();
  after(async () => {
    await logPageView();
  });

  return (
    <div className="p-0 sm:p-5">
      <Suspense fallback={<BlogListSkeleton />}>
        <BlogList blogs={blogData} />
      </Suspense>
    </div>
  );
}
