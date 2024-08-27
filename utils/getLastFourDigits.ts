export const getLastFourDigits = (digits: string) => {
  if (digits.length <= 4) {
    return digits;
  }

  return digits.substring(digits.length - 4);
};
