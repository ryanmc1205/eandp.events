> vite_react_shadcn_ts@0.0.0 build
> npm run generate-sitemap && npm run build:client && npm run build:ssr && npm run prerender


> vite_react_shadcn_ts@0.0.0 generate-sitemap
> node generate-sitemap.js

[sitemap] Wrote 13 URLs to public/sitemap.xml

> vite_react_shadcn_ts@0.0.0 build:client
> vite build

vite v5.4.19 building for production...
transforming (3) src/main.tsxBrowserslist: browsers data (caniuse-lite) is 23 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
✓ 1626 modules transformed.
[plugin:vite:reporter] [plugin vite:reporter] 
(!) /workspaces/eandp.events/src/components/TestimonialSection.tsx is dynamically imported by /workspaces/eandp.events/src/pages/Index.tsx but also statically imported by /workspaces/eandp.events/src/pages/corporate.tsx, /workspaces/eandp.events/src/pages/weddings.tsx, dynamic import will not move module into another chunk.

dist/index.html                                                            2.51 kB │ gzip:  1.20 kB
dist/assets/index-DkQbrf5d.css                                            75.96 kB │ gzip: 12.65 kB
dist/assets/FeaturedSection-BKikB-XU.js                                    1.37 kB │ gzip:  0.68 kB
dist/assets/GallerySection-BxgEXQo4.js                                     1.39 kB │ gzip:  0.68 kB
dist/assets/ContactSection-zespKLex.js                                     1.80 kB │ gzip:  0.86 kB
dist/assets/MeetPeterSection-SrtkR0wN.js                                   1.93 kB │ gzip:  0.99 kB
dist/assets/AdditionalCtaSection-BE49AANR.js                               2.69 kB │ gzip:  1.17 kB
dist/assets/why-smart-atlanta-companies-hire-event-planners-DT5wNp9o.js    8.64 kB │ gzip:  3.31 kB
dist/assets/what-does-a-corporate-event-planner-do-DwoW5Egd.js            10.43 kB │ gzip:  3.51 kB
dist/assets/hidden-costs-diy-corporate-events-CgffPh2f.js                 11.81 kB │ gzip:  4.22 kB
dist/assets/wedding-content-creators-question-CYnDsWpf.js                 18.95 kB │ gzip:  6.17 kB
dist/assets/indian-wedding-cost-atlanta-Di1fNEgM.js                       22.24 kB │ gzip:  5.21 kB
dist/assets/indian-wedding-venues-atlanta-Cy85CJT1.js                     24.49 kB │ gzip:  6.27 kB
dist/assets/atlanta-corporate-event-planning-checklist-Dl0ggRQe.js        25.28 kB │ gzip:  6.51 kB
dist/assets/how-long-are-indian-weddings-atlanta-timelines-Bkc2Z7_M.js    44.80 kB │ gzip: 10.77 kB
dist/assets/index-rF7F0e0G.js                                            301.58 kB │ gzip: 86.56 kB
✓ built in 4.33s

> vite_react_shadcn_ts@0.0.0 build:ssr
> vite build --ssr src/entry-server.tsx --outDir dist-ssr

vite v5.4.19 building SSR bundle for production...
✓ 42 modules transformed.
dist-ssr/entry-server.js  449.94 kB
✓ built in 1.07s

> vite_react_shadcn_ts@0.0.0 prerender
> node scripts/prerender.mjs

node:internal/modules/run_main:107
    triggerUncaughtException(
    ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/workspaces/eandp.events/scripts/scripts/site-routes.mjs' imported from /workspaces/eandp.events/scripts/site-routes.mjs
Did you mean to import "./site-routes.mjs"?
    at finalizeResolution (node:internal/modules/esm/resolve:275:11)
    at moduleResolve (node:internal/modules/esm/resolve:865:10)
    at defaultResolve (node:internal/modules/esm/resolve:991:11)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:719:20)
    at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:736:38)
    at ModuleLoader.resolveSync (node:internal/modules/esm/loader:765:52)
    at #resolve (node:internal/modules/esm/loader:701:17)
    at ModuleLoader.getOrCreateModuleJob (node:internal/modules/esm/loader:621:35)
    at ModuleJob.syncLink (node:internal/modules/esm/module_job:160:33)
    at ModuleJob.link (node:internal/modules/esm/module_job:245:17) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///workspaces/eandp.events/scripts/scripts/site-routes.mjs'
}

Node.js v24.14.0
