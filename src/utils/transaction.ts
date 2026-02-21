export interface Transaction {
  id: number;
  name: string;
  time: string;
  amount: string;
  type: TxType;
  status: "completed" | "pending" | "failed";
}

export type TxType = "send" | "receive" | "bank" | "currency";


export const recentTransactions = [
  { id: 1, name: "Abubakry Sadiq", time: "11:30am. 15 Jan 2022", amount: "- ₦2,000.00", type: "send", status: "completed" },
  { id: 2, name: "Saheed Oluwatoyin", time: "12:40am. 19 Dec 2022", amount: "- ₦2,0000.00", type: "receive", status: "failed" },
  { id: 3, name: "Akorede Salam", time: "11:48am. 15 Mar 2022", amount: "- ₦100,000.00", type: "currency", status: "completed" },
  { id: 4, name: "Abubakry Sadiq", time: "11:30am. 15 Jan 2022", amount: "- ₦2,000.00", type: "bank", status: "completed" },
  { id: 5, name: "Saheed Oluwatoyin", time: "12:40am. 19 Dec 2022", amount: "- ₦2,0000.00", type: "send", status: "pending" },
];

export const allTransactions = [
  ...recentTransactions,
  {
    id: 6,
    name: "Akorede Salam",
    time: "11:48am. 15 Mar 2022",
    amount: "- ₦100,000.00",
    type: "currency",
    status: "completed",
  },
  {
    id: 7,
    name: "Abubakry Sadiq",
    time: "11:30am. 15 Jan 2022",
    amount: "- ₦2,000.00",
    type: "send",
    status: "completed",
  },
  {
    id: 8,
    name: "Abubakry Sadiq",
    time: "11:30am. 15 Jan 2022",
    amount: "- ₦2,000.00",
    type: "bank",
    status: "completed",
  },
  {
    id: 9,
    name: "Abubakry Sadiq",
    time: "11:30am. 15 Jan 2022",
    amount: "- ₦2,000.00",
    type: "send",
    status: "completed",
  },
  {
    id: 10,
    name: "Abubakry Sadiq",
    time: "11:30am. 15 Jan 2022",
    amount: "- ₦2,000.00",
    type: "receive",
    status: "completed",
  },
];
