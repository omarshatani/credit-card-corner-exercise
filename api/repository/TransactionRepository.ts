import { getTransactions } from "@/api/service/TransactionService";
import { adaptTransactions } from "@/api/adapters/adaptTransactions";
import { Transaction } from "@/api/models/Transaction";

export const getAllTransactions = async (): Promise<Transaction[]> => {
  const transactions = await getTransactions();
  return adaptTransactions(transactions);
};
