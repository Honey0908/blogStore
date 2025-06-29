'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type LinkPreviewData = {
  image?: { url: string };
  title?: string;
  description?: string;
  url?: string;
};

export default function LinkPreview({ url }: { url: string }) {
  const [data, setData] = useState<LinkPreviewData | null>(null);

  useEffect(() => {
    if (!url) return;
    fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}`)
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch(() => setData(null));
  }, [url]);

  if (!data) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-gray-200 hover:shadow-lg transition p-2 bg-gray-50"
    >
      {data.image?.url && (
        <Image
          width={400}
          height={160}
          src={data.image.url}
          alt={data?.title ?? ''}
          className="object-cover rounded mb-2"
        />
      )}
      <div>
        <div className="font-semibold text-base text-gray-800">
          {data.title}
        </div>
        <div className="text-sm text-gray-500 line-clamp-2">
          {data.description}
        </div>
        <div className="text-xs text-blue-500 mt-1">{data.url}</div>
      </div>
    </a>
  );
}
