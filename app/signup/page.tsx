import Header from "@/components/Header/Header";
import { signupAction } from "@/lib/actions/signup";
import Link from "next/link";

export default async function Signup({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <div className="w-full px-8 sm:max-w-md mx-auto mt-4">
        <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-gray-100 mb-4">
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
          <label className="text-md" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-gray-800 border border-gray-700 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            required
          />
          <button
            formAction={signupAction}
            className="bg-indigo-600 hover:bg-indigo-700 rounded-md px-4 py-2 text-gray-100 mb-2 transition duration-300"
          >
            Sign up
          </button>

          {searchParams?.message && (
            <p className="mt-4 p-4 bg-gray-800 text-gray-300 text-center rounded-md">
              {searchParams.message}
            </p>
          )}
        </form>

        <Link
          href="/login"
          className="rounded-md no-underline text-indigo-400 text-sm hover:text-indigo-300 transition duration-300"
        >
          Already have an account? Sign In
        </Link>
      </div>
    </div>
  );
}
