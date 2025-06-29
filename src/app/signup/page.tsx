import SignupForm from '@/components/SignupForm';
import Link from 'next/link';
import AuthLayout from '@/components/AuthLayout';

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Sign up to start your Blogify journey"
      bottomText={
        <>
          <span className="text-gray-600">Already have an account? </span>
          <Link
            href="/login"
            className="text-primary font-semibold hover:underline"
          >
            Log in
          </Link>
        </>
      }
    >
      <SignupForm />
    </AuthLayout>
  );
}
