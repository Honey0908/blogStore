import { Skeleton } from './ui/skeleton';

export default function BlogListSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className="p-4 m-4 rounded bg-indigo-50 shadow flex flex-col gap-2"
        >
          <Skeleton className="h-6 w-1/2 bg-indigo-200" />
          <Skeleton className="h-4 w-1/3 bg-indigo-100" />
        </div>
      ))}
    </div>
  );
}
