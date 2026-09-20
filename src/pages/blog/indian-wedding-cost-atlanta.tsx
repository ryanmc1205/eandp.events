import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { getBlogMeta } from "@/lib/blogMeta";

const SLUG = "indian-wedding-cost-atlanta";
const ABSOLUTE_ORIGIN = "https://eandp.events";

const IndianWeddingCostAtlanta: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const meta = getBlogMeta(SLUG);

  const url = `${ABSOLUTE_ORIGIN}/blog/${meta.slug}`;
  const heroSrc = meta.image;
  const socialImage = heroSrc.startsWith("http")
    ? heroSrc
    : `${ABSOLUTE_ORIGIN}${heroSrc}`;

  const clarityUrl =
    "https://cal.com/eandp.events/30min";

  const breadcrumbLd = {
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
        item: `${ABSOLUTE_ORIGIN}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: meta.title,
        item: url,
      },
    ],
  };

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.excerpt,
    image: [socialImage],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: "E&P Events",
      url: ABSOLUTE_ORIGIN,
    },
    publisher: {
      "@type": "Organization",
      name: "E&P Events",
      url: ABSOLUTE_ORIGIN,
    },
    datePublished: meta.datePublished,
    dateModified: meta.lastmod,
    articleSection: meta.category,
    about: [
      "Indian Weddings",
      "South Asian Weddings",
      "Atlanta Wedding Venues",
      "Wedding Budget",
      "Mandap and Décor",
      "Wedding Catering",
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name:
          "How much should we budget for a 200-guest Indian wedding in Atlanta?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "For planning purposes, a 200-guest multi-event Indian wedding weekend in Atlanta may fall around $165,000–$235,000 with a full bar, based on the ranges used in this guide. Actual costs vary by venue, event count, catering, décor, entertainment, service charges, taxes, and other selections.",
        },
      },
      {
        "@type": "Question",
        name:
          "What percentage of our budget will go to catering?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "For planning purposes, catering and food and beverage may account for roughly 35–50% of the total budget once applicable service charges and taxes are considered. The actual share depends on the venue, caterer, menu, bar program, guest count, and number of events.",
        },
      },
      {
        "@type": "Question",
        name:
          "Can we have traditional open-flame ceremonies at Atlanta venues?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Open-flame policies and fire-safety requirements vary by venue and ceremony setup. Confirm the venue's current rules and any applicable permit, safety, or supervision requirements before finalizing plans for a havan or other open-flame ceremony.",
        },
      },
      {
        "@type": "Question",
        name:
          "How does alcohol service impact costs?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Using the planning ranges in this guide, a full bar may add roughly $55–$115 per guest after applicable fees and taxes. Actual pricing depends on the venue, package, duration, selections, staffing, and service model.",
        },
      },
      {
        "@type": "Question",
        name:
          "How can we manage costs without compromising culture?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Look for opportunities to reuse décor, negotiate food and beverage minimums early, prioritize the elements that matter most to your families, and maintain a 10–15% contingency for changes and unexpected costs.",
        },
      },
    ],
  };

  const trackBookingClick = () => {
    if (typeof window === "undefined") {
      return;
    }

    const gtag = (
      window as typeof window & {
        gtag?: (
          command: string,
          eventName: string,
          params?: Record<
            string,
            string | number | boolean
          >
        ) => void;
      }
    ).gtag;

    gtag?.("event", "book_call_click", {
      page_location: window.location.href,
      page_path: window.location.pathname,
      booking_type: "wedding_clarity_call",
    });
  };

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{meta.title}</title>

        <meta
          name="description"
          content={meta.excerpt}
        />

        <meta
          name="robots"
          content="index,follow"
        />

        <link
          rel="canonical"
          href={url}
        />

        {/* Open Graph */}
        <meta
          property="og:type"
          content="article"
        />
        <meta
          property="og:url"
          content={url}
        />
        <meta
          property="og:title"
          content={meta.title}
        />
        <meta
          property="og:description"
          content={meta.excerpt}
        />
        <meta
          property="og:image"
          content={socialImage}
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content={meta.title}
        />
        <meta
          name="twitter:description"
          content={meta.excerpt}
        />
        <meta
          name="twitter:image"
          content={socialImage}
        />

        {/* Performance */}
        <link
          rel="preload"
          as="image"
          href={heroSrc}
          type="image/webp"
        />

        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbLd)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(blogPostingLd)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqLd)}
        </script>
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
            What Your Indian Wedding Will Actually
            Cost in Atlanta (2026 Reality Check)
          </h1>

          <p className="text-lg mb-6">
            Planning an Indian wedding in Atlanta?
            Let’s cut through the confusion and give
            you the real numbers so you can make
            confident decisions—without crossing
            your fingers and hoping for the best.
            From planning{" "}
            <a
              href="/weddings"
              className="text-blue-600 underline"
            >
              South Asian weddings in Atlanta
            </a>
            , these are the kinds of ranges we use
            to help couples understand the scale of
            a multi-event celebration.
          </p>

          <div className="mb-8">
            <a
              href={clarityUrl}
              data-cal-link="eandp.events/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              onClick={trackBookingClick}
              className="inline-block px-6 py-3 rounded-lg bg-[#1f6feb] text-white font-semibold hover:opacity-90 transition"
            >
              Book a 30-Minute Strategy Call
            </a>
          </div>

          {/* Bottom line table */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            The Bottom Line: What Atlanta Couples
            Actually Invest
          </h2>

          <p className="text-lg mb-4">
            The following planning ranges illustrate
            what a multi-event Indian wedding weekend
            in Atlanta may cost. Actual proposals vary
            by venue, vendors, guest count, event
            count, selections, service charges, and
            applicable taxes.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-[#f0f4ff]">
                <tr>
                  <th className="p-3 font-semibold">
                    Guest Count
                  </th>
                  <th className="p-3 font-semibold">
                    Without Alcohol
                  </th>
                  <th className="p-3 font-semibold">
                    With Full Bar
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-semibold">
                    100 guests
                  </td>
                  <td className="p-3">
                    $75,000 – $110,000
                  </td>
                  <td className="p-3">
                    $85,000 – $125,000
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-3 font-semibold">
                    200 guests
                  </td>
                  <td className="p-3">
                    $145,000 – $210,000
                  </td>
                  <td className="p-3">
                    $165,000 – $235,000
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-3 font-semibold">
                    300 guests
                  </td>
                  <td className="p-3">
                    $220,000 – $300,000
                  </td>
                  <td className="p-3">
                    $250,000 – $340,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-[#555] mb-10">
            These are planning ranges, not universal
            Atlanta rates. The examples assume service
            charges in the general range of 22–25% and
            sales tax around 8–8.9% where applicable.
            Actual charges and tax treatment vary by
            venue, vendor, location, and contracted
            services. Rings, honeymoon costs, and guest
            accommodations are excluded.
          </p>

          {/* Inclusions / Exclusions */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4">
            What These Numbers Include (And What They
            Don’t)
          </h2>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            Included
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
            <li>
              3–4 events (Mehndi, Sangeet, Ceremony,
              Reception)
            </li>
            <li>
              Full-service venues or premium event
              spaces
            </li>
            <li>
              Professional décor, mandap, and floral
              design
            </li>
            <li>
              Complete catering with service staff
            </li>
            <li>
              Photography, videography, and
              entertainment
            </li>
            <li>
              All coordination and day-of management
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            Not Included
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-lg mb-8">
            <li>
              Wedding rings and jewelry purchases
            </li>
            <li>
              Honeymoon and travel expenses
            </li>
            <li>
              Guest room blocks and accommodations
            </li>
            <li>
              Gifts and favors for extended family
            </li>
          </ul>

          {/* F&B Reality */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            Atlanta Wedding Investment Breakdown
          </h2>

          <h3 className="text-xl font-semibold mt-2 mb-2">
            Food &amp; Beverage Reality (The Biggest
            Line Item)
          </h3>

          <p className="text-lg mb-4">
            For planning purposes, catering and food
            and beverage can consume roughly{" "}
            <strong>35–50%</strong> of the total
            wedding budget once applicable service
            charges and taxes are considered. The
            actual share depends heavily on the
            venue, caterer, menu, bar program, guest
            count, and number of events.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-[#f0f4ff]">
                <tr>
                  <th className="p-3 font-semibold">
                    Service Level
                  </th>
                  <th className="p-3 font-semibold">
                    Per Guest Cost
                  </th>
                  <th className="p-3 font-semibold">
                    Planning Assumption for Fees
                  </th>
                  <th className="p-3 font-semibold">
                    Illustrative Total
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-semibold">
                    Hotel Catering
                  </td>
                  <td className="p-3">
                    $75 – $180
                  </td>
                  <td className="p-3">
                    22–25% service charge + applicable
                    tax
                  </td>
                  <td className="p-3">
                    $85 – $240 per guest
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-3 font-semibold">
                    Premium Caterer
                  </td>
                  <td className="p-3">
                    $85 – $140
                  </td>
                  <td className="p-3">
                    20–25% service charge + applicable
                    tax
                  </td>
                  <td className="p-3">
                    $115 – $185 per guest
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-3 font-semibold">
                    Alcohol Package
                  </td>
                  <td className="p-3">
                    + $40 – $85
                  </td>
                  <td className="p-3">
                    22–25% service charge + applicable
                    tax
                  </td>
                  <td className="p-3">
                    + $55 – $115 per guest
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg mb-6">
            For additional national context, see{" "}
            <a
              href="https://fash.com/costs/indian-wedding-cost"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Fash: Indian wedding cost
            </a>
            . National estimates are useful for
            context, but your Atlanta proposals and
            contracts should drive the actual budget.
          </p>

          {/* Venue context */}
          <h3 className="text-xl font-semibold mt-6 mb-2">
            Atlanta Venue Cost Examples
          </h3>

          <p className="text-lg mb-6">
            For planning purposes, mid-tier banquet
            halls in the suburbs may land around{" "}
            <strong>$8,000–$20,000</strong> for an
            all-day rental, while upscale hotel
            ballrooms in Buckhead—such as{" "}
            <a
              href="https://www.intercontinentalatlanta.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              InterContinental
            </a>{" "}
            or{" "}
            <a
              href="https://www.thewhitleyhotel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              The Whitley
            </a>
            —can reach five figures, particularly
            when food-and-beverage minimums and other
            contracted requirements apply. Venue
            pricing, minimums, availability, and
            inclusions change, so current proposals
            should always be used for final budgeting.
          </p>

          {/* Essential Categories */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            Essential Investment Categories
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-[#f0f4ff]">
                <tr>
                  <th className="p-3 font-semibold">
                    Category
                  </th>
                  <th className="p-3 font-semibold">
                    Atlanta Planning Range
                  </th>
                  <th className="p-3 font-semibold">
                    What Drives the Cost
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-semibold">
                    Venue &amp; Space
                  </td>
                  <td className="p-3">
                    $15,000 – $45,000 / day
                  </td>
                  <td className="p-3">
                    Location, exclusivity, included
                    amenities
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-3 font-semibold">
                    Décor &amp; Mandap
                  </td>
                  <td className="p-3">
                    $15,000 – $40,000+
                  </td>
                  <td className="p-3">
                    Custom elements, floral density,
                    lighting
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-3 font-semibold">
                    Photography/Video
                  </td>
                  <td className="p-3">
                    $8,000 – $22,000
                  </td>
                  <td className="p-3">
                    Coverage days, team size,
                    deliverables
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-3 font-semibold">
                    Entertainment
                  </td>
                  <td className="p-3">
                    $4,000 – $20,000+
                  </td>
                  <td className="p-3">
                    Live music, DJ, dhol, sound
                    systems
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-3 font-semibold">
                    Planning
                  </td>
                  <td className="p-3">
                    $2,500 – $20,000+
                  </td>
                  <td className="p-3">
                    Full-service vs. day-of +
                    cultural fluency
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-3 font-semibold">
                    Hair &amp; Makeup
                  </td>
                  <td className="p-3">
                    $1,000 – $6,000
                  </td>
                  <td className="p-3">
                    Trials, multiple looks, bridal
                    party
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-3 font-semibold">
                    Transportation
                  </td>
                  <td className="p-3">
                    $1,500 – $5,000+
                  </td>
                  <td className="p-3">
                    Baraat, valet, shuttle plans
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-[#555] mb-8">
            These category figures are planning
            ranges, not quotes. Vendor pricing can
            change based on date, scope, experience,
            travel, labor, customization, and market
            conditions.
          </p>

          {/* Cultural Elements */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            Cultural Elements That Impact Your
            Investment
          </h2>

          <h3 className="text-xl font-semibold mt-2 mb-2">
            Religious Considerations
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
            <li>
              Havan and other open-flame ceremonies
              require advance coordination because
              venue policies and fire-safety
              requirements vary.
            </li>
            <li>
              Multi-priest rituals and
              muhurat-specific timing can affect
              venue hours, staffing, and associated
              costs.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-2 mb-2">
            Traditional Details
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
            <li>
              Baraat planning range: $800 – $1,500
              for horse/vehicle and PA needs
            </li>
            <li>
              Mandap customization and installation
              planning range: $8,500 – $15,000
            </li>
            <li>
              Classical musicians and dhol players
              can add both atmosphere and additional
              entertainment costs.
            </li>
          </ul>

          <h3
            id="venues-guide"
            className="text-xl font-semibold mt-2 mb-2"
          >
            Venue Compatibility Matters
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-lg mb-8">
            <li>
              Load-in access, open-flame policies,
              baraat logistics, and mandap-friendly
              spaces vary by property.
            </li>
            <li>
              Confirm those requirements before
              committing to a venue so the ceremony
              plan and venue contract work together.
            </li>
          </ul>

          {/* Sample Investment Plans */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            Sample Investment Plans
          </h2>

          <p className="text-lg mb-6">
            The following examples illustrate how a
            working budget might be structured. They
            are not quotes, and actual service
            charges, taxes, gratuities, and vendor
            costs depend on the contracts involved.
          </p>

          <h3 className="text-xl font-semibold mt-2 mb-3">
            Intimate Celebration (100 Guests, 3
            Events)
          </h3>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-[#f0f4ff]">
                <tr>
                  <th className="p-3 font-semibold">
                    Investment Area
                  </th>
                  <th className="p-3 font-semibold">
                    Illustrative Amount
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-3">
                    Core event costs
                  </td>
                  <td className="p-3">
                    $65,000
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">
                    Service charges (example: 23%)
                  </td>
                  <td className="p-3">
                    $15,000
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">
                    Sales tax (example: 8.5%)
                  </td>
                  <td className="p-3">
                    $5,500
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">
                    Tips (example: 15%)
                  </td>
                  <td className="p-3">
                    $13,000
                  </td>
                </tr>
                <tr className="border-t bg-[#fafafa]">
                  <td className="p-3 font-semibold">
                    Illustrative Total
                  </td>
                  <td className="p-3 font-semibold">
                    $99,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-2 mb-3">
            Traditional Scale (200 Guests, 4 Events)
          </h3>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-[#f0f4ff]">
                <tr>
                  <th className="p-3 font-semibold">
                    Investment Area
                  </th>
                  <th className="p-3 font-semibold">
                    Illustrative Amount
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-3">
                    Core event costs
                  </td>
                  <td className="p-3">
                    $135,000
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">
                    Service charges (example: 23%)
                  </td>
                  <td className="p-3">
                    $31,000
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">
                    Sales tax (example: 8.5%)
                  </td>
                  <td className="p-3">
                    $11,500
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">
                    Tips (example: 15%)
                  </td>
                  <td className="p-3">
                    $27,000
                  </td>
                </tr>
                <tr className="border-t bg-[#fafafa]">
                  <td className="p-3 font-semibold">
                    Illustrative Total
                  </td>
                  <td className="p-3 font-semibold">
                    $204,500
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-2 mb-3">
            Grand Celebration (300 Guests, 4 Events)
          </h3>

          <div className="overflow-x-auto mb-10">
            <table className="w-full text-left bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-[#f0f4ff]">
                <tr>
                  <th className="p-3 font-semibold">
                    Investment Area
                  </th>
                  <th className="p-3 font-semibold">
                    Illustrative Amount
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-3">
                    Core event costs
                  </td>
                  <td className="p-3">
                    $210,000
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">
                    Service charges (example: 23%)
                  </td>
                  <td className="p-3">
                    $48,000
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">
                    Sales tax (example: 8.5%)
                  </td>
                  <td className="p-3">
                    $18,000
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">
                    Tips (example: 15%)
                  </td>
                  <td className="p-3">
                    $41,000
                  </td>
                </tr>
                <tr className="border-t bg-[#fafafa]">
                  <td className="p-3 font-semibold">
                    Illustrative Total
                  </td>
                  <td className="p-3 font-semibold">
                    $317,000
                  </td>
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
              <strong>
                Consider a weekday event:
              </strong>{" "}
              Some venues price weekday dates
              differently from peak weekend dates.
              Compare current proposals rather than
              assuming a fixed discount.
            </li>

            <li>
              <strong>
                Re-use Your Mandap for the Reception:
              </strong>{" "}
              Repurpose the structure as a stage
              backdrop with refreshed drape or
              florals when the design and venue
              logistics allow it.
            </li>

            <li>
              <strong>
                Compare Buffet and Plated Service:
              </strong>{" "}
              Buffet service may reduce staffing or
              service costs in some situations, but
              the actual difference depends on the
              caterer, menu, guest count, and venue.
            </li>

            <li>
              <strong>
                Evaluate BYOB or Flexible Bar
                Policies:
              </strong>{" "}
              Where permitted, compare alcohol,
              corkage, staffing, licensing, and
              insurance requirements before deciding
              which service model is more economical.
            </li>

            <li>
              <strong>
                Bundle Hair and Makeup:
              </strong>{" "}
              Ask whether booking the same team
              across multiple events or for family
              members changes the per-person or
              package pricing.
            </li>
          </ul>

          {/* Spend vs Save */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            Where to Spend vs Save: Strategic Advice
          </h2>

          <p className="text-lg mb-6">
            Decide where to spend based on what
            matters most to you and your families.
            Photography, entertainment, food, décor,
            and guest experience can each carry
            different priorities from one wedding to
            another. Lower-priority items such as
            printed materials, specialty linens, or
            favors may offer opportunities to
            simplify. Strong coordination also helps
            teams reuse assets and avoid preventable
            costs across multiple events.
          </p>

          {/* Next Steps / CTAs */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            Your Next Steps
          </h2>

          <p className="text-lg mb-4">
            The difference between a wedding that
            flows and one that flusters? A guide who
            understands both your vision and
            Atlanta’s real numbers.
          </p>

          <div className="mt-4 p-6 bg-white rounded-xl shadow-md mb-10">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Ready to plan with clarity?
            </h3>

            <p className="mb-4">
              Schedule a strategy call and get a
              budget aligned with your goals—without
              compromising culture or experience.
            </p>

            <a
              href={clarityUrl}
              data-cal-link="eandp.events/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              onClick={trackBookingClick}
              className="inline-block px-6 py-3 rounded-lg bg-[#1f6feb] text-white font-semibold hover:opacity-90 transition"
            >
              Schedule Your 30-Minute Call
            </a>
          </div>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="text-2xl md:text-3xl font-semibold mt-10 mb-4"
            >
              Frequently Asked Questions
            </h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              How much should we budget for a
              200-guest Indian wedding in Atlanta?
            </h3>

            <p className="text-lg mb-4">
              For planning purposes, a 200-guest
              multi-event weekend may fall around{" "}
              <strong>$165,000–$235,000</strong>{" "}
              with a full bar based on the ranges in
              this guide. Actual costs vary by venue,
              event count, catering, décor,
              entertainment, service charges, taxes,
              and other selections.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              What percentage of our budget will go
              to catering?
            </h3>

            <p className="text-lg mb-4">
              For planning purposes, expect roughly{" "}
              <strong>35–50%</strong> for catering
              and food and beverage once applicable
              service charges and taxes are
              considered. The actual percentage
              depends on the venue, caterer, menu,
              bar program, guest count, and number
              of events.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Can we have traditional open-flame
              ceremonies at Atlanta venues?
            </h3>

            <p className="text-lg mb-4">
              Open-flame policies and fire-safety
              requirements vary by venue and
              ceremony setup. Confirm the venue’s
              current rules and any applicable
              permit, safety, or supervision
              requirements before finalizing plans
              for a havan or other open-flame
              ceremony.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              How does alcohol service impact costs?
            </h3>

            <p className="text-lg mb-8">
              Using the planning ranges in this
              guide, a full bar may add roughly{" "}
              <strong>$55–$115 per guest</strong>{" "}
              after applicable fees and taxes.
              Actual pricing depends on the venue,
              package, duration, selections,
              staffing, and service model.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              How can we manage costs without
              compromising culture?
            </h3>

            <p className="text-lg mb-8">
              Look for opportunities to reuse décor,
              negotiate F&amp;B minimums early,
              prioritize the elements that matter
              most to your families, and maintain a{" "}
              <strong>10–15% contingency</strong>{" "}
              for changes and unexpected costs.
            </p>
          </section>

          {/* Sources / Cross-links */}
          <div className="mt-8 text-base">
            <p className="mb-2 font-semibold">
              Keep exploring:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>
                <a
                  href="/weddings"
                  className="text-blue-600 underline"
                >
                  E&amp;P South Asian Weddings
                </a>
              </li>

              <li>
                <a
                  href="https://fash.com/costs/indian-wedding-cost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Fash: Indian Wedding Cost
                </a>
              </li>

              <li>
                <span className="text-[#666]">
                  Venue references:{" "}
                </span>

                <a
                  href="https://www.intercontinentalatlanta.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  InterContinental Buckhead
                </a>{" "}
                ·{" "}
                <a
                  href="https://www.thewhitleyhotel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  The Whitley (Buckhead)
                </a>
              </li>
            </ul>
          </div>

          <p className="text-base text-[#555] mt-8">
            Planning a South Asian celebration in
            Atlanta? Our team specializes in
            culturally informed wedding planning and
            coordination.{" "}
            <a
              href={clarityUrl}
              data-cal-link="eandp.events/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              onClick={trackBookingClick}
              className="text-blue-600 underline"
            >
              Let’s talk about your celebration and
              planning priorities.
            </a>
          </p>
        </div>
      </article>
    </>
  );
};

export default IndianWeddingCostAtlanta;