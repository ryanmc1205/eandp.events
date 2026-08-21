import { useParams } from "react-router-dom";
import { Suspense, lazy } from "react";
import { getPostLoader } from "@/blogLoader"; // 👈 new auto-loader

const BlogArticleLayout = () => {
  const { slug = "" } = useParams();

  const loader = getPostLoader(slug);
  if (!loader) return <h2>404 – Post Not Found</h2>;

  const PostComponent = lazy(loader);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostComponent />
    </Suspense>
  );
};

export default BlogArticleLayout;
