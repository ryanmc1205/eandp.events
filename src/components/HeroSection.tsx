import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 px-4 text-white overflow-hidden"
    >
      {/* Hero Image */}
      <img
        src="/lovable-uploads/SSTK_asset_small_new.webp"
        alt="Indian wedding and corporate event planner in Atlanta"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Headline */}
      <div className="relative z-10 text-center w-full px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 text-white leading-snug max-w-[75rem] mx-auto text-shadow">
          Some Moments Are Too Important to Spend Managing Them.
        </h1>
      </div>

      {/* Mobile */}
      <div className="container mx-auto max-w-3xl text-center z-10 block md:hidden mb-6">
        <p className="text-white text-lg mb-5 text-shadow">
          The event is yours. Carrying it alone shouldn't be.
        </p>

        <p className="text-white text-lg mb-8 text-shadow">
          Whether you're navigating family traditions or stakeholder expectations, we lead with calm, precision, and cultural fluency so you can simply be present.
        </p>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="btn btn-primary bg-navy text-white text-base whitespace-nowrap rounded-full px-6 py-3 inline-flex items-center justify-center"
          >
            Plan It Right. Remember It Forever.
          </a>
        </div>
      </div>

      {/* Desktop */}
      <div className="container mx-auto max-w-4xl text-center z-10 hidden md:block animate-fade-in">
        <p className="text-lg md:text-xl mb-6 text-white max-w-3xl mx-auto text-shadow">
          The event is yours. Carrying it alone shouldn't be.
        </p>

        <p className="text-lg md:text-xl mb-10 text-white max-w-3xl mx-auto text-shadow">
          Whether you're navigating family traditions or stakeholder expectations, we lead with calm, precision, and cultural fluency so you can simply be present.
        </p>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="btn btn-primary bg-navy text-white text-lg sm:text-base whitespace-nowrap rounded-full px-6 py-3 inline-flex items-center justify-center text-center leading-snug"
          >
            Plan It Right. Remember It Forever.
          </a>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#what-we-do" aria-label="Scroll down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
