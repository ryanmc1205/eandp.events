import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { getBlogMeta } from "@/lib/blogMeta";
import { openCalModal } from "@/lib/calModal";

const SLUG = "what-does-a-corporate-event-planner-do";
const ABSOLUTE_ORIGIN = "https://eandp.events";

const WhatDoesACorporateEventPlannerDo: React.FC = () => {
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

  const faqItems = [
    {
      question:
        "How far in advance should we book a corporate event planner?",
      answer:
        "For many corporate events, beginning 3–6 months in advance provides useful planning time. Larger, multi-day, or production-heavy programs may benefit from 6–9 months or more. Actual lead time depends on scope, venue and vendor availability, guest count, and production requirements.",
    },
    {
      question:
        "Do corporate event planners integrate with internal teams?",
      answer:
        "Yes. E&P Events can coordinate with internal stakeholders such as HR, marketing, executive leadership, administrative teams, and other departments involved in the event.",
    },
    {
      question:
        "Can you handle virtual or hybrid events?",
      answer:
        "E&P Events can coordinate technology and production requirements for virtual or hybrid event components, including livestreaming and remote participation, depending on the program's scope and technical needs.",
    },
    {
      question:
        "Do you only work in Atlanta?",
      answer:
        "E&P Events is based in Atlanta and can support events in other markets depending on the location, scope, and requirements of the program.",
    },
  ];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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

        <script type="application/ld+json">
          {JSON.stringify(faqLd)}
        </script>
      </Helmet>

      <article className="bg-[#f7f7f2] pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-[#2a2a2a]">
          {/* HERO */}
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

          {/* TITLE */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            What Does a Corporate Event Planner
            Actually Do?
          </h1>

          {/* INTRO */}
          <p className="text-lg mb-6">
            <strong>Bottom Line Up Front:</strong>{" "}
            Corporate event planners coordinate the
            strategy, budget, vendors, production,
            logistics, technology, and execution
            behind a business event so internal
            leaders can stay focused on their people,
            message, and objectives.
          </p>

          {/* KEY TAKEAWAYS */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Key Takeaways
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-base mb-8">
            <li>
              Corporate event planners can serve as
              strategic execution partners, not just
              logistics coordinators.
            </li>

            <li>
              They help establish and manage budgets,
              vendor scopes, contracts, timelines,
              and production requirements.
            </li>

            <li>
              Local Atlanta knowledge can help with
              venue, vendor, transportation, and
              logistical decisions.
            </li>

            <li>
              Cultural intelligence can support more
              thoughtful experiences for diverse
              audiences.
            </li>

            <li>
              Contingency planning helps teams
              prepare for problems before event day.
            </li>
          </ul>

          {/* ROLE */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            The Real Role of a Corporate Event
            Planner
          </h2>

          <p className="mb-4 text-lg">
            A corporate event planner does much more
            than book venues and order catering. The
            role can include translating business
            objectives into an event plan,
            coordinating multiple vendors, managing
            timelines and budgets, overseeing guest
            logistics, and directing execution on
            event day.
          </p>

          <p className="mb-4 text-lg">
            At E&amp;P Events, we plan corporate
            gatherings including executive summits,
            client experiences, retreats, and other
            programs where detailed coordination and
            professional execution matter.
          </p>

          <p className="mb-4 text-lg">
            One useful way to think about the planner
            is as an operational lead for the event.
            The planner keeps timelines, budgets,
            vendors, production details, and
            contingency plans moving together while
            internal leaders remain focused on their
            teams and stakeholders.
          </p>

          {/* EVENT TYPES */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Types of Corporate Events a Planner Can
            Manage
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-base mb-8">
            <li>
              <strong>
                Executive Conferences &amp; Summits:
              </strong>{" "}
              Multi-day or single-day programs
              designed around leadership,
              communication, education, and
              stakeholder engagement.
            </li>

            <li>
              <strong>Product Launches:</strong>{" "}
              Brand-focused events that introduce a
              product, service, or initiative to a
              defined audience.
            </li>

            <li>
              <strong>
                Client Appreciation Events:
              </strong>{" "}
              Experiences designed to strengthen
              relationships with clients, partners,
              or other stakeholders.
            </li>

            <li>
              <strong>Executive Retreats:</strong>{" "}
              Focused gatherings that may combine
              meetings, strategy sessions,
              hospitality, and team experiences.
            </li>

            <li>
              <strong>
                Team Building &amp; Recognition:
              </strong>{" "}
              Programs designed around employee
              connection, recognition, culture, or
              organizational milestones.
            </li>
          </ul>

          {/* PROCESS */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            What Does the Corporate Event Planning
            Process Include?
          </h2>

          <p className="mb-3 text-lg">
            <strong>Foundation Phase:</strong> The
            process starts by defining objectives,
            stakeholders, audience, scope, and what
            success should look like.
          </p>

          <p className="mb-3 text-lg">
            <strong>Budget Planning:</strong> A
            planner can build and manage an event
            budget, compare proposals, track
            commitments, and help clients understand
            where event dollars are being allocated.
          </p>

          <p className="mb-3 text-lg">
            <strong>
              Venue &amp; Vendor Coordination:
            </strong>{" "}
            This can include venue sourcing,
            proposal review, catering, AV,
            entertainment, rentals, transportation,
            staffing, and other partners required
            for the program.
          </p>

          <p className="mb-3 text-lg">
            <strong>Brand Alignment:</strong> Event
            elements such as signage, staging,
            presentations, décor, and attendee
            communications can be coordinated around
            the organization&apos;s brand and event
            objectives.
          </p>

          <p className="mb-3 text-lg">
            <strong>
              Timeline &amp; Production Management:
            </strong>{" "}
            The planner develops working timelines,
            coordinates vendor schedules, manages
            dependencies, and helps keep the event
            moving according to plan.
          </p>

          {/* TECH */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Technology &amp; Guest Experience
          </h2>

          <p className="mb-4 text-lg">
            Corporate events often depend on
            technology. Depending on the program,
            planning may include registration
            platforms, audiovisual production,
            presentations, livestreaming, virtual
            participation, or hybrid-event
            logistics.
          </p>

          <p className="mb-4 text-lg">
            Guest experience begins before attendees
            arrive. Invitations, registration, RSVP
            management, dietary requirements,
            transportation, hotel coordination,
            accessibility, and on-site communication
            can all be part of the planning process.
          </p>

          {/* ATLANTA */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Why Atlanta Expertise Matters
          </h2>

          <p className="mb-4 text-lg">
            Local knowledge can make planning more
            efficient. An Atlanta-based planner can
            bring context about venues,
            transportation patterns, vendor options,
            production logistics, and the practical
            considerations involved in hosting
            attendees in the city.
          </p>

          <p className="mb-4 text-lg">
            That local context is especially useful
            when coordinating guests arriving from
            outside Atlanta or evaluating multiple
            venues and vendor teams across the metro
            area.
          </p>

          {/* CORPORATE VS WEDDINGS */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Corporate Event Planning vs. Wedding
            Planning
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-base mb-8">
            <li>
              <strong>Corporate Events:</strong>{" "}
              Typically center on organizational
              objectives, stakeholder engagement,
              communication, employee experience, or
              business relationships.
            </li>

            <li>
              <strong>Weddings:</strong> Center on
              the couple, their families, traditions,
              hospitality, and the personal meaning
              of the celebration.
            </li>
          </ul>

          <p className="mb-4 text-lg">
            E&amp;P Events works across both
            corporate events and culturally rich
            South Asian weddings. While the
            objectives differ, both require detailed
            logistics, vendor coordination,
            hospitality, and an understanding of the
            people the event is designed to serve.
          </p>

          {/* E&P */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            The E&amp;P Events Approach
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-base mb-8">
            <li>
              <strong>
                Transparent Flat-Fee Pricing:
              </strong>{" "}
              A clear planning-fee structure designed
              to give clients visibility into the
              planning investment and agreed scope.
            </li>

            <li>
              <strong>Cultural Intelligence:</strong>{" "}
              Cultural context and guest experience
              are considered throughout the planning
              process.
            </li>

            <li>
              <strong>
                Contingency Planning:
              </strong>{" "}
              Potential disruptions are considered
              in advance so the event team has a
              framework for responding when
              circumstances change.
            </li>

            <li>
              <strong>
                Strategic Partnership:
              </strong>{" "}
              Planning decisions are made in the
              context of the client&apos;s goals,
              audience, brand, and operational
              requirements.{" "}
              <a
                href="/corporate#testimonials"
                className="text-blue-600 underline"
              >
                Read what our clients say.
              </a>
            </li>
          </ul>

          {/* FAQ */}
          <section aria-labelledby="corporate-planner-faq">
            <h2
              id="corporate-planner-faq"
              className="text-2xl font-semibold mt-10 mb-6"
            >
              Common Questions About Corporate Event
              Planning
            </h2>

            <div className="space-y-6">
              {faqItems.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold mb-2">
                    {item.question}
                  </h3>

                  <p className="text-base">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-12 p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Planning a corporate event?
            </h2>

            <p className="mb-4">
              Talk with E&amp;P Events about your
              objectives, event requirements, and
              the planning support your team needs.
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

            <p className="mt-4 text-sm">
              Or{" "}
              <a
                href="/corporate"
                className="text-blue-600 underline"
              >
                explore our corporate event planning
                services
              </a>
              .
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default WhatDoesACorporateEventPlannerDo;