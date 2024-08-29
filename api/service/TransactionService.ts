import TRANSACTIONS_JSON from "@/api/response/transactions.json";
import { TransactionRaw } from "@/api/models/raw/TransactionRaw";

export const getTransactions = (): Promise<TransactionRaw[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(TRANSACTIONS_JSON);
    }, 1200);
  });
};
