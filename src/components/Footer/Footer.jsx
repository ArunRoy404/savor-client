import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaLocationDot, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa6';
import Logo from '../Logo/Logo';

const Footer = () => {

  const ContactItem = ({ icon, text }) => (
    <li className="flex items-start">
      {icon}
      <span>{text}</span>
    </li>
  );

  const NewsletterForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      setEmail('');
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#ff5e15]"
          required
        />
        <button
          type="submit"
          className="bg-[#ff5e15] text-white px-6 py-2 rounded font-medium hover:bg-[#e04e0d] transition-colors duration-300"
        >
          Subscribe
        </button>
      </form>
    );
  };

  return (
    <footer className="bg-slate-800 text-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-semibold">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* About Us Column */}
          <div className="space-y-6">
            <Logo />

            <p className="mt-4 text-sm leading-relaxed">
              We are Savor Restaurant, and we're passionate about serving delicious food made with the finest ingredients.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#222222] transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#222222] transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#222222] transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#222222] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-12 after:bg-[#ff5e15] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Menu', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className=" text-sm hover:text-[#ff5e15] hover:pl-1 transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-lg font-semibold relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-12 after:bg-[#ff5e15] mb-6">
              Contact Info
            </h4>
            <ul className="space-y-3  text-sm">
              <ContactItem
                icon={<FaLocationDot className="text-[#ff5e15] mt-1 mr-3" />}
                text="123 Food Street, New York, USA"
              />
              <ContactItem
                icon={<FaPhone className="text-[#ff5e15] mt-1 mr-3" />}
                text="+1 234 567 890"
              />
              <ContactItem
                icon={<FaEnvelope className="text-[#ff5e15] mt-1 mr-3" />}
                text="info@Savor.com"
              />
              <ContactItem
                icon={<FaClock className="text-[#ff5e15] mt-1 mr-3" />}
                text="Mon-Sun: 9AM - 11PM"
              />
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-lg font-semibold relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-12 after:bg-[#ff5e15] mb-6">
              Newsletter
            </h4>
            <p className=" text-sm mb-6 leading-relaxed">
              Subscribe to our newsletter to receive updates and special offers.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className=" text-sm">
            &copy; {new Date().getFullYear()} Savor. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;