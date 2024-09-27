import Header from "@/components/Header/Header";
import {
  signInWithGithub,
  signInWithGoogle,
} from "@/lib/actions/auth-provider";
import { loginAction } from "@/lib/actions/login";
import Link from "next/link";

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />

      <div className="w-full px-8 sm:max-w-md mx-auto mt-4">
        <form
          action={loginAction}
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-gray-100 mb-4"
        >
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md px-4 py-2 bg-gray-800 border border-gray-700 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            name="email"
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-gray-800 border border-gray-700 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <button className="bg-indigo-600 hover:bg-indigo-700 rounded-md px-4 py-2 text-gray-100 mb-2 transition duration-300">
            Sign In
          </button>

          {searchParams?.message && (
            <p className="mt-4 p-4 bg-gray-800 text-gray-300 text-center rounded-md">
              {searchParams.message}
            </p>
          )}
        </form>

        <div className="flex justify-between">
          <form action={signInWithGoogle}>
            <button className="bg-gray-700 hover:bg-gray-600 rounded-md px-4 py-2 text-gray-200 mb-2 transition duration-300">
              Sign In With Google
            </button>
          </form>
          <form action={signInWithGithub}>
            <button className="bg-gray-700 hover:bg-gray-600 rounded-md px-4 py-2 text-gray-200 mb-2 transition duration-300">
              Sign In With Github
            </button>
          </form>
        </div>

        <Link
          href="/forgot-password"
          className="rounded-md no-underline text-indigo-400 text-sm hover:text-indigo-300 transition duration-300"
        >
          Forgotten Password
        </Link>

        <br />
        <br />

        <Link
          href="/signup"
          className="rounded-md no-underline text-gray-400 text-sm hover:text-gray-300 transition duration-300"
        >
          Don't have an Account? Sign Up
        </Link>
      </div>
    </div>
  );
}
