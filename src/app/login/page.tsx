"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session } = useSession();

  const router = useRouter();
  // const isAuthenticated = session?.user;
  const handleSignIn = async (provider: string) => {
    await signIn(provider);
  };

  useEffect(() => {
    if (session) {
      router.push('/write');  
    }
  }, [session, router]);

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 text-center">
          Login
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
          Sign in with one of the following providers
        </p>
        <div className="mt-6 space-y-4">
          <button
            onClick={() => handleSignIn("github")}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
          >
            Sign in with GitHub
          </button>
          <button
            onClick={() => handleSignIn("google")}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
