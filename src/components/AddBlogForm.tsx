'use client';
import { useActionState, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { addBlog } from '@/lib/actions/blogs';
import { showToast } from '@/lib/utils';

export default function AddBlogDialog() {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [open, setOpen] = useState(false);

  const [state, formAction, isPending] = useActionState(addBlog, null);

  useEffect(() => {
    if (state?.success) {
      showToast('Blog added successfully!', 'success');
      setOpen(false);
      setTitle('');
      setUrl('');
    }
  }, [state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white mb-4">
          Add Blog
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Blog</DialogTitle>
        </DialogHeader>
        <form action={formAction} className="flex flex-col gap-4">
          <Input
            placeholder="Blog Title"
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-100 dark:bg-gray-800"
          />
          <Input
            placeholder="Blog URL"
            value={url}
            name="url"
            onChange={(e) => setUrl(e.target.value)}
            className="bg-gray-100 dark:bg-gray-800"
            type="url"
          />
          <Button
            type="submit"
            disabled={isPending}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Add Blog
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
