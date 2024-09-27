"use client";

import { checkAssurance } from "@/lib/actions/mfa/checkAssuranceLevel";
import { useRouter } from "next/navigation";

export default function EnrollMFA() {
  const router = useRouter();

  const navigateToMFA = () => {
    router.push("/dashboard/mfa");
  };

  const checkAssuranceLevel = async () => {
    const assuranceLvl = await checkAssurance();
    console.log("AssuranceLvl->", assuranceLvl);
  };

  return (
    <>
      <div className="flex justify-center items-center gap-3">
        <button
          onClick={() => navigateToMFA()}
          className="bg-white text-black px-4 py-2 rounded-2xl mb-3"
        >
          Enable 2FA
        </button>
        <button
          onClick={() => checkAssuranceLevel()}
          className="bg-white text-black px-4 py-2 rounded-2xl mb-3"
        >
          Check assurance level
        </button>
      </div>
    </>
  );
}
