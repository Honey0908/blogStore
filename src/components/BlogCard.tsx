import { Card, CardContent } from '@/components/ui/card';
import DeleteBlogButton from './DeleteBlogButton';
import LinkPreview from './LinkPreview';
import { Blog } from '@/types/blogs';

type BlogCardProps = {
  blog: Blog;
  onDelete: (id: string) => Promise<void>;
};

export default function BlogCard({ blog, onDelete }: BlogCardProps) {
  return (
    <Card className="   border border-indigo-100 bg-white/95 dark:bg-gray-900 dark:border-gray-700 flex flex-col h-full rounded-2xl">
      <CardContent className="px-5 flex flex-col h-full space-y-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-indigo-700">{blog.title}</h3>
          <DeleteBlogButton blogId={blog.id} onDelete={onDelete} />
        </div>
        <div className="flex-1 flex flex-col">
          <LinkPreview url={blog.url} />
        </div>
      </CardContent>
    </Card>
  );
}
