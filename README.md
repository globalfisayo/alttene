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

### Blog posts (visual editor — no coding needed)

Blog posts are managed with [Pages CMS](https://pagescms.org), a free visual editor
that saves directly to this repository. Every save publishes the site automatically.

1. Go to **[app.pagescms.org](https://app.pagescms.org)** and sign in with GitHub.
2. Open this repository and click **Blog Posts**.
3. Add or edit a post: title, URL slug, excerpt, rich-text content, date, category,
   featured image. Click **Save** — the site rebuilds and goes live in ~2 minutes.

Team members without GitHub accounts can be invited by email from the Pages CMS
**Settings → Collaborators** screen for this repository.

Under the hood each post is a JSON file in [`src/data/posts/`](src/data/posts/)
(the schema is defined in [`.pages.yml`](.pages.yml)); uploaded images land in
`public/uploads/`. The current posts contain placeholder copy.

### Everything else

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
