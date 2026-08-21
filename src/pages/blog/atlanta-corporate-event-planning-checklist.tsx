import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const AtlantaCorporateEventPlanningChecklist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- SEO Meta ---
  const url = "https://eandp.events/blog/atlanta-corporate-event-planning-checklist";
  const title =
    "Atlanta Corporate Event Planning Checklist: The Executive Guide to Excellence | E&P Events";
  const description =
    "A calm, comprehensive blueprint for Atlanta corporate events: strategy, budgeting, vendors, permits, logistics, engagement tech, cultural intelligence, crisis-proof execution, and ROI follow-up.";
  const heroSrc = "/lovable-uploads/atlanta-corporate-event-planning-mastery.webp";
  const ogImage =
    "https://eandp.events/lovable-uploads/atlanta-corporate-event-planning-mastery-og.png";

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://eandp.events/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://eandp.events/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Atlanta Corporate Event Planning Checklist: The Executive Guide to Excellence",
        item: url,
      },
    ],
  };

  // Evergreen: omit publish/modified dates to avoid dating the piece
  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Atlanta Corporate Event Planning Checklist: The Executive Guide to Excellence",
    description,
    image: [`https://eandp.events${heroSrc.replace(/\s/g, "%20")}`],
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "E&P Events" },
    publisher: {
      "@type": "Organization",
      name: "E&P Events",
      logo: { "@type": "ImageObject", url: ogImage },
    },
    articleSection: "Corporate Events",
    about: [
      "Corporate Event Planning",
      "Atlanta Venues",
      "Vendor Management",
      "Event Permits",
      "Hybrid Events",
      "AI Personalization",
      "Sustainability",
      "ROI Measurement",
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
              alt="Executive team and event planner mapping a corporate event in Atlanta"
              className="w-full h-full object-cover"
              width={1280}
              height={720}
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Title */}
         <h1 className="text-3xl md:text-5xl font-bold mb-6">
