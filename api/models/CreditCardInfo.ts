export interface CreditCardInfo {
  id: string;
  image: string;
  availability: Amount;
  expenses: Amount;
  cardNumber: string;
}

interface Amount {
  amount: string;
  currency: string;
}
