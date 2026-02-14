export interface Transaction {
  id: number;
  name: string;
  time: string;
  amount: string;
  type: "send" | "receive" | "bank" | "currency";
}


export const recentTransactions = [
  { id: 1, name: "Abubakry Sadiq", time: "11:30am. 15 Jan 2022", amount: "- ₦2,000.00", type: "send" },
  { id: 2, name: "Saheed Oluwatoyin", time: "12:40am. 19 Dec 2022", amount: "- ₦2,0000.00", type: "receive" },
  { id: 3, name: "Akorede Salam", time: "11:48am. 15 Mar 2022", amount: "- ₦100,000.00", type: "currency" },
  { id: 4, name: "Abubakry Sadiq", time: "11:30am. 15 Jan 2022", amount: "- ₦2,000.00", type: "bank" },
  { id: 5, name: "Saheed Oluwatoyin", time: "12:40am. 19 Dec 2022", amount: "- ₦2,0000.00", type: "send" },
];

export const allTransactions = [
  ...recentTransactions,
  {
    id: 6,
    name: "Akorede Salam",
    time: "11:48am. 15 Mar 2022",
    amount: "- ₦100,000.00",
    type: "currency",
  },
  {
    id: 7,
    name: "Abubakry Sadiq",
    time: "11:30am. 15 Jan 2022",
    amount: "- ₦2,000.00",
    type: "send",
  },
  {
    id: 8,
    name: "Abubakry Sadiq",
    time: "11:30am. 15 Jan 2022",
    amount: "- ₦2,000.00",
    type: "bank",
  },
  {
    id: 9,
    name: "Abubakry Sadiq",
    time: "11:30am. 15 Jan 2022",
    amount: "- ₦2,000.00",
    type: "send",
  },
  {
    id: 10,
    name: "Abubakry Sadiq",
    time: "11:30am. 15 Jan 2022",
    amount: "- ₦2,000.00",
    type: "receive",
  },
];
