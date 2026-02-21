export type TxType = "send" | "receive" | "bank" | "currency";

export type TxStatus = "completed" | "pending" | "failed";

export interface Transaction {
  id: number;
  name: string;
  amount: number;        
  type: TxType;
  status: TxStatus;
  createdAt: string;     
}


// export const recentTransactions = [
//   { id: 1, name: "Abubakry Sadiq",date: "15 Jan 2022", time: "11:30am. 15 Jan 2022", amount: "- ₦2,000.00", type: "send", status: "completed" },
//   { id: 2, name: "Saheed Oluwatoyin",date: "15 Jan 2022", time: "12:40am. 19 Dec 2022", amount: "- ₦2,0000.00", type: "receive", status: "failed" },
//   { id: 3, name: "Akorede Salam",date: "15 Jan 2022", time: "11:48am. 15 Mar 2022", amount: "- ₦100,000.00", type: "currency", status: "completed" },
//   { id: 4, name: "Abubakry Sadiq",date: "15 Jan 2022", time: "11:30am. 15 Jan 2022", amount: "- ₦2,000.00", type: "bank", status: "completed" },
//   { id: 5, name: "Saheed Oluwatoyin",date: "15 Jan 2022", time: "12:40am. 19 Dec 2022", amount: "- ₦2,0000.00", type: "send", status: "pending" },
// ];

export const allTransactions: Transaction[] = [
  {
    id: 1,
    name: "Abubakry Sadiq",
    amount: -2000,
    type: "send",
    status: "completed",
    createdAt: "2022-01-15T11:30:00",
  },
  {
    id: 2,
    name: "Saheed Oluwatoyin",
    amount: 2000,
    type: "receive",
    status: "failed",
    createdAt: "2022-12-19T00:40:00",
  },
  {
    id: 3,
    name: "Akorede Salam",
    amount: -100000,
    type: "currency",
    status: "completed",
    createdAt: "2022-03-15T11:48:00",
  },
   {
    id: 4,
    name: "Abubakry Sadiq",
    amount: -2000,
    type: "bank",
    status: "completed",
    createdAt: "2022-01-15T11:30:00",
  },
  {
    id: 5,
    name: "Saheed Oluwatoyin",
    amount: -2000,
    type: "send",
    status: "pending",
    createdAt: "2022-12-19T00:40:00",
  },
  {
    id: 6,
    name: "Akorede Salam",
    amount: -100000,
    type: "currency",
    status: "completed",
    createdAt: "2022-03-15T11:48:00",
  },

];
