import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="bg-white/90 shadow-2xl rounded-3xl p-10 max-w-xl w-full flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-4 drop-shadow-lg text-center">
        📚 Welcome to <span className="text-pink-500">Blogify</span>
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Curate your personal collection of blogs you’ve already read or plan to
        read.
        <br />
        Organize, revisit, and never lose track of your favorite articles!
      </p>
      <Link
        href="/blogs"
        className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:from-indigo-600 hover:to-pink-600 transition"
      >
        View Your Blog Collection
      </Link>
    </div>
  );
};

export default HomePage;
