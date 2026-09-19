import blogData from "@/data/blog.json";

export type BlogMeta = {
  slug: string;
  title: string;
  datePublished: string;
  lastmod: string;
  image: string;
  excerpt: string;
  category: string;
};

const blogPosts = blogData as BlogMeta[];

export function getBlogMeta(
  slug: string
): BlogMeta {
  const post = blogPosts.find(
    (item) => item.slug === slug
  );

  if (!post) {
    throw new Error(
      `Blog metadata not found for slug: ${slug}`
    );
  }

  return post;
}

export function getAllBlogMeta(): BlogMeta[] {
  return blogPosts;
}