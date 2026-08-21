import React from "react";

const FeaturedSection = () => {
  return (
    <section
      id="featured"
      className="bg-transparent py-24 border-t border-b border-gold"
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="section-title text-black">
          Don't Take Our Word For It.
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          Named one of Atlanta's{" "}
          <strong>Top 5 Indian Wedding Planners of 2026</strong> by
          {" "}Peerspace.
        </p>

        <a
          href="https://www.peerspace.com/resources/indian-wedding-planners-in-atlanta/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read the Peerspace article naming E&P Events one of Atlanta's Top 5 Indian Wedding Planners for 2026"
          className="inline-block transition-transform duration-300 hover:scale-[1.03]"
        >
          <img
            loading="lazy"
            src="/lovable-uploads/peerspace_badge_black.png"
            alt="Peerspace Best Wedding Planner Atlanta 2026"
            className="h-56 md:h-64 w-auto mx-auto"
          />
        </a>

        <div className="mt-8">
          <a
            href="https://www.peerspace.com/resources/indian-wedding-planners-in-atlanta/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-semibold underline hover:no-underline transition-colors duration-300"
          >
            See why E&amp;P Events made the list →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
