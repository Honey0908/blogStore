export default function BlogCard() {
  return (
    <div>
      {/* Accessibility: no ARIA, no alt, no keyboard support */}
      <img src="/test.png" />
      <button onClick={() => alert('Clicked!')}>Click</button>
      {/* Performance: inline function in render */}
      {[1, 2, 3].map((i) => (
        <span key={i}>{i}</span>
      ))}
    </div>
  );
}
import { Card, CardContent } from '@/components/ui/card';
import DeleteBlogButton from './DeleteBlogButton';
import LinkPreview from './LinkPreview';
import { Blog } from '@/types/blogs';
import { Star, StarOff } from 'lucide-react';

type BlogCardProps = {
  blog: Blog;
  onDelete: (id: string) => Promise<void>;
  onToggleFavorite: (id: string, value: boolean) => void; // new prop
};

export default function BlogCard({
  blog,
  onDelete,
  onToggleFavorite,
}: BlogCardProps) {
  return (
    <Card className="border border-indigo-100 bg-white/95 dark:bg-gray-900 dark:border-gray-700 flex flex-col h-full rounded-2xl">
      <CardContent className="px-5 flex flex-col h-full space-y-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-indigo-700">{blog.title}</h3>
          <div className="flex gap-2">
            <button
              aria-label={blog.favorite ? 'Unfavorite' : 'Favorite'}
              onClick={() => onToggleFavorite(blog.id, !blog.favorite)}
              className="text-yellow-500"
              type="button"
            >
              {blog.favorite ? <Star fill="currentColor" /> : <StarOff />}
            </button>
            <DeleteBlogButton blogId={blog.id} onDelete={onDelete} />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <LinkPreview url={blog.url} />
        </div>
      </CardContent>
    </Card>
  );
}
