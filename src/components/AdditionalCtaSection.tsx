import React from "react";

const AdditionalCtaSection = () => {
  return (
    <section id="additional-cta" className="bg-transparent py-16">

      {/* Full-width heading */}
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="section-title text-center">
          You Can Be the One Holding It All Together, Or the One Fully Living It.
        </h2>
      </div>

      {/* Full-width subheading */}
      <div className="text-left space-y-4 text-lg text-gray-800 px-4 md:px-8 max-w-7xl mx-auto mt-4">
        <p><em>“I didn’t realize how much this would take over my life.”</em></p>
<p>
  The goal isn’t just a successful event. It’s making sure you’re still part of it when the day arrives.
</p>
<p>
 Too often, you work so hard to make the event unforgettable for everyone else that you only remember the work.
</p>
      </div>

      {/* Comparison cards in centered container */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12 px-4 md:px-6 lg:px-8 transform-gpu will-change-transform contain-layout">

        {/* On Your Own */}
   <div className="bg-[#f0e9e5] border border-red-500 p-6 rounded-2xl shadow-md shadow-black/10 min-h-[460px]">
          <h3 className="text-xl font-semibold text-red-700 mb-4">On Your Own</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 text-base">
            <li>Weeks disappear into a blur of to-do lists, WhatsApp threads, and late-night decisions.</li>
            <li>You miss time with the people you love because the event becomes your full-time job.</li>
            <li>You’re carrying family expectations, cultural pressure, and vendor issues on your back.</li>
            <li>The day arrives. You’re exhausted, fielding vendor calls when you should be savoring the moment.</li>
            <li>You smile for the photos, but your memories are a haze of stress.</li>
          </ul>
        </div> 

        {/* With E&P Events */}
  <div className="bg-[#faf8f3] border border-green-500 p-6 rounded-2xl shadow-md shadow-black/10 min-h-[460px]">
          <h3 className="text-xl font-semibold text-green-700 mb-4">With E&P Events</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 text-base">
            <li>You have a clear plan, trusted guidance, and room to enjoy the season you’re in.</li>
<li>Planning becomes part of your life instead of taking it over.</li>
<li>What matters most is anticipated from the start, not left to chance.</li>
<li>Problems are solved before they ever become yours.</li>
<li>When it’s all over, your memories are of the celebration, not the work it took to make it happen.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AdditionalCtaSection;
