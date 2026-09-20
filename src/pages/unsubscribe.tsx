import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { openCalModal } from "@/lib/calModal";

type UnsubscribeStatus =
  | "processing"
  | "success"
  | "error";

const PAGE_URL =
  "https://eandp.events/unsubscribe";

const UnsubscribePage = () => {
  const [status, setStatus] =
    useState<UnsubscribeStatus>("processing");

  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search
    );

    const id = params.get("id");

    if (!id) {
      setStatus("error");
      return;
    }

    const unsubscribe = async () => {
      try {
        const response = await fetch(
          "https://hook.us1.make.com/upu8cqhl4bjd254yiyr127l8d9x965kf",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({ id }),
          }
        );

        if (!response.ok) {
          throw new Error(
            `Unsubscribe request failed with status ${response.status}`
          );
        }

        setStatus("success");
      } catch (error) {
        console.error(
          "Error sending unsubscribe request:",
          error
        );

        setStatus("error");
      }
    };

    void unsubscribe();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Unsubscribe | E&amp;P Events
        </title>

        <link
          rel="canonical"
          href={PAGE_URL}
        />

        <meta
          name="robots"
          content="noindex, follow"
        />

        <meta
          name="googlebot"
          content="noindex, follow"
        />
      </Helmet>

      <main>
        <section className="min-h-screen bg-white py-20 px-6 md:px-12 lg:px-16 text-[#2a2a2a]">
          <div className="max-w-3xl mx-auto text-center">
            {status === "processing" ? (
              <>
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  Processing Your Request
                </h1>

                <p
                  className="text-lg text-gray-700 mb-8"
                  role="status"
                  aria-live="polite"
                >
                  We're updating your email
                  preferences.
                </p>
              </>
            ) : null}

            {status === "success" ? (
              <>
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  You've Been Unsubscribed
                </h1>

                <p
                  className="text-lg text-gray-700 mb-8"
                  role="status"
                  aria-live="polite"
                >
                  You won't receive any more
                  marketing emails from
                  E&amp;P Events.
                </p>

                <div className="bg-[#f9f6f0] rounded-lg p-8 shadow-sm mb-10">
                  <h2 className="text-2xl font-bold mb-4">
                    We're not the one.
                  </h2>

                  <p className="text-gray-700 mb-4">
                    We know inboxes fill up
                    quickly, and we appreciate
                    the time you've spent with
                    us.
                  </p>

                  <p className="text-gray-700">
                    If you're planning a
                    wedding, corporate event,
                    or special celebration in
                    the future, we'd be honored
                    to help you create
                    something meaningful.
                  </p>
                </div>
              </>
            ) : null}

            {status === "error" ? (
              <>
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  We Couldn't Process Your
                  Request
                </h1>

                <div
                  className="bg-[#f9f6f0] rounded-lg p-8 shadow-sm mb-10"
                  role="alert"
                >
                  <p className="text-gray-700 mb-4">
                    We weren't able to confirm
                    your unsubscribe request
                    from this link.
                  </p>

                  <p className="text-gray-700">
                    Please contact us at{" "}
                    <a
                      href="mailto:info@eandp.events"
                      className="text-blue-600 hover:underline"
                    >
                      info@eandp.events
                    </a>{" "}
                    and we'll help update your
                    email preferences.
                  </p>
                </div>
              </>
            ) : null}

            {status !== "processing" ? (
              <div className="space-y-4">
                <a
                  href="https://cal.com/eandp.events/30min"
                  className="inline-block bg-navy text-white px-8 py-3 rounded-full font-semibold hover:bg-gold transition-colors"
                  onClick={(event) => {
                    (window as any).gtag?.(
                      "event",
                      "cta_click",
                      {
                        button_text:
                          "Schedule a Discovery Call",
                        cta_type:
                          "unsubscribe_cta",
                        page_path:
                          window.location
                            .pathname,
                      }
                    );

                    if (openCalModal("30min")) {
                      event.preventDefault();
                    }
                  }}
                >
                  Schedule a Discovery Call
                </a>

                <p className="text-gray-600">
                  Or continue exploring our
                  website anytime.
                </p>

                <div className="flex justify-center gap-6 flex-wrap">
                  <Link
                    to="/"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Home
                  </Link>

                  <Link
                    to="/about"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    About Us
                  </Link>

                  <Link
                    to="/blog"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Blog
                  </Link>
                </div>
              </div>
            ) : null}

            {status === "success" ? (
              <div className="mt-16 border-t pt-8 text-sm text-gray-500">
                <p>
                  Changed your mind? You can
                  always join our mailing list
                  again by downloading one of
                  our free planning guides or
                  contacting us through our
                  website.
                </p>
              </div>
            ) : null}
          </div>
        </section>
      </main>
    </>
  );
};

export default UnsubscribePage;
