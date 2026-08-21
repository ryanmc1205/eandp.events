import React, { useState, useEffect } from "react";

const NavBarBlog = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCtaClick = () => {
    (window as any).gtag?.("event", "cta_click", {
      button_text: "Book a Call (Header)",
      cta_type: "header_cta",
      page_path: window.location.pathname,
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
      role="navigation"
      aria-label="Main"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold" aria-label="E&P Events Home">
          <img
            src="/lovable-uploads/E&P_events_lion_horizontal.svg"
            alt="E&P Events Logo"
            className="h-12 w-auto"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation + CTA */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-black hover:text-gold transition-colors">Home</a>
            <a href="/weddings" className="text-black hover:text-gold transition-colors">Weddings</a>
            <a href="/corporate" className="text-black hover:text-gold transition-colors">Corporate</a>
            <a href="/about" className="text-black hover:text-gold transition-colors">About</a>
            <a href="/blog" className="text-black hover:text-gold transition-colors">Blog</a>
          </div>

          {/* Header CTA */}
          <a
            href="https://cal.com/eandp.events/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="ml-6 inline-flex items-center rounded-md bg-gold px-5 py-2 text-sm font-semibold text-[#2a2a2a] shadow-md hover:bg-[#d4af37] hover:shadow-lg transition-all duration-200"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 md:hidden">
            <div className="flex flex-col space-y-4 px-4">
              <a href="/" className="text-black hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="/weddings" className="text-black hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Weddings</a>
              <a href="/corporate" className="text-black hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Corporate</a>
              <a href="/about" className="text-black hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="/blog" className="text-black hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</a>

              {/* Mobile CTA */}
              <a
                href="https://cal.com/eandp.events/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  handleCtaClick();
                  setIsMenuOpen(false);
                }}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-base font-semibold text-[#2a2a2a] shadow-md hover:bg-[#d4af37] hover:shadow-lg transition-all duration-200"
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBarBlog;
