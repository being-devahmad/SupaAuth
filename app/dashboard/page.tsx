import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import EnrollMFA from "@/components/EnrollMFAButton";

export default async function Dashboard() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <>
      <EnrollMFA />

      <div className="text-7xl flex justify-center items-center w-full h-[90vh] border border-gray-700 bg-gray-900 text-gray-100">
        <p>Hello {data.user.email}</p>
      </div>
    </>
  );
}
