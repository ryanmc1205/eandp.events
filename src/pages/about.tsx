import React from "react";
import NavBarBlog from "@/components/NavBarBlog";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

// Helpers
const ABSOLUTE_ORIGIN = "https://eandp.events";
const toAbs = (p: string) => (p.startsWith("http") ? p : `${ABSOLUTE_ORIGIN}${p}`);

const About = () => {
  const pageUrl = `${ABSOLUTE_ORIGIN}/about`;
  const heroDesktop = "/lovable-uploads/about-hero-desktop.webp";
  const heroMobile = "/lovable-uploads/about-hero-mobile.webp";
  const absHero = toAbs(heroDesktop);

  // JSON-LD (page + org summary)
  const aboutLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About E&P Events",
    url: pageUrl,
    headline: "About E&P Events | Atlanta Wedding & Corporate Event Planners",
    description:
      "E&P Events is an Atlanta-based planning studio known for crisis-proof execution, flat-fee transparency, and cultural fluency in South Asian & fusion weddings and corporate events.",
    mainEntity: {
      "@type": "Organization",
      name: "E&P Events",
      url: ABSOLUTE_ORIGIN,
      areaServed: ["Atlanta, GA", "Georgia", "United States"],
      sameAs: [
        "https://www.instagram.com/eandp_events/",
        "https://www.facebook.com/eventsep/",
      ],
    },
    publisher: { "@type": "Organization", name: "E&P Events", url: ABSOLUTE_ORIGIN },
  };

  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: ABSOLUTE_ORIGIN + "/" },
      { "@type": "ListItem", position: 2, name: "About", item: pageUrl },
    ],
  };

  return (
    <>
      <Helmet>
  <title>
    About E&amp;P Events | Indian South Asian &amp; Fusion Wedding Planner | Atlanta Corporate Events
  </title>
  <meta
    name="description"
    content="E&P Events delivers calm, crisis-proof execution for South Asian weddings, fusion celebrations, and high-stakes corporate events in Atlanta and beyond."
  />
  <link rel="canonical" href={pageUrl} />

  {/* Preload hero with srcset so the browser chooses the right file early */}
  <link
    rel="preload"
    as="image"
    href={heroDesktop}
    imagesrcset={`${heroMobile} 1280w, ${heroDesktop} 2048w`}
    imagesizes="100vw"
    type="image/webp"
    fetchpriority="high"
  />

  {/* OG / Twitter */}
  <meta property="og:url" content={pageUrl} />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="About E&amp;P Events | Indian South Asian &amp; Fusion Wedding Planner | Atlanta Corporate Events"
  />
  <meta
    property="og:description"
    content="E&P Events delivers calm, crisis-proof execution for South Asian weddings, fusion celebrations, and high-stakes corporate events in Atlanta and beyond."
  />
  <meta property="og:image" content={absHero} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="About E&amp;P Events | Indian South Asian &amp; Fusion Wedding Planner | Atlanta Corporate Events"
  />
  <meta
    name="twitter:description"
    content="E&P Events delivers calm, crisis-proof execution for South Asian weddings, fusion celebrations, and high-stakes corporate events in Atlanta and beyond."
  />
  <meta name="twitter:image" content={absHero} />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
  />
</Helmet>


      {/* PAGE WRAPPER */}
      <div className="min-h-screen bg-transparent flex flex-col">
        <NavBarBlog />

        {/* Hero */}
        <section
          id="hero"
          className="relative min-h-[60vh] flex flex-col justify-center pt-28 pb-12 px-4 overflow-hidden"
        >
          <picture>
            {/* Desktop first */}
            <source srcSet={heroDesktop} media="(min-width: 769px)" type="image/webp" />
            {/* Mobile */}
            <source srcSet={heroMobile} media="(max-width: 768px)" type="image/webp" />
            <img
              src={heroDesktop}
              alt="About E&P Events hero"
              className="absolute inset-0 w-full h-full object-cover z-0"
              fetchpriority="high"
              loading="eager"
              decoding="async"
            />
          </picture>

          <div className="absolute inset-0 bg-black opacity-30 z-10" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-snug mx-auto drop-shadow-lg">
              About E&amp;P Events
            </h1>
            <p className="text-lg text-white mb-6">
              We don’t just plan events. We run them. Calm leadership, crisp systems, and cultural intelligence—for
              weddings and corporate experiences that actually work.
            </p>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-10">
            <a href="#about-content" aria-label="Scroll to content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Content */}
        <section id="about-content" className="py-20 px-4 bg-transparent">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Intro */}
            <div className="text-center">
              <h2 className="section-title text-[#2a2a2a] mb-4">
                Atlanta Event Planners for Weddings &amp; Corporate — With Outcomes You Can Feel
              </h2>
              <p className="text-lg text-gray-700">
                E&amp;P Events is a boutique planning studio in Atlanta, GA trusted for high-stakes execution and calm
                leadership. We bring structure, clarity, and cultural intelligence to <strong>South Asian &amp; fusion weddings</strong> and
                <strong> corporate events</strong>—so you can focus on the moment, not the mess. From timeline design and vendor management to
                showcalling and contingency planning, we protect the run of show and the guest experience.
              </p>
            </div>

            {/* Why choose us */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-[#f7f7f2] rounded-xl shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#2a2a2a]">
                  Why Clients Choose E&amp;P (and Refer Us)
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Crisis-proof execution:</strong> We anticipate failure points, build contingencies, and keep the day on rails—without anyone noticing the work behind it.
                  </li>
                  <li>
                    <strong>Flat-fee transparency:</strong> No commissions or markups. Clear scope, clear price, clear outcomes.
                  </li>
                  <li>
                    <strong>Cultural fluency:</strong> Deep expertise in <strong>South Asian ceremonies</strong>, <strong>fusion weddings</strong>,
                    and cross-cultural corporate experiences—baraat logistics, open-flame guidance, VIP protocols, and more.
                  </li>
                  <li>
                    <strong>Ownership mentality:</strong> We lead like it’s ours—so you can enjoy it like it’s yours.
                  </li>
                </ul>
              </div>

              <div className="bg-[#f7f7f2]  rounded-xl shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#2a2a2a]">What We Do</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Weddings:</strong> Full-service planning, month-of coordination, and production management for
                    South Asian &amp; fusion celebrations, multi-event weekends, and destination-ready couples.
                  </li>
                  <li>
                    <strong>Corporate:</strong> Executive summits, brand activations, conferences, and donor/board experiences
                    where timing, tone, and stakeholder management matter.
                  </li>
                  <li>
                    <strong>Scale:</strong> From 100 guests to 1,500+, we scale gracefully—protecting both logistics and guest experience.
                  </li>
                </ul>
                <div className="mt-5 flex gap-4 flex-wrap">
                  <a href="/weddings" className="text-gold underline font-semibold">Explore Weddings →</a>
                  <a href="/corporate" className="text-gold underline font-semibold">Explore Corporate →</a>
                </div>
              </div>
            </div>

            {/* Results / Social proof */}
            <div className="bg-transparent rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#2a2a2a]">Results You Can Feel</h3>
              <p className="text-gray-700">
                Clients describe our work as “calm when it counted.” As one bride put it, “From all the wedding expenses,
                this was the most valuable… emergencies handled so smoothly that no one noticed.” That’s the bar we set for every event.
              </p>
              <div className="mt-5 flex gap-4 flex-wrap">
                <a href="/#testimonials" className="text-gold underline font-semibold">Read Testimonials →</a>
              </div>
            </div>

            {/* Meet the Director */}
            <section className="bg-transparent rounded-xl p-8 flex flex-col md:flex-row gap-10 items-center">
              {/* Photo */}
              <div className="md:w-1/3">
                <div className="overflow-hidden border border-gold rounded-md">
                  <img
                    src="/lovable-uploads/peter-portrait.webp"
                    alt="Peter Samuel, Director of E&P Events"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="md:w-2/3 text-lg text-gray-700">
                <h3 className="text-2xl font-bold text-[#2a2a2a] mb-4">Meet the Director</h3>
                <p className="mb-4">
                  At the helm of E&amp;P Events is Peter Samuel, a planner known for calm under pressure
                  and decisive leadership. With a background in project management and more than a
                  decade of high-stakes event experience, Peter has led everything from multi-day
                  South Asian weddings to executive programs for global dignitaries.
                </p>
                <p className="mb-6">
                  Clients know him as the “calm commander” who anticipates challenges, keeps the run of
                  show seamless, and leads with empathy. Whether orchestrating a 1,500-guest gala or a
                  fusion celebration in Atlanta, Peter runs the room so you can enjoy it.
                </p>
                <a href="/#meet-peter" className="text-gold underline font-semibold">
                  → Learn more about Peter
                </a>
              </div>
            </section>

            {/* How we work */}
            <div className="bg-[#f7f7f2] rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#2a2a2a]">How We Work</h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li><strong>Define the mission</strong> — goals, constraints, must-haves, and cultural priorities.</li>
                <li><strong>Build the blueprint</strong> — budget, vendors, timeline, tech, and risk plan (with contingencies).</li>
                <li><strong>Run the room</strong> — decisive showcalling, vendor leadership, discreet problem-solving.</li>
                <li><strong>Debrief</strong> — what worked, what we improved, what you’ll remember.</li>
              </ol>
              <blockquote className="mt-6 italic border-l-4 border-gold pl-4 text-gray-800">
                “Exceptional strategic direction and planning…pulling off events seamlessly and flawlessly.” — Sebastian
              </blockquote>
            </div>

            {/* Values & Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-[#f7f7f2] rounded-xl shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#2a2a2a]">Values We Won’t Compromise</h3>
                <p className="text-gray-700">
                  <strong>Excellence</strong> • <strong>Integrity</strong> • <strong>Ownership</strong> • <strong>Clarity</strong> • <strong>Cultural Intelligence</strong>
                </p>
              </div>
              <div className="bg-[#f7f7f2] rounded-xl shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#2a2a2a]">Selected Experience</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Multi-day South Asian &amp; fusion weddings (Atlanta &amp; beyond)</li>
                  <li>Executive programs with global dignitaries (incl. United Nations initiatives)</li>
                  <li>High-capacity productions with 1,500+ guests</li>
                </ul>
              </div>
            </div>

            {/* Service area */}
            <div className="bg-[#f7f7f2] rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#2a2a2a]">Service Area</h3>
              <p className="text-gray-700">
                Based in <strong>Atlanta, GA</strong> and serving greater Georgia as home base.{" "}
                <strong>Available nationwide</strong>; travel billed transparently at cost.
              </p>
            </div>
          </div>
        </section>

        {/* Full-bleed CTA */}
        <section
          id="about-cta"
          className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#2c2c2c] text-white py-16"
        >
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h3 className="section-title text-white mb-4">Ready When You Are</h3>
            <p className="text-lg text-white/80 mb-8">
              If strategy, empathy, and flawless delivery matter, we’re your team.
            </p>
            <div className="glow-button-wrapper mx-auto">
              <div className="glow-ring" />
              <a
                href="https://cal.com/eandp.events/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button-inner"
                onClick={() => {
                  (window as any).gtag?.('event', 'cta_click', {
                    button_text: 'Book Your Free Clarity Call',
                    cta_type: 'weddings_cta',
                    page_path: window.location.pathname,
                  });
                }}
              >
                Book Your Free Clarity Call
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <div className="lion-watermark" aria-hidden="true" />
    </>
  );
};

export default About;
