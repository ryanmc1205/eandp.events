import React from "react";

const MeetPeterSection = () => {
  return (
    <section id="meet-peter" className="section-container bg-transparent py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mx-auto">
          Meet Peter
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image */}
          <div className="md:w-1/3">
            <div className="overflow-hidden border border-gold rounded-md">
              <img loading="lazy"
                src="/lovable-uploads/DSC01691_Original.webp"
                alt="Peter, Director of E&P Events"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="md:w-2/3 space-y-6 text-lg">
            <p>
              Hi, I’m Peter—Director of E&P Events.
            </p>

            <p>
            The people hosting life’s most important events should get to experience them, not spend them managing every detail.
            </p>

            <p>
            With more than a decade of experience and a background in project management, I’ve led everything from intimate family celebrations to productions with more than 1,500 guests and executive events for the United Nations.
            </p>

             <p>
           I’m not driven by the event itself. I’m driven by the people trusting me with it.
            </p>

            <blockquote className="italic border-l-4 border-gold pl-4 text-gray-800">
              “I’ve seen it too often—clients spending tens of thousands only to be overwhelmed,
              disappointed, or outright taken advantage of. That’s not just unfair, it’s unacceptable.
              I believe hosting an event should feel empowering. Celebratory. Safe.
              That’s why I lead like it’s mine—so you can enjoy it like it’s yours.”
            </blockquote>

            <p>
              If everything feels calm, effortless, and exactly as it should, I’ve done my job.
            </p>
         {/* Link to expanded About page */}
            <div>
              <a
                href="/about"
                className="text-gold underline font-semibold"
              >
                Learn More About E&P Events →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetPeterSection;
