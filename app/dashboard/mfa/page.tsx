"use client";

import { enrollMFA } from "@/lib/actions/mfa/enrollMfa";
import { verifyMFA } from "@/lib/actions/mfa/verifyMfa";
import { useState } from "react";

export default function MFA({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [enrollmentData, setEnrollmentData] = useState<any>(null);

  const handleEnrollMFA = async () => {
    const mfa = await enrollMFA();
    console.log("MFA-->", mfa);

    setEnrollmentData(mfa);
    setQrCode(mfa.totp.qr_code);
  };

  return (
    <>
      <div className="pt-0 p-3 border border-white w-full h-[84vh] flex justify-between items-center">
        <div className="flex justify-center items-center border border-white w-[20vw] h-[50vh]">
          <button
            onClick={() => handleEnrollMFA()}
            className="bg-white text-black px-4 py-2 rounded-2xl mb-3"
          >
            Enable 2FA
          </button>
        </div>
        <div className="border border-white w-[80vw] h-[50vh]">
          <div className="w-full mx-auto flex items-center justify-center gap-7 border border-red-200 h-full">
            {qrCode && (
              <div className="text-center ">
                <div className="inline-block border p-4 rounded-lg bg-white">
                  <img
                    src={qrCode}
                    alt="MFA QR Code"
                    width={180}
                    height={180}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Scan this QR code with any authenticator app to get your code!
                </p>
              </div>
            )}

            <form className="space-y-4" action={verifyMFA}>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="verifyCode"
                >
                  Enter your code
                </label>
                <input
                  className="w-full rounded-md px-4 py-2 bg-inherit border"
                  name="verifyCode"
                  id="verifyCode"
                  placeholder="Enter your code"
                  required
                />
              </div>
              <button
                className="w-full bg-green-600 rounded-md px-4 py-2 text-white
               hover:bg-green-500 transition-colors"
              >
                Verify
              </button>
            </form>

            {searchParams?.message && (
              <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center rounded">
                {searchParams.message}
              </p>
            )}

            {/* {enrollmentData && (
              <div className="mt-4 p-4 bg-gray-700 text-white rounded-lg">
                <h3 className="font-semibold mb-2">Enrollment Data:</h3>
                <pre className="text-xs overflow-x-auto">
                  {JSON.stringify(enrollmentData, null, 2)}
                </pre>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}
