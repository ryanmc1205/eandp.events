import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://eandp.events/5-questions";

const LeadMagnetPage = () => {
  const [submitted, setSubmitted] =
    useState(false);

  const [submitting, setSubmitting] =
    useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (submitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(
      formData.get("name") ?? ""
    ).trim();

    const email = String(
      formData.get("email") ?? ""
    ).trim();

    const marketingConsent =
      formData.get("marketingConsent") ===
      "yes";

    if (!marketingConsent) {
      setError(
        "Please confirm your email consent before continuing."
      );
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const id = crypto.randomUUID();

      const consentTimestamp =
        new Date().toISOString();

      const response = await fetch(
        "https://hook.us1.make.com/hw0r5ihivh26pfsp8yb7ua12iigrl36x",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            id,
            name,
            email,
            marketingConsent: true,
            consentTimestamp,
            consentSource: "5-questions",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Form submission failed with status ${response.status}`
        );
      }

      setSubmitted(true);

      (window as any).gtag?.(
        "event",
        "lead_magnet_submit",
        {
          lead_magnet:
            "5 Questions Before Hiring an Event Planner",
          page_path:
            window.location.pathname,
        }
      );
    } catch (submissionError) {
      console.error(
        "Error submitting form:",
        submissionError
      );

      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const pageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name:
      "5 Questions to Ask Before Hiring an Event Planner",
    url: PAGE_URL,
    description:
      "Get E&P Events' free guide to five important questions to ask before hiring an event planner for your wedding or corporate event.",
    publisher: {
      "@type": "Organization",
      name: "E&P Events",
      url: "https://eandp.events",
    },
  };

  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://eandp.events/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name:
          "5 Questions Before Hiring an Event Planner",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          5 Questions to Ask Before Hiring an
          Event Planner | E&amp;P Events
        </title>

        <meta
          name="description"
          content="Get the free E&P Events guide to five important questions to ask before hiring a wedding or corporate event planner."
        />

        <link
          rel="canonical"
          href={PAGE_URL}
        />

        <meta
          name="robots"
          content="index,follow"
        />

        <meta
          property="og:url"
          content={PAGE_URL}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="5 Questions to Ask Before Hiring an Event Planner | E&P Events"
        />

        <meta
          property="og:description"
          content="Get the free E&P Events guide to five important questions to ask before hiring a wedding or corporate event planner."
        />

        <meta
          name="twitter:card"
          content="summary"
        />

        <meta
          name="twitter:title"
          content="5 Questions to Ask Before Hiring an Event Planner | E&P Events"
        />

        <meta
          name="twitter:description"
          content="Get the free E&P Events guide to five important questions to ask before hiring a wedding or corporate event planner."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pageLd),
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

      <main>
        <section className="min-h-screen bg-white py-20 px-6 md:px-12 lg:px-16 text-center text-[#2a2a2a]">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Ask These{" "}
              <span className="text-gold">
                5 Questions
              </span>{" "}
              Before You Hire Anyone — Or Risk
              Regret
            </h1>

            <p className="text-lg mb-8 text-gray-700">
              Most clients don’t know what
              to ask until it’s too late.
              Whether you're planning a
              high-stakes corporate event
              or a once-in-a-lifetime
              wedding, asking these
              questions could save your
              budget, your timeline, and
              your sanity.
            </p>

            <p className="text-lg mb-8 text-gray-700">
              You’re not just looking for a
              good planner. You’re looking
              for the right one. Someone
              who can lead under pressure,
              protect your time and values,
              and make sure your event
              actually delivers on its
              purpose. We’ll show you how
              to cut through the fluff and
              find the fit — so you can
              move forward with confidence.
            </p>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="bg-[#f9f6f0] p-8 rounded-lg shadow-md max-w-xl mx-auto"
              >
                <p className="text-lg font-semibold mb-4">
                  📝 Grab the Free Guide:
                  <br />

                  <span className="text-xl text-gold font-bold">
                    “Top 5 Questions to Ask
                    Before Hiring An Event
                    Planner”
                  </span>
                </p>

                <div className="text-left">
                  <label
                    htmlFor="lead-name"
                    className="block text-sm font-semibold mb-2"
                  >
                    First Name
                  </label>

                  <input
                    id="lead-name"
                    name="name"
                    type="text"
                    autoComplete="given-name"
                    required
                    className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="text-left">
                  <label
                    htmlFor="lead-email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email
                  </label>

                  <input
                    id="lead-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="text-left mb-6">
                  <label
                    htmlFor="marketing-consent"
                    className="flex items-start gap-3 cursor-pointer"
                  >
                    <input
                      id="marketing-consent"
                      name="marketingConsent"
                      type="checkbox"
                      value="yes"
                      required
                      className="mt-1 h-4 w-4 shrink-0"
                    />

                    <span className="text-sm text-gray-700 leading-relaxed">
                      Yes, send me the free
                      guide and occasional
                      marketing emails from
                      E&amp;P Events with
                      planning tips, event
                      insights, and company
                      updates. I understand
                      I can unsubscribe at
                      any time. See our{" "}
                      <Link
                        to="/privacy-policy"
                        className="text-blue-600 underline hover:text-blue-800"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-navy text-white py-3 px-6 rounded-full font-semibold hover:bg-gold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting
                    ? "Sending..."
                    : "Download the Free Guide"}
                </button>

                {error ? (
                  <p
                    className="text-red-700 mt-4"
                    role="alert"
                  >
                    {error}
                  </p>
                ) : null}

                <p className="text-sm text-gray-500 mt-4">
                  🔒 We don’t do spam — just
                  occasional planning wisdom
                  and clarity-driven insights
                  from the field.
                </p>
              </form>
            ) : (
              <div
                className="text-lg text-green-700 font-semibold"
                role="status"
                aria-live="polite"
              >
                ✅ Thanks! Your free guide
                is on the way. Check your
                inbox — or your spam folder
                — and keep your questions
                ready.
              </div>
            )}

            <div className="mt-12">
              <a
                href="/"
                className="text-gold underline font-semibold"
              >
                ← Back to E&amp;P Events
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LeadMagnetPage;