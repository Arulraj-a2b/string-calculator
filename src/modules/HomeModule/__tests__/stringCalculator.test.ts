import { isEmpty } from "../../../utils";
import { stringCalculator } from "../stringCalculatorHelper";

jest.mock("../../../utils", () => ({
  isEmpty: jest.fn(),
}));

describe("stringCalculator", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.alert = jest.fn();
  });

  test("handles default delimiters (comma and newline)", () => {
    (isEmpty as jest.Mock).mockReturnValue(false);
    expect(stringCalculator("1\n2,3")).toBe(6);
  });

  test("handles single custom delimiter (semicolon)", () => {
    (isEmpty as jest.Mock).mockReturnValue(false);
    expect(stringCalculator("//;\n1;2")).toBe(3);
  });

  test("handles multiple custom delimiters (triple asterisks)", () => {
    (isEmpty as jest.Mock).mockReturnValue(false);
    expect(stringCalculator("//[***]\n1***2***3")).toBe(6);
  });

  test("handles multiple custom delimiters (asterisks and percent)", () => {
    (isEmpty as jest.Mock).mockReturnValue(false);
    expect(stringCalculator("//[*][%]\n1*2%3")).toBe(6);
  });

  test("handles multiple custom delimiters (double asterisks and double percent)", () => {
    (isEmpty as jest.Mock).mockReturnValue(false);
    expect(stringCalculator("//[**][%%]\n1**2%%3")).toBe(6);
  });

  test("returns 0 when the input string is empty", () => {
    (isEmpty as jest.Mock).mockReturnValue(true);
    expect(stringCalculator("")).toBe(0);
    expect(isEmpty).toHaveBeenCalledWith("");
  });

  test("returns the sum of numbers in the string", () => {
    (isEmpty as jest.Mock).mockReturnValue(false);
    expect(stringCalculator("1")).toBe(1);
    expect(isEmpty).toHaveBeenCalledWith("1");
  });

  test("ignores numbers greater than 1000", () => {
    (isEmpty as jest.Mock).mockReturnValue(false);
    expect(stringCalculator("1,5")).toBe(6);
  });

  test("handles negative numbers and shows alert", () => {
    (isEmpty as jest.Mock).mockReturnValue(false);
    expect(stringCalculator("1,-2,3,-4")).toBeNull();
    expect(global.alert).toHaveBeenCalledWith("Negatives not allowed: -2, -4");
  });

  test('handles "-0" as a negative number and shows alert', () => {
    (isEmpty as jest.Mock).mockReturnValue(false);
    expect(stringCalculator("1,-0,3")).toBeNull();
    expect(global.alert).toHaveBeenCalledWith("Negatives not allowed: -0");
  });

  test("handles a string with only valid numbers under 1000", () => {
    (isEmpty as jest.Mock).mockReturnValue(false);
    expect(stringCalculator("10,20,30")).toBe(60);
  });
});
