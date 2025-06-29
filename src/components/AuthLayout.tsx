import React from 'react';

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  bottomText: React.ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
  bottomText,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-white to-pink-100">
      <div className="bg-white/90 shadow-2xl rounded-3xl p-10 w-full max-w-md flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-2 text-center text-indigo-700 drop-shadow-lg">
          {title}
        </h1>
        <p className="mb-6 text-center text-gray-600 text-base">{subtitle}</p>
        <div className="w-full">{children}</div>
        <div className="mt-6 text-center">{bottomText}</div>
      </div>
    </div>
  );
}
