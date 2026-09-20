import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { getBlogMeta } from "@/lib/blogMeta";
import { openCalModal } from "@/lib/calModal";

const SLUG =
  "why-smart-atlanta-companies-hire-event-planners";

const ABSOLUTE_ORIGIN = "https://eandp.events";

const WhyHireCorporateEventPlannerAtlanta: React.FC =
  () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const meta = getBlogMeta(SLUG);

    const url = `${ABSOLUTE_ORIGIN}/blog/${meta.slug}`;

    const heroSrc = meta.image;

    const socialImage = heroSrc.startsWith("http")
      ? heroSrc
      : `${ABSOLUTE_ORIGIN}${heroSrc}`;

    const consultationUrl =
      "https://cal.com/eandp.events/corporate-b2b-15";

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
        booking_type: "corporate_consultation",
      });
    };

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

          <link
            rel="preload"
            as="image"
            href={heroSrc}
            type="image/webp"
          />

          <script type="application/ld+json">
            {JSON.stringify(breadcrumbLd)}
          </script>

          <script type="application/ld+json">
            {JSON.stringify(blogPostingLd)}
          </script>
        </Helmet>

        <article className="bg-[#f7f7f2] pt-28 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-[#2a2a2a]">
            {/* HERO */}
            <div className="w-full aspect-[16/9] overflow-hidden rounded-xl shadow-lg mb-10">
              <img
                src={heroSrc}
                alt="Corporate team evaluating event strategy with a planner in Atlanta"
                className="w-full h-full object-cover"
                width={1280}
                height={720}
                loading="eager"
                decoding="async"
              />
            </div>

            {/* TITLE */}
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Why Smart Atlanta Companies Choose
              Corporate Event Planners for High-Stakes
              Events
            </h1>

            {/* INTRO */}
            <p className="text-lg mb-6">
              Corporate events aren&apos;t just
              calendar fillers—they&apos;re
              high-visibility touchpoints for your
              brand, leadership, and culture. Whether
              it&apos;s an investor reception,
              leadership summit, or hybrid client
              showcase, expectations are high. So is
              the potential for missteps.
            </p>

            <p className="text-lg mb-6">
              Many Atlanta companies still try to
              manage these events in-house. It can
              seem efficient on paper. But what
              begins as a lean initiative can turn
              into a pressure cooker, with costs that
              extend beyond the event budget into
              staff time, brand experience, and
              missed opportunities. We explore those
              tradeoffs further in{" "}
              <a
                href="/blog/hidden-costs-diy-corporate-events"
                className="text-blue-600 underline"
              >
                our guide to the hidden costs of DIY
                corporate events
              </a>
              .
            </p>

            <p className="text-lg mb-6">
              At E&amp;P Events, our experience with
              high-stakes corporate events has
              reinforced a consistent lesson:
              execution matters, but so do the
              strategic decisions made long before
              guests arrive.
            </p>

            {/* SECTION 1 */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">
              1. Strategic Objectives Fall Through
              the Cracks
            </h2>

            <p className="text-lg mb-4">
              Corporate events should be aligned with
              your broader business strategy. Without
              intentional planning, teams can lose
              sight of the message, audience, or
              business outcome the event is supposed
              to support. Without clear KPIs,
              post-event reporting can become
              guesswork.
            </p>

            <p className="text-lg mb-4">
              A strategic planner helps establish
              that alignment from the start, making
              sure event decisions reinforce the
              outcomes your leadership team cares
              about most.
            </p>

            {/* SECTION 2 */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">
              2. Budget Oversight Becomes a Hidden
              Liability
            </h2>

            <p className="text-lg mb-4">
              Even with a solid budget in place,
              internal teams can encounter unexpected
              fees, inefficient spending, and vendor
              decisions that are difficult to
              evaluate without event-industry
              context. Those issues become harder to
              manage when contracts, production
              requirements, and changing guest needs
              begin overlapping.
            </p>

            <p className="text-lg mb-4">
              At E&amp;P Events, our flat-fee pricing
              and proactive vendor coordination are
              designed to give clients greater
              visibility into event spending and the
              decisions behind it.
            </p>

            {/* SECTION 3 */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">
              3. Vendor Missteps Can Erode
              Credibility
            </h2>

            <p className="text-lg mb-4">
              Internal teams may not have the time or
              event-industry context to evaluate
              every vendor in depth. AV performance,
              catering execution, production
              schedules, staffing requirements, and
              contract terms can all affect the guest
              experience.
            </p>

            <p className="text-lg mb-4">
              Established vendor relationships and a
              structured due-diligence process help
              identify potential problems earlier,
              when there is still time to address
              them.
            </p>

            {/* SECTION 4 */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">
              4. Internal Teams Get Stretched
            </h2>

            <p className="text-lg mb-4">
              Event coordination isn&apos;t a side
              task. When HR, marketing, executive
              assistants, or other internal teams
              absorb event planning on top of their
              primary responsibilities, both sets of
              priorities compete for the same time
              and attention.
            </p>

            <p className="text-lg mb-4">
              A dedicated planner can relieve that
              pressure, allowing your people to focus
              on the work they were hired to lead
              while an event team handles the
              complexity behind the scenes. Learn
              more about{" "}
              <a
                href="/corporate"
                className="text-blue-600 underline"
              >
                E&amp;P Events&apos; corporate event
                planning services
              </a>
              .
            </p>

            {/* SECTION 5 */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">
              5. Executional Mistakes Can Damage
              Trust
            </h2>

            <p className="text-lg mb-4">
              At high-stakes events, seemingly small
              problems can become highly visible. A
              technical failure during a keynote, an
              awkward transition, or a cultural
              miscue can distract from the message
              the event was designed to deliver.
            </p>

            <p className="text-lg mb-4">
              E&amp;P Events approaches execution
              with contingency planning, detailed
              coordination, and cultural fluency so
              the event team is prepared to respond
              when circumstances change.
            </p>

            {/* SECTION 6 */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">
              6. You Miss the Strategic Lift a
              Planner Can Provide
            </h2>

            <p className="text-lg mb-4">
              Event planning can extend beyond
              logistics. The planning process can
              connect event decisions to business
              goals, establish meaningful KPIs, and
              create a framework for evaluating what
              worked after the event.
            </p>

            <p className="text-lg mb-4">
              That makes the event more useful as a
              source of insight for future programs,
              rather than treating successful
              execution as the only measure of
              success.
            </p>

            {/* WHY E&P */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Why Atlanta Companies Choose E&amp;P
              Events
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-base mb-8">
              <li>
                <strong>
                  Strategic Planning, Not Just
                  Logistics:
                </strong>{" "}
                From vision through execution, your
                objectives remain part of the
                planning process.
              </li>

              <li>
                <strong>
                  Calm Leadership in High-Stakes
                  Moments:
                </strong>{" "}
                Detailed contingency planning and
                cultural fluency help the team
                navigate complex event environments.
              </li>

              <li>
                <strong>
                  Flat-Fee Pricing and
                  Transparency:
                </strong>{" "}
                A clear planning-fee structure helps
                clients understand the investment
                without relying on percentage-based
                planning fees.
              </li>
            </ul>

            {/* CONCLUSION */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Choose Strategy Over Stress
            </h2>

            <p className="text-lg mb-4">
              Corporate events are often expected to
              do more than create a memorable
              experience. They may need to support
              relationships, communicate a message,
              reinforce culture, or advance a
              business objective. Achieving those
              outcomes starts well before event day.
            </p>

            <p className="text-lg mb-6">
              Bringing in an experienced corporate
              event planner gives your internal team
              additional planning capacity while
              creating a dedicated layer of
              oversight for vendors, logistics,
              production, guest experience, and
              contingency planning.
            </p>

            {/* CTA */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                Planning a high-stakes corporate
                event in Atlanta?
              </h2>

              <p className="mb-4">
                Talk with E&amp;P Events about your
                goals, event requirements, and the
                planning support your team needs.
              </p>

              <a
                href={consultationUrl}
                onClick={(event) => {
                  trackBookingClick();

                  if (openCalModal("corporate-b2b-15")) {
                    event.preventDefault();
                  }
                }}
                className="inline-block px-6 py-3 rounded-lg bg-[#1f6feb] text-white font-semibold hover:opacity-90 transition"
              >
                Book a Corporate Consultation
              </a>
            </div>
          </div>
        </article>
      </>
    );
  };

export default WhyHireCorporateEventPlannerAtlanta;