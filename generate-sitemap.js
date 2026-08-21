import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const BASE = 'https://eandp.events';


// 1) Static routes
const staticUrls = [
  { loc: '/',               changefreq: 'monthly', priority: '1.0' },
  { loc: '/weddings',       changefreq: 'monthly', priority: '0.9' },
  { loc: '/corporate',      changefreq: 'monthly', priority: '0.9' },
  { loc: '/5-questions',    changefreq: 'monthly', priority: '0.8' },
  { loc: '/blog',           changefreq: 'weekly',  priority: '0.8' },
];

// 2) Dynamic blog routes from src/data/blog.json
const blogJsonPath = path.resolve(__dirname, 'src/data/blog.json');

let blogPosts = [];
try {
  const raw = fs.readFileSync(blogJsonPath, 'utf8');
  blogPosts = JSON.parse(raw);
} catch (err) {
  console.warn(`[sitemap] Could not read ${blogJsonPath}. Proceeding without blog posts.`);
}

const blogUrls = (blogPosts || []).map((p) => ({
  loc: `/blog/${p.slug}`,
  changefreq: 'monthly',
  priority: '0.7',
  lastmod: p.lastmod || p.datePublished, // prefer lastmod if present
}));

// 3) Build <url> entries
const toUrlXml = ({ loc, changefreq, priority, lastmod }) => {
  const lines = [
    `  <url>`,
    `    <loc>${BASE}${loc}</loc>`,
    changefreq ? `    <changefreq>${changefreq}</changefreq>` : null,
    priority ?   `    <priority>${priority}</priority>`       : null,
    lastmod ?    `    <lastmod>${lastmod}</lastmod>`           : null,
    `  </url>`,
  ].filter(Boolean);
  return lines.join('\n');
};

const allUrls = [...staticUrls, ...blogUrls]
  // de-dupe just in case
  .filter((v, i, arr) => i === arr.findIndex(x => x.loc === v.loc));

// 4) Write the final XML to public/sitemap.xml
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `${allUrls.map(toUrlXml).join('\n')}\n` +
  `</urlset>\n`;

const outDir = path.resolve(__dirname, 'public');
const outFile = path.join(outDir, 'sitemap.xml');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, xml, 'utf8');

console.log(`[sitemap] Wrote ${allUrls.length} URLs to ${path.relative(process.cwd(), outFile)}`);
