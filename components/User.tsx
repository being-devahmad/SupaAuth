import { signOutAction } from "@/lib/actions/signout";
import { createClient } from "@/utils/supabase/server";

export default async function User() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex items-center gap-4">
      Hey, {user ? user?.email : "user"}
      <form>
        <button
          formAction={signOutAction}
          className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        >
          Logout
        </button>
      </form>
    </div>
  );
}
