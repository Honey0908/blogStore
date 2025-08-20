import BlogPage from '@/components/BlogPage';
import Logout from '@/components/Logout';
import BlogHeader from '@/components/BlogHeader';

const page = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-white to-pink-100 py-12 px-2 relative">
    <Logout />
    <div className="max-w-5xl mx-auto">
      <BlogHeader />
      <div className="bg-white/90 rounded-3xl shadow-2xl border border-indigo-100">
        <BlogPage />
      </div>
    </div>
  </div>
);

export default page;
