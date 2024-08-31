import { getCreditCardInfo } from "@/api/repository/CreditCardRepository";
import { Builder } from "builder-pattern";
import { CreditCardInfo } from "@/api/models/CreditCardInfo";
import { getInfo } from "@/api/service/CreditCardService";

jest.mock("@/api/service/CreditCardService", () => ({
  getInfo: jest.fn(),
}));
const mockedGetInfo = jest.mocked(getInfo);

describe("CreditCardRepository", () => {
  describe("getCreditCardInfo", () => {
    it("should return a list of credit card information", async () => {
      // Given
      mockedGetInfo.mockResolvedValue(aCreditCardInfo);
      // When
      const response = await getCreditCardInfo();
      // Then
      expect(response).toEqual(aCreditCardInfo);
    });
  });
});

const aCreditCardInfo = Builder<CreditCardInfo>()
  .id("123")
  .cardNumber("123412341234")
  .availability(
    Builder<CreditCardInfo["availability"]>()
      .amount("100")
      .currency("EUR")
      .build(),
  )
  .expenses(
    Builder<CreditCardInfo["expenses"]>().amount("50").currency("CHF").build(),
  )
  .image("image")
  .build();
