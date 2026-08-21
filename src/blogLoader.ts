// src/blogLoader.ts
// Automatically discovers all blog pages in /pages/blog

const modules = import.meta.glob("/src/pages/blog/*.tsx");

export type Loader = () => Promise<{ default: React.ComponentType<any> }>;

export function getPostLoader(slug: string): Loader | undefined {
  // Normalize
  const clean = slug.replace(/^\/+|\/+$/g, "");
  const path = `/src/pages/blog/${clean}.tsx`;
  return modules[path] as Loader | undefined;
}
