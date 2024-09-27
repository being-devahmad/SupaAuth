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

      <div className="text-7xl flex justify-center items-center w-full min-h-[70vh] border border-white">
        <p>Hello {data.user.email}</p>
      </div>
    </>
  );
}
