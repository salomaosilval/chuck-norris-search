"use client";

import ThemeProvider from "./theme-provider";
import QueryProvider from "./query-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
};

export default Providers;
