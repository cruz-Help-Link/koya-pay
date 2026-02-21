import React, { useRef, useState } from "react";
import { Bell, ChevronRight, CircleHelp, ScanLine, Settings, UserRound } from "lucide-react";
import { DashboardBottomNav } from "../components/dashboard/DashboardBottomNav";
import { getDashboardProfileImage, getDashboardUserName, setDashboardProfileImage } from "../utils/dashboardProfile";

const menuItems = [
  { id: "profile", label: "View Profile", icon: UserRound },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "support", label: "Support", icon: CircleHelp },
];

export const DashboardMoreScreen: React.FC = () => {
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
          <header className="mb-14 flex items-center justify-between">
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

          <div className="space-y-10">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  className="flex w-full items-center justify-between text-left text-[28px] font-medium text-[#231046]"
                >
                  <span className="flex items-center gap-4">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-gray-500">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>{item.label}</span>
                  </span>
                  <ChevronRight className="h-7 w-7 text-gray-500" />
                </button>
              );
            })}
          </div>
        </main>

        <DashboardBottomNav active="more" />
      </div>
    </div>
  );
};
