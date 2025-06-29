import AddBlogDialog from '@/components/AddBlogForm';
import BlogPage from '@/components/BlogPage';

const page = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-white to-pink-100 py-12 px-2">
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-2 drop-shadow-lg tracking-tight">
          📝 Blogify
        </h1>
        <p className="text-lg text-gray-500 mb-4 text-center max-w-xl">
          Share your thoughts, stories, and ideas with the world. Start by
          adding a new blog or explore what others have written!
        </p>
        <AddBlogDialog />
      </div>
      <div className="bg-white/90 rounded-3xl shadow-2xl p-8 border border-indigo-100">
        <BlogPage />
      </div>
    </div>
  </div>
);

export default page;
