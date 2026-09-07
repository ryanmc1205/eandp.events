import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

import { staticRoutes } from "./site-routes.mjs";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const ssrEntryPath = path.join(
  rootDir,
  "dist-ssr",
  "entry-server.js"
);
const blogJsonPath = path.join(
  rootDir,
  "src",
  "data",
  "blog.json"
);

async function getRoutes() {
  const rawBlogJson = await fs.readFile(
    blogJsonPath,
    "utf8"
  );

  const blogPosts = JSON.parse(rawBlogJson);

  const blogRoutes = blogPosts.map(
    (post) => `/blog/${post.slug}`
  );

  return [...new Set([...staticRoutes, ...blogRoutes])];
}

function getOutputPath(route) {
  if (route === "/") {
    return path.join(distDir, "index.html");
  }

  const cleanRoute = route.replace(
    /^\/+|\/+$/g,
    ""
  );

  return path.join(
    distDir,
    cleanRoute,
    "index.html"
  );
}

function buildPage(
  template,
  appHtml,
  headHtml
) {
  const rootPlaceholder =
    '<div id="root"></div>';

  if (!template.includes(rootPlaceholder)) {
    throw new Error(
      `Could not find ${rootPlaceholder} in dist/index.html`
    );
  }

  let page = template.replace(
    rootPlaceholder,
    `<div id="root">${appHtml}</div>`
  );

  if (headHtml) {
    page = page.replace(
      "</head>",
      `  <!-- Route-specific prerendered SEO -->\n${headHtml}\n</head>`
    );
  }

  return page;
}

async function main() {
  console.log(
    "[prerender] Starting static generation..."
  );

  const templatePath = path.join(
    distDir,
    "index.html"
  );

  const template = await fs.readFile(
    templatePath,
    "utf8"
  );

  const serverModule = await import(
    `${pathToFileURL(ssrEntryPath).href}?t=${Date.now()}`
  );

  if (
    typeof serverModule.render !== "function"
  ) {
    throw new Error(
      "SSR entry does not export a render(url) function."
    );
  }

  const routes = await getRoutes();

  console.log(
    `[prerender] Rendering ${routes.length} routes...`
  );

  for (const route of routes) {
    const { appHtml, headHtml } =
      await serverModule.render(route);

    const page = buildPage(
      template,
      appHtml,
      headHtml
    );

    const outputPath =
      getOutputPath(route);

    await fs.mkdir(
      path.dirname(outputPath),
      {
        recursive: true,
      }
    );

    await fs.writeFile(
      outputPath,
      page,
      "utf8"
    );

    console.log(
      `[prerender] ✓ ${route}`
    );
  }

  console.log(
    `[prerender] Finished. Generated ${routes.length} static pages.`
  );
}

main().catch((error) => {
  console.error(
    "[prerender] Failed:"
  );

  console.error(error);

  process.exit(1);
});
