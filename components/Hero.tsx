import { AuthButtons } from "./AuthButtons";

export const Hero = () => {
  return (
    <div className="bg-gray-900 text-gray-100 h-[86vh]">
      <div className="relative flex flex-col justify-center items-center h-full">
        <div className="mx-auto max-w-full px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl lg:text-6xl">
              Supabase Complete Authentication System
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-300 sm:text-lg lg:text-xl max-w-3xl mx-auto">
              This is a Supabase complete authentication system. It includes
              login and signup using email and password, OAuth providers, magic
              links, OTP, and multi-factor authentication.
            </p>

            <div className="mt-10 flex justify-center">
              <AuthButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
