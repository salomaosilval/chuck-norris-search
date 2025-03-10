import axios from "axios";

const API_BASE_URL = "https://api.chucknorris.io/jokes";

export interface ChuckNorrisJoke {
  id: string;
  value: string;
  url: string;
  icon_url: string;
  created_at: string;
  updated_at: string;
  categories: string[];
}

export interface SearchResponse {
  total: number;
  result: ChuckNorrisJoke[];
}

export interface JokeCategory {
  name: string;
}

export const chuckNorrisApi = {
  searchJokes: async (query: string): Promise<SearchResponse> => {
    if (!query || query.trim().length < 3) {
      throw new Error("Search query must be at least 3 characters long");
    }

    const response = await axios.get<SearchResponse>(`${API_BASE_URL}/search`, {
      params: { query },
    });

    return response.data;
  },

  getRandomJoke: async (category?: string): Promise<ChuckNorrisJoke> => {
    const url = category
      ? `${API_BASE_URL}/random?category=${category}`
      : `${API_BASE_URL}/random`;

    const response = await axios.get<ChuckNorrisJoke>(url);
    return response.data;
  },

  getCategories: async (): Promise<string[]> => {
    const response = await axios.get<string[]>(`${API_BASE_URL}/categories`);
    return response.data;
  },
};
