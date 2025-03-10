"use client";

import { useState } from "react";
import Header from "./components/header";
import SearchInput from "./components/search-input";
import SearchResults from "./components/search-results";
import FeelingLuckyButton from "./components/feeling-lucky-button";
import RandomJoke from "./components/random-joke";
import { useChuckNorrisJokes } from "./hooks/useChuckNorrisJokes";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showRandom, setShowRandom] = useState(false);

  const { useSearchJokes, useRandomJoke } = useChuckNorrisJokes();

  const {
    data: searchData,
    isLoading: isSearchLoading,
    isError: isSearchError,
    error: searchError,
  } = useSearchJokes(searchTerm);

  const {
    data: randomJokeData,
    isLoading: isRandomLoading,
    isError: isRandomError,
    error: randomError,
    refetch: refetchRandomJoke,
  } = useRandomJoke();

  const randomJoke = randomJokeData || null;

  const handleSearch = (query: string) => {
    setSearchTerm(query);
    setShowRandom(false);
  };

  const handleFeelingLucky = () => {
    setSearchTerm("");
    setShowRandom(true);
    refetchRandomJoke();
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-gradient-to-b from-chuck-light to-white dark:from-chuck-dark dark:to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 text-chuck-blue dark:text-chuck-light">
            Find Chuck Norris Jokes
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Search for Chuck Norris jokes or try your luck with a random one!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <SearchInput onSearch={handleSearch} />
            <FeelingLuckyButton
              onClick={handleFeelingLucky}
              isLoading={isRandomLoading}
            />
          </div>
        </div>
      </section>

      <section className="py-12 flex-1">
        <div className="container-custom">
          {showRandom ? (
            <RandomJoke
              joke={randomJoke}
              isLoading={isRandomLoading}
              isError={isRandomError}
              error={randomError as Error | null}
            />
          ) : searchTerm ? (
            <SearchResults
              jokes={searchData?.result || []}
              total={searchData?.total}
              isLoading={isSearchLoading}
              isError={isSearchError}
              error={searchError as Error | null}
              searchTerm={searchTerm}
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                Enter a search term above or click &quot;I&apos;m Feeling
                Lucky&quot; to get started.
              </p>
            </div>
          )}
        </div>
      </section>

      <footer className="py-6 border-t border-gray-200 dark:border-gray-800 mt-auto">
        <div className="container-custom text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            Powered by{" "}
            <a
              href="https://api.chucknorris.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              ChuckNorris.io API
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
