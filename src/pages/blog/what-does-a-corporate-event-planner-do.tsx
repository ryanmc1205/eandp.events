import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const WhatDoesACorporateEventPlannerDo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const url = "https://eandp.events/blog/what-does-a-corporate-event-planner-do";
  const title = "What Does a Corporate Event Planner Actually Do? | E&P Events";
  const description =
    "Corporate event planners are strategic partners who align goals, budget, vendors, technology, and execution—so leaders can focus on outcomes, not logistics.";
  const heroSrc = "/lovable-uploads/ChatGPT Image Jun 14, 2025, 03_13_22 PM.webp";
  const ogImage = "https://eandp.events/lovable-uploads/77d9a347-7e81-4f55-827e-07598bec637f.png";

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://eandp.events/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://eandp.events/blog" },
      { "@type": "ListItem", position: 3, name: "What Does a Corporate Event Planner Do?", item: url },
    ],
  };

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "What Does a Corporate Event Planner Actually Do?",
    description,
    image: [`https://eandp.events${heroSrc.replace(/\s/g, "%20")}`],
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "E&P Events" },
    publisher: {
      "@type": "Organization",
      name: "E&P Events",
      logo: {
        "@type": "ImageObject",
        url: ogImage,
      },
    },
    datePublished: "2025-06-14",
    dateModified: "2025-06-14",
    articleSection: "Corporate Events",
  };

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />

        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Performance */}
        <link rel="preload" as="image" href={heroSrc} type="image/webp" />

        {/* Structured data */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        <script type="application/ld+json">{JSON.stringify(blogPostingLd)}</script>
      </Helmet>

      <div className="bg-[#f7f7f2] pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-[#2a2a2a]">
          <div className="w-full aspect-[16/9] overflow-hidden rounded-xl shadow-lg mb-10">
            <img
              src={heroSrc}
              alt="Corporate planners collaborating at a high-end Atlanta event"
              className="w-full h-full object-cover"
              width={1280}
              height={720}
              loading="eager"
              decoding="async"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            What Does a Corporate Event Planner Actually Do?
          </h1>

          <p className="text-lg mb-6">
            <strong>Bottom Line Up Front:</strong> Corporate event planners are your strategic partners who handle every
            detail—from initial concept to flawless execution—so you can focus on what matters most: your people, your
            message, and your results.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>
          <ul className="list-disc pl-6 space-y-2 text-base mb-8">
            <li>Strategic execution partners, not just logistics coordinators</li>
            <li>Maximize budgets through industry relationships and transparent pricing</li>
            <li>Atlanta expertise = better venues and vendor coordination</li>
            <li>Cultural intelligence ensures inclusive experiences for diverse audiences</li>
            <li>Crisis-proof execution means we solve issues before they impact your event</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The Real Role of a Corporate Event Planner</h2>
          <p className="mb-4 text-lg">
            Let’s be direct: A corporate event planner isn’t just someone who books venues and orders catering. We’re
            your strategic execution partner—the calm, confident voice that transforms your vision into reality while you
            stay focused on leading your business.
          </p>
          <p className="mb-4 text-lg">
            As one of the top corporate event planning companies in Atlanta, we specialize in high-level execution for
            executive summits, client experiences, and strategic gatherings.
          </p>
          <p className="mb-4 text-lg">
            Think of us as your event COO. We take ownership of timelines, budgets, vendor relationships, and crisis
            management so you can be fully present for your team and stakeholders. Every decision we make protects your
            brand’s reputation and delivers measurable value to your organization.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Corporate Events We Master</h2>
          <ul className="list-disc pl-6 space-y-2 text-base mb-8">
            <li>
              <strong>Executive Conferences &amp; Summits:</strong> Multi-day programs that position your leadership as
              industry thought leaders
            </li>
            <li>
              <strong>Product Launches:</strong> Brand experiences that generate genuine buzz and media attention
            </li>
            <li>
              <strong>Client Appreciation Events:</strong> Personalized experiences that deepen loyalty and drive retention
            </li>
            <li>
              <strong>Executive Retreats:</strong> Confidential, luxury experiences in carefully curated settings
            </li>
            <li>
              <strong>Team Building &amp; Recognition:</strong> Culturally intelligent programming that celebrates your
              diverse workforce
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Our Strategic Planning Process</h2>
          <p className="mb-3 text-lg">
            <strong>Foundation Phase:</strong> We start with clarity. What are your objectives? Who are your stakeholders?
            What does success actually look like?
          </p>
          <p className="mb-3 text-lg">
            <strong>Budget Mastery:</strong> We don’t just manage budgets—we maximize them. Through relationships and
            transparent pricing, we negotiate exceptional value while tracking every investment.
          </p>
          <p className="mb-3 text-lg">
            <strong>Venue &amp; Vendor Excellence:</strong> Our Atlanta connections mean access to top-tier venues and
            trusted vendor partners—from luxury hotels to culturally resonant spaces.
          </p>
          <p className="mb-3 text-lg">
            <strong>Brand Alignment:</strong> Every detail—signage, swag, staging—reinforces your brand identity with
            clarity and cohesion.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Technology &amp; Guest Experience</h2>
          <p className="mb-4 text-lg">
            Modern corporate events demand seamless technology. We manage registration platforms, AV coordination,
            livestreaming, and hybrid event logistics with calm precision.
          </p>
          <p className="mb-4 text-lg">
            Guest experience starts with the invitation. We handle RSVP systems, dietary preferences, and transportation,
            making sure every attendee feels valued.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Why Atlanta Expertise Matters</h2>
          <p className="mb-4 text-lg">
            Local knowledge is strategic. We understand traffic, venue logistics, vendor dynamics, and cultural nuances.
            Whether guests are flying in or local, your event will reflect Atlanta’s energy with global polish.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Corporate vs. Wedding Planning</h2>
          <ul className="list-disc pl-6 space-y-2 text-base mb-8">
            <li>
              <strong>Corporate Events:</strong> Drive business outcomes through strategic engagement
            </li>
            <li>
              <strong>Weddings:</strong> Celebrate love, heritage, and personal meaning
            </li>
          </ul>

          <p className="mb-4 text-lg">
            Our dual expertise—from high-stakes corporate events to culturally rich South Asian weddings—gives us a unique
            edge in delivering exceptional experiences.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The E&amp;P Events Difference</h2>
          <ul className="list-disc pl-6 space-y-2 text-base mb-8">
            <li>
              <strong>Transparent Flat-Fee Pricing:</strong> No markups, no surprises—just clarity.
            </li>
            <li>
              <strong>Cultural Intelligence:</strong> Experiences that resonate authentically.
            </li>
            <li>
              <strong>Crisis-Proof Execution:</strong> Problems solved before they impact your event.
            </li>
            <li>
              <strong>Strategic Partnership:</strong> We enhance your vision, not just execute it.{" "}
              <a href="https://eandp.events/corporate#testimonials" className="text-blue-600 underline">
                Read what our clients say.
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Common Questions Answered</h2>
          <ul className="list-disc pl-6 space-y-2 text-base mb-8">
            <li>
              <strong>How far in advance should we book?</strong> 3–6 months for standard events, 6–9 months for multi-day
              programs.
            </li>
            <li>
              <strong>Do you integrate with internal teams?</strong> Absolutely. We coordinate with HR, marketing, and
              executive stakeholders.
            </li>
            <li>
              <strong>Can you handle virtual or hybrid events?</strong> Yes. We manage livestreaming, remote coordination,
              and full hybrid production.
            </li>
            <li>
              <strong>Do you only work in Atlanta?</strong> While based here, we support regional and global programs with
              local excellence.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Your Next Step</h2>
          <p className="mb-4 text-lg">
            Ready to elevate your next corporate gathering?{" "}
            <a href="https://cal.com/eandp.events/corporate-b2b-15" className="text-blue-600 underline font-semibold">
              Book a consultation
            </a>{" "}
            or{" "}
            <a href="/corporate" className="text-blue-600 underline font-semibold">
              explore our corporate services
            </a>.
          </p>

          <p className="text-lg font-semibold">Excellence isn’t negotiable. Neither is your peace of mind.</p>
        </div>
      </div>
    </>
  );
};

export default WhatDoesACorporateEventPlannerDo;
