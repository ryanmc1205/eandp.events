
import React from "react";
import { Facebook, Instagram, Mail } from "lucide-react";

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
                <a href="#what-we-do" className="text-gray-300 hover:text-gold transition-colors">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#featured" className="text-gray-300 hover:text-gold transition-colors">
                  Featured In
                </a>
              </li>
              <li>
                <a href="#meet-peter" className="text-gray-300 hover:text-gold transition-colors">
                  Meet Peter
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-gold transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-gold transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-gold transition-colors">
                  About
                </a>
              </li>
              <li>
                 <a href="/blog"  className="text-gray-300 hover:text-gold transition-colors">
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
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} E&P Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
