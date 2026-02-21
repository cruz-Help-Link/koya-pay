import { Outlet } from "react-router-dom";
import DashHeader from "../dashboard/DashHeader";
import BottomNavigation from "../dashboard/BottomNavigation";

const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#b2a2e4] flex flex-col px-18">
      <DashHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  );
};

export default DashboardLayout;
