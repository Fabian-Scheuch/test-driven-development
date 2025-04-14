import { isValid } from "./isbn13";

describe("isValid", () => {
  test.each([
    ["9783161484100", true],
    ["9791234567897", false],
    ["978-3-16-1484100", true],
    ["979-1-234-56789-7", false],
    ["9783161484101", false],
    ["9791234567898", false],
    ["978316148410", false],
    ["", false],             
    ["978-3-16-1484X00", false],
    ["9783161484X00", false],
    ["1234567890123", false],
  ])(
    "should validate ISBN '%s' as %s",
    (isbn, expected) => {
      expect(isValid(isbn)).toBe(expected);
    }
  );

  test("should return false for invalid ISBN-13 with extra characters", () => {
    expect(isValid("9783161484100123")).toBe(false);
  });

  test("should return false for invalid characters in ISBN", () => {
    expect(isValid("97912$56789X7")).toBe(false);
  });

  test("should return true for valid ISBN-13 with spaces", () => {
    expect(isValid("978 3 16 1484100")).toBe(true);
  });
});
