import { formatDuration } from "./duration";

describe("formatDuration", () => {
  test("returns '33s' for input 33", () => {
    expect(formatDuration(33)).toBe("33s");
  });

  test("returns '2m3s' for input 123", () => {
    expect(formatDuration(123)).toBe("2m3s");
  });

  test("returns '8m20s' for input 500", () => {
    expect(formatDuration(500)).toBe("8m20s");
  });

  test("returns '1h' for input 3600", () => {
    expect(formatDuration(3600)).toBe("1h");
  });

  test("returns '1h6m39s' for input 3999", () => {
    expect(formatDuration(3999)).toBe("1h6m39s");
  });

  test("returns '0s' for input 0", () => {
    expect(formatDuration(0)).toBe("0s");
  });

  test("throws error for negative input", () => {
    expect(() => formatDuration(-1)).toThrow("Duration cannot be negative");
  });

  test("rounds seconds with decimals correctly", () => {
    expect(formatDuration(65.5)).toBe("1m6s");
  });
});


