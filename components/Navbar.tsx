"use client";
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="flex justify-between items-center p-4 shadow">
      <Link href="/"><span className="text-xl font-bold">Inspire</span></Link>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        {session ? (
          <button onClick={() => signOut()}>Logout</button>
        ) : (
          <button onClick={() => signIn()}>Login</button>
        )}
      </div>
    </nav>
  );
}