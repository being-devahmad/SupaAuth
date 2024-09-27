import { signOutAction } from "@/lib/actions/signout";
import { createClient } from "@/utils/supabase/server";

export default async function User() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("user-->", user);

  return (
    <div className="flex items-center gap-4 text-gray-300">
      Hey, {user ? user?.email : "anonymous user"}
      <form>
        <button
          formAction={signOutAction}
          className="py-2 px-4 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-200 transition duration-200"
        >
          Logout
        </button>
      </form>
    </div>
  );
}
