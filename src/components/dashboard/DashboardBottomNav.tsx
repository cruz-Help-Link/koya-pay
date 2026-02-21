import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftRight, BarChart3, House, ReceiptText, Ticket, type LucideIcon } from "lucide-react";

type DashboardTab = "invoice" | "transaction" | "home" | "finance" | "more";

interface DashboardBottomNavProps {
  active: DashboardTab;
  onMoreClick?: () => void;
}

interface TabItem {
  id: DashboardTab;
  label: string;
  icon: LucideIcon;
}

const tabs: TabItem[] = [
  { id: "invoice", label: "Invoice", icon: ReceiptText },
  { id: "transaction", label: "Transaction", icon: ArrowLeftRight },
  { id: "home", label: "Home", icon: House },
  { id: "finance", label: "Finance", icon: BarChart3 },
  { id: "more", label: "More", icon: Ticket },
];

export const DashboardBottomNav: React.FC<DashboardBottomNavProps> = ({ active, onMoreClick }) => {
  const navigate = useNavigate();

  const handleTabClick = (tab: DashboardTab) => {
    if (tab === "invoice") {
      navigate("/create-invoice");
      return;
    }

    if (tab === "transaction") {
      navigate("/dashboard/transactions");
      return;
    }

    if (tab === "home") {
      navigate("/dashboard/home");
      return;
    }

    if (tab === "finance") {
      navigate("/dashboard/transactions");
      return;
    }

    if (onMoreClick) {
      onMoreClick();
      return;
    }

    navigate("/dashboard/more");
  };

  return (
    <nav className="border-t border-black/10 bg-[#efefef] px-2 py-1">
      <ul className="grid grid-cols-5">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          const Icon = tab.icon;

          return (
            <li key={tab.id}>
              <button
                type="button"
                onClick={() => handleTabClick(tab.id)}
                className={`flex w-full flex-col items-center justify-center gap-1 py-1 text-[11px] transition-colors ${
                  isActive ? "text-[#6f6f6f]" : "text-black/35"
                }`}
              >
                <Icon className={`h-[18px] w-[18px] ${isActive ? "stroke-[2.2]" : "stroke-[1.9]"}`} />
                <span>{tab.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
