// /scripts/makeSitemaps.ts
import fs from "fs";
import path from "path";

const ABSOLUTE_ORIGIN = "https://eandp.events";

// Blog JSON path
const blogDataPath = path.resolve(__dirname, "../src/data/blog.json");
const blogPosts = JSON.parse(fs.readFileSync(blogDataPath, "utf8"));

// Helper to make XML-safe strings
const xmlEscape = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

// Static pages
const staticPages = [
  { loc: "/", priority: "1.0" },
  { loc: "/about", priority: "0.8" },
  { loc: "/contact", priority: "0.8" },
  { loc: "/services", priority: "0.8" },
  { loc: "/blog", priority: "0.9" },
  { loc: "/weddings", priority: "0.9" },
  { loc: "/corporate", priority: "0.9" }
];

// Build XML for sitemap
const generateSitemap = () => {
  const urls = [
    ...staticPages.map(page => ({
      loc: `${ABSOLUTE_ORIGIN}${page.loc}`,
      lastmod: new Date().toISOString().split("T")[0],
      priority: page.priority
    })),
    ...blogPosts.map(post => ({
      loc: `${ABSOLUTE_ORIGIN}/blog/${xmlEscape(post.slug)}`,
      lastmod: post.lastmod || post.datePublished,
      priority: "0.7"
    }))
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    u => `<url>
  <loc>${u.loc}</loc>
  <lastmod>${u.lastmod}</lastmod>
  <priority>${u.priority}</priority>
</url>`
  )
  .join("\n")}
</urlset>`;
};

// Output file to `dist/sitemap.xml`
export const makeSitemaps = () => {
  const sitemap = generateSitemap();
  const outputPath = path.resolve(__dirname, "../dist/sitemap.xml");
  fs.writeFileSync(outputPath, sitemap, "utf8");
  console.log("✅ Sitemap generated at:", outputPath);
};
