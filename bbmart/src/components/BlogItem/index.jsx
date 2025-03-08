import React from "react";
import { IoMdTime } from "react-icons/io";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogItem = () => {
  return (
    <div className="blogItem group">
      <div className="imgwrappe w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src="https://elastic-path.transforms.svdcdn.com/production/images/Card-Images/1280x792_2025-Graphic.png?w=520&h=322&q=90&fm=webp&fit=crop&dm=1728503130&s=a6e86de50b9d013f257ba5e455c64251"
          alt="blog"
          className="w-full transition-all group-hover:scale-105"
        />

        <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-58 bg-[#e70c0c] rounded-md p-1 text-[11px] font-[500] gap-1">
          <IoMdTime className="text-[16px]" /> 03 MARCH, 2025
        </span>
      </div>

      <div className="info py-4">
      <h2 className="text-[15px] font-[600] text-black">
          <Link to="/" className="link">
            Nullam ullamcorper ornare molestie
          </Link>
        </h2>
        <p className="text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry....
        </p>
        <Link className="link font-[500] text-[14px] flex items-center gap-1">
          Read More
          <FaArrowRightFromBracket />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
