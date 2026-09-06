import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const UnsubscribePage = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) return;

    fetch("https://hook.us1.make.com/upu8cqhl4bjd254yiyr127l8d9x965kf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    }).catch((error) => {
      console.error("Error sending unsubscribe request:", error);
    });
  }, []);

  return (
    <section className="min-h-screen bg-white py-20 px-6 md:px-12 lg:px-16 text-[#2a2a2a]">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          You've Been Unsubscribed
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          You won't receive any more marketing emails from E&amp;P Events.
        </p>

        <div className="bg-[#f9f6f0] rounded-lg p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-bold mb-4">
           We're not the one.
          </h2>

          <p className="text-gray-700 mb-4">
            We know inboxes fill up quickly, and we appreciate the time you've
            spent with us.
          </p>

          <p className="text-gray-700">
            If you're planning a wedding, corporate event, or special
            celebration in the future, we'd be honored to help you create
            something meaningful.
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="https://cal.com/eandp.events/clarity"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy text-white px-8 py-3 rounded-full font-semibold hover:bg-gold transition-colors"
          >
            Schedule a Discovery Call
          </a>

          <p className="text-gray-600">
            Or continue exploring our website anytime.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            
            <button
  onClick={() => {
    window.location.href = "/";
  }}
  className="font-medium text-blue-600 hover:underline"
>
  Home
</button>


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

        <div className="mt-16 border-t pt-8 text-sm text-gray-500">
          <p>
            Changed your mind? You can always join our mailing list again by
            downloading one of our free planning guides or contacting us through
            our website.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnsubscribePage;
