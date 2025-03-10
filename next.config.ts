import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "api.chucknorris.io",
      },
    ],
  },
};

export default nextConfig;
