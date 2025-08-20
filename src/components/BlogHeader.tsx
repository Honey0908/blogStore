'use client';
import AddBlogDialog from '@/components/AddBlogForm';
import ScrollToTopButton from './ScrollToTop';
import { useRef } from 'react';

export default function BlogHeader() {
  const blogListRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  return (
    <>
      <div ref={blogListRef} className="flex flex-col items-center mb-10">
        <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-2 drop-shadow-lg tracking-tight">
          📚 Your Blog Collection
        </h1>
        <p className="text-lg text-gray-500 mb-4 text-center max-w-xl">
          Store and organize your personal collection of blogs you’ve already
          read or plan to read.
        </p>
        <AddBlogDialog />
      </div>
      <ScrollToTopButton ref={blogListRef} />
    </>
  );
}
