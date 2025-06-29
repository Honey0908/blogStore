import { FileQuestion } from 'lucide-react';

export default function NoBlogs() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-gray-400">
      <FileQuestion className="w-12 h-12 mb-2" />
      <p className="text-lg font-medium">No blogs available</p>
      <p className="text-sm text-gray-500">Start by adding your first blog!</p>
    </div>
  );
}
