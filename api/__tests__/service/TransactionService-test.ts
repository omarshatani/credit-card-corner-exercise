import TRANSACTIONS_JSON from "@/api/response/transactions.json";
import { getTransactions } from "@/api/service/TransactionService";

describe("TransactionService", () => {
  describe("getTransactions", async () => {
    it("should return a list of transactions", async () => {
      // When
      const response = await getTransactions();
      // Then
      expect(response).toEqual(TRANSACTIONS_JSON);
    });
  });
});
