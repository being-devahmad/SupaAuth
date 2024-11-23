import { signOutAction } from "@/lib/actions/signout";
import { Bell, Home, Lock, User, Settings, HelpCircle, User2, BookIcon } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <aside className="w-64 bg-gray-800 p-4 hidden md:block">
        <nav className="space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 text-gray-300 hover:bg-gray-700 rounded p-2"
          >
            <Home className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 text-gray-300 hover:bg-gray-700 rounded p-2"
          >
            <User className="h-5 w-5" />
            <span>Profile</span>
          </Link>
          <Link
            href="/dashboard/bookings"
            className="flex items-center space-x-2 hover:bg-gray-700 text-white rounded p-2"
          >
            <BookIcon className="h-5 w-5" />
            <span>Bookings</span>
          </Link>
          <Link
            href="/dashboard/users"
            className="flex items-center space-x-2 hover:bg-gray-700 text-white rounded p-2"
          >
            <User2 className="h-5 w-5" />
            <span>Users</span>
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center space-x-2 hover:bg-gray-700 text-white rounded p-2"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 text-gray-300 hover:bg-gray-700 rounded p-2"
          >
            <HelpCircle className="h-5 w-5" />
            <span>Help</span>
          </Link>

          <div className="flex items-center space-x-2 text-white bg-gray-700  rounded">
            <form className="w-full m-2 ">
              <button className="cursor-pointer w-full text-left" formAction={signOutAction}>
                Logout
              </button>
            </form>
          </div>
        </nav>
      </aside>
    </>
  );
}
