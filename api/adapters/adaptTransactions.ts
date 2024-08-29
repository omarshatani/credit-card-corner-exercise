import { Transaction, TransactionStatus } from "@/api/models/Transaction";
import { TransactionRaw } from "@/api/models/raw/TransactionRaw";

export const adaptTransactions = (
  transactions: TransactionRaw[],
): Transaction[] =>
  transactions.map((transaction: TransactionRaw) => ({
    ...transaction,
    status: transaction.status as TransactionStatus,
    date: adaptDate(transaction.date),
  }));

const adaptDate = (date: string): string => {
  const year = date.substring(0, 4);
  const month = date.substring(4, 6);
  const day = date.substring(6, 8);

  return new Date(`${year}-${month}-${day}`).toLocaleDateString();
};
