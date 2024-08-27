import TRANSACTIONS_JSON from "@/api/response/transactions.json";
import { Transaction } from "@/api/models/Transaction";

export const getTransactions = (): Promise<Transaction[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(TRANSACTIONS_JSON);
    }, 1200);
  });
};
