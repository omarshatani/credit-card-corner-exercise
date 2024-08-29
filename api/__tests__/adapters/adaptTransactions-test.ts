import { adaptTransactions } from "@/api/adapters/adaptTransactions";
import { Builder } from "builder-pattern";
import { Transaction, TransactionStatus } from "@/api/models/Transaction";
import { TransactionRaw } from "@/api/models/raw/TransactionRaw";

describe("adaptTransactions", () => {
  it("should adapt a transaction", async () => {
    // When
    const adaptedTransactions = adaptTransactions(aTransactionList);
    // Then
    expect(adaptedTransactions).toEqual(anAdaptedTransactionList);
  });
});

const aTransaction = Builder<TransactionRaw>()
  .id("123")
  .amount("10")
  .date("20240101")
  .location("Chiasso")
  .merchant("Stazione 123")
  .status("PENDING")
  .build();
const aTransactionList = [aTransaction];
const anAdaptedTransaction = Builder<Transaction>()
  .id("123")
  .amount("10")
  .date("1/1/2024")
  .location("Chiasso")
  .merchant("Stazione 123")
  .status(TransactionStatus.PENDING)
  .build();
const anAdaptedTransactionList = [anAdaptedTransaction];
