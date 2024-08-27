import { Transaction } from "@/api/models/Transaction";
import TRANSACTIONS_JSON from "../mocks/transactions.json";

export const getTransactions = (): Promise<Transaction[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(TRANSACTIONS_JSON);
    }, 1200);
  });
};
