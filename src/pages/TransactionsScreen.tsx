import { useMemo, useState } from "react";
import { Send, Download, Landmark, Banknote } from "lucide-react";
import { allTransactions } from "@/utils/transaction";
import type { Transaction, TxType } from "@/utils/transaction";

const iconMap: Record<TxType, any> = {
  send: Send,
  receive: Download,
  bank: Landmark,
  currency: Banknote,
};

const groupByDate = (txs: Transaction[]) => {
  return txs.reduce((acc: Record<string, Transaction[]>, tx) => {
    if (!acc[tx.date]) acc[tx.date] = [];
    acc[tx.date].push(tx);
    return acc;
  }, {});
};

const TransactionsScreen = () => {
  const [filter, setFilter] = useState<"all" | TxType>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return allTransactions;
    return allTransactions.filter((tx) => tx.type === filter);
  }, [filter]);

  const grouped = useMemo(() => groupByDate(filtered), [filtered]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6">Transactions</h1>

      {/* FILTER BUTTONS */}
      <div className="flex gap-3 mb-6">
        {["all", "send", "receive", "bank", "currency"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-4 py-2 rounded-lg text-sm ${
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

              return (
                <div
                  key={tx.id}
                  className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gray-100 rounded-full">
                      <Icon size={18} />
                    </div>

                    <div>
                      <p className="font-medium">{tx.name}</p>
                      <p className="text-xs text-gray-400">{tx.time}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p
                      className={`font-semibold ${
                        tx.amount.startsWith("+")
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {tx.amount}
                    </p>
                    <p className="text-xs text-gray-400">{tx.status}</p>
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
