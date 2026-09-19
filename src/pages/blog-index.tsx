import React from "react";
import { Helmet } from "react-helmet-async";

import NavBarBlog from "@/components/NavBarBlog";
import Footer from "@/components/Footer";
import { getAllBlogMeta } from "@/lib/blogMeta";

const ABSOLUTE_ORIGIN = "https://eandp.events";

const toAbs = (path: string) =>
  path.startsWith("http")
    ? path
    : `${ABSOLUTE_ORIGIN}${path}`;

const stripQuery = (url: string) =>
  url.split("?")[0];

const Blog = () => {
  const pageUrl = `${ABSOLUTE_ORIGIN}/blog`;
  const heroImage =
    "/lovable-uploads/IMG_0409.webp";
  const absHero = toAbs(heroImage);

  const blogPosts = getAllBlogMeta().map(
    (post) => ({
      title: post.title,
      href: `/blog/${post.slug}`,
      image: post.image,
      excerpt: post.excerpt,
      datePublished: post.datePublished,
      lastmod: post.lastmod,
      category: post.category,
    })
  );

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "E&P Events Blog",
    url: pageUrl,
    description:
      "Expert event planning advice, real stories, and cultural insights from Atlanta's event planners.",
    publisher: {
      "@type": "Organization",
      name: "E&P Events",
      url: ABSOLUTE_ORIGIN,
    },
    mainEntity: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: toAbs(post.href),
      image: toAbs(
        stripQuery(post.image)
      ),
      description: post.excerpt,
      datePublished: post.datePublished,
      dateModified: post.lastmod,
      mainEntityOfPage: toAbs(post.href),
      articleSection: post.category,
    })),
  };

  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${ABSOLUTE_ORIGIN}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          E&amp;P Events Blog | Atlanta
          Insights &amp; Event Stories
        </title>

        <meta
          name="description"
          content="Read tips, stories, and expert advice from Atlanta’s wedding and corporate event planners."
        />

        <link
          rel="canonical"
          href={pageUrl}
        />

        <meta
          name="robots"
          content="index,follow"
        />

        <link
          rel="preload"
          as="image"
          href={heroImage}
          type="image/webp"
        />

        {/* Open Graph */}
        <meta
          property="og:url"
          content={pageUrl}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="E&P Events Blog | Atlanta Insights & Event Stories"
        />

        <meta
          property="og:description"
          content="Read tips, stories, and expert advice from Atlanta’s wedding and corporate event planners."
        />

        <meta
          property="og:image"
          content={absHero}
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="E&P Events Blog | Atlanta Insights & Event Stories"
        />

        <meta
          name="twitter:description"
          content="Read tips, stories, and expert advice from Atlanta’s wedding and corporate event planners."
        />

        <meta
          name="twitter:image"
          content={absHero}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbsLd
            ),
          }}
        />
      </Helmet>

      <div className="min-h-screen bg-[#f7f7f2] flex flex-col">
        <NavBarBlog />

        {/* Hero */}
        <section
          id="hero"
          className="relative min-h-[60vh] flex flex-col justify-center pt-28 pb-12 px-4 bg-cover bg-center"
          style={{
            backgroundImage: `url('${heroImage}')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30 z-0" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-snug mx-auto drop-shadow-lg">
              Real Atlanta Events. Real
              Solutions.
              <br />
              Blog by E&amp;P Events
            </h1>

            <p className="text-lg text-white mb-6">
              Tips, behind-the-scenes
              insights, and expert advice
              from Atlanta’s trusted
              planners. Whether you're
              organizing a luxury wedding
              or a high-impact corporate
              event, our blog helps you plan
              smarter and stress less.
            </p>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-10">
            <a
              href="#blog-posts"
              aria-label="Scroll to blog posts"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* Posts */}
        <section
          id="blog-posts"
          className="py-20 px-4 bg-[#f8f6ed]"
        >
          <div className="max-w-6xl mx-auto mb-12 text-center">
            <h2 className="section-title text-[#2a2a2a] mb-3">
              Latest from the E&amp;P Blog
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Stories, insights, and
              practical advice for anyone
              planning a wedding or
              corporate event in
              Atlanta—and far beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <a
                key={post.href}
                href={post.href}
                className="group block bg-white rounded-xl shadow-md border border-transparent hover:border-gold hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.02]"
              >
                <div className="h-56 w-full relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={`Blog post about ${post.title.toLowerCase()} by Atlanta event planner`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-[#2a2a2a] group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-700 mb-2 text-base">
                    {post.excerpt}
                  </p>

                  <span className="text-sm text-gold font-semibold underline group-hover:no-underline">
                    Read More →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <Footer />
      </div>

      <div
        className="lion-watermark"
        aria-hidden="true"
      />
    </>
  );
};

export default Blog;