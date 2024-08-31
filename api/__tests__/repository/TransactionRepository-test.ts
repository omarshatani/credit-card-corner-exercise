import { Builder } from "builder-pattern";
import { Transaction, TransactionStatus } from "@/api/models/Transaction";
import { TransactionRaw } from "@/api/models/raw/TransactionRaw";
import { getTransactions } from "@/api/service/TransactionService";
import { getAllTransactions } from "@/api/repository/TransactionRepository";

jest.mock("@/api/service/TransactionService.ts", () => ({
  getTransactions: jest.fn(),
}));
const mockedGetTransactions = jest.mocked(getTransactions);

describe("TransactionRepository", () => {
  describe("getAllTransactions", () => {
    it("should return all transactions", async () => {
      // Given
      mockedGetTransactions.mockResolvedValue(aTransactionRawList);
      // When
      const response = await getAllTransactions();
      // Then
      expect(response).toEqual(aTransactionList);
    });
  });
});

const aTransactionRaw = Builder<TransactionRaw>()
  .id("123")
  .amount("10")
  .date("20240311")
  .location("Chiasso")
  .merchant("Stazione 123")
  .status("PENDING")
  .build();
const anotherTransactionRaw = Builder<TransactionRaw>()
  .id("234")
  .amount("10")
  .date("20240311")
  .location("Chiasso")
  .merchant("Stazione 123")
  .status("SETTLED")
  .build();
const aTransaction = Builder<Transaction>()
  .id("123")
  .amount("10")
  .date("3/11/2024")
  .location("Chiasso")
  .merchant("Stazione 123")
  .status(TransactionStatus.PENDING)
  .build();
const anotherTransaction = Builder<Transaction>()
  .id("234")
  .amount("10")
  .date("3/11/2024")
  .location("Chiasso")
  .merchant("Stazione 123")
  .status(TransactionStatus.SETTLED)
  .build();
const aTransactionRawList = [aTransactionRaw, anotherTransactionRaw];
const aTransactionList = [aTransaction, anotherTransaction];
