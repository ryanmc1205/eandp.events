import React, { useState, useEffect } from "react";

const testimonials = [

  {
    id: 1,
    text: "Peter Samuel really provides world-class service. I worked extensively with Peter on a number of global United Nations programs, working with corporate executives and high-ranking government officials and dignitaries from over 20-30 countries around the world represented at each event. Peter provided exceptional strategic direction and corporate planning, exquisite event management, and impeccable attention to detail. He pulled off events seamlessly and flawlessly and delegates were always impressed. Peter's attention to customer service is exceptional and he is so responsive and unflappable in even the most complex of situations. More than a safe pair of hands that I could rely on with complete confidence; he is also a true maestro that could orchestrate any event we threw at him with perfection. An absolute joy to work with him!",
    name: "Sebastian",
    role: ""
  },
 {
    id: 2,
    text: "Seriously, look no further. Peter and Essie were the best to work with. As someone with a lot of ideas but terrible planning skills, wedding planning easily could have been so stressful. E&P were so amazing at listening to my ideas, contributing to them to make them even better, then implementing them in the most perfect way. They were so easy to work with along the way, and best of all the attention to detail was fantastic. They thought of things I never would have, always keeping in mind our vision for our day. The day couldn't have been more beautiful, and I couldn't have imagined working with better planners.",
    name: "Keri",
    role: ""
  },
  {
    id: 3,
    text: "I wanted to thank you for your help with planning and setting up our Easter Breakfast for the Worship Department, Production Department, and Dance Department. You looked at our budget and helped to find ways to not only stay within budget but to still go above and beyond with how we could successfully show appreciation to our volunteers! You were timely and thoughtful with how you set everything up and all of the departments felt valued because of how you served us. Thank you for stepping in, especially at the last minute, to help us plan through everything. Our leadership team felt at ease with your expertise and careful attention to detail! We will definitely reach out again for the next event!",
    name: "Viveka",
    role: ""
  },
  {
    id: 4,
    text: "Everything about Peter and Essie is delightful. They really were great to work with from their calm demeanor to their efficiency. I highly recommend them. I, too, am in the planning business but with my son getting married, I knew I had to find professionals to fill the day-of gap. You should know that when a colleague is impressed, you will more than likely be too. I recommend E&P Events, in fact, I'm quite certain their full service planning would also be top notch.",
    name: "Lisa",
    role: ""
  },
  {
    id: 5,
    text: "I literally cannot say enough nice things about Essie and Peter. Everything that could have gone wrong during my reception did (the cater didn't show up....like really...?) but they took every issue and knocked it out of the park. By the time I noticed that the caterers weren't there, Peter had already talked to them and food was on the way. They pay attention to small details like packing us food to take to the hotel after, and making sure my grandparents and parents got food. All the issues that went on were taken care of without anyone even noticing. They are both so much fun to just talk to as well! It felt like we were talking to our friends in all of our meetings. I still can't believe I was second guessing hiring a day of coordinator, other than my now husband, E&P Events is the best decision I made that day! THANK YOU!!!!!!!",
    name: "Khushboo",
    role: ""
  },
  {
    id: 6,
    text: "Peter was super great he did a great job with making sure every detail was ironed out before the wedding and meeting with me a couple of times! [E&P Events] were very attentive and remembered little details like making sure I was replenished with snacks! I would most definitely want to work with him again in the future!",
    name: "Sonia",
    role: ""
  },

];

type Testimonial = {
  id: number;
  text: string;
  name: string;
  role?: string;
};

type Props = {
  testimonials: Testimonial[];
  title?: string;
  backgroundColor?: string;
  titleColor?: string;
  minHeight?: string;
};

const TestimonialSection: React.FC<Partial<Props>> = ({
  testimonials: incomingTestimonials,
  title = "Here’s How They Remember It.",
  backgroundColor = "bg-charcoal",
  titleColor = "text-white",
  minHeight = "min-h-[700px] md:min-h-[540px]", // Default height set here
}) => {
  const testimonialsToUse = incomingTestimonials ?? testimonials;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsToUse.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [testimonialsToUse.length]);

  const nextTestimonial = () => setActiveIndex((prev) => (prev + 1) % testimonialsToUse.length);
  const prevTestimonial = () => setActiveIndex((prev) => (prev - 1 + testimonialsToUse.length) % testimonialsToUse.length);
  const selectTestimonial = (index: number) => setActiveIndex(index);

  return (
    <section id="testimonials" className={`section-container pt-16 pb-24 ${backgroundColor}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`section-title text-center mb-8 ${titleColor}`}>{title}</h2>
      </div>



<div
  className={`max-w-6xl mx-auto bg-white/80 p-6 md:p-10 rounded-lg shadow-md relative flex flex-col ${minHeight}`}>
        <div className="absolute top-6 left-6 text-6xl text-gold opacity-20 z-0">"</div>

        {/* Content */}
<div className="z-10 flex-1 overflow-hidden">
          <p className="text-gray-700 mb-8">{testimonialsToUse[activeIndex].text}</p>
          <div className="flex items-center mt-4">
            <div className="h-10 w-10 bg-gold rounded-full flex items-center justify-center text-white font-bold">
              {testimonialsToUse[activeIndex].name.charAt(0)}
            </div>
            <div className="ml-3">
              <p className="font-semibold">{testimonialsToUse[activeIndex].name}</p>
              {testimonialsToUse[activeIndex].role && (
                <p className="text-sm text-gray-600">{testimonialsToUse[activeIndex].role}</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="relative mt-6">
          {/* Dots */}
          <div className="flex justify-center space-x-2 mb-4">
            {testimonialsToUse.map((_, index) => (
              <button
                key={index}
                onClick={() => selectTestimonial(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-gold w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="absolute inset-0 flex justify-between items-center px-4 pointer-events-none">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors pointer-events-auto"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
