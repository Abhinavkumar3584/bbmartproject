import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { LiaWalletSolid } from "react-icons/lia";
import { CiGift } from "react-icons/ci";
import { RiCustomerService2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsChatLeftText } from "react-icons/bs";
import Button from "@mui/material/Button";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { ImPinterest2 } from "react-icons/im";

const Footer = () => {
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

            {/* Repeat similar changes for other service columns */}
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
            <div className="part1 w-full md:w-[25%] border-b md:border-b-0 md:border-r border-[rgba(0,0,0,0.1)] pb-6 md:pb-0 mb-6 md:mb-0">
              <h2 className="text-[18px] font-[600] mb-4">Contact us</h2>
              <p className="text-[13px] font-[400] pb-4">
                Classyshop - Mega Super Store
                <br />
                507-Union Trade Centre France
              </p>
              <Link className="link text-[13px]" to="mailto:someone@example.com">
                sales@yourcompany.com
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
              <div className="part2_col1 w-full sm:w-1/2 lg:w-[25%] mb-6 md:mb-0">
                <h2 className="text-[18px] font-[600] mb-4">Products</h2>
                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Prices drop
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      New products
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Best sales
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Contact us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="part2_col2 w-full sm:w-1/2 lg:w-[25%] mb-6 md:mb-0 md:pl-4 lg:pl-8">
                <h2 className="text-[18px] font-[600] mb-4">Our Company</h2>
                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Prices drop
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      New products
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Best sales
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Contact us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="part2_col3 w-full sm:w-full lg:w-[50%] md:pl-4 lg:pl-8 flex-col pr-4 lg:pr-8">
                <h2 className="text-[18px] md:text-[20px] font-[600] mb-4">
                  Subscribe to news letter
                </h2>
                <p className="text-[13px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  ullam quasi earum! Veniam rerum quam veritatis facilis
                </p>

                <form className="mt-5">
                  <input
                    type="text"
                    className="w-full h-[45px] border outline-none px-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.3)]"
                    placeholder="Your Email Address"
                  />
                  <Button className="btn-org w-full sm:w-auto">SUBSCRIBE</Button>
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
          <ul className="flex items-center gap-4 mb-3 sm:mb-0">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[red] transition-all"
              >
                <FaFacebookF className="text-[18px] group-hover:text-white" />
              </Link>
            </li>
            {/* Repeat other social icons with same structure */}
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
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[red] transition-all"
              >
                <FaInstagram className="text-[18px] group-hover:text-white" />
              </Link>
            </li>
          </ul>

          <p className="text-[13px] text-center">@ - 2024 Ecommerce (Big & Best Mart Pvt Limited)</p>
        </div>
      </div>
    </>
  );
};

export default Footer;