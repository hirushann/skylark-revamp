import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  // Keep links to the previous site's routes working. Redirect matching is
  // case-insensitive, so the old /Services and /Faq can't be listed here
  // without looping onto /services and /faq.
  async redirects() {
    return [
      { source: "/about-2", destination: "/about", permanent: true },
      { source: "/contactus", destination: "/contact", permanent: true },
    ];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
