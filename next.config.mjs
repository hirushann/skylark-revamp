/** @type {import('next').NextConfig} */
const nextConfig = {
  // Plain HTML/CSS/JS in out/, so Hostinger serves files and never runs Next.js.
  // Redirects for the old site's URLs live in public/.htaccess.
  output: "export",
  // Emits about/index.html etc., which Apache/LiteSpeed serve without rewrites
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
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
