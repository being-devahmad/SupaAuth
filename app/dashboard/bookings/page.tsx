import { BookingForm } from "@/components/Dashboard/Booking/BookingForm";
import { DashboardNav } from "@/components/Dashboard/DashboardNav";
import Sidebar from "@/components/Dashboard/Sidebar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export default async function Dashboard() {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/login");
    }


    const userEmail = data.user.email ?? "Anonymous User"

    return (
        <>
            <div className="flex  h-screen bg-gray-700 text-gray-500">
                {/* <Sidebar /> */}
                <div className="w-full">
                    <DashboardNav userEmail={userEmail} />
                    <BookingForm />
                </div>
            </div>
        </>
    );
}
