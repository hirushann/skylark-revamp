# Skylark Innovations website

Next.js site exported as static HTML (`output: "export"`), so hosting only needs to serve files.

## Develop

```bash
npm install
npm run dev
```

Site copy lives in `lib/content.ts`.

## Deploy to Hostinger

### Automatic (GitHub → Hostinger)

Hostinger's build servers have a glibc too old for Next.js's native compiler, so Hostinger must never build `main`. Instead, every push to `main` runs `.github/workflows/deploy.yml`, which lints and builds on GitHub and force-pushes the finished site to the `hostinger` branch: `out/` plus the small Express app in `hostinger/` that serves it and handles the old-site redirects. No secrets are needed.

Hostinger Node.js web app settings:

| Setting | Value |
| --- | --- |
| Framework / application type | Express |
| Branch | `hostinger` |
| Entry file | `server.js` |
| Node version | 18 or later (22.x is fine) |

To upload by hand instead, zip the `hostinger` branch: `git fetch origin hostinger && git archive --format=zip -o skylark-hostinger.zip FETCH_HEAD`.

Never edit the `hostinger` branch; it is replaced on every build.

### Manual

Build on your machine (or CI), not on Hostinger: Hostinger's build servers have a glibc too old for Next.js's native compiler.

```bash
npm run build
cd out && zip -r ../skylark-static.zip .
```

In hPanel → File Manager → `public_html`, delete the old files, upload `skylark-static.zip`, and extract it there. `out/.htaccess` (from `public/.htaccess`) handles HTTPS, the 404 page and redirects from the previous site's URLs — make sure hidden files are shown so it isn't missed.
