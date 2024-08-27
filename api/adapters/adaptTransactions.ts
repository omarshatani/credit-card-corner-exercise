import { Transaction } from "@/api/models/Transaction";

export const adaptTransactions = (transactions: Transaction[]): Transaction[] =>
  transactions.map((transaction: Transaction) => ({
    ...transaction,
    date: adaptDate(transaction.date),
  }));

const adaptDate = (date: string): string => {
  const year = date.substring(0, 4);
  const month = date.substring(4, 6);
  const day = date.substring(6, 8);

  return new Date(`${year}-${month}-${day}`).toLocaleDateString();
};
