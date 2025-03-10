import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import JokeCard from "./joke-card";
import { ChuckNorrisJoke } from "../services/chuck-norris-api";

jest.mock("../utils", () => ({
  formatDate: jest.fn().mockReturnValue("January 1, 2023"),
}));

describe("JokeCard", () => {
  const mockJoke: ChuckNorrisJoke = {
    id: "test-joke-id",
    value:
      "Chuck Norris can write infinite recursion functions and have them return.",
    created_at: "2023-01-01T00:00:00Z",
    updated_at: "2023-01-01T00:00:00Z",
    url: "https://api.chucknorris.io/jokes/test-joke-id",
    icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    categories: ["dev", "programming"],
  };

  it("renders the joke correctly", () => {
    const { getByText } = render(<JokeCard joke={mockJoke} />);

    expect(getByText(mockJoke.value)).toBeInTheDocument();

    expect(getByText("Created: January 1, 2023")).toBeInTheDocument();

    expect(getByText("dev")).toBeInTheDocument();
    expect(getByText("programming")).toBeInTheDocument();
  });

  it("highlights search term when provided", () => {
    const { container } = render(
      <JokeCard joke={mockJoke} searchTerm="infinite" />
    );

    const highlightedElement = container.querySelector(".bg-yellow-200");
    expect(highlightedElement).toBeInTheDocument();
    expect(highlightedElement?.textContent).toBe("infinite");
  });

  it.skip('shows "Random Joke" label when isRandom is true', () => {
    const { debug } = render(<JokeCard joke={mockJoke} isRandom={true} />);

    debug();
  });
});
