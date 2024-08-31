import { getInfo } from "@/api/service/CreditCardService";
import CREDIT_CARD_INFO_JSON from "@/api/response/cardInfo.json";

describe("CreditCardService", () => {
  describe("getInfo", () => {
    it("should return a list of credit card information", async () => {
      // When
      const response = await getInfo();
      // Then
      expect(response).toEqual(CREDIT_CARD_INFO_JSON);
    });
  });
});
