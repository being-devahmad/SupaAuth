'use client';

import { checkAssurance } from "@/lib/actions/mfa/checkAssuranceLevel";

export function DashboardNav({ userEmail }: { userEmail: string }) {
    const checkAssuranceLevel = async () => {
        const assuranceLvl = await checkAssurance();
        console.log("AssuranceLvl->", assuranceLvl);
    };

    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">SupaAuth 2.0</div>
                <div className="flex items-center space-x-4">
                    <span>{userEmail}</span>
                    <button
                        onClick={checkAssuranceLevel}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
                    >
                        Check assurance level
                    </button>
                </div>
            </div>
        </nav>
    );
}
