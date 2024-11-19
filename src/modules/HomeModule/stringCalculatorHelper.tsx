import { isEmpty } from "../../utils";

export const stringCalculator = (numbers: string): number | null => {
  if (isEmpty(numbers)) return 0;

  const allNumbers = (numbers.match(/[+-]?\d+/g) || []).map(Number);

  const negatives = allNumbers.filter((num) => num < 0 || Object.is(num, -0));
  if (negatives.length) {
    const formattedNegatives = negatives.map((num) =>
      Object.is(num, -0) ? "-0" : num.toString()
    );
    alert(`Negatives not allowed: ${formattedNegatives.join(", ")}`);
    return null;
  }

  return allNumbers.reduce((sum, num) => sum + (num <= 1000 ? num : 0), 0);
};
