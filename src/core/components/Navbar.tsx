"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export const Navbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const signOutHandler = (e: React.MouseEvent) => {
    signOut({ callbackUrl: "/login" });
  };

  const signInHandler = (e: React.MouseEvent) => {
    router.push("/login");
  };

  if (status === "loading") {
    return (
      <div className="bg-slate-50 border-b animate-pulse flex items-center p-4 justify-center">
        <p className="text-centere text-slate-500">Loading...</p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="bg-slate-50 border-b p-4 box-content sticky top-0 left-0 right-0 flex justify-between items-center">
        <Link className="font-semibold text-blue-500 text-lg" href="/">
          Next.auth
        </Link>

        <ul className="flex items-center space-x-4">
          <li>
            <button
              onClick={signInHandler}
              className="px-2 py-1 bg-white rounded ring-1 hover:bg-blue-50 ring-offset-2 ring-blue-500 ring-offset-slate-50 text-blue-500"
            >
              Login
            </button>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 border-b p-4 box-content sticky top-0 left-0 right-0 flex justify-between items-center">
      <Link className="font-semibold text-blue-500 text-lg" href="/">
        Next.auth
      </Link>

      <ul className="flex items-center space-x-4">
        <li>
          <Link className="text-slate-500" href="/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="text-slate-500" href="/profile">
            Profile
          </Link>
        </li>
        <li>
          <button
            onClick={signOutHandler}
            className="px-2 py-1 bg-white rounded ring-1 hover:bg-red-50 ring-offset-2 ring-red-500 ring-offset-slate-50 text-red-500"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};
