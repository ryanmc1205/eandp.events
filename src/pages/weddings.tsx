import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Check, Globe, Users, Plane, Facebook, Instagram, Mail } from "lucide-react";
import NavBarWeddings from "@/components/NavBarWeddings";
import { weddingGalleryImages } from "@/data/weddinggallery";
import TestimonialSection from "@/components/TestimonialSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import AccordionCard from "@/components/AccordionCard";

const weddingTestimonials = [
  {
    id: 1,
    text: "Everything about Peter and Essie is delightful. They really were great to work with from their calm demeanor to their efficiency. I highly recommend them. I, too, am in the planning business but with my son getting married, I knew I had to find professionals to fill the day-of gap. You should know that when a colleague is impressed, you will more than likely be too. I recommend E&P Events, in fact, I'm quite certain their full service planning would also be top notch.",
    name: "Lisa",
  },
  {
    id: 2,
    text: "I literally cannot say enough nice things about Essie and Peter. Everything that could have gone wrong during my reception did (the cater didn't show up....like really...?) but they took every issue and knocked it out of the park. By the time I noticed that the caterers weren't there, Peter had already talked to them and food was on the way. They pay attention to small details like packing us food to take to the hotel after, and making sure my grandparents and parents got food. All the issues that went on were taken care of without anyone even noticing. They are both so much fun to just talk to as well! It felt like we were talking to our friends in all of our meetings. I still can't believe I was second guessing hiring a day of coordinator, other than my now husband, E&P Events is the best decision I made that day! THANK YOU!!!!!!!",
    name: "Kushboo",
  },
  {
    id: 3,
    text: "Seriously, look no further. Peter and Essie were the best to work with. As someone with a lot of ideas but terrible planning skills, wedding planning easily could have been so stressful. E&P were so amazing at listening to my ideas, contributing to them to make them even better, then implementing them in the most perfect way. They were so easy to work with along the way, and best of all the attention to detail was fantastic. They thought of things I never would have, always keeping in mind our vision for our day. The day couldn't have been more beautiful, and I couldn't have imagined working with better planners.",
    name: "Keri",
  },
  {
    id: 4,
    text: "Peter was super great he did a great job with making sure every detail was ironed out before the wedding and meeting with me a couple of times! [E&P Events] were very attentive and remembered little details like making sure I was replenished with snacks! I would most definitely want to work with him again in the future!",
    name: "Sonia",
  },
  {
    id: 5,
    text: "If you are getting married, definitely plan on using E&P Events as your wedding planner.  From all the wedding expenses, this was the most valuable.  My family, friends, and vendors were all skeptical when I first mentioned I hired a planner, but once they saw how beautifully the wedding was executed, they were raving about Peter and Essie. In the months prior to the wedding, Peter did an incredible job keeping me grounded and making sure all details were addressed and well thought out. He also helped negotiate better deals with almost all my vendors.  I was a pretty demanding bride and he was so patient and cool with me the whole time.  During the wedding events, he was under the radar and handled a few emergencies so smoothly that no one noticed a thing, including me on that day.  People are still raving about how organized and classy the wedding was.  My parents were so appreciative of his work because they could mingle with family and friends instead of handling logistics with the hotel and each vendor.  The wedding day was a beautiful memory for my husband and I, it was better than we could have imagined and we're so thankful we trusted Peter with our big day.",
    name: "Sana",
  },
  {
    id: 6,
    text: "[E&P Events] were so great and such a valuable part of our wedding reception! I only wish I had them on my team for all of our events! Peter was very professional and kind throughout the process. The day of our reception, he managed between 10-12 vendors for us. He was the go to person and really went out of his way to make sure things were exactly the way we wanted. The time line was spot on based on how we envisioned. On our reception day, we had a hiccup with another vendor and Peter pulled through to make sure my husband and I had no idea - he treated us like royalty and it made such a big difference on our event day. Thank you so much E&P!",
    name: "Afsha",
  }
];

