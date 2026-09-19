import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { getBlogMeta } from "@/lib/blogMeta";

const SLUG = "hidden-costs-diy-corporate-events";
const ABSOLUTE_ORIGIN = "https://eandp.events";

const HiddenCostsOfDIYCorporateEvents: React.FC = () => {
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
        "What types of corporate events do you specialize in?",
      answer:
        "Executive summits, product launches, team retreats, nonprofit fundraisers, and multicultural business celebrations. Each event is tailored to the organization's objectives and audience.",
    },
    {
      question:
        "How far in advance should we start planning?",
      answer:
        "For many corporate events, starting 3–6 months in advance provides useful planning time, although E&P Events can work with shorter timelines when the scope and availability allow.",
    },
    {
      question:
        "Do you work with companies outside Atlanta?",
      answer:
        "Yes. E&P Events can support events outside Atlanta, including programs in other markets, depending on the event's location, scope, and requirements.",
    },
    {
      question:
        "How does your pricing structure work?",
      answer:
        "E&P Events uses a transparent planning-fee structure so clients can understand the planning investment and scope of services from the beginning.",
    },
    {
      question:
        "What makes your approach different?",
      answer:
        "E&P Events combines strategic planning, cultural fluency, contingency planning, and collaborative coordination around each client's goals and audience.",
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
              alt="Corporate leaders managing a high-end Atlanta business event"
              className="w-full h-full object-cover"
              width={1280}
              height={720}
              loading="eager"
              decoding="async"
            />
          </div>

          {/* TITLE */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            The Hidden Costs of DIY Corporate Events
          </h1>

          {/* INTRO */}
          <p className="text-lg mb-6">
            You&apos;re staring at the budget for
            your upcoming leadership summit, and the
            temptation is real: &quot;How hard can it
            be to plan this ourselves?&quot;
          </p>

          <p className="text-lg mb-6">
            We understand the impulse. Removing a
            professional planning fee can look like
            an obvious place to reduce costs. But
            corporate event planning also consumes
            staff time, requires vendor and contract
            decisions, and creates operational risks
            that may not appear in the initial event
            budget.
          </p>

          <p className="text-lg mb-6">
            Those costs do not mean every
            internally planned event will fail. They
            do mean companies should account for
            more than venue, catering, and production
            invoices when deciding whether to manage
            a high-stakes event in-house.
          </p>

          {/* FINANCIAL COSTS */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            The Financial Reality Behind
            &quot;Cost Savings&quot;
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            When &quot;Savings&quot; Become Expenses
          </h3>

          <p className="text-lg mb-4">
            Some event expenses only become visible
            after planning is underway. Rush orders
            for forgotten signage, overtime for
            internal staff, contract changes,
            production additions, or last-minute
            logistical adjustments can all change
            the final cost.
          </p>

          <p className="text-lg mb-4">
            At E&amp;P Events, established vendor
            relationships and event-industry
            experience help us evaluate proposals,
            coordinate requirements, and identify
            potential issues before they become
            last-minute decisions.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Your Team&apos;s True Cost
          </h3>

          <p className="text-lg mb-4">
            When a marketing director, HR leader,
            executive assistant, or other employee
            takes on event coordination, planning
            becomes another responsibility competing
            with their primary work. Vendor calls,
            site visits, production decisions,
            attendee communications, and timeline
            management all require time.
          </p>

          <p className="text-lg mb-4">
            That opportunity cost is worth including
            in the planning decision. It&apos;s one
            reason companies partner with{" "}
            <a
              href="/corporate"
              className="text-blue-600 underline"
            >
              our corporate event planning team
            </a>{" "}
            when they want internal staff focused on
            their core responsibilities.
          </p>

          {/* STRATEGY */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Strategic Missteps That Can Undermine
            Success
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Misaligned Objectives, Missed
            Opportunities
          </h3>

          <p className="text-lg mb-4">
            Every corporate event should serve a
            larger purpose. Without clearly defined
            objectives, a well-produced gathering can
            still fall short of what leadership
            hoped to accomplish.
          </p>

          <p className="text-lg mb-4">
            We help clients define those objectives
            early—whether the priority is
            strengthening stakeholder relationships,
            launching an initiative, supporting team
            culture, or creating an experience around
            a specific business goal.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            The Vendor Maze
          </h3>

          <p className="text-lg mb-4">
            Vendor selection involves more than
            comparing prices. Scope, staffing,
            production requirements, cancellation
            terms, service expectations, and
            contingency provisions can all affect
            the final experience.
          </p>

          <p className="text-lg mb-4">
            An experienced event planner can help
            evaluate those details, coordinate
            vendors across disciplines, and identify
            contract or operational questions that
            an internal team may not encounter
            regularly.
          </p>

          {/* REPUTATION */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Reputational Risks You Can&apos;t Ignore
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Your Brand on Display
          </h3>

          <p className="text-lg mb-4">
            Corporate events are visible expressions
            of an organization&apos;s brand.
            Messaging, hospitality, accessibility,
            cultural awareness, and logistics all
            contribute to the way attendees
            experience the organization hosting the
            event.
          </p>

          <p className="text-lg mb-4">
            E&amp;P Events brings cultural
            intelligence into the planning process
            so guest experience and event decisions
            can account for the people and
            communities represented in the room.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Planning for the Unexpected
          </h3>

          <p className="text-lg mb-4">
            Technology can fail. VIP schedules can
            change. Weather can affect transportation
            or outdoor programming. Vendors can
            encounter delays. Professional planning
            cannot eliminate every problem, but it
            can establish contingency plans and
            decision-making processes before the
            pressure of event day.
          </p>

          <p className="text-lg mb-4">
            The goal is not to pretend problems never
            happen. It is to be prepared to respond
            without allowing every unexpected change
            to become a guest-facing disruption.
          </p>

          {/* ATLANTA */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Why Work With a Corporate Event Planner
            in Atlanta?
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Local Vendor and Venue Knowledge
          </h3>

          <p className="text-lg mb-4">
            An Atlanta-based planning team can bring
            local context to venue selection, vendor
            coordination, transportation,
            production, and other logistical
            decisions. E&amp;P Events works with
            vendors and event partners across the
            Atlanta market while coordinating each
            event around the client&apos;s specific
            requirements.
          </p>

          <p className="text-lg mb-4">
            <a
              href="/corporate"
              className="text-blue-600 underline"
            >
              Learn more about our corporate event
              services
            </a>{" "}
            and how E&amp;P Events approaches
            business gatherings in Atlanta and
            beyond.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Connecting Event Planning to Business
            Outcomes
          </h3>

          <p className="text-lg mb-4">
            We can help clients establish objectives
            and KPIs, align programming with those
            goals, and make intentional decisions
            about elements ranging from attendee
            experience to signage and stagecraft.
          </p>

          {/* E&P */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            The E&amp;P Events Approach
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Transparent Partnership from Day One
          </h3>

          <p className="text-lg mb-4">
            E&amp;P Events uses a flat-fee planning
            structure designed to give clients
            clarity around the planning investment
            and agreed scope of services from the
            beginning.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Cultural Intelligence That Matters
          </h3>

          <p className="text-lg mb-4">
            Whether you&apos;re hosting international
            stakeholders, celebrating a diverse
            team, or creating programming for
            multiple communities, cultural context
            can influence hospitality, communication,
            food, scheduling, and the overall guest
            experience.
          </p>

          <p className="text-lg mb-4">
            E&amp;P Events incorporates those
            considerations into the planning process
            rather than treating them as an
            afterthought.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            A Planning Process Built Around Your
            Goals
          </h3>

          <p className="text-lg mb-4">
            Corporate events vary widely in audience,
            purpose, scale, and complexity. Our
            planning process is built around the
            specific goals, stakeholders, and
            operational needs of each event rather
            than applying the same formula to every
            program.
          </p>

          {/* DECISION */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Your Next Strategic Decision
          </h2>

          <p className="text-lg mb-4">
            The question isn&apos;t simply whether
            your team can plan its own corporate
            event. It&apos;s whether managing the
            event internally is the best use of your
            team&apos;s time, expertise, and
            attention given the importance and
            complexity of the program.
          </p>

          <p className="text-lg mb-6">
            For high-stakes events, professional
            planning can add dedicated oversight for
            strategy, vendors, production,
            logistics, guest experience, and
            contingency planning while allowing
            internal teams to remain focused on
            their primary responsibilities.
          </p>

          {/* CTA */}
          <div className="mt-8 mb-12 p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Planning a corporate event in Atlanta?
            </h2>

            <p className="mb-4">
              Talk with E&amp;P Events about your
              objectives, event requirements, and
              the planning support your team needs.
            </p>

            <a
              href={consultationUrl}
              data-cal-link="eandp.events/corporate-b2b-15"
              data-cal-namespace="corporate-b2b-15"
              data-cal-config='{"layout":"month_view"}'
              onClick={trackBookingClick}
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

          {/* FAQ */}
          <section aria-labelledby="corporate-event-faq">
            <h2
              id="corporate-event-faq"
              className="text-2xl font-semibold mt-10 mb-6"
            >
              Corporate Event Planning FAQs
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
        </div>
      </article>
    </>
  );
};

export default HiddenCostsOfDIYCorporateEvents;