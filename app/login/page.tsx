import Header from "@/components/Header/Header";
import { loginAction } from "@/lib/actions/login";
import Link from "next/link";

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div>
      <Header />

      <Link
        href="/"
        className="py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover text-sm m-4"
      >
        Home
      </Link>

      <div className="w-full px-8 sm:max-w-md mx-auto mt-4">
        <form
          action={loginAction}
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground mb-4"
        >
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="email"
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <button className="bg-indigo-700 rounded-md px-4 py-2 text-foreground mb-2">
            Sign In
          </button>

          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>

        <div className="flex justify-between">
          <form action={""}>
            <button className="bg-white text-black hover:bg-gray-500 hover:text-white duration-150 rounded-md px-4 py-2 text-foreground mb-2">
              Sign In With Google
            </button>
          </form>
          <form action={""}>
            <button className="bg-white text-black hover:bg-gray-500 hover:text-white duration-150 rounded-md px-4 py-2 text-foreground mb-2">
              Sign In With Github
            </button>
          </form>
        </div>

        <Link
          href="/forgot-password"
          className="rounded-md no-underline text-indigo-400 text-sm "
        >
          Forgotten Password.
        </Link>

        <br />
        <br />

        <Link
          href="/signup"
          className="rounded-md no-underline text-foreground text-sm"
        >
          Don't have an Account? Sign Up
        </Link>
      </div>
    </div>
  );
}
