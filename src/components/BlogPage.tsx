import BlogList from '@/components/BlogList';
import { getBlogs } from '@/lib/actions/blogs';
import { Suspense } from 'react';
import BlogListSkeleton from './BlogListSkeleton';

export default function BlogPage() {
  const blogData = getBlogs();

  return (
    <div className="p-0 sm:p-5">
      <Suspense fallback={<BlogListSkeleton />}>
        <BlogList blogs={blogData} />
      </Suspense>
    </div>
  );
}
