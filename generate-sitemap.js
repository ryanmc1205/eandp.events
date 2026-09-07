import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import {
  staticRoutes,
  sitemapExcludedRoutes,
} from "./scripts/site-routes.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE = "https://eandp.events";

// Metadata for known static routes.
// Any route not listed here will still be included with sensible defaults.
const staticRouteMetadata = {
  "/": {
    changefreq: "monthly",
    priority: "1.0",
  },
  "/weddings": {
    changefreq: "monthly",
    priority: "0.9",
  },
  "/corporate": {
    changefreq: "monthly",
    priority: "0.9",
  },
  "/about": {
    changefreq: "monthly",
    priority: "0.8",
  },
  "/5-questions": {
    changefreq: "monthly",
    priority: "0.8",
  },
  "/blog": {
    changefreq: "weekly",
    priority: "0.8",
  },
  "/privacy-policy": {
    changefreq: "yearly",
    priority: "0.3",
  },
};

// 1) Static sitemap routes from shared route config
const staticUrls = staticRoutes
  .filter(
    (route) => !sitemapExcludedRoutes.includes(route)
  )
  .map((loc) => ({
    loc,
    changefreq:
      staticRouteMetadata[loc]?.changefreq || "monthly",
    priority:
      staticRouteMetadata[loc]?.priority || "0.5",
  }));

// 2) Dynamic blog routes from src/data/blog.json
const blogJsonPath = path.resolve(
  __dirname,
  "src/data/blog.json"
);

let blogPosts = [];

try {
  const raw = fs.readFileSync(
    blogJsonPath,
    "utf8"
  );

  blogPosts = JSON.parse(raw);
} catch (err) {
  console.warn(
    `[sitemap] Could not read ${blogJsonPath}. Proceeding without blog posts.`
  );
}

const blogUrls = (blogPosts || []).map(
  (post) => ({
    loc: `/blog/${post.slug}`,
    changefreq: "monthly",
    priority: "0.7",
    lastmod:
      post.lastmod || post.datePublished,
  })
);

// 3) Escape XML-safe values
const escapeXml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

// 4) Build <url> entries
const toUrlXml = ({
  loc,
  changefreq,
  priority,
  lastmod,
}) => {
  const lines = [
    "  <url>",
    `    <loc>${escapeXml(`${BASE}${loc}`)}</loc>`,
    changefreq
      ? `    <changefreq>${escapeXml(
          changefreq
        )}</changefreq>`
      : null,
    priority
      ? `    <priority>${escapeXml(
          priority
        )}</priority>`
      : null,
    lastmod
      ? `    <lastmod>${escapeXml(
          lastmod
        )}</lastmod>`
      : null,
    "  </url>",
  ].filter(Boolean);

  return lines.join("\n");
};

// 5) Merge + de-dupe
const allUrls = [
  ...staticUrls,
  ...blogUrls,
].filter(
  (value, index, array) =>
    index ===
    array.findIndex(
      (item) => item.loc === value.loc
    )
);

// 6) Write final XML
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `${allUrls.map(toUrlXml).join("\n")}\n` +
  `</urlset>\n`;

const outDir = path.resolve(
  __dirname,
  "public"
);

const outFile = path.join(
  outDir,
  "sitemap.xml"
);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, {
    recursive: true,
  });
}

fs.writeFileSync(
  outFile,
  xml,
  "utf8"
);

console.log(
  `[sitemap] Wrote ${allUrls.length} URLs to ${path.relative(
    process.cwd(),
    outFile
  )}`
);
