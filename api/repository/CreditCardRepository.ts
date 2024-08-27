import { CreditCardInfo } from "@/api/models/CreditCardInfo";
import { getInfo } from "@/api/service/CreditCardService";

export const getCreditCardInfo = async (): Promise<CreditCardInfo> => {
  return await getInfo();
};
