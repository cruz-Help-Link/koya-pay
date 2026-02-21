import { useNavigate } from "react-router-dom";
import ProcessedCard from "../dashboard/ProcessedCard";
import { Button } from "../components/ui";
import { ListContainer } from "../dashboard/ListContainer";
import { allTransactions } from "../utils/transaction";
import TransactionItem from "../dashboard/TransactionItem";
import { formatCurrency, formatTime } from "../utils/format";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 overflow-y-auto pb-28 pt-[104px]">
        <ProcessedCard />

        {/* Invoice Buttons */}
        <div className="px-5 mt-4 flex gap-3 max-w-lg lg:max-w-5xl mx-auto w-full">
          <Button
            variant="secondary"
            fullWidth
            className="flex-1 text-sm py-3.5 rounded-xl shadow-sm bg-white border-0 text-[#221144]"
          >
            View Invoice
          </Button>
          <Button
            variant="primary"
            fullWidth
            className="flex-1 text-sm py-3.5 rounded-xl shadow-md bg-[#221144]"
          >
            Create Invoice
          </Button>
        </div>

        {/* Recent Transactions */}
        <ListContainer
          title="Recent transactions"
          actionText="View all transactions"
          onActionClick={() => navigate("/dashboard/transactions")}
        >
          {allTransactions.map((tx) => (
            <TransactionItem
              key={tx.id}
              name={tx.name}
              time={formatTime(tx.createdAt)}      
              amount={formatCurrency(tx.amount)}  
              icon={tx.type}                       
              status={tx.status}                   
            />
          ))}
        </ListContainer>
      </main>
    </div>
  );
}