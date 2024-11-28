import "../../app/globals.css";
import Sidebar from "@/components/Dashboard/Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-gray-700 border ">
            <Sidebar />
            <div className="w-full">{children}</div>
        </div>
    );
}
