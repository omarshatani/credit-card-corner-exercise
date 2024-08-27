import { CreditCardInfo } from "@/api/models/CreditCardInfo";
import CREDIT_CARD_INFO_JSON from "@/api/response/cardInfo.json";

export const getInfo = (): Promise<CreditCardInfo> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(CREDIT_CARD_INFO_JSON), 600),
  );
};
