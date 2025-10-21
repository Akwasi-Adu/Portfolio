// prerender.js
// Build static HTML from blogs.js & projects.js and inject into pages for SEO.

const fs = require("fs-extra");
const path = require("path");
const vm = require("vm");
const slugify = require("slugify");
const cheerio = require("cheerio");

const ROOT = process.cwd();
const SRC = ROOT; // site root
const OUT = ROOT; // writing in-place for GitHub Pages simplicity

function absoluteUrl(u) {
  if (!u) return null;
  if (/^https?:\/\//i.test(u)) return u;
  // make site-rooted URLs absolute
  return `https://akwasi.dev${u.startsWith('/') ? '' : '/'}${u}`;
}

// Extract <img> srcs from HTML
function extractImageSrcs(html) {
  const $ = cheerio.load(html || "");
  const srcs = new Set();
  $("img[src]").each((_, el) => {
    const src = $(el).attr("src");
    if (src) srcs.add(absoluteUrl(src));
  });
  return Array.from(srcs);
}


// Helper: load a browser-style JS file that defines a global (e.g., "blogs", "projects")
function loadGlobalFromFile(filePath, globalName) {
  let code = fs.readFileSync(filePath, "utf8");

  // 1) Rewrite "const|let|var <name> =" to "globalThis.<name> =" so it lands on the VM global.
  const decl = new RegExp(`\\b(const|let|var)\\s+${globalName}\\s*=`);
  code = code.replace(decl, `globalThis.${globalName} =`);

  // 2) Also catch "export const <name> =" or "export default <name>"
  const exportConst = new RegExp(`\\bexport\\s+const\\s+${globalName}\\s*=`);
  code = code.replace(exportConst, `globalThis.${globalName} =`);

  code = code.replace(/\bexport\s+default\s+([A-Za-z_$][\w$]*)/g, (_m, n) =>
    n === globalName ? `globalThis.${globalName}` : `globalThis.${n}`
  );

  // 3) Run in a sandbox where globalThis === sandbox
  const sandbox = { console };
  sandbox.globalThis = sandbox;
  sandbox.window = sandbox;
  sandbox.document = {};
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: filePath });

  const val =
    sandbox[globalName] ||
    sandbox.globalThis?.[globalName] ||
    sandbox.window?.[globalName];

  if (!val) {
    throw new Error(`Global "${globalName}" not found in ${filePath}`);
  }
  return val;
}


// HTML escape
function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Basic page template
function makePage({ title, description, canonical, ogImage, body, jsonLd, extraHead = "" }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${esc(canonical)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="article">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:image" content="${esc(ogImage || "https://akwasi.dev/portfolio/images/og-image.jpg")}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${esc(ogImage || "https://akwasi.dev/portfolio/images/og-image.jpg")}">
<link rel="stylesheet" href="/portfolio/css/style.css">
${extraHead}
<script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
</script>
</head>
<body>
<header>
  <nav>
    <ul>
      <li><a href="/#home">Home</a></li>
      <li><a href="/projects.html">Projects</a></li>
      <li><a href="/blog.html">Blog</a></li>
      <li><a href="/cv.html">CV</a></li>
      <li><a href="/#contact">Contact</a></li>
    </ul>
  </nav>
</header>
<main>
${body}
</main>
<footer><p>&copy; ${new Date().getFullYear()} Akwasi Adu-Kyeremeh. All rights reserved.</p></footer>
</body>
</html>`;
}

function toSlug(s) {
  return slugify(s, { lower: true, strict: true, trim: true });
}

(async function run() {
  // 1) Load your data arrays
  const blogs = loadGlobalFromFile(path.join(SRC, "portfolio/js/blogs.js"), "blogs");
  const projects = loadGlobalFromFile(path.join(SRC, "portfolio/js/projects.js"), "projects");

  // 2) Ensure output dirs exist
  await fs.ensureDir(path.join(OUT, "blog"));
  await fs.ensureDir(path.join(OUT, "projects"));

  // 3) Build blog detail pages
for (const b of blogs) {
  const slug = b.slug || toSlug(b.title);
  const url = `https://akwasi.dev/blog/${slug}/`;

  // Collect images: explicit fields + inline images in content
  const inlineImgs = extractImageSrcs(b.content);
  const declaredImgs = []
    .concat(b.heroImage ? [absoluteUrl(b.heroImage)] : [])
    .concat(Array.isArray(b.images) ? b.images.map(absoluteUrl) : []);
  const allImages = Array.from(new Set([...declaredImgs, ...inlineImgs]));

  const body = `
<article class="blog-details">
  <h1>${esc(b.title)}</h1>
  <p><em>${new Date(b.date).toLocaleDateString()}</em></p>
  <div>${b.content || ""}</div>
  <p><a href="/blog.html">← Back to Blog</a></p>
</article>`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": b.title,
    "datePublished": b.date,
    "dateModified": b.lastUpdated || b.date,
    "description": b.summary || "",
    "author": { "@type": "Person", "name": "Akwasi Adu-Kyeremeh" },
    "url": url,
    ...(allImages.length ? { "image": allImages } : {})
  };

  const html = makePage({
    title: `${b.title} | Blog | Akwasi Adu-Kyeremeh`,
    description: b.summary || "Article by Akwasi Adu-Kyeremeh",
    canonical: url,
    ogImage: allImages[0] || undefined,
    body,
    jsonLd
  });

  const outDir = path.join(OUT, "blog", slug);
  await fs.ensureDir(outDir);
  await fs.writeFile(path.join(outDir, "index.html"), html);
}

  // 4) Build project detail pages
