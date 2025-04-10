import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';
import { MdOutlineEmail, MdOutlineLocationOn, MdOutlinePhone } from 'react-icons/md';
import './style.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container px-4 py-12 mx-auto">
        {/* Footer top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div className="footer-column">
            <div className="mb-4">
              <Link to="/" className="inline-block">
                <img 
                  src="/logo.png" 
                  alt="BBMart Logo" 
                  className="max-w-[150px] h-auto invert-[80%]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/200x60?text=BBMart';
                  }}
                />
              </Link>
            </div>
            <p className="text-sm mb-4 text-gray-400">
              BBMart offers high-quality stationery and office supplies for professionals, 
              students, and businesses. We provide premium products that inspire creativity 
              and productivity.
            </p>
            <div className="social-icons flex space-x-3">
              <a href="#" className="social-icon" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="Pinterest">
                <FaPinterestP />
              </a>
              <a href="#" className="social-icon" aria-label="Youtube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-column">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/about-us" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us" className="footer-link">Contact Us</Link>
              </li>
              <li>
                <Link to="/productListing" className="footer-link">Products</Link>
              </li>
              <li>
                <Link to="/custom-printing" className="footer-link">Custom Printing</Link>
              </li>
              <li>
                <Link to="#" className="footer-link">FAQ</Link>
              </li>
              <li>
                <Link to="#" className="footer-link">Shipping & Returns</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-column">
            <h3 className="footer-title">Categories</h3>
            <ul className="footer-links">
              <li>
                <Link to="/productListing?category=notebooks" className="footer-link">Notebooks</Link>
              </li>
              <li>
                <Link to="/productListing?category=pens" className="footer-link">Pens & Pencils</Link>
              </li>
              <li>
                <Link to="/productListing?category=organization" className="footer-link">Organization</Link>
              </li>
              <li>
                <Link to="/productListing?category=accessories" className="footer-link">Accessories</Link>
              </li>
              <li>
                <Link to="/productListing?category=art-supplies" className="footer-link">Art Supplies</Link>
              </li>
              <li>
                <Link to="/productListing?category=office" className="footer-link">Office Supplies</Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="footer-column">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact">
              <li className="flex items-start mb-3">
                <div className="flex-shrink-0 mt-1">
                  <MdOutlineLocationOn className="text-lg text-gray-400 mr-3" />
                </div>
                <p className="text-sm text-gray-400">
                  123 Stationery Street, Paper City,<br />
                  PC 12345, India
                </p>
              </li>
              <li className="flex items-center mb-3">
                <MdOutlinePhone className="text-lg text-gray-400 mr-3" />
                <a href="tel:+1234567890" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +91 1234 567 890
                </a>
              </li>
              <li className="flex items-center mb-3">
                <MdOutlineEmail className="text-lg text-gray-400 mr-3" />
                <a href="mailto:info@bbmart.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  info@bbmart.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-5">
              <h4 className="text-sm font-medium mb-3 text-gray-300">Subscribe to our newsletter</h4>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="py-2 px-3 text-sm bg-gray-700 flex-grow rounded-l outline-none border border-gray-600 focus:border-blue-400"
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 transition-colors text-white py-2 px-4 text-sm font-medium rounded-r min-h-[44px]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="mt-10 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} BBMart. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
