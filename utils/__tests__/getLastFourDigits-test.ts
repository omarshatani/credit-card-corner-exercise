import { it, expect, describe } from "@jest/globals";
import { getLastFourDigits } from "@/utils/getLastFourDigits";

describe("getLastFourDigits", () => {
  describe("when digits less than 4", () => {
    it("should return the original digits", () => {
      // When
      const digits = getLastFourDigits(aThreeDigits);
      // Then
      expect(digits).toEqual("123");
    });
  });
  describe("when digits more than 4", () => {
    it("should return the last 4 digits", () => {
      // When
      const digits = getLastFourDigits(aFiveDigits);
      // Then
      expect(digits).toEqual("2345");
    });
  });
});

const aThreeDigits = "123";
const aFiveDigits = "12345";
