import BlogList from '@/components/BlogList';
import { getBlogs } from '@/lib/actions/blogs';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function BlogListSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(1)].map((_, i) => (
        <div
          key={i}
          className="p-4 rounded bg-indigo-50 shadow flex flex-col gap-2"
        >
          <Skeleton className="h-6 w-1/2 bg-indigo-200" />
          <Skeleton className="h-4 w-1/3 bg-indigo-100" />
        </div>
      ))}
    </div>
  );
}

export default function BlogPage() {
  const blogData = getBlogs();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-900 p-10">
      <Suspense fallback={<BlogListSkeleton />}>
        <BlogList blogs={blogData} />
      </Suspense>
    </div>
  );
}
