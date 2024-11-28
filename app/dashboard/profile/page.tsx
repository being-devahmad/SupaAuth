import { DashboardNav } from "@/components/Dashboard/DashboardNav";
import Sidebar from "@/components/Dashboard/Sidebar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export default async function Profile() {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/login");
    }


    const userEmail = data.user.email ?? "Anonymous User"

    return (
        <>
            <div className="flex h-screen bg-gray-700 text-gray-500">
                {/* <Sidebar /> */}
                <div className="w-full">
                    <DashboardNav userEmail={userEmail} />
                    <div className="flex justify-center items-center text-5xl w-full h-[90%] border border-wite">
                        <h1>
                            Profile Page
                        </h1>
                    </div>
                </div>

            </div>
        </>
    );
}
