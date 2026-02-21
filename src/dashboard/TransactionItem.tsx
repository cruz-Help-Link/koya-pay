import { Banknote, Download, Landmark, Send } from "lucide-react";

const TransactionIconMap = {
  send: Send,
  receive: Download,
  yen: Banknote,
  bank: Landmark,
};


interface TransactionItemProps {
  name: string;
  time: string;
  amount: string;
  icon: keyof typeof TransactionIconMap;
}


function  TransactionItem({ name, time, amount, icon }: TransactionItemProps) {
  const Icon = TransactionIconMap[icon] || Send;

  return (
    <div className="flex items-center gap-3 py-3.5">
      <div className="w-10 h-10 rounded-xl bg-[#E5DEFF] flex items-center justify-center">
        <Icon size={18} className="text-[#221144]" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[#221144] text-[15px] leading-tight truncate">
          {name}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{time}</p>
      </div>

      <span className="text-sm font-semibold text-[#221144] whitespace-nowrap">
        {amount}
      </span>
    </div>
  );
}
export default TransactionItem;