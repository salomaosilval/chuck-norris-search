"use client";

import Header from "../components/header";
import Link from "next/link";

const About = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 flex-1">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-chuck-blue dark:text-chuck-light">
            About This Project
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-4">
              This Chuck Norris Joke Search Engine is a technical challenge
              project that demonstrates modern web development techniques using
              React, Next.js, TypeScript, and Tailwind CSS.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Features</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>
                Search for Chuck Norris jokes using the ChuckNorris.io API
              </li>
              <li>
                &quot;I&apos;m Feeling Lucky&quot; button to get a random joke
              </li>
              <li>Highlighting of search terms in results</li>
              <li>Responsive design for mobile and desktop</li>
              <li>Dark/light mode with system preference detection</li>
              <li>Semantic HTML for accessibility</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Technical Stack</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Next.js for server-side rendering and routing</li>
              <li>React for UI components</li>
              <li>TypeScript for type safety</li>
              <li>Tailwind CSS for styling</li>
              <li>React Query for data fetching and caching</li>
              <li>Axios for API requests</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">API</h2>
            <p className="mb-4">
              This project uses the free{" "}
              <a
                href="https://api.chucknorris.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                ChuckNorris.io API
              </a>{" "}
              to fetch jokes. The API provides endpoints for searching jokes,
              getting random jokes, and listing categories.
            </p>

            <div className="mt-8">
              <Link
                href="/"
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
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

export default About;
