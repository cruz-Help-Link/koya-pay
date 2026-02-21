import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, DollarSign, ReceiptText } from "lucide-react";
import { DashboardBottomNav } from "../components/dashboard/DashboardBottomNav";

const statusTabs = ["All", "Completed", "Pending", "Processing", "Cancelled"];

export const DashboardHomeScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#c6b3ec]">
      <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col">
        <main className="flex-1 px-6 pb-4 pt-8">
          <section className="w-full rounded-2xl bg-white/35 p-5">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#231046]">
              <ReceiptText className="h-5 w-5" />
            </div>
            <p className="text-3xl leading-none font-black text-[#221144]">0</p>
            <p className="mt-2 text-2xl font-semibold leading-tight text-[#221144] md:text-[30px]">Total Invoice Received</p>
          </section>

          <section className="mt-5 rounded-2xl bg-[#231046] p-4 text-white">
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-between rounded-md bg-white px-3 py-2 text-left text-base font-medium text-black"
              >
                <span>Currency</span>
                <ChevronDown className="h-5 w-5 text-black/35" />
              </button>
              <button
                type="button"
                className="flex items-center justify-between rounded-md bg-white px-3 py-2 text-left text-base font-medium text-black"
              >
                <span>Period</span>
                <ChevronDown className="h-5 w-5 text-black/35" />
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 border-b border-white/60 pb-4 text-[16px] font-semibold">
              {statusTabs.map((tab, index) => (
                <button
                  key={tab}
                  type="button"
                  className={`${index === 0 ? "border-b-2 border-white pb-1" : ""} ${index > 0 ? "text-white/95" : ""}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex min-h-[260px] items-end justify-center py-8 md:min-h-[320px]">
              <div className="flex h-44 w-44 items-center justify-center rounded-full bg-[#cbc2e0] text-[#231046] md:h-52 md:w-52">
                <div className="relative">
                  <ReceiptText className="h-16 w-16 text-[#231046]" strokeWidth={2.5} />
                  <DollarSign className="absolute -bottom-1 left-5 h-7 w-7 text-[#231046]" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate("/dashboard/transactions")}
              className="mb-2 w-full rounded-xl bg-white/15 py-3 text-sm font-semibold"
            >
              View All Transactions
            </button>
          </section>
        </main>

        <DashboardBottomNav active="home" />
      </div>
    </div>
  );
};
