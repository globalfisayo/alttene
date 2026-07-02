// Blog posts live as JSON files in src/data/posts/ — one file per post.
// Edit them visually with Pages CMS (see .pages.yml in the repo root) or by hand.
const modules = import.meta.glob('../data/posts/*.json', { eager: true });

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=1200&auto=format&fit=crop';

// Root-relative paths (e.g. "/uploads/photo.jpg" written by the CMS) need the
// Vite base prefix so they resolve when the site is served from a subpath.
const withBase = (path) =>
  path && path.startsWith('/') ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path;

const resolveContentPaths = (html) =>
  html
    ? html.replaceAll(/(src|href)="\/uploads\//g, `$1="${import.meta.env.BASE_URL}uploads/`)
    : html;

const blogPosts = Object.entries(modules).map(([path, mod]) => {
  const data = mod.default ?? mod;
  const slug = data.slug || path.split('/').pop().replace(/\.json$/, '');
  return { ...data, slug, id: slug };
});

// Parse date-only strings ("2026-05-15") as local midnight — a bare ISO date
// is treated as UTC and would display one day early west of UTC.
const parsePostDate = (dateStr) => new Date(`${dateStr}T00:00:00`);

const byDateDesc = (a, b) =>
  parsePostDate(b.publication_date) - parsePostDate(a.publication_date);

export function formatPostDate(dateStr, options = { month: 'long', day: 'numeric', year: 'numeric' }) {
  if (!dateStr) return '';
  return parsePostDate(dateStr).toLocaleDateString('en-US', options);
}

export function getAllCategories() {
  return ['All', ...new Set(getAllPosts().map((post) => post.category).filter(Boolean))];
}

export function getAllPosts(category) {
  const posts = category && category !== 'All'
    ? blogPosts.filter((post) => post.category === category)
    : [...blogPosts];
  return posts.sort(byDateDesc);
}

export function getRecentPosts(count = 5) {
  return getAllPosts().slice(0, count);
}

export function getPostBySlug(slug) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return null;

  // Related posts are picked automatically: same category first (newest
  // first), padded with the newest posts overall — no manual curation needed.
  const others = getAllPosts().filter((p) => p.slug !== slug);
  const sameCategory = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  const related = [...sameCategory, ...rest].slice(0, 3);

  return {
    ...post,
    content: resolveContentPaths(post.content),
    pdf_url: withBase(post.pdf_url),
    relatedPosts: related,
  };
}

export function getPostImageUrl(post) {
  return withBase(post?.featured_image) || FALLBACK_IMAGE;
}
