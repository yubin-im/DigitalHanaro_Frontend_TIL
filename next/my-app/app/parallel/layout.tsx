'use client';

import Link from 'next/link';
import { useReducer } from 'react';

// app/parallel/layout.tsx
export default function ParallelLayout({
  children,
  profile,
  login,
}: {
  children: React.ReactNode;
  profile: React.ReactNode;
  login: React.ReactNode;
}) {
  // const isLogin = false;
  const [isLogin, toggleLogin] = useReducer((pre) => !pre, false);
  return (
    <>
      <h1>
        ParallelLayout
        <button onClick={toggleLogin} className='float-end text-blue-500'>
          Toggle Login
        </button>
      </h1>
      {isLogin ? (
        <div className='border border-dotted border-red-500 flex justify-around p-5'>
          <div className='border p-3'>{profile}</div>
          <div className='border p-3'>{login}</div>
        </div>
      ) : (
        login
      )}

      {children}

      <div className='flex justify-around'>
        <Link href='/parallel/bbb'>Profile/BBB</Link>
        <Link href='/parallel/aaa'>Login/AAA</Link>
      </div>

      <div className='flex justify-around'>
        <Link href='/parallel/ccc'>Profile/CCC</Link>
        <Link href='/parallel/ddd'>Login/DDD</Link>
      </div>
      <Link href='/parallel/xxx'>XXX</Link>
    </>
  );
}
