"use client";

import { useQuery } from "@tanstack/react-query";
import { chuckNorrisApi } from "../services/chuck-norris-api";

export const useChuckNorrisJokes = () => {
  const useSearchJokes = (query: string) => {
    return useQuery({
      queryKey: ["chuckNorrisJokes", "search", query],
      queryFn: () => chuckNorrisApi.searchJokes(query),
      enabled: query.trim().length >= 3,
      staleTime: 5 * 60 * 1000,
    });
  };

  const useRandomJoke = (category?: string) => {
    return useQuery({
      queryKey: ["chuckNorrisJokes", "random", category],
      queryFn: () => chuckNorrisApi.getRandomJoke(category),
      staleTime: 0,
    });
  };

  const useCategories = () => {
    return useQuery({
      queryKey: ["chuckNorrisJokes", "categories"],
      queryFn: () => chuckNorrisApi.getCategories(),
      staleTime: 24 * 60 * 60 * 1000,
    });
  };

  return {
    useSearchJokes,
    useRandomJoke,
    useCategories,
  };
};
