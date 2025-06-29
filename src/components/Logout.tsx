'use client';
import { auth } from '@/lib/firebaseClient';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import Cookies from 'js-cookie';

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    Cookies.remove('uid', { path: '/' });
    router.push('/login');
  };

  return (
    <Button
      onClick={handleLogout}
      className="absolute top-6 right-6 bg-pink-500 hover:bg-pink-600 text-white"
    >
      Logout
    </Button>
  );
}