Atlanta Corporate Event Planning Checklist: The Executive Guide to Excellence
</h1>
<p className="text-lg mb-8">
Delivering excellence through strategic planning, cultural intelligence, and crisis-proof execution. Learn more about our full range of services on our {" "}
<a href="https://eandp.events/corporate" className="text-blue-600 underline">Corporate Events page</a>.
</p>

          {/* Foundation */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            The Foundation: Why Atlanta Corporate Events Demand Mastery
          </h2>
          <p className="text-lg mb-4">
            In Atlanta&apos;s dynamic business landscape—where Fortune 500 headquarters meet vibrant cultural
            diversity—corporate events aren&apos;t just gatherings. They&apos;re strategic investments that drive
            measurable outcomes. With the global events industry valued at{" "}
            <a
              href="https://www.meetingmentormag.com/june-2023/global-event-industry-tops-1-6-trillion/"
              target="_blank"
              rel="noopener"
              className="text-blue-600 underline"
            >
              approximately $1.6 trillion
            </a>
            , your Atlanta event is an opportunity to capture share while building meaningful connections in one of
            America&apos;s premier business hubs. Growth forecasts predict{" "}
            <a
              href="https://www.prnewswire.com/news-releases/events-industry-market-to-grow-by-usd-1-07-trillion-2025-2029-driven-by-increased-corporate-events-report-highlights-ai-driven-market-transformation---technavio-302358595.html"
              target="_blank"
              rel="noopener"
              className="text-blue-600 underline"
            >
              another trillion dollars in incremental expansion
            </a>
            {" "}this decade.
          </p>
          <p className="text-lg mb-6">
            The reality: industry studies consistently show strong commercial impact from live experiences—many
            report that a large majority of attendees are more likely to purchase after a high-quality event. See
            representative experiential stats from{" "}
            <a
              href="https://learn.g2.com/experiential-marketing-statistics"
              target="_blank"
              rel="noopener"
              className="text-blue-600 underline"
            >
              G2
            </a>{" "}
            and Gen Z trust insights from{" "}
            <a
              href="https://www.freeman.com/about/press/new-freeman-gen-z-report-reveals-what-younger-audiences-need-from-events/"
              target="_blank"
              rel="noopener"
              className="text-blue-600 underline"
            >
              Freeman
            </a>
            .
          </p>

          {/* 1. Strategy */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            1. Strategic Foundation: Define Your Purpose with Precision
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-2">Business Alignment First</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
            <li>
              <strong>Lead Generation:</strong> e.g., 50 qualified prospects, 25 C-suite meetings.
            </li>
            <li>
              <strong>Employee Engagement:</strong> 90% satisfaction or a 40% rise in cross-department collaboration.
            </li>
            <li>
              <strong>Brand Positioning:</strong> Thought-leadership via strategic speakers and venue selection.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Audience Intelligence</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
            <li>
              <strong>Executive Audiences:</strong> Sophisticated experiences at venues like the Four Seasons or Ellis
              Hotel.
            </li>
            <li>
              <strong>Multi-Cultural Considerations:</strong> Inclusive menus (halal, kosher, plant-based).
            </li>
            <li>
              <strong>Hybrid Expectations:</strong> Most planners now incorporate virtual options; Atlanta attendees
              expect flexibility.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Success Metrics That Matter</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-8">
            <li>Attendance conversion (registered vs. actual).</li>
            <li>Engagement depth (app interactions, session dwell time).</li>
            <li>Business impact (leads, deals, retention).</li>
            <li>Net Promoter Score above 9.</li>
          </ul>

          {/* 2. Budget */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            2. Budget Mastery: Transparency Meets Strategic Investment
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-2">The Reality Check</h3>
          <p className="text-lg mb-4">
            Event costs are rising faster than budgets—making every dollar crucial. This margin compression demands
            disciplined, strategic decisions. For benchmarks on virtual and hybrid growth that impact budgets, see{" "}
            <a
              href="https://www.cvent.com/en/blog/events/event-statistics"
              target="_blank"
              rel="noopener"
              className="text-blue-600 underline"
            >
              Cvent’s event statistics
            </a>
            .
          </p>
          <p className="text-lg mb-6">
            For a breakdown of where budgets most often go off track, explore the{" "}
            <a href="https://eandp.events/blog/hidden-costs-diy-corporate-events" className="text-blue-600 underline">
              hidden costs of DIY corporate events
            </a>
            .
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Budget Architecture</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
            <li>
              Venue &amp; catering: <span className="font-semibold">40–50%</span>
            </li>
            <li>
              Technology &amp; A/V: <span className="font-semibold">15–20%</span>
            </li>
            <li>
              Speakers &amp; entertainment: <span className="font-semibold">10–15%</span>
            </li>
            <li>
              Marketing &amp; materials: <span className="font-semibold">5–10%</span>
            </li>
            <li>
              Contingency fund: <span className="font-semibold">10%</span> (non-negotiable)
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Transparent Pricing Strategy</h3>
          <p className="text-lg mb-6">
            Favor flat-fee structures and milestone-based payments to eliminate surprise markups and give stakeholders
            clean projections.
          </p>

          {/* 3. Timeline */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            3. Timeline Excellence: The 6-to-12-Month Mastery Path
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-2">Phase 1: Strategic Foundation (6–12 Months Out)</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
            <li>Lock in venue; prime Atlanta locations book early.</li>
            <li>Secure hotel blocks near the venue.</li>
            <li>Begin alcohol permit applications if needed.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Phase 2: Vendor Orchestration (3–6 Months Out)</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
            <li>Contract premium caterers with inclusive menu capabilities.</li>
            <li>Lock in an A/V partner with documented backups.</li>
            <li>Secure keynote speakers and entertainment.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Phase 3: Experience Design (1–3 Months Out)</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
            <li>Finalize hybrid tech and run production tests.</li>
            <li>Complete venue walk-throughs with vendors.</li>
            <li>Launch registration and promotional campaigns.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Phase 4: Flawless Execution (Final Weeks)</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-8">
            <li>Hold rehearsals including crisis scenarios.</li>
            <li>Distribute day-of schedules and escalation paths.</li>
            <li>Confirm weather contingencies and backup power.</li>
          </ul>

          {/* 4. Venues & Vendors */}
         <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">4. Atlanta-Specific Venue and Vendor Excellence</h2>
<ul className="list-disc pl-6 space-y-2 text-lg mb-4">
<li>
<strong><a href="https://www.gwcca.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Georgia World Congress Center</a>:</strong> Large-scale conferences (500+).
</li>
<li>
<strong><a href="https://www.fourseasons.com/atlanta/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Four Seasons Atlanta</a>:</strong> Executive retreats and VIP client events.
</li>
<li>
<strong><a href="https://310studiosatl.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">310 Studios ATL</a>:</strong> Industrial-chic corporate celebrations.
</li>
<li>
<strong><a href="https://www.ellishotel.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Ellis Hotel</a>:</strong> Boutique luxury for intimate C-suite gatherings.
</li>
</ul>
          <h3 className="text-xl font-semibold mt-6 mb-2">Vendor Vetting Process</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
            <li>Review portfolios for comparable corporate work.</li>
            <li>Verify insurance and venue requirements.</li>
            <li>Confirm crisis protocols and backup resources.</li>
            <li>Prioritize cultural competency and inclusive service.</li>
          </ul>

          <p className="text-lg mb-8">
            If you’re weighing whether to manage these relationships internally or outsource, here’s a clear breakdown
            of{" "}
            <a
              href="https://eandp.events/blog/what-does-a-corporate-event-planner-do"
              className="text-blue-600 underline"
            >
              what a corporate event planner actually does
            </a>
            .
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Communication Cadence</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-8">
            <li>Initial planning: 6–8 weeks out</li>
            <li>Mid-point check: 2–3 weeks out</li>
            <li>Final confirmation: 1 week prior</li>
            <li>Day-of: Real-time communication protocols</li>
          </ul>

          {/* 5. Permits & Compliance */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            5. Navigating Atlanta&apos;s Regulatory Landscape
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-2">Permit Requirements Made Simple</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
            <li>
              <strong>Alcohol Service:</strong> Required outside licensed venues; start applications ~90 days ahead.
              Review the City’s{" "}
              <a
                href="https://www.atlantaga.gov/doing-business/licenses-permits"
                target="_blank"
                rel="noopener"
                className="text-blue-600 underline"
              >
                Licenses &amp; Permits
              </a>{" "}
              and the Mayor’s Office of Special Events{" "}
              <a
                href="https://www.atlantaga.gov/government/mayor-s-office/executive-offices/office-of-special-events/does-my-event-require-a-permit"
                target="_blank"
                rel="noopener"
                className="text-blue-600 underline"
              >
                event permit guidance
              </a>
              .
            </li>
            <li>
              <strong>Large Gatherings:</strong> Assembly/festival permits may apply based on headcount and location.
              Start with the{" "}
              <a
                href="https://www.atlantaga.gov/government/mayor-s-office/executive-offices/office-of-special-events"
                target="_blank"
                rel="noopener"
                className="text-blue-600 underline"
              >
                Office of Special Events
              </a>
              .
            </li>
            <li>
              <strong>ADA Compliance:</strong> Confirm wheelchair access, parking, restrooms, and consider assistive
              listening. See{" "}
              <a
                href="https://www.ada.gov/resources/event-planning-guide/"
                target="_blank"
                rel="noopener"
                className="text-blue-600 underline"
              >
                ADA.gov’s event planning guidance
              </a>
              .
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Insurance Excellence</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-8">
            <li>General liability</li>
            <li>Alcohol liability</li>
            <li>Property damage</li>
            <li>Weather-related cancellations</li>
          </ul>

          {/* 6. Logistics */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            6. Logistics Mastery: Conquering Atlanta&apos;s Unique Challenges
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-8">
            <li>
              <strong>Traffic Strategy:</strong> Avoid 7–9 AM and 4–7 PM; reserve parking/valet; share real-time
              updates.
            </li>
            <li>
              <strong>Transportation:</strong> Leverage{" "}
              <a href="https://itsmarta.com" target="_blank" rel="noopener" className="text-blue-600 underline">
                MARTA
              </a>{" "}
              for downtown; arrange airport shuttles (20–30 minutes from{" "}
              <a href="https://www.atl.com" target="_blank" rel="noopener" className="text-blue-600 underline">
                Hartsfield-Jackson Atlanta International Airport
              </a>
              ); coordinate group transit.
            </li>
            <li>
              <strong>Weather Contingency:</strong> Prepare for summer storms and rare winter ice; plan indoor/tented
              backups.
            </li>
          </ul>

          {/* 7. Crisis-Proof */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            7. Crisis-Proof Execution: Your Competitive Advantage
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
            <li>
              <strong>Risk Scenarios:</strong> Vendor no-shows, severe weather, tech failures.
            </li>
            <li>
              <strong>Backup Systems:</strong> Alternate caterers, on-site backup A/V, portable PA, Wi-Fi boosters,
              paper check-ins.
            </li>
            <li>
              <strong>Crisis Team:</strong> Assign a coordinator; establish escalation channels; stock first-aid and
              essentials.
            </li>
          </ul>

          {/* 8. Engagement */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            8. Engagement Trends: Technology Meets Human Connection
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-8">
            <li>
              <strong>Hybrid Integration:</strong> Professional streaming, interactive apps, live polling. For market
              sizing and trend context, see{" "}
              <a
                href="https://www.cvent.com/en/blog/events/event-statistics"
                target="_blank"
                rel="noopener"
                className="text-blue-600 underline"
              >
                Cvent’s data roundup
              </a>
              .
            </li>
            <li>
              <strong>AI Personalization:</strong> Smart matchmaking, dynamic agendas, predictive networking.
            </li>
            <li>
              <strong>Immersive Design:</strong> Gamification, experiential booths, interactive displays.
            </li>
            <li>
              <strong>Sustainability:</strong> Digital-first materials, local sourcing, composting, carbon offsetting.
            </li>
          </ul>

          {/* 9. Cultural Intelligence */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            9. Cultural Intelligence: Honoring Atlanta&apos;s Diversity
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-8">
            <li>
              <strong>Inclusive Menus:</strong> Halal, kosher, vegan, and Southern fusion with clear allergen labels.
            </li>
            <li>
              <strong>Programming Diversity:</strong> Reflect Atlanta&apos;s demographics in speakers; respect cultural
              holidays; integrate local art/music.
            </li>
            <li>
              <strong>Accessibility:</strong> Captioning, interpretation, inclusive networking formats (see{" "}
              <a
                href="https://www.ada.gov/resources/event-planning-guide/"
                target="_blank"
                rel="noopener"
                className="text-blue-600 underline"
              >
                ADA.gov guide
              </a>
              ).
            </li>
          </ul>

          {/* 10. ROI */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            10. ROI Measurement and Strategic Follow-Up
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-2">Metrics That Matter to Executives</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
            <li>Attendance conversion, engagement scores, social reach, lead quality.</li>
            <li>Pipeline acceleration, retention, brand perception, customer lifetime value.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Post-Event Excellence</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
            <li>
              <strong>24–48 Hours:</strong> Thank-yous, highlights, surveys.
            </li>
            <li>
              <strong>Within 1 Week:</strong> Team retrospective, analyze data, document learnings.
            </li>
            <li>
              <strong>Momentum:</strong> Share media, publish case studies, host follow-ups.
            </li>
          </ul>

          {/* 11. Benchmarks */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            11. Atlanta Market Intelligence: Benchmarks &amp; Expectations
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-8">
            <li>
              The business events sector continues to expand; long-range forecasts from market analysts like Technavio
              expect robust gains (e.g.,{" "}
              <a
                href="https://www.prnewswire.com/news-releases/events-industry-market-to-grow-by-usd-1-07-trillion-2025-2029-driven-by-increased-corporate-events-report-highlights-ai-driven-market-transformation---technavio-302358595.html"
                target="_blank"
                rel="noopener"
                className="text-blue-600 underline"
              >
                projected $1.07T additional growth
              </a>
              ).
            </li>
            <li>
              Hybrid and AI tools are now standard; most events use dedicated apps and touchless payments (see{" "}
              <a
                href="https://www.cvent.com/en/blog/events/event-statistics"
                target="_blank"
                rel="noopener"
                className="text-blue-600 underline"
              >
                Cvent’s data
              </a>
              ).
            </li>
            <li>
              Attendees prioritize personalization, sustainability, networking, and flexible participation; Gen Z shows
              significant trust lift from in-person experiences ({" "}
              <a
                href="https://www.freeman.com/about/press/new-freeman-gen-z-report-reveals-what-younger-audiences-need-from-events/"
                target="_blank"
                rel="noopener"
                className="text-blue-600 underline"
              >
                Freeman report
              </a>
              ).
            </li>
          </ul>

          {/* Closing */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            Your Path to Atlanta Event Excellence
          </h2>
          <p className="text-lg mb-4">
            Executing a flawless corporate event in Atlanta requires more than logistics—it demands strategic thinking,
            cultural intelligence, and crisis-proof planning. By following this framework, you&apos;re not just
            organizing an event; you&apos;re creating a strategic business asset that drives measurable results.
          </p>
          <p className="text-lg mb-4">
            Many companies discover that the smartest move is partnering with experts—here’s why{" "}
            <a
              href="https://eandp.events/blog/why-smart-atlanta-companies-hire-event-planners"
              className="text-blue-600 underline"
            >
              Atlanta businesses hire professional event planners
            </a>
            .
          </p>

          {/* CTA */}
          <div className="mt-10 p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Ready to elevate your next event?</h3>
            <p className="mb-4">
              Choose strategy over stress. Protect your vision, brand, and team with calm, crisis-proof execution.
            </p>
            <a
              href="https://cal.com/eandp.events/corporate-b2b-15"
              className="inline-block px-6 py-3 rounded-lg bg-[#1f6feb] text-white font-semibold hover:opacity-90 transition"
            >
              Book a Consultation
            </a>
          </div>

          {/* Cross-links */}
          <div className="mt-12 text-base">
            <p className="mb-2 font-semibold">Keep exploring:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <a href="https://eandp.events/blog/hidden-costs-diy-corporate-events" className="text-blue-600 underline">
                  Hidden Costs of DIY Corporate Events
                </a>
              </li>
              <li>
                <a href="https://eandp.events/blog/what-does-a-corporate-event-planner-do" className="text-blue-600 underline">
                  What Does a Corporate Event Planner Do?
                </a>
              </li>
              <li>
                <a
                  href="https://eandp.events/blog/why-smart-atlanta-companies-hire-event-planners"
                  className="text-blue-600 underline"
                >
                  Why Smart Atlanta Companies Hire Event Planners
                </a>
              </li>
              <li>
                {/* External reference cluster (optional small footer list for readers who want sources) */}
                <span className="text-[#666]">Sources cited:&nbsp;</span>
                <a
                  href="https://www.meetingmentormag.com/june-2023/global-event-industry-tops-1-6-trillion/"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-600 underline"
                >
                  EIC/Oxford Economics
                </a>
                {" · "}
                <a
                  href="https://www.cvent.com/en/blog/events/event-statistics"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-600 underline"
                >
                  Cvent
                </a>
                {" · "}
                <a
                  href="https://www.prnewswire.com/news-releases/events-industry-market-to-grow-by-usd-1-07-trillion-2025-2029-driven-by-increased-corporate-events-report-highlights-ai-driven-market-transformation---technavio-302358595.html"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-600 underline"
                >
                  Technavio
                </a>
                {" · "}
                <a
                  href="https://learn.g2.com/experiential-marketing-statistics"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-600 underline"
                >
                  G2
                </a>
                {" · "}
                <a
                  href="https://www.freeman.com/about/press/new-freeman-gen-z-report-reveals-what-younger-audiences-need-from-events/"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-600 underline"
                >
                  Freeman (Gen Z)
                </a>
                {" · "}
                <a
                  href="https://www.atlantaga.gov/doing-business/licenses-permits"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-600 underline"
                >
                  City of Atlanta Permits
                </a>
                {" · "}
                <a href="https://itsmarta.com" target="_blank" rel="noopener" className="text-blue-600 underline">
                  MARTA
                </a>
                {" · "}
                <a href="https://www.atl.com" target="_blank" rel="noopener" className="text-blue-600 underline">
                  ATL Airport
                </a>
                {" · "}
                <a
                  href="https://www.ada.gov/resources/event-planning-guide/"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-600 underline"
                >
                  ADA.gov Event Planning
                </a>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
};

export default AtlantaCorporateEventPlanningChecklist;
