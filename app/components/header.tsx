"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="py-6 border-b border-gray-200 dark:border-gray-800">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full bg-chuck-red flex items-center justify-center">
            <span className="text-white text-2xl font-bold">CN</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Chuck Norris
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Joke Search Engine
            </p>
          </div>
        </Link>

        <nav>
          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
