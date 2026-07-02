# Novola Charity Foundation

Marketing site for the Novola Charity Foundation, built with React 18, Vite, Tailwind CSS, and shadcn/ui.

This project was originally created with Hostinger Horizons and has been fully decoupled:
no Horizons tooling, no PocketBase backend, no paid services required. It builds to plain
static files you can host anywhere (GitHub Pages, Netlify, Cloudflare Pages, etc.).

## Develop locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build for production

```bash
npm run build      # output in dist/
npm run preview    # serve the production build locally
```

## Editing content

- **Blog posts** live in [`src/data/blogPosts.js`](src/data/blogPosts.js). Each post is a plain
  object (title, slug, HTML content, category, related posts). Add or edit posts there —
  no database needed. The current posts contain placeholder copy.
- **Pages** are in `src/pages/` (Home, About, Programs, Impact, Get Involved, Blog, Contact).
- **Logo** is `src/assets/logo.png` (site) and `public/logo.png` (favicon).
- The **contact form** currently simulates submission (it shows a success toast but sends
  nothing). Wire it to a form service like Formspree or a serverless function when ready.

## Deploying to GitHub Pages

1. Create an empty repository on GitHub (no README).
2. Push this project:

   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. In the repo: **Settings → Pages → Source: GitHub Actions**.
4. Every push to `main` now deploys automatically via
   [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Custom domain

If you later attach a domain, add it under **Settings → Pages → Custom domain**,
then edit `.github/workflows/deploy.yml` and change `VITE_BASE` to `/` (there's a
comment marking the line). Point your DNS at GitHub Pages per
[GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
