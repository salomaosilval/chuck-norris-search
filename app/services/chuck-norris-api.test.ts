import axios from "axios";
import { chuckNorrisApi } from "./chuck-norris-api";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Chuck Norris API", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("searchJokes", () => {
    it("returns search results when API call is successful", async () => {
      const mockResponse = {
        data: {
          total: 2,
          result: [
            {
              id: "joke1",
              value: "Chuck Norris joke 1",
              created_at: "2023-01-01T00:00:00Z",
              updated_at: "2023-01-01T00:00:00Z",
              url: "https://api.chucknorris.io/jokes/joke1",
              icon_url:
                "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
              categories: [],
            },
            {
              id: "joke2",
              value: "Chuck Norris joke 2",
              created_at: "2023-01-01T00:00:00Z",
              updated_at: "2023-01-01T00:00:00Z",
              url: "https://api.chucknorris.io/jokes/joke2",
              icon_url:
                "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
              categories: [],
            },
          ],
        },
      };

      mockedAxios.get.mockResolvedValueOnce(mockResponse);

      const result = await chuckNorrisApi.searchJokes("test");
      expect(result).toEqual(mockResponse.data);
      expect(mockedAxios.get).toHaveBeenCalledWith(
        "https://api.chucknorris.io/jokes/search",
        { params: { query: "test" } }
      );
    });

    it("throws an error when API call fails", async () => {
      const errorMessage = "Network Error";
      mockedAxios.get.mockRejectedValueOnce(new Error(errorMessage));

      await expect(chuckNorrisApi.searchJokes("test")).rejects.toThrow(
        errorMessage
      );
    });
  });

  describe("getRandomJoke", () => {
    it("returns a random joke when API call is successful", async () => {
      const mockResponse = {
        data: {
          id: "random-joke",
          value: "Random Chuck Norris joke",
          created_at: "2023-01-01T00:00:00Z",
          updated_at: "2023-01-01T00:00:00Z",
          url: "https://api.chucknorris.io/jokes/random-joke",
          icon_url:
            "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
          categories: [],
        },
      };

      mockedAxios.get.mockResolvedValueOnce(mockResponse);

      const result = await chuckNorrisApi.getRandomJoke();
      expect(result).toEqual(mockResponse.data);
      expect(mockedAxios.get).toHaveBeenCalledWith(
        "https://api.chucknorris.io/jokes/random"
      );
    });

    it("throws an error when API call fails", async () => {
      const errorMessage = "Network Error";
      mockedAxios.get.mockRejectedValueOnce(new Error(errorMessage));

      await expect(chuckNorrisApi.getRandomJoke()).rejects.toThrow(
        errorMessage
      );
    });
  });
});
