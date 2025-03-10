import { formatDate } from "./index";

describe("formatDate", () => {
  it("formats a date string correctly", () => {
    const originalDateTimeFormat = Intl.DateTimeFormat;

    // @ts-expect-error - Mockando a função
    Intl.DateTimeFormat = jest.fn().mockImplementation(() => ({
      format: () => "January 1, 2023",
    }));

    const result = formatDate("2023-01-01T00:00:00Z");
    expect(result).toBe("January 1, 2023");

    Intl.DateTimeFormat = originalDateTimeFormat;
  });

  it("handles invalid date strings", () => {
    const originalDateTimeFormat = Intl.DateTimeFormat;

    // @ts-expect-error - Mockando a função
    Intl.DateTimeFormat = jest.fn().mockImplementation(() => ({
      format: () => "Invalid Date",
    }));

    const result = formatDate("invalid-date");
    expect(typeof result).toBe("string");

    Intl.DateTimeFormat = originalDateTimeFormat;
  });
});
