"use client";

import { checkAssurance } from "@/lib/actions/mfa/checkAssuranceLevel";

export default function EnrollMFA() {
 


  const checkAssuranceLevel = async () => {
    const assuranceLvl = await checkAssurance();
    console.log("AssuranceLvl->", assuranceLvl);
  };

  return (
    <>
      <div className="flex justify-center items-center gap-3">
       
        <button
          onClick={() => checkAssuranceLevel()}
          className="bg-gray-800 text-gray-200 px-4 py-2 rounded-2xl mb-3 hover:bg-gray-700 transition duration-200"
        >
          Check assurance level
        </button>
      </div>
    </>
  );
}
