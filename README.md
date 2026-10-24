# Skylark Innovations website

Next.js site exported as static HTML (`output: "export"`), so hosting only needs to serve files.

## Develop

```bash
npm install
npm run dev
```

Site copy lives in `lib/content.ts`.

## Deploy to Hostinger

### Automatic (GitHub Actions)

Every push to `main` runs `.github/workflows/deploy.yml`: it lints, builds, and uploads `out/` over FTP. It can also be started by hand from the Actions tab.

Repository → Settings → Secrets and variables → Actions:

| Kind | Name | Value |
| --- | --- | --- |
| Secret | `FTP_SERVER` | FTP host from hPanel → Files → FTP Accounts (an IP or `ftp.yourdomain.com`) |
| Secret | `FTP_USERNAME` | FTP username, e.g. `u123456789` or `u123456789.yourdomain.com` |
| Secret | `FTP_PASSWORD` | That FTP account's password |
| Variable (optional) | `FTP_SERVER_DIR` | Site folder relative to the FTP login folder, ending in `/`. Defaults to `public_html/`; use `./` if the FTP account opens straight into `public_html` |
| Variable (optional) | `FTP_PROTOCOL` | Defaults to `ftps`; set to `ftp` only if the TLS connection fails |

Uploads are incremental (the action keeps `.ftp-deploy-sync-state.json` on the server). Files that were already in `public_html` before the first deploy are left alone — delete the old site's files once by hand.

### Manual

Build on your machine (or CI), not on Hostinger: Hostinger's build servers have a glibc too old for Next.js's native compiler.

```bash
npm run build
cd out && zip -r ../skylark-static.zip .
```

In hPanel → File Manager → `public_html`, delete the old files, upload `skylark-static.zip`, and extract it there. `out/.htaccess` (from `public/.htaccess`) handles HTTPS, the 404 page and redirects from the previous site's URLs — make sure hidden files are shown so it isn't missed.
