'use client';

import React from 'react';

interface ScrollToTopButtonProps {
  readonly ref: React.RefObject<HTMLDivElement>;
}
export default function ScrollToTopButton({ ref }: ScrollToTopButtonProps) {
  const handleScrollToTop = () => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-8 right-8 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition"
      aria-label="Scroll to top"
    >
      ↑ Top
    </button>
  );
}
