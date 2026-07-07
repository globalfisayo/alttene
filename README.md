# Alttene Ventures

Website for **Alttene Ventures** — a venture studio and the home of:

- **Koffeechat** — our flagship product: meaningful conversations, one cup at a time.
- **Fisayo.org** — our giving-back initiative ([fisayo.org](https://fisayo.org)).
- **Alto Partners** — our consulting firm (strategy, product, growth).

Built with React 18, Vite, Tailwind CSS, and shadcn/ui. It builds to plain static
files you can host anywhere (GitHub Pages, Netlify, Cloudflare Pages, etc.) — no
backend or paid services required.

> **Note on where this code lives:** this site was bootstrapped from the Novola
> codebase and currently lives on the `claude/alttene-ventures-site-gnwj0q`
> branch of the `novola` repository, fully separated from Novola's `main` branch
> (nothing here affects the Novola site). To move it into its own repository:
>
> ```bash
> git clone --branch claude/alttene-ventures-site-gnwj0q \
>   https://github.com/globalfisayo/novola.git alttene
> cd alttene
> git checkout -B main            # make this the new repo's main branch
> git remote set-url origin https://github.com/globalfisayo/alttene.git
> git push -u origin main         # after creating the empty "alttene" repo on GitHub
> ```

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

## Site structure

| Route | Page |
| --- | --- |
| `/` | Home — studio overview, ecosystem, Koffeechat spotlight |
| `/about` | Story and values |
| `/koffeechat` | Flagship product page |
| `/initiatives` | Fisayo.org and Alto Partners |
| `/blog`, `/blog/:slug` | Studio blog |
| `/contact` | Contact form + info |

## Editing content

### Blog posts (visual editor — no coding needed)

Blog posts are managed with [Pages CMS](https://pagescms.org), a free visual editor
that saves directly to this repository. Every save publishes the site automatically.

1. Go to **[app.pagescms.org](https://app.pagescms.org)** and sign in with GitHub.
2. Open this repository and click **Blog Posts**.
3. Add or edit a post: title, URL slug, excerpt, rich-text content, date, category,
   featured image. Click **Save** — the site rebuilds and goes live in ~2 minutes.

Under the hood each post is a JSON file in [`src/data/posts/`](src/data/posts/)
(the schema is defined in [`.pages.yml`](.pages.yml)); uploaded images land in
`public/uploads/`.

### Everything else

- **Pages** are in `src/pages/` (Home, About, Koffeechat, Initiatives, Blog, Contact).
- **Theme** — the all-blue palette lives in [`src/index.css`](src/index.css) as CSS
  variables; change `--primary` / `--secondary` there to retheme the whole site.
- **Logo** is an inline SVG component: [`src/components/Logo.jsx`](src/components/Logo.jsx)
  (favicon: `public/favicon.svg`).
- The **contact form** currently simulates submission (it shows a success toast but
  sends nothing). Wire it to a form service like Formspree or a serverless function
  when ready — see `src/components/ContactForm.jsx`.

## Deploying to GitHub Pages

The included workflow (`.github/workflows/deploy.yml`) builds and deploys the site
to GitHub Pages on every push to `main`. Enable it under
**Settings → Pages → Source: GitHub Actions**. It currently serves from the default
`https://<user>.github.io/<repo>/` URL; when Alttene gets a custom domain, add a
`CNAME` file in `public/` and set `VITE_BASE: /` in the workflow.
