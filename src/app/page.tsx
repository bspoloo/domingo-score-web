"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Login from "./atomic/molecules/login";
import Presentation from "./atomic/molecules/presentation";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Home() {
  const { user, isLoading } = useUser();

  useEffect(() => {
    
  }, [isLoading, user])

  if (!isLoading && !user) {
    redirect('/login')
    return <div> Loading</div>
  }
  if (!user) {
    return null;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <h1>Welcome to My App</h1>
          <div>
            <h1>Welcome, {user.name}</h1>
            <p>Email: {user.email}</p>
            <a href="/api/auth/logout">Logout</a>
          </div>
      </div>
    </div>
  );
}
