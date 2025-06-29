'use client';
import { useState } from 'react';
import { loginWithEmail } from '@/lib/services/authServices';
import { showToast, setCookie } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await loginWithEmail(email, password);
      if (user) {
        setCookie('uid', user.uid, {
          expires: 7,
          path: '/',
          sameSite: 'lax',
          secure: process.env.NODE_ENV === 'production',
        });
        showToast('Login successful!', 'success');
        router.push('/blogs');
      }
    } catch {
      showToast('Login failed. Please check your credentials.', 'error');
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4 max-w-sm mx-auto">
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
        Log In
      </button>
    </form>
  );
}
