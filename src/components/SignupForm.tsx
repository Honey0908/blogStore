'use client';
import { useState } from 'react';
import { showToast } from '@/lib/utils';
import { signupWithEmail } from '@/lib/services/authServices';
import { useRouter } from 'next/navigation';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signupWithEmail(email, password);
      showToast('Signup successful! Please log in.', 'success');
      router.push('/login');
    } catch {
      showToast('Signup failed. Please try again.', 'error');
    }
  };

  return (
    <form onSubmit={handleSignup} className="space-y-4 max-w-sm mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 border"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full p-2 border"
      />
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
        Sign Up
      </button>
    </form>
  );
}
