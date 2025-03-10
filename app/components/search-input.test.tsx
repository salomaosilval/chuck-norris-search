import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/dom";
import SearchInput from "./search-input";

describe("SearchInput", () => {
  it("renders with default placeholder", () => {
    const mockOnSearch = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchInput onSearch={mockOnSearch} />
    );

    const inputElement = getByPlaceholderText(
      "Search for Chuck Norris jokes..."
    );
    expect(inputElement).toBeInTheDocument();
  });

  it("calls onSearch when form is submitted with valid input", () => {
    const mockOnSearch = jest.fn();
    const { getByPlaceholderText, container } = render(
      <SearchInput onSearch={mockOnSearch} />
    );

    const inputElement = getByPlaceholderText(
      "Search for Chuck Norris jokes..."
    );
    fireEvent.change(inputElement, { target: { value: "programming" } });

    const formElement = container.querySelector("form");
    fireEvent.submit(formElement as Element);

    expect(mockOnSearch).toHaveBeenCalledWith("programming");
  });

  it("shows error message when search term is too short", () => {
    const mockOnSearch = jest.fn();
    const { getByPlaceholderText, container, findByText } = render(
      <SearchInput onSearch={mockOnSearch} minLength={3} />
    );

    const inputElement = getByPlaceholderText(
      "Search for Chuck Norris jokes..."
    );
    fireEvent.change(inputElement, { target: { value: "ab" } });

    const formElement = container.querySelector("form");
    fireEvent.submit(formElement as Element);

    expect(mockOnSearch).not.toHaveBeenCalled();
    return findByText("Search term must be at least 3 characters").then(
      (errorElement) => {
        expect(errorElement).toBeInTheDocument();
      }
    );
  });

  it("uses custom placeholder when provided", () => {
    const mockOnSearch = jest.fn();
    const customPlaceholder = "Type to search...";
    const { getByPlaceholderText } = render(
      <SearchInput onSearch={mockOnSearch} placeholder={customPlaceholder} />
    );

    const inputElement = getByPlaceholderText(customPlaceholder);
    expect(inputElement).toBeInTheDocument();
  });
});
