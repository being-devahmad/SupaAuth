import { verifyMFA } from "@/lib/actions/mfa/verifyMfa";

export default function MfaVerification({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <>
      <div className="w-full px-8 sm:max-w-md mx-auto mt-4">
        <form
          action={verifyMFA}
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground mb-4"
        >
          <label className="text-md" htmlFor="verifyCode">
            Enter your 6-digit verification code
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="text"
            name="verifyCode"
            placeholder="••••••••"
            required
          />
          <button className="bg-green-600 rounded-md px-4 py-2 text-foreground mb-2">
            Verify
          </button>

          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </>
  );
}
