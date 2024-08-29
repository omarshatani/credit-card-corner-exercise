export enum TransactionStatus {
  PENDING = "PENDING",
  SETTLED = "SETTLED",
}

export interface Transaction {
  id: string;
  amount: string;
  currency: string;
  date: string;
  location: string;
  merchant: string;
  status: TransactionStatus;
}
