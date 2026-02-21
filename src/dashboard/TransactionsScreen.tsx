import React, { useMemo, useState } from "react";
import { Send, Download, Landmark, Banknote } from "lucide-react";
import { allTransactions } from "@/utils/transaction";
import type { Transaction, TxType } from "@/utils/transaction";
import { formatCurrency, formatDate, formatTime } from "@/utils/format";

const iconMap: Record<TxType, any> = {
  send: Send,
  receive: Download,
  bank: Landmark,
  currency: Banknote,
};

const groupByDate = (txs: Transaction[]) => {
  return txs.reduce((acc: Record<string, Transaction[]>, tx) => {
    const date = formatDate(tx.createdAt);

    if (!acc[date]) acc[date] = [];
    acc[date].push(tx);

    return acc;
  }, {});
};

const TransactionsScreen: React.FC = () => {
  const [filter, setFilter] = useState<"all" | TxType>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return allTransactions;
    return allTransactions.filter((tx) => tx.type === filter);
  }, [filter]);

  const grouped = useMemo(() => groupByDate(filtered), [filtered]);

  return (
    <div className="p-6 pb-28 pt-[104px]">
      <h1 className="text-xl font-bold mb-6">Transactions</h1>

      {/* FILTER BUTTONS */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {["all", "send", "receive", "bank", "currency"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-4 py-2 rounded-lg text-sm capitalize transition ${
              filter === f
                ? "bg-[#221144] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* TRANSACTIONS */}
      {Object.entries(grouped).map(([date, txs]) => (
        <div key={date} className="mb-6">
          <h2 className="text-sm text-gray-500 mb-3">{date}</h2>

          <div className="space-y-4">
            {txs.map((tx) => {
              const Icon = iconMap[tx.type];
              const isPositive = tx.amount > 0;

              return (
                <div
                  key={tx.id}
                  className="flex items-center justify-between p-4 rounded-xl shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#d1c6f5] text-gray-100  rounded-full">
                      <Icon size={18} />
                    </div>

                    <div>
                      <p className="font-medium">{tx.name}</p>
                      <p className="text-xs text-gray-900">
                        {formatTime(tx.createdAt)}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p
                      className={`font-semibold ${
                        isPositive
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {formatCurrency(tx.amount)}
                    </p>
                    <p className="text-xs text-gray-800 capitalize">
                      {tx.status}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionsScreen;