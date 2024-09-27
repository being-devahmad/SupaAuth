import DashboardContent from "@/components/Dashboard/Content";
import Sidebar from "@/components/Dashboard/Sidebar";

export default function CustomDashboard() {
  return (
    <>
      <div className="flex h-screen bg-black text-gray-100">
        <Sidebar />
        <DashboardContent />
      </div>
    </>
  );
}
