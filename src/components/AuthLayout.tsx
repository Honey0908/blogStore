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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-blue-100">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2 text-center text-primary">
          {title}
        </h1>
        <p className="mb-6 text-center text-gray-500">{subtitle}</p>
        {children}
        <div className="mt-6 text-center">{bottomText}</div>
      </div>
    </div>
  );
}
