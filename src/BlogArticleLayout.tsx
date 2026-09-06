import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { getPostLoader } from "@/blogLoader";

const postComponents = new Map<
  string,
  React.LazyExoticComponent<React.ComponentType<any>>
>();

function getPostComponent(slug: string) {
  const existing = postComponents.get(slug);
  if (existing) return existing;

  const loader = getPostLoader(slug);
  if (!loader) return undefined;

  const component = lazy(loader);
  postComponents.set(slug, component);

  return component;
}

const BlogArticleLayout = () => {
  const { slug = "" } = useParams();

  const PostComponent = getPostComponent(slug);

  if (!PostComponent) {
    return <h2>404 – Post Not Found</h2>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostComponent />
    </Suspense>
  );
};

export default BlogArticleLayout;
