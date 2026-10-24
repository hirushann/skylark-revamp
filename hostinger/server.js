// Serves the prebuilt static site (out/) as a Hostinger Express app.
// Hostinger can't build Next.js, but it runs plain Express fine.
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "out");
const app = express();
app.disable("x-powered-by");

// The previous site's URLs (case-sensitive: /Services, not /services)
const redirects = {
  "/about-2": "/about/",
  "/Services": "/services/",
  "/contactus": "/contact/",
  "/Faq": "/faq/",
};

app.use((req, res, next) => {
  const to = redirects[req.path.replace(/\/$/, "")];
  if (to) return res.redirect(301, to);
  next();
});

// Hashed build assets never change
app.use(
  "/_next/static",
  express.static(path.join(root, "_next/static"), { immutable: true, maxAge: "1y" }),
);
app.use(express.static(root, { extensions: ["html"] }));

app.use((req, res) => res.status(404).sendFile(path.join(root, "404.html")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Skylark site listening on ${port}`));
