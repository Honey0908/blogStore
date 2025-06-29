import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-pink-100">
      <div className="bg-white/90 shadow-xl rounded-2xl p-10 flex flex-col items-center">
        <h1 className="text-7xl font-extrabold text-indigo-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6 text-center">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-indigo-600 hover:to-pink-600 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