for (const p of projects) {
  const slug = p.slug || toSlug(p.title || p.name);
  const url = `https://akwasi.dev/projects/${slug}/`;

  // Gather declared project images
  const declaredProjImgs = []
    .concat(p.screenshot ? [absoluteUrl(p.screenshot)] : [])
    .concat(Array.isArray(p.images) ? p.images.map(absoluteUrl) : []);
  const projImages = Array.from(new Set(declaredProjImgs));

  const detailsHtml = Array.isArray(p.details) ? p.details.map(d => `<li>${esc(d)}</li>`).join("") : "";
  const highlightsHtml = Array.isArray(p.highlights) ? p.highlights.map(h => `<li>${esc(h)}</li>`).join("") : "";
  const outcomeHtml = p.outcome ? esc(p.outcome) : "";

  const body = `
<article id="project-details-page">
  ${p.screenshot ? `<img src="${esc(p.screenshot)}" alt="Screenshot for ${esc(p.title || p.name)}" class="project-screenshot">` : ""}
  <h1>${esc(p.title || p.name)}</h1>
  ${p.duration ? `<p><strong>Duration:</strong> ${esc(p.duration)}</p>` : ""}
  ${p.name ? `<p><strong>Project Name:</strong> ${esc(p.name)}</p>` : ""}
  ${p.industry ? `<p><strong>Industry:</strong> ${Array.isArray(p.industry) ? esc(p.industry.join(", ")) : esc(p.industry)}</p>` : ""}
  <section><h2>Details</h2><ul>${detailsHtml}</ul></section>
  ${highlightsHtml ? `<section><h2>Technical Highlights</h2><ul>${highlightsHtml}</ul></section>` : ""}
  ${outcomeHtml ? `<section><h2>Outcome</h2><p>${outcomeHtml}</p></section>` : ""}
  <p><a href="/projects.html">← Back to Projects</a></p>
</article>`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": p.title || p.name,
    "description": p.summary || "",
    "url": url,
    ...(projImages.length ? { "image": projImages } : {})
  };

  const html = makePage({
    title: `${(p.title || p.name)} | Projects | Akwasi Adu-Kyeremeh`,
    description: p.summary || "Project by Akwasi Adu-Kyeremeh",
    canonical: url,
    ogImage: projImages[0] || undefined,
    body,
    jsonLd
  });

  const outDir = path.join(OUT, "projects", slug);
  await fs.ensureDir(outDir);
  await fs.writeFile(path.join(outDir, "index.html"), html);
}


  // 5) Pre-render blog index (top N newest)
  const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
  const blogList = sortedBlogs.map(b => {
    const slug = b.slug || toSlug(b.title);
    return `<article class="blog-post">
      <h2><a href="/blog/${slug}/">${esc(b.title)}</a></h2>
      <p><em>${new Date(b.date).toLocaleDateString()}</em></p>
      <p>${esc(b.summary || "")}</p>
      <a class="read-more" href="/blog/${slug}/">Read More</a>
    </article>`;
  }).join("");

  const blogIndexPath = path.join(SRC, "blog.html");
  if (fs.existsSync(blogIndexPath)) {
    const $ = cheerio.load(fs.readFileSync(blogIndexPath, "utf8"));
    const container = $("#blog-posts");
    if (container.length) container.html(blogList);
    await fs.writeFile(blogIndexPath, $.html());
  }

  // 6) Pre-render projects index and the homepage “Featured/Latest” areas
  // Projects index
  const projectCards = projects.map(p => {
    const slug = p.slug || toSlug(p.title || p.name);
    const industries = Array.isArray(p.industry) ? p.industry.join(", ") : (p.industry || "");
    return `<div class="project-card">
      ${p.logo ? `<img src="${esc(p.logo)}" alt="${esc(p.name)} Logo" class="project-logo">` : ""}
      <h2>${esc(p.title || p.name)}</h2>
      ${p.duration ? `<p><strong>Duration:</strong> ${esc(p.duration)}</p>` : ""}
      ${p.name ? `<p><strong>Project Name:</strong> ${esc(p.name)}</p>` : ""}
      ${industries ? `<p><strong>Industries:</strong> ${esc(industries)}</p>` : ""}
      <p>${esc(p.summary || "")}</p>
      <a href="/projects/${slug}/" class="project-link">View Details</a>
    </div>`;
  }).join("");

  const projectsIndexPath = path.join(SRC, "projects.html");
  if (fs.existsSync(projectsIndexPath)) {
    const $ = cheerio.load(fs.readFileSync(projectsIndexPath, "utf8"));
    const container = $("#projects-container");
    if (container.length) container.html(projectCards);
    await fs.writeFile(projectsIndexPath, $.html());
  }

  // Homepage: inject 3 latest blogs + keep your featured projects section as-is
  const indexPath = path.join(SRC, "index.html");
  if (fs.existsSync(indexPath)) {
    const $ = cheerio.load(fs.readFileSync(indexPath, "utf8"));

    // Latest blogs block
    const latest = sortedBlogs.slice(0, 3).map(b => {
      const slug = b.slug || toSlug(b.title);
      return `<div class="blog-post">
        <h3><a href="/blog/${slug}/">${esc(b.title)}</a></h3>
        <p><em>${new Date(b.date).toLocaleDateString()}</em></p>
        <p>${esc(b.summary || "")}</p>
      </div>`;
    }).join("");

    const latestContainer = $("#latest-blogs");
    if (latestContainer.length) latestContainer.html(latest);

    await fs.writeFile(indexPath, $.html());
  }



  // -----------------------------
