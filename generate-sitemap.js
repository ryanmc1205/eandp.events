import fs from "node:fs";
import path from "node:path";

import {
  staticRoutes,
  sitemapExcludedRoutes,
} from "./scripts/site-routes.mjs";

const SITE_URL = "https://eandp.events";

const rootDir = process.cwd();
const blogJsonPath = path.join(
  rootDir,
  "src",
  "data",
  "blog.json"
);

const sitemapOutputPath = path.join(
  rootDir,
  "public",
  "sitemap.xml"
);

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function getRoutes() {
  const sitemapRoutes = staticRoutes.filter(
    (route) => !sitemapExcludedRoutes.includes(route)
  );

  const rawBlogJson = fs.readFileSync(
    blogJsonPath,
    "utf8"
  );

  const blogPosts = JSON.parse(rawBlogJson);

  const blogRoutes = blogPosts.map(
    (post) => `/blog/${post.slug}`
  );

  return [
    ...new Set([
      ...sitemapRoutes,
      ...blogRoutes,
    ]),
  ];
}

function routeToUrl(route) {
  if (route === "/") {
    return `${SITE_URL}/`;
  }

  return `${SITE_URL}${route}`;
}

function generateSitemap(routes) {
  const urls = routes
    .map((route) => {
      const url = escapeXml(
        routeToUrl(route)
      );

      return `  <url>
    <loc>${url}</loc>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function main() {
  const routes = getRoutes();

  const sitemap = generateSitemap(
    routes
  );

  fs.writeFileSync(
    sitemapOutputPath,
    sitemap,
    "utf8"
  );

  console.log(
    `[sitemap] Wrote ${routes.length} URLs to public/sitemap.xml`
  );
}

main();
