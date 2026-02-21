import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DashHeader from "../dashboard/DashHeader";
import BottomNavigation from "../dashboard/BottomNavigation";

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState<string>("home");

  // Map routes to page names
  const routeToPage: Record<string, string> = {
    "/dashboard/home": "home",
    "/dashboard/transactions": "transactions",
    "/dashboard/profile": "profile",
    "/dashboard/settings": "settings",
    "/dashboard/analytics": "analytics",
  };

  // Update current page on route change
  useEffect(() => {
    const page = routeToPage[location.pathname] || "home";
    setCurrentPage(page);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-koya-accent/5 flex flex-col">
      {/* Optional: Dashboard header */}
      {/* <DashboardHeader currentPage={currentPage} /> */}

      <DashHeader />
      <main className="flex-1">
        <Outlet />
      </main>

      <BottomNavigation />
    </div>
  );
};

export default DashboardLayout;