// 7) Generate sitemaps + robots
// -----------------------------
function isoDate(d) {
  try { return new Date(d).toISOString().split('T')[0]; }
  catch { return new Date().toISOString().split('T')[0]; }
}

function xmlEscape(s) {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Build URL lists
const siteBase = "https://akwasi.dev";
const staticUrls = [
  { loc: `${siteBase}/`, changefreq: "weekly", priority: "1.0", lastmod: isoDate(new Date()) },
  { loc: `${siteBase}/projects.html`, changefreq: "weekly", priority: "0.9", lastmod: isoDate(new Date()) },
  { loc: `${siteBase}/blog.html`, changefreq: "weekly", priority: "0.9", lastmod: isoDate(new Date()) },
  { loc: `${siteBase}/cv.html`, changefreq: "monthly", priority: "0.5", lastmod: isoDate(new Date()) }
];

// Per-entry URLs
const blogUrls = blogs.map(b => {
  const slug = b.slug || toSlug(b.title);
  return {
    loc: `${siteBase}/blog/${slug}/`,
    changefreq: "monthly",
    priority: "0.8",
    lastmod: isoDate(b.lastUpdated || b.date || new Date()) // ← add lastUpdated
  };
});


const projectUrls = projects.map(p => {
  const slug = p.slug || toSlug(p.title || p.name);
  return {
    loc: `${siteBase}/projects/${slug}/`,
    changefreq: "monthly",
    priority: "0.7",
    lastmod: isoDate(p.lastUpdated || p.date || new Date())
  };
});

// Child sitemaps
function urlset(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${xmlEscape(u.loc)}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("\n")}
</urlset>`;
}

const blogSitemapXml = urlset(blogUrls);
const projectsSitemapXml = urlset(projectUrls);
const rootUrls = staticUrls; // Optional: include static pages in a root urlset, or index only

// Sitemap index referencing children
const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteBase}/blog-sitemap.xml</loc>
    <lastmod>${isoDate(new Date())}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteBase}/projects-sitemap.xml</loc>
    <lastmod>${isoDate(new Date())}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteBase}/sitemap-static.xml</loc>
    <lastmod>${isoDate(new Date())}</lastmod>
  </sitemap>
</sitemapindex>`;

const staticSitemapXml = urlset(rootUrls);

// Write files at root for GitHub Pages
await fs.writeFile(path.join(OUT, "sitemap.xml"), sitemapIndexXml);
await fs.writeFile(path.join(OUT, "blog-sitemap.xml"), blogSitemapXml);
await fs.writeFile(path.join(OUT, "projects-sitemap.xml"), projectsSitemapXml);
await fs.writeFile(path.join(OUT, "sitemap-static.xml"), staticSitemapXml);

// robots.txt with Sitemap hints
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteBase}/sitemap.xml
Sitemap: ${siteBase}/blog-sitemap.xml
Sitemap: ${siteBase}/projects-sitemap.xml
Sitemap: ${siteBase}/sitemap-static.xml
`;

await fs.writeFile(path.join(OUT, "robots.txt"), robotsTxt);

// -----------------------------
// Image sitemap
// -----------------------------
const imageNs = 'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"';
function urlsetWithImages(items) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ${imageNs}>
${items.map(it => {
  const imagesXml = (it.images || []).map(img => `
    <image:image>
      <image:loc>${xmlEscape(img)}</image:loc>
    </image:image>`).join("");
  return `  <url>
    <loc>${xmlEscape(it.loc)}</loc>
    <lastmod>${it.lastmod}</lastmod>${imagesXml}
  </url>`;
}).join("\n")}
</urlset>`;
}

