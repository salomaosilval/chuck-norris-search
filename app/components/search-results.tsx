"use client";

import { ChuckNorrisJoke } from "../services/chuck-norris-api";
import JokeCard from "./joke-card";
import { Loading } from "./loading";

interface SearchResultsProps {
  jokes: ChuckNorrisJoke[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  searchTerm: string;
  total?: number;
}

const SearchResults = ({
  jokes,
  isLoading,
  isError,
  error,
  searchTerm,
  total,
}: SearchResultsProps) => {
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="text-center py-8">
        <div className="text-red-600 dark:text-red-400 text-lg mb-2">
          Error loading jokes
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          {error?.message || "Something went wrong. Please try again."}
        </p>
      </div>
    );
  }

  if (jokes.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-800 dark:text-gray-200 text-lg mb-2">
          No jokes found
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          Try a different search term
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {total !== undefined && (
        <div className="mb-4 text-gray-600 dark:text-gray-400">
          Found {total} joke{total !== 1 ? "s" : ""} for &quot;{searchTerm}
          &quot;
        </div>
      )}
      <div className="grid grid-cols-1 gap-6">
        {jokes.map((joke) => (
          <JokeCard key={joke.id} joke={joke} searchTerm={searchTerm} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
