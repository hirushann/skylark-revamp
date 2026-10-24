const path = require("path");
const express = require("express");

const root = path.join(__dirname, "out");
const app = express();
app.disable("x-powered-by");

// Legacy site URL redirects
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

// 404 fallback
app.use((req, res) => res.status(404).sendFile(path.join(root, "404.html")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Skylark site listening on port ${port}`));
