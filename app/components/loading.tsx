export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600 dark:border-primary-400"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
    </div>
  );
};

export const LoadingDots = () => {
  return (
    <div className="flex space-x-1 justify-center items-center">
      <span className="sr-only">Loading...</span>
      <div className="h-2 w-2 bg-primary-600 dark:bg-primary-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-2 w-2 bg-primary-600 dark:bg-primary-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-2 w-2 bg-primary-600 dark:bg-primary-400 rounded-full animate-bounce"></div>
    </div>
  );
};
