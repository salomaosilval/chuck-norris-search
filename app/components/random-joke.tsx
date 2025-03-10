"use client";

import { ChuckNorrisJoke } from "../services/chuck-norris-api";
import JokeCard from "./joke-card";
import { Loading } from "./loading";

interface RandomJokeProps {
  joke: ChuckNorrisJoke | null;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

const RandomJoke = ({ joke, isLoading, isError, error }: RandomJokeProps) => {
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="text-center py-8">
        <div className="text-red-600 dark:text-red-400 text-lg mb-2">
          Error loading random joke
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          {error?.message || "Something went wrong. Please try again."}
        </p>
      </div>
    );
  }

  if (!joke) {
    return null;
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-chuck-red">
        Random Chuck Norris Joke
      </h2>
      <JokeCard joke={joke} isRandom={true} />
    </div>
  );
};

export default RandomJoke;