const Weddings = () => {
  const mid = Math.floor(weddingGalleryImages.length / 2);

  // Top: first half
  const topSource = weddingGalleryImages.slice(0, mid);
  // Bottom: second half
  const bottomSource = weddingGalleryImages.slice(mid);

  const repeatCount = 4;

  const topRowImages = Array(repeatCount).fill(topSource).flat();
  const bottomRowImages = Array(repeatCount).fill(bottomSource).flat();

  const [openCards, setOpenCards] = useState<number[]>([]);

  return (
    <>
<Helmet>
  <title>Indian & South Asian Wedding Planner in Atlanta | E&P Events</title>
  <meta
    name="description"
    content="Indian & South Asian wedding planner in Atlanta specializing in Hindu, Sikh, Pakistani, Bangladeshi, and fusion weddings. We bring calm to complex celebrations through cultural fluency, thoughtful planning, and confident leadership."
  />

  {/* Canonical */}
  <link rel="canonical" href="https://eandp.events/weddings" />

  {/* Preload Hero Image for Speed */}
  <link
    rel="preload"
    as="image"
    href="/lovable-uploads/89a4d798-f07a-42c8-bba9-15123f9d6ecb.webp"
    type="image/webp"
  />

  {/* Open Graph */}
  <meta property="og:url" content="https://eandp.events/weddings" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Indian & South Asian Wedding Planner in Atlanta | E&P Events" />
  <meta property="og:description" content="Indian & South Asian wedding planner in Atlanta specializing in Hindu, Sikh, Pakistani, Bangladeshi, and fusion weddings. We bring calm to complex celebrations through cultural fluency, thoughtful planning, and confident leadership." />
  <meta property="og:image" content="https://eandp.events/og/weddings.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Indian & South Asian WeddingIndian & South Asian wedding planner in Atlanta specializing in Hindu, Sikh, Pakistani, Bangladeshi, and fusion weddings. We bring calm to complex celebrations through cultural fluency, thoughtful planning, and confident leadership. Planner in Atlanta | E&P Events" />
  <meta name="twitter:description" content="" />
  <meta name="twitter:image" content="https://eandp.events/og/weddings.jpg" />
</Helmet>


      <SchemaMarkup
        type="Service"
        id="https://eandp.events/#org"
        name="E & P Events"
        url="https://eandp.events"
        serviceUrl="https://eandp.events/weddings"
        telephone="+1-770-410-8302"
        serviceType="Indian / South Asian Wedding Planning"
        description="Indian, South Asian, and fusion wedding planning in Atlanta. We help couples navigate traditions, family expectations, and complex celebrations through cultural fluency, calm leadership, and thoughtful execution."
        areaServedName="Atlanta, GA"
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://eandp.events/" },
              { "@type": "ListItem", position: 2, name: "Weddings", item: "https://eandp.events/weddings" }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-transparent flex flex-col">
        <NavBarWeddings />

{/* Hero Section */}
<section
  id="hero"
  className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 px-6 md:px-12 lg:px-16 bg-cover bg-center text-white"
  style={{
    backgroundImage:
      "url('/lovable-uploads/89a4d798-f07a-42c8-bba9-15123f9d6ecb.webp')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-black/15 z-0" />

  <div className="relative z-10 text-center w-full px-4">
    {/* SEO-friendly Eyebrow */}
    <h1 className="text-sm md:text-base tracking-widest uppercase text-white/80 mb-3 text-shadow">
      Indian &amp; South Asian Wedding Planner in Atlanta
    </h1>

    {/* Hero Headline */}
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug max-w-[75rem] mx-auto mb-8 text-shadow-heading">
      You Deserve a Wedding That Feels as Beautiful as It Looks.
    </h2>

    {/* Hero Copy */}
    <div className="max-w-3xl mx-auto mb-10 text-white/90 space-y-8 text-shadow">
      <p className="text-lg md:text-xl">
        Even the perfect timeline can&apos;t navigate the conversations that
        shape your wedding: balancing family expectations, honoring meaningful
        traditions, and creating a celebration that still feels like yours.
      </p>

      <div>
        <p className="text-lg md:text-xl font-semibold mb-2">
          You deserve someone who can.
        </p>

        <p className="text-lg md:text-xl">
          From the sangeet to the send-off, your joy stays front and center.
        </p>
      </div>
    </div>

    {/* CTA */}
    <div className="flex justify-center">
      <a
        href="#cta"
        className="btn btn-primary bg-navy text-white text-lg sm:text-base whitespace-nowrap rounded-full px-6 py-3 inline-flex items-center justify-center"
      >
        Your Vision. Our Plan.
      </a>
    </div>
  </div>

  {/* Scroll Arrow */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <a href="#gallery" aria-label="Scroll down">
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

        {/* Peerspace Recognition */}
<section
  id="featured"
  className="py-12 px-6 md:px-12 lg:px-16 bg-transparent"
>
  <div className="max-w-3xl mx-auto text-center">

    <a
      href="https://www.peerspace.com/resources/indian-wedding-planners-in-atlanta/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Read the Peerspace article naming E&P Events one of Atlanta's Top 5 Indian Wedding Planners for 2026"
      className="inline-block transition-transform duration-300 hover:scale-[1.02]"
    >
      <img
        loading="lazy"
        src="/lovable-uploads/peerspace_badge_black.png"
        alt="Peerspace Top 5 Indian Wedding Planners in Atlanta 2026"
        className="h-40 md:h-48 w-auto mx-auto"
      />
    </a>

    <p className="mt-6 text-base text-gray-700">
      Named one of Atlanta's{" "}
      <strong>Top 5 Indian Wedding Planners of 2026</strong> by Peerspace.
    </p>

    <a
      href="https://www.peerspace.com/resources/indian-wedding-planners-in-atlanta/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 text-gold font-semibold underline hover:no-underline"
    >
      See why E&amp;P Events made the list →
    </a>

  </div>
</section>
        

      {/* Gallery Section */}
<section
  id="gallery"
  className="py-20 px-6 md:px-12 lg:px-16 bg-[#2a2a2a] text-white"
>
  <div className="text-center mb-12">
    <h2 className="section-title text-white">
      This Is What It Feels Like.
    </h2>

    <p className="text-lg text-white/90">
      The conversations happen before the celebration. These are the moments they make possible.
    </p>
  </div>

  <div className="space-y-10 overflow-hidden">
    {/* TOP ROW */}
    <div className="w-full overflow-hidden">
      <div className="marquee-wrapper">
        <div className="flex animate-marquee gap-6 w-max">
          {[...topRowImages, ...topRowImages].map((image, index) => (
            <div
              key={`top-${index}`}
              className="relative flex-shrink-0 rounded-md overflow-hidden aspect-[3/2] h-72"
            >
              <img
                src={image.src}
                srcSet={`
                  ${image.src.replace(".webp", "-small.webp")} 600w,
                  ${image.src.replace(".webp", "-medium.webp")} 900w,
                  ${image.src} 1200w
                `}
                sizes="(max-width: 640px) 600px, (max-width: 1024px) 900px, 1200px"
                alt={image.alt}
                loading="lazy"
                width="432"
                height="288"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* BOTTOM ROW */}
    <div className="w-full overflow-hidden">
      <div className="marquee-wrapper">
        <div className="flex animate-marquee-reverse gap-6 w-max">
          {[...bottomRowImages, ...bottomRowImages].map((image, index) => (
            <div
              key={`bottom-${index}`}
              className="relative flex-shrink-0 rounded-md overflow-hidden aspect-[3/2] h-72"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width="432"
                height="288"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
        

        {/* Beyond the Timeline Section */}
<section
  id="what-we-do"
  className="py-20 px-6 md:px-12 lg:px-16 bg-transparent"
>
  <div className="text-center mb-16">
    <h2 className="section-title">
      Beyond the Timeline.
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
    <AccordionCard
      icon={Check}
      title="Plans Change?"
      short="Anticipated."
      details="From the sangeet to the send-off, plans evolve. Whether your wedding includes Hindu ceremonies, Sikh traditions, or a fusion of cultures, we anticipate what's ahead and coordinate every vendor, every transition, and every detail so you can be fully present for every celebration."
      isOpen={openCards.includes(0)}
      onToggle={() =>
        setOpenCards((prev) =>
          prev.includes(0) ? prev.filter((i) => i !== 0) : [...prev, 0]
        )
      }
    />

 <AccordionCard
  icon={Globe}
  title="Every Tradition?"
  short="Honored."
  details="Not every tradition looks the same. As experienced South Asian wedding planners, we bring cultural fluency across Indian, Pakistani, Bangladeshi, and fusion celebrations. Whether it's a baraat, nikah, sangeet, or another meaningful ceremony, we understand the significance behind each moment so nothing meaningful gets lost along the way."
  isOpen={openCards.includes(1)}
  onToggle={() =>
    setOpenCards((prev) =>
      prev.includes(1) ? prev.filter((i) => i !== 1) : [...prev, 1]
    )
  }
/>

    <AccordionCard
      icon={Users}
      title="Your Wedding. Their Expectations?"
      short="Navigated."
      details="South Asian weddings often bring together large families, different perspectives, and deeply held expectations. Our Atlanta-based wedding planning team brings empathy, diplomacy, and calm leadership to those conversations, helping families move forward together while protecting your joy—and your guests' experience."
      isOpen={openCards.includes(2)}
      onToggle={() =>
        setOpenCards((prev) =>
          prev.includes(2) ? prev.filter((i) => i !== 2) : [...prev, 2]
        )
      }
    />

    <AccordionCard
      icon={Plane}
      title="Not in Atlanta?"
      short="Anywhere."
      details="While we're proudly based in Atlanta, our approach isn't limited by geography. Whether you're planning a destination wedding, a multi-city celebration, or hosting guests traveling from around the world, we provide the same calm leadership, cultural fluency, and thoughtful execution wherever your celebration takes place."
      isOpen={openCards.includes(3)}
      onToggle={() =>
        setOpenCards((prev) =>
          prev.includes(3) ? prev.filter((i) => i !== 3) : [...prev, 3]
        )
      }
    />
  </div>
</section>

        {/* Testimonial Section */}
        <section id="testimonials">
          <TestimonialSection
            testimonials={weddingTestimonials}
            title="The Difference, In Their Words."
            backgroundColor="bg-[#2a2a2a]"
            titleColor="text-white"
            minHeight="h-[800px] md:h-[580px]" // ✅ fixed height instead of min-height
          />
        </section>

{/* Working Together Section */}
<section
  id="how-it-works"
  className="bg-transparent py-20 px-6 md:px-12 lg:px-16 bg-[#2a2a2a]"
>
  <div className="max-w-5xl mx-auto">
    <h2 className="section-title">Working Together</h2>

    <div className="relative mt-16">
      {/* Continuous vertical gold line */}
      <div className="hidden md:block absolute left-2 top-0 bottom-0 w-[2px] bg-gold" />

      <div className="space-y-16">
        <div className="flex items-start gap-8">
          <div className="hidden md:block w-5 flex-shrink-0" />

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              You'll Always Know What's Next.
            </h3>

            <p className="text-lg">
              Planning a South Asian wedding comes with countless decisions,
              traditions, and moving pieces. You'll never wonder what comes next
              or feel like you're carrying the weight of planning by yourself.
              You'll always know what's happening, what needs your attention,
              and what's already been handled.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-8">
          <div className="hidden md:block w-5 flex-shrink-0" />

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              You'll Never Carry the Planning Alone.
            </h3>

            <p className="text-lg">
              From vendor coordination and timeline management to family
              conversations and cultural traditions, we're with you every step
              of the way. We anticipate challenges before they become yours,
              helping you navigate every decision with calm leadership and
              steady support.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-8">
          <div className="hidden md:block w-5 flex-shrink-0" />

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              You'll Be Fully Present.
            </h3>

            <p className="text-lg">
              When your wedding weekend arrives, your focus shouldn't be on
              logistics. It should be on celebrating with the people you love.
              While we quietly lead every detail behind the scenes, you get to
              experience every ceremony, every tradition, and every
              unforgettable moment.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        

        {/* CTA Section */}
        <section id="cta" className="relative bg-[#2c2c2c] py-20 px-6 md:px-12 lg:px-16 text-white overflow-hidden">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
            <div className="w-[300px] h-[300px] bg-gold/10 rounded-full blur-[100px]" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="section-title text-white">Let’s Create It Together.</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-white/90">
            We’ll take care of the planning, so you can be fully present.
            </p>

            <div className="glow-button-wrapper mx-auto">
              <div className="glow-ring" />
              <a
                href="https://cal.com/eandp.events/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button-inner"
                onClick={() => {
                  (window as any).gtag?.('event', 'cta_click', {
                    button_text: 'Book Your Free Clarity Call',
                    cta_type: 'weddings_cta',
                    page_path: window.location.pathname,
                  });
                }}
              >
                Book Your Free Clarity Call
              </a>
            </div>

            <div className="mt-8">
              <a href="/" className="text-gold underline">
                ← Back to Main
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <div className="lion-watermark" aria-hidden="true" />
    </>
  );
};

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">E&P Events</h3>
            <p className="text-gray-300 mb-4">
              Thoughtful planning for Indian, South Asian, and fusion weddings + corporate events.<br />
              <br />
              Based in Atlanta, trusted across Georgia and beyond.
            </p>

            <div className="mt-4 flex items-center space-x-4">
              <a
                href="https://www.facebook.com/eventsep/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
                aria-label="Visit our Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/eandp_events/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
                aria-label="Visit our Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:info@eandp.events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
                aria-label="Contact Us"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-gold transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#what-we-do" className="text-gray-300 hover:text-gold transition-colors">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-gold transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-gold transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#cta" className="text-gray-300 hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-gold transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-gold transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">
              Email: <a href="mailto:info@eandp.events" className="text-gold hover:underline">info@eandp.events</a>
            </p>
  <p className="text-gray-300 mb-2">
              Phone: <a href="tel:17704108302" className="text-gold hover:underline">(770) 410-8302</a>
            </p>
            <p className="text-gray-300">
              Hoschton, GA
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} E&P Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Weddings;
