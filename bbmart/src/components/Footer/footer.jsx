import React, { useState } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { LiaWalletSolid } from "react-icons/lia";
import { CiGift } from "react-icons/ci";
import { RiCustomerService2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsChatLeftText } from "react-icons/bs";
import Button from "@mui/material/Button";
import { FaChevronDown } from "react-icons/fa";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { ImPinterest2 } from "react-icons/im";

const Footer = () => {
  const [mobileExpanded, setMobileExpanded] = useState({
    products: false,
    company: false
  });

  const toggleSection = (section) => {
    setMobileExpanded({
      ...mobileExpanded,
      [section]: !mobileExpanded[section]
    });
  };

  return (
    <>
      <footer className="py-6 bg-[#f2f2f2]">
        <div className="container px-4">
          {/* Services section */}
          <div className="flex flex-wrap items-center justify-center gap-4 py-8">
            <div className="col flex items-center justify-center flex-col group w-full sm:w-[45%] md:w-[30%] lg:w-[18%] mb-6 md:mb-4">
              <LiaShippingFastSolid className="text-[45px] md:text-[50px] transition-all duration-300 group-hover:text-[#f14c4c] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3 text-center">Free Shipping</h3>
              <p className="text-[12px] font-[500] text-center">For all Orders Over $100</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-full sm:w-[45%] md:w-[30%] lg:w-[18%] mb-6 md:mb-4">
              <PiKeyReturnLight className="text-[45px] md:text-[50px] transition-all duration-300 group-hover:text-[#f14c4c] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3 text-center">30 Days Return</h3>
              <p className="text-[12px] font-[500] text-center">For all Orders Over $100</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-full sm:w-[45%] md:w-[30%] lg:w-[18%] mb-6 md:mb-4">
              <LiaWalletSolid className="text-[45px] md:text-[50px] transition-all duration-300 group-hover:text-[#f14c4c] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3 text-center">Secure Payment</h3>
              <p className="text-[12px] font-[500] text-center">For all Orders Over $100</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-full sm:w-[45%] md:w-[30%] lg:w-[18%] mb-6 md:mb-4">
              <CiGift className="text-[45px] md:text-[50px] transition-all duration-300 group-hover:text-[#f14c4c] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3 text-center">Special Gifts</h3>
              <p className="text-[12px] font-[500] text-center">For all Orders Over $100</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-full sm:w-[45%] md:w-[30%] lg:w-[18%] mb-6 md:mb-4">
              <RiCustomerService2Line className="text-[45px] md:text-[50px] transition-all duration-300 group-hover:text-[#f14c4c] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3 text-center">Support 24*7</h3>
              <p className="text-[12px] font-[500] text-center">For all Orders Over $100</p>
            </div>
          </div>

          <br />
          <hr />

          {/* Main footer section */}
          <div className="footer flex flex-col md:flex-row py-8">
            {/* Contact section */}
            <div className="part1 w-full md:w-[25%] border-b md:border-b-0 md:border-r border-[rgba(0,0,0,0.1)] pb-6 md:pb-0 mb-6 md:mb-0 px-4 md:px-0">
              <h2 className="text-[18px] font-[600] mb-4">Contact us</h2>
              <p className="text-[13px] font-[400] pb-4">
                BBMart - Stationery & Printing
                <br />
                123 Main Street, Suite 101, India
              </p>
              <Link className="link text-[13px]" to="mailto:contact@bbmart.com">
                contact@bbmart.com
              </Link>
              <span className="text-[22px] font-[600] block w-full mt-3 mb-5 text-[#ec1212]">
                (+91) 9876-543-210
              </span>

              <div className="flex items-center gap-2">
                <BsChatLeftText className="text-[40px] text-[#f21717]" />
                <span className="text-[16px] font-[600]">
                  Online Chat
                  <br />
                  Get Expert Help
                </span>
              </div>
            </div>

            {/* Links and newsletter section */}
            <div className="part2 w-full md:w-[75%] flex flex-wrap md:pl-6 lg:pl-12">
              {/* Products section - collapsible on mobile */}
              <div className="part2_col1 w-full sm:w-1/2 lg:w-[25%] mb-6 md:mb-0">
                <div 
                  className="flex justify-between items-center mb-4 cursor-pointer md:cursor-default"
                  onClick={() => toggleSection('products')}
                >
                  <h2 className="text-[18px] font-[600]">Products</h2>
                  <FaChevronDown className={`md:hidden transition-transform ${mobileExpanded.products ? 'rotate-180' : ''}`} />
                </div>
                <ul className={`list overflow-hidden transition-all duration-300 ${mobileExpanded.products ? 'max-h-[500px]' : 'max-h-0 md:max-h-[500px]'}`}>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/productListing?category=notebooks" className="link">
                      Notebooks
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/productListing?category=pens" className="link">
                      Pens & Pencils
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/productListing?category=organizers" className="link">
                      Organizers
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/productListing?category=accessories" className="link">
                      Desk Accessories
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/custom-printing" className="link">
                      Custom Printing
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/productListing" className="link">
                      All Products
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company section - collapsible on mobile */}
              <div className="part2_col2 w-full sm:w-1/2 lg:w-[25%] mb-6 md:mb-0 md:pl-4 lg:pl-8">
                <div 
                  className="flex justify-between items-center mb-4 cursor-pointer md:cursor-default"
                  onClick={() => toggleSection('company')}
                >
                  <h2 className="text-[18px] font-[600]">Our Company</h2>
                  <FaChevronDown className={`md:hidden transition-transform ${mobileExpanded.company ? 'rotate-180' : ''}`} />
                </div>
                <ul className={`list overflow-hidden transition-all duration-300 ${mobileExpanded.company ? 'max-h-[500px]' : 'max-h-0 md:max-h-[500px]'}`}>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/about-us" className="link">
                      About Us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/contact-us" className="link">
                      Contact Us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/cart" className="link">
                      Cart
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/login" className="link">
                      Login
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/signup" className="link">
                      Register
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/custom-printing" className="link">
                      Customization
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="part2_col3 w-full sm:w-full lg:w-[50%] md:pl-4 lg:pl-8 flex-col pr-4 lg:pr-8 mt-6 md:mt-0">
                <h2 className="text-[18px] md:text-[20px] font-[600] mb-4">
                  Subscribe to newsletter
                </h2>
                <p className="text-[13px]">
                  Subscribe to our newsletter to receive updates on new products, special offers, and exclusive discounts.
                </p>

                <form className="mt-5">
                  <input
                    type="text"
                    className="w-full h-[45px] border outline-none px-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.3)]"
                    placeholder="Your Email Address"
                  />
                  <Button className="btn-org w-full sm:w-auto" style={{ backgroundColor: '#3f51b5', color: 'white' }}>SUBSCRIBE</Button>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={<span className="text-[13px]">I agree to the terms and Conditions and the Privacy Policy</span>}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom strip */}
      <div className="bottomStrip border-t border-[rgba(0,0,0,0.1)] py-3 bg-white">
        <div className="container px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <ul className="flex items-center gap-4 mb-3 sm:mb-0 justify-center sm:justify-start w-full sm:w-auto">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[red] transition-all"
              >
                <FaFacebookF className="text-[18px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[red] transition-all"
              >
                <FaInstagram className="text-[18px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[red] transition-all"
              >
                <FiYoutube className="text-[18px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[red] transition-all"
              >
                <ImPinterest2 className="text-[18px] group-hover:text-white" />
              </Link>
            </li>
          </ul>

          <span className="text-center sm:text-left text-[14px]">
            2025 BBMart. All rights reserved.
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;