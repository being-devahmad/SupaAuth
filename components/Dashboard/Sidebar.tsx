import { Bell, Home, Lock, User, Settings, HelpCircle } from "lucide-react";

export default function Sidebar() {
  return (
    <>
      <aside className="w-64 bg-gray-800 p-4 hidden md:block">
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-300 hover:bg-gray-700 rounded p-2"
          >
            <Home className="h-5 w-5" />
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-300 hover:bg-gray-700 rounded p-2"
          >
            <User className="h-5 w-5" />
            <span>Profile</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 bg-gray-700 text-white rounded p-2"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-300 hover:bg-gray-700 rounded p-2"
          >
            <HelpCircle className="h-5 w-5" />
            <span>Help</span>
          </a>
        </nav>
      </aside>
    </>
  );
}