const siteBaseAbs = "https://akwasi.dev";
const imageItems = [];

// blogs → collect images from heroImage/images/content
for (const b of blogs) {
  const slug = b.slug || toSlug(b.title);
  const loc = `${siteBaseAbs}/blog/${slug}/`;
  const inlineImgs = extractImageSrcs(b.content);
  const declaredImgs = []
    .concat(b.heroImage ? [absoluteUrl(b.heroImage)] : [])
    .concat(Array.isArray(b.images) ? b.images.map(absoluteUrl) : []);
  const imgs = Array.from(new Set([...declaredImgs, ...inlineImgs]));
  if (imgs.length) {
    imageItems.push({
      loc,
      lastmod: isoDate(b.lastUpdated || b.date || new Date()),
      images: imgs
    });
  }
}

// projects → screenshot/images
for (const p of projects) {
  const slug = p.slug || toSlug(p.title || p.name);
  const loc = `${siteBaseAbs}/projects/${slug}/`;
  const declaredProjImgs = []
    .concat(p.screenshot ? [absoluteUrl(p.screenshot)] : [])
    .concat(Array.isArray(p.images) ? p.images.map(absoluteUrl) : []);
  const imgs = Array.from(new Set(declaredProjImgs));
  if (imgs.length) {
    imageItems.push({
      loc,
      lastmod: isoDate(p.lastUpdated || p.date || new Date()),
      images: imgs
    });
  }
}

const imageSitemapXml = urlsetWithImages(imageItems);
await fs.writeFile(path.join(OUT, "image-sitemap.xml"), imageSitemapXml);

// Re-write sitemap index to include image sitemap
const sitemapIndexWithImages = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteBaseAbs}/blog-sitemap.xml</loc>
    <lastmod>${isoDate(new Date())}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteBaseAbs}/projects-sitemap.xml</loc>
    <lastmod>${isoDate(new Date())}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteBaseAbs}/sitemap-static.xml</loc>
    <lastmod>${isoDate(new Date())}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteBaseAbs}/image-sitemap.xml</loc>
    <lastmod>${isoDate(new Date())}</lastmod>
  </sitemap>
</sitemapindex>`;
await fs.writeFile(path.join(OUT, "sitemap.xml"), sitemapIndexWithImages);

// Append image sitemap to robots.txt if not present
const robotsPath = path.join(OUT, "robots.txt");
let robotsExisting = "";
try { robotsExisting = await fs.readFile(robotsPath, "utf8"); } catch {}
if (!/image-sitemap\.xml/.test(robotsExisting)) {
  robotsExisting = `${robotsExisting.trim()}

Sitemap: ${siteBaseAbs}/image-sitemap.xml
`.trim() + "\n";
  await fs.writeFile(robotsPath, robotsExisting);
}


  console.log("Pre-render complete ✅");
})();
