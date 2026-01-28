import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "place-hold.it",
        pathname: "/300",
      },
    ],
  },
};

export default nextConfig;
