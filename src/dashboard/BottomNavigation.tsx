import { useNavigate, useLocation } from "react-router-dom";
import {
  FileText,
  ArrowLeftRight,
  Home,
  Wallet,
  MoreHorizontal,
} from "lucide-react";

const navItems = [
  { label: "Invoice", icon: FileText, path: "/dashboard/invoice" },
  { label: "Transaction", icon: ArrowLeftRight, path: "/dashboard/transactions" },
  { label: "Home", icon: Home, path: "/dashboard/home" },
  { label: "Finance", icon: Wallet, path: "/dashboard/finance" },
  { label: "More", icon: MoreHorizontal, path: "/dashboard/more" },
];

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] z-40">
      <div className="max-w-lg lg:max-w-5xl mx-auto flex justify-around items-center py-2.5 px-2">
        {navItems.map(({ label, icon: Icon, path }) => {
          const isActive = location.pathname === path;
          const isHome = label === "Home";

          return (
            <button
              key={label}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center gap-1 transition-colors ${
                isActive ? "text-[#221144]" : "text-gray-400"
              }`}
            >
              {isHome ? (
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center -mt-6 shadow-lg transition-colors ${
                    isActive ? "bg-[#221144]" : "bg-gray-200"
                  }`}
                >
                  <Icon
                    size={22}
                    color={isActive ? "white" : "#6b7280"}
                    strokeWidth={2.5}
                  />
                </div>
              ) : (
                <Icon
                  size={20}
                  color={isActive ? "#221144" : "#9ca3af"}
                  strokeWidth={2}
                />
              )}

              <span className="text-[10px] font-semibold">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;