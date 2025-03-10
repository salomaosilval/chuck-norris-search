import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import JokeCard from "./joke-card";
import { ChuckNorrisJoke } from "../services/chuck-norris-api";

describe("highlightSearchTerm", () => {
  it("renders text without highlighting when no search term is provided", () => {
    const joke: ChuckNorrisJoke = {
      id: "test-id",
      value: "Chuck Norris can divide by zero",
      created_at: "2023-01-01T00:00:00Z",
      updated_at: "2023-01-01T00:00:00Z",
      url: "https://example.com",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      categories: [],
    };

    const { getByText } = render(<JokeCard joke={joke} />);
    expect(getByText("Chuck Norris can divide by zero")).toBeInTheDocument();
  });

  it("highlights the search term in the joke text", () => {
    const joke: ChuckNorrisJoke = {
      id: "test-id",
      value: "Chuck Norris can divide by zero",
      created_at: "2023-01-01T00:00:00Z",
      updated_at: "2023-01-01T00:00:00Z",
      url: "https://example.com",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      categories: [],
    };

    const { container } = render(<JokeCard joke={joke} searchTerm="divide" />);
    const highlightedSpan = container.querySelector(".bg-yellow-200");
    expect(highlightedSpan).toBeInTheDocument();
    expect(highlightedSpan?.textContent).toBe("divide");
  });
});
