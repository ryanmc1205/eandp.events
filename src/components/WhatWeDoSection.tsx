import React from "react";
import { Presentation, Gem } from "lucide-react";

const WhatWeDoSection = () => {
  return (
    <section
      id="what-we-do"
      className="relative z-10 section-container bg-charcoal text-white py-20"
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white section-title">
          What Are You Planning?
        </h2>

        <p className="text-lg mt-6 text-white/90 max-w-3xl mx-auto">
          Every event is different. The way we lead isn't. Choose the path that's
          right for you.
        </p>
      </div>

      {/* Desktop Split Layout */}
      <div className="mt-12 hidden md:grid grid-cols-2 gap-8 max-w-6xl mx-auto px-4">

        {/* Weddings */}
        <a
          href="/weddings"
          className="group block bg-white p-10 rounded-lg shadow-md border border-transparent hover:border-gold hover:bg-[#fcfaf5] hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-[#fdf6e3] rounded-full flex items-center justify-center transition-colors duration-300">
              <Gem className="h-6 w-6 text-gold" />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#2a2a2a] transition-colors duration-300 group-hover:text-gold">
                Let&apos;s Plan Your Wedding
              </h3>

              <p className="text-gray-700 mb-4">
                South Asian and fusion weddings are beautifully layered with
                tradition, culture, and family. Each celebration carries the
                weight of multiple ceremonies, generations, and expectations that
                deserve to be honored well. From baraats and sangeets to elegant
                receptions, we lead with calm, cultural understanding, and
                thoughtful planning so you can be fully present for every moment.
              </p>

              <p className="text-sm font-semibold text-gold underline group-hover:no-underline">
                Explore Wedding Planning →
              </p>
            </div>
          </div>
        </a>

        {/* Corporate */}
        <a
          href="/corporate"
          className="group block bg-white p-10 rounded-lg shadow-md border border-transparent hover:border-gold hover:bg-[#fcfaf5] hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-[#e6e6ea] rounded-full flex items-center justify-center transition-colors duration-300">
              <Presentation className="h-6 w-6 text-[#1a1a26]" />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#2a2a2a] transition-colors duration-300 group-hover:text-gold">
                Let&apos;s Lead Your Corporate Event
              </h3>

              <p className="text-gray-700 mb-4">
                Corporate events carry the weight of your brand, your people,
                and your reputation. Every detail reflects something bigger than
                the event itself. From executive summits and product launches to
                team celebrations and client events, we lead the planning and
                manage the execution so you can stay focused on what matters
                most.
              </p>

              <p className="text-sm font-semibold text-gold underline group-hover:no-underline">
                Explore Corporate Planning →
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* Mobile Stack */}
      <div className="mt-12 md:hidden flex flex-col gap-6 max-w-xl mx-auto px-4">

        {/* Weddings */}
        <a
          href="/weddings"
          className="block bg-white p-6 rounded-lg shadow border border-gray-100 hover:border-gold hover:bg-[#fcfaf5] hover:shadow-lg transition-all duration-300"
        >
          <Gem className="h-6 w-6 text-gold mb-3" />

          <h3 className="text-xl font-bold text-[#2a2a2a] mb-2">
            Let&apos;s Plan Your Wedding
          </h3>

          <p className="text-sm text-gray-700 mb-3">
            South Asian and fusion weddings are beautifully layered with
            tradition, culture, and family. We lead with calm, cultural
            understanding, and thoughtful planning so you can be fully present.
          </p>

          <p className="text-sm font-semibold text-gold underline">
            Explore Wedding Planning →
          </p>
        </a>

        {/* Corporate */}
        <a
          href="/corporate"
          className="block bg-white p-6 rounded-lg shadow border border-gray-100 hover:border-gold hover:bg-[#fcfaf5] hover:shadow-lg transition-all duration-300"
        >
          <Presentation className="h-6 w-6 text-[#1a1a26] mb-3" />

          <h3 className="text-xl font-bold text-[#2a2a2a] mb-2">
            Let&apos;s Lead Your Corporate Event
          </h3>

          <p className="text-sm text-gray-700 mb-3">
            Corporate events carry the weight of your brand, your people, and
            your reputation. We lead the planning and execution so you can stay
            focused on what matters most.
          </p>

          <p className="text-sm font-semibold text-gold underline">
            Explore Corporate Planning →
          </p>
        </a>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
