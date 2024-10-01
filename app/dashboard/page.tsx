import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import EnrollMFA from "@/components/EnrollMFAButton";
import Sidebar from "@/components/Dashboard/Sidebar";

export default async function Dashboard({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <>
      <div className="flex  h-screen bg-gray-700 text-gray-100">
        <Sidebar />
        <div className="w-full flex flex-col justify-center items-center ">
          <EnrollMFA />
          <p className="text-6xl">Hello {data.user.email}</p>
        </div>
      </div>
    </>
  );
}
