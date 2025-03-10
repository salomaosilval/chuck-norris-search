"use client";

import { ChuckNorrisJoke } from "../services/chuck-norris-api";
import Image from "next/image";
import { formatDate } from "../utils";

interface JokeCardProps {
  joke: ChuckNorrisJoke;
  searchTerm?: string;
  isRandom?: boolean;
}

const JokeCard = ({ joke, searchTerm, isRandom = false }: JokeCardProps) => {
  const highlightSearchTerm = (text: string, term?: string) => {
    if (!term || term.trim() === "") return text;

    const regex = new RegExp(`(${term})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div
      className={`
        p-6 rounded-lg shadow-md transition-all duration-300 
        ${
          isRandom
            ? "bg-chuck-red/10 dark:bg-chuck-red/20 border-2 border-chuck-red"
            : "bg-white dark:bg-gray-800 hover:shadow-lg"
        }
      `}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Image
            src={joke.icon_url}
            alt="Chuck Norris"
            width={60}
            height={60}
            className="rounded-md"
          />
        </div>
        <div className="flex-1">
          <p className="text-lg font-medium mb-3">
            {highlightSearchTerm(joke.value, searchTerm)}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            {joke.categories.length > 0 ? (
              joke.categories.map((category) => (
                <span
                  key={category}
                  className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200"
                >
                  {category}
                </span>
              ))
            ) : (
              <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                uncategorized
              </span>
            )}
          </div>

          <div className="text-xs text-gray-500 dark:text-gray-400 flex flex-wrap gap-x-4 gap-y-1">
            <span>ID: {joke.id}</span>
            <span>Created: {formatDate(joke.created_at)}</span>
            {joke.updated_at !== joke.created_at && (
              <span>Updated: {formatDate(joke.updated_at)}</span>
            )}
          </div>

          <a
            href={joke.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-primary-600 dark:text-primary-400 hover:underline"
          >
            View on ChuckNorris.io →
          </a>
        </div>
      </div>
    </div>
  );
};

export default JokeCard;
