import React, { useRef, useState } from "react";
import { Bell, ChevronDown, JapaneseYen, Landmark, PiggyBank, ScanLine } from "lucide-react";
import { DashboardBottomNav } from "../components/dashboard/DashboardBottomNav";
import { getDashboardProfileImage, getDashboardUserName, setDashboardProfileImage } from "../utils/dashboardProfile";

interface TransactionItem {
  id: number;
  type: "bank" | "savings" | "fx";
  name: string;
  time: string;
  amount: string;
}

const transactions: TransactionItem[] = [
  { id: 1, type: "bank", name: "Abubakry Sadiq", time: "11:30am. 15 Jan 2022", amount: "- #2,000.00" },
  { id: 2, type: "savings", name: "Saheed Oluwatoyin", time: "12:40am. 19 Dec 2022", amount: "- #2,000.00" },
  { id: 3, type: "fx", name: "Akorede Salam", time: "11:48am. 15 Mar 2022", amount: "- #100,000.00" },
  { id: 4, type: "bank", name: "Abubakry Sadiq", time: "11:30am. 15 Jan 2022", amount: "- #2,000.00" },
  { id: 5, type: "savings", name: "Saheed Oluwatoyin", time: "12:40am. 19 Dec 2022", amount: "- #2,000.00" },
  { id: 6, type: "fx", name: "Akorede Salam", time: "11:48am. 15 Mar 2022", amount: "- #100,000.00" },
  { id: 7, type: "bank", name: "Abubakry Sadiq", time: "11:30am. 15 Jan 2022", amount: "- #2,000.00" },
  { id: 8, type: "bank", name: "Abubakry Sadiq", time: "11:30am. 15 Jan 2022", amount: "- #2,000.00" },
  { id: 9, type: "bank", name: "Abubakry Sadiq", time: "11:30am. 15 Jan 2022", amount: "- #2,000.00" },
  { id: 10, type: "bank", name: "Abubakry Sadiq", time: "11:30am. 15 Jan 2022", amount: "- #2,000.00" },
];

const TransactionIcon: React.FC<{ type: TransactionItem["type"] }> = ({ type }) => {
  if (type === "bank") {
    return <Landmark className="h-4 w-4 text-white/90" />;
  }

  if (type === "savings") {
    return <PiggyBank className="h-4 w-4 text-white/90" />;
  }

  return <JapaneseYen className="h-4 w-4 text-white/90" />;
};

export const DashboardTransactionsScreen: React.FC = () => {
  const displayName = getDashboardUserName().toUpperCase();
  const initials = displayName.slice(0, 2);
  const [profileImage, setProfileImage] = useState<string>(() => getDashboardProfileImage());
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      if (!result) return;
      setProfileImage(result);
      setDashboardProfileImage(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-[#c6b3ec]">
      <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col">
        <main className="flex-1 px-6 pb-4 pt-8">
          <header className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#8b7ac3] text-xs font-bold text-white"
                title="Upload profile image"
              >
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="h-full w-full object-cover" />
                ) : (
                  initials
                )}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleProfileImageChange}
                className="hidden"
              />
              <p className="text-2xl font-bold text-[#231046]">{displayName}</p>
            </div>
            <div className="flex items-center gap-2 text-[#231046]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <ScanLine className="h-4 w-4" />
              </span>
              <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <Bell className="h-4 w-4" />
                <span className="absolute right-[1px] top-[1px] text-[10px] font-semibold text-[#8b7ac3]">2</span>
              </span>
            </div>
          </header>

          <h1 className="mb-4 flex items-center gap-1 text-3xl font-black text-[#231046]">
            <span>All transactions</span>
            <ChevronDown className="h-6 w-6" />
          </h1>

          <div className="space-y-4 pb-16">
            {transactions.map((item) => (
              <article key={item.id} className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <TransactionIcon type={item.type} />
                  </div>
                  <div>
                    <p className="text-[22px] font-bold leading-none text-[#231046]">{item.name}</p>
                    <p className="mt-1 text-[15px] text-[#231046]">{item.time}</p>
                  </div>
                </div>
                <p className="pt-1 text-[22px] font-medium text-[#231046]">{item.amount}</p>
              </article>
            ))}
          </div>
        </main>

        <DashboardBottomNav active="transaction" />
      </div>
    </div>
  );
};
