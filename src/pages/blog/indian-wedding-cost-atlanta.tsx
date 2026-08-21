// components/IndianWeddingCostAtlanta.jsx
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const IndianWeddingCostAtlanta = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- SEO Meta ---
  const url = "https://eandp.events/blog/indian-wedding-cost-atlanta";
  const title =
    "Indian Wedding Costs in Atlanta: 2026 Reality Check | E&P Events";
  const description =
    "Get a transparent breakdown of Indian wedding costs in Atlanta for 2026. Learn what a multi-event celebration really costs, how to save, and where to spend.";
  const heroSrc = "/lovable-uploads/atlanta-wedding-budget-guide.webp";
  const ogImage =
    "https://eandp.events/lovable-uploads/atlanta-indian-wedding-budget-guide.webp";
  const clarityUrl = "https://cal.com/eandp.events/15min";

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://eandp.events/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://eandp.events/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Indian Wedding Cost in Atlanta",
        item: url,
      },
    ],
  };

  // Evergreen schema (omit dates)
  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "What Your Indian Wedding Will Actually Cost in Atlanta (2026 Reality Check)",
    description,
    image: [`https://eandp.events${heroSrc.replace(/\s/g, "%20")}`],
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "E&P Events" },
    publisher: { "@type": "Organization", name: "E&P Events", logo: { "@type": "ImageObject", url: ogImage } },
    articleSection: "Weddings",
    about: [
      "Indian Weddings",
      "South Asian Weddings",
      "Atlanta Venues",
      "Wedding Budget",
      "Mandap and Décor",
      "Catering and Bar",
    ],
  };

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
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

      <article className="bg-[#f7f7f2] pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-[#2a2a2a]">
          {/* Hero */}
          <div className="w-full aspect-[16/9] overflow-hidden rounded-xl shadow-lg mb-10">
            <img
              src={heroSrc}
              alt="Vibrant South Asian wedding ceremony in Atlanta with elegant mandap and floral décor"
              className="w-full h-full object-cover"
              width={1280}
              height={720}
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Title + Intro */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            What Your Indian Wedding Will Actually Cost in Atlanta (2026 Reality Check)
          </h1>
          <p className="text-lg mb-6">
            Planning an Indian wedding in Atlanta? Let’s cut through the confusion and give you the real numbers so you
            can make confident decisions—without crossing your fingers and hoping for the best. After orchestrating
            hundreds of{" "}
            <a href="/weddings" className="text-blue-600 underline">
              South Asian weddings in Atlanta
            </a>
            , these are the ranges we see again and again.
          </p>
          <div className="mb-8">
            <a
              href={clarityUrl}
              className="inline-block px-6 py-3 rounded-lg bg-[#1f6feb] text-white font-semibold hover:opacity-90 transition"
            >
              Book a 15-Minute Strategy Call
            </a>
          </div>

          {/* Bottom line table */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            The Bottom Line: What Atlanta Couples Actually Invest
          </h2>
          <p className="text-lg mb-4">
            Real-world ranges for a multi-event Indian wedding weekend (includes typical service charges and sales tax):
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-[#f0f4ff]">
                <tr>
                  <th className="p-3 font-semibold">Guest Count</th>
                  <th className="p-3 font-semibold">Without Alcohol</th>
                  <th className="p-3 font-semibold">With Full Bar</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-semibold">100 guests</td>
                  <td className="p-3">$75,000 – $110,000</td>
                  <td className="p-3">$85,000 – $125,000</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-semibold">200 guests</td>
                  <td className="p-3">$145,000 – $210,000</td>
                  <td className="p-3">$165,000 – $235,000</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-semibold">300 guests</td>
                  <td className="p-3">$220,000 – $300,000</td>
                  <td className="p-3">$250,000 – $340,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#555] mb-10">
            These ranges reflect Atlanta pricing with ~22–25% service charges and ~8–8.9% sales tax included. Excludes
            rings, honeymoon, and guest accommodations.
          </p>

          {/* Inclusions / Exclusions */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4">
            What These Numbers Include (And What They Don’t)
          </h2>

          <h3 className="text-xl font-semibold mt-4 mb-2">Included</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
            <li>3–4 events (Mehndi, Sangeet, Ceremony, Reception)</li>
            <li>Full-service venues or premium event spaces</li>
            <li>Professional décor, mandap, and floral design</li>
            <li>Complete catering with service staff</li>
            <li>Photography, videography, and entertainment</li>
            <li>All coordination and day-of management</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">Not Included</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-8">
            <li>Wedding rings and jewelry purchases</li>
            <li>Honeymoon and travel expenses</li>
            <li>Guest room blocks and accommodations</li>
            <li>Gifts and favors for extended family</li>
          </ul>

          {/* F&B Reality */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            Atlanta Wedding Investment Breakdown
          </h2>
          <h3 className="text-xl font-semibold mt-2 mb-2">Food &amp; Beverage Reality (The Biggest Line Item)</h3>
          <p className="text-lg mb-4">
            Catering typically consumes <strong>35–50%</strong> of your total budget once service charges and taxes are
            applied:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-[#f0f4ff]">
                <tr>
                  <th className="p-3 font-semibold">Service Level</th>
                  <th className="p-3 font-semibold">Per Guest Cost</th>
                  <th className="p-3 font-semibold">Service Charge</th>
                  <th className="p-3 font-semibold">Total After Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-semibold">Hotel Catering</td>
                  <td className="p-3">$75 – $180</td>
                  <td className="p-3">22–25% + 8–9% tax</td>
                  <td className="p-3">$85 – $240 per guest</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-semibold">Premium Caterer</td>
                  <td className="p-3">$85 – $140</td>
                  <td className="p-3">20–25% + 8–9% tax</td>
                  <td className="p-3">$115 – $185 per guest</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-semibold">Alcohol Package</td>
                  <td className="p-3">+ $40 – $85</td>
                  <td className="p-3">22–25% + tax</td>
                  <td className="p-3">+ $55 – $115 per guest</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg mb-6">
            Industry averages back this up—see{" "}
            <a
              href="https://fash.com/costs/indian-wedding-cost"
              target="_blank"
              rel="noopener"
              className="text-blue-600 underline"
            >
             Fash: Indian wedding cost
            </a>
            .
            And remember—no one wants an "average" wedding.
          </p>

          {/* Venue context */}
          <h3 className="text-xl font-semibold mt-6 mb-2">Atlanta Venue Cost Examples</h3>
          <p className="text-lg mb-6">
            Mid-tier banquet halls in the suburbs often land around <strong>$8,000–$20,000</strong> for an all-day 
            rental, while upscale hotel ballrooms in Buckhead (e.g.,{" "}
            <a
              href="https://www.intercontinentalatlanta.com/"
              target="_blank"
              rel="noopener"
              className="text-blue-600 underline"
            >
              InterContinental
            </a>{" "}
            or{" "}
            <a
              href="https://www.thewhitleyhotel.com/"
              target="_blank"
              rel="noopener"
              className="text-blue-600 underline"
            >
              The Whitley
            </a>
            ) can reach five figures—especially once F&amp;B minimums apply. Neighborhoods like Buckhead, Midtown,
            Alpharetta, etc. command different price dynamics and availability.
          </p>

          {/* Essential Categories */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            Essential Investment Categories
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-[#f0f4ff]">
                <tr>
                  <th className="p-3 font-semibold">Category</th>
                  <th className="p-3 font-semibold">Atlanta Range</th>
                  <th className="p-3 font-semibold">What Drives the Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-semibold">Venue &amp; Space</td>
                  <td className="p-3">$15,000 – $45,000 / day</td>
                  <td className="p-3">Location, exclusivity, included amenities</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-semibold">Décor &amp; Mandap</td>
                  <td className="p-3">$15,000 – $40,000+</td>
                  <td className="p-3">Custom elements, floral density, lighting</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-semibold">Photography/Video</td>
                  <td className="p-3">$8,000 – $22,000</td>
                  <td className="p-3">Coverage days, team size, deliverables</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-semibold">Entertainment</td>
                  <td className="p-3">$4,000 – $20,000+</td>
                  <td className="p-3">Live music, DJ, dhol, sound systems</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-semibold">Planning</td>
                  <td className="p-3">$2,500 – $20,000+</td>
                  <td className="p-3">Full-service vs. day-of + cultural fluency</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-semibold">Hair &amp; Makeup</td>
                  <td className="p-3">$1,000 – $6,000</td>
                  <td className="p-3">Trials, multiple looks, bridal party</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-semibold">Transportation</td>
                  <td className="p-3">$1,500 – $5,000+</td>
                  <td className="p-3">Baraat, valet, shuttle plans</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cultural Elements */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            Cultural Elements That Impact Your Investment
          </h2>

          <h3 className="text-xl font-semibold mt-2 mb-2">Religious Considerations</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
            <li>Havan ceremonies may require permits and fire-safety oversight</li>
            <li>Multi-priest rituals and muhurat-specific timing can increase venue costs</li>
          </ul>

          <h3 className="text-xl font-semibold mt-2 mb-2">Traditional Details</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
            <li>Baraat: $800 – $1,500 (horse/vehicle and PA needs)</li>
            <li>Mandap customization and installation: $8,500 – $15,000</li>
            <li>Classical musicians and dhol players elevate ambiance—and cost</li>
          </ul>

          <h3 id="venues-guide" className="text-xl font-semibold mt-2 mb-2">
            Venue Compatibility Matters
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-8">
            <li>Load-in access, open-flame policies, and mandap-friendly spaces vary</li>
            <li>Ask us for a venue compatibility matrix for Atlanta&apos;s top properties</li>
          </ul>

          {/* Sample Investment Plans */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">Sample Investment Plans</h2>

          <h3 className="text-xl font-semibold mt-2 mb-3">Intimate Celebration (100 Guests, 3 Events)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-[#f0f4ff]">
                <tr>
                  <th className="p-3 font-semibold">Investment Area</th>
                  <th className="p-3 font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Core event costs</td>
                  <td className="p-3">$65,000</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Service charges (23%)</td>
                  <td className="p-3">$15,000</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Sales tax (8.5%)</td>
                  <td className="p-3">$5,500</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Tips (15%)</td>
                  <td className="p-3">$13,000</td>
                </tr>
                <tr className="border-t bg-[#fafafa]">
                  <td className="p-3 font-semibold">Total Investment</td>
                  <td className="p-3 font-semibold">$99,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-2 mb-3">Traditional Scale (200 Guests, 4 Events)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-[#f0f4ff]">
                <tr>
                  <th className="p-3 font-semibold">Investment Area</th>
                  <th className="p-3 font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Core event costs</td>
                  <td className="p-3">$135,000</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Service charges (23%)</td>
                  <td className="p-3">$31,000</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Sales tax (8.5%)</td>
                  <td className="p-3">$11,500</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Tips (15%)</td>
                  <td className="p-3">$27,000</td>
                </tr>
                <tr className="border-t bg-[#fafafa]">
                  <td className="p-3 font-semibold">Total Investment</td>
                  <td className="p-3 font-semibold">$204,500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-2 mb-3">Grand Celebration (300 Guests, 4 Events)</h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-left bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-[#f0f4ff]">
                <tr>
                  <th className="p-3 font-semibold">Investment Area</th>
                  <th className="p-3 font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Core event costs</td>
                  <td className="p-3">$210,000</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Service charges (23%)</td>
                  <td className="p-3">$48,000</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Sales tax (8.5%)</td>
                  <td className="p-3">$18,000</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Tips (15%)</td>
                  <td className="p-3">$41,000</td>
                </tr>
                <tr className="border-t bg-[#fafafa]">
                  <td className="p-3 font-semibold">Total Investment</td>
                  <td className="p-3 font-semibold">$317,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Savings Tips */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            High-Impact Budget-Saving Tips in Atlanta
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg mb-8">
            <li>
              <strong>Hold the Sangeet on a Thursday:</strong> Many venues extend 20–30% discounts midweek.
            </li>
            <li>
              <strong>Re-use Your Mandap for the Reception:</strong> Repurpose the structure as a stage backdrop with
              refreshed drape/florals.
            </li>
            <li>
              <strong>Opt for a Buffet Dinner:</strong> Often trims <em>~15–20%</em> vs. plated, with lower staffing.
            </li>
            <li>
              <strong>BYOB &amp; No-Corkage Venues:</strong> Some halls (e.g., in Decatur/Gwinnett) allow BYO with
              licensed servers; negotiate corkage.
            </li>
            <li>
              <strong>Bundle Hair/Makeup:</strong> Book the same HMUA across events and include moms/family to secure
              per-person discounts.
            </li>
          </ul>

          {/* Spend vs Save */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            Where to Spend vs Save: Strategic Advice
          </h2>
          <p className="text-lg mb-6">
            For lasting impact, prioritize <strong>entertainment</strong> and <strong>photography</strong>—guests
            remember how it sounded and how it looked. Save on printed invites, specialty linens, and elaborate favors
            with low visibility or short shelf life. Strong coordination prevents costly errors and maximizes assets
            across events.
          </p>

          {/* Next Steps / CTAs */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">Your Next Steps</h2>
          <p className="text-lg mb-4">
            The difference between a wedding that flows and one that flusters? A guide who understands both your vision
            and Atlanta’s real numbers.
          </p>
          <div className="mt-4 p-6 bg-white rounded-xl shadow-md mb-10">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Ready to plan with clarity?</h3>
            <p className="mb-4">
              Schedule a quick strategy call and get a budget aligned with your goals—without compromising culture or
              experience.
            </p>
            <a
              href={clarityUrl}
              className="inline-block px-6 py-3 rounded-lg bg-[#1f6feb] text-white font-semibold hover:opacity-90 transition"
            >
              Schedule Your 15-Minute Call
            </a>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            How much should we budget for a 200-guest Indian wedding in Atlanta?
          </h3>
          <p className="text-lg mb-4">
            Plan for <strong>$165,000–$250,000</strong> for a multi-event weekend, including alcohol, service fees, travel fees, 
            and tips.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            What percentage of our budget will go to catering?
          </h3>
          <p className="text-lg mb-4">
            Expect <strong>40–55%</strong>, especially once service charges and taxes are factored in.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            Can we have traditional open-flame ceremonies at Atlanta venues?
          </h3>
          <p className="text-lg mb-4">
            Yes, but be prepared for permits and fire-safety costs.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">How does alcohol service impact costs?</h3>
          <p className="text-lg mb-8">
            A full bar adds roughly <strong>$55–$115 per guest</strong>, most notably for Sangeet and Reception.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            How can we manage costs without compromising culture?
          </h3>
          <p className="text-lg mb-8">
            Reuse décor, negotiate F&amp;B minimums early, and maintain a <strong>10–15% contingency</strong>.
          </p>

          {/* Sources / Cross-links */}
          <div className="mt-8 text-base">
            <p className="mb-2 font-semibold">Keep exploring:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <a href="/weddings" className="text-blue-600 underline">
                  E&amp;P South Asian Weddings
                </a>
              </li>
              <li>
                <a
                  href="https://fash.com/costs/indian-wedding-cost"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-600 underline"
                >
                  Fash: Indian Wedding Cost
                </a>
              </li>
              <li>
                <span className="text-[#666]">Venue references: </span>
                <a
                  href="https://www.intercontinentalatlanta.com/"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-600 underline"
                >
                  InterContinental Buckhead
                </a>{" "}
                ·{" "}
                <a
                  href="https://www.thewhitleyhotel.com/"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-600 underline"
                >
                  The Whitley (Buckhead)
                </a>
              </li>
            </ul>
          </div>

          <p className="text-base text-[#555] mt-8">
            Planning a South Asian celebration in Atlanta? Our team specializes in stress-free execution of culturally
            rich weddings with transparent, flat-fee pricing.{" "}
            <a href={clarityUrl} className="text-blue-600 underline">
              Let’s bring your vision to life with confidence and grace.
            </a>
          </p>
        </div>
      </article>
    </>
  );
};

export default IndianWeddingCostAtlanta;
