import React from "react";
import "../ProductItem/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from 'react-icons/md';
import { IoCartOutline } from "react-icons/io5";



const ProductItem = () => {
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-2 border-[rgba(0,0,0,0.1)] flex items-center">
      <div className="group imgWrapper w-[25%] h-[210px] overflow-hidden rounded-md relative">
        <img
          src="https://images.meesho.com/images/products/483193801/rs2gw_400.webp"
          alt="product"
          className="w-full"
        />
        <span className="discount flex items center absolute top-[18px] left-[18px] z-50 bg-[#f11f1f] text-white rounded-lg p-1 text-[12px] font-[500]">10%</span>

        <div className="actions absolute top-[-200px] right-[0px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px]  opacity-0 group-hover:opacity-100">
         <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white
      text-black hover:!bg-[red] hover:text-white group">
          <MdZoomOutMap className="text-[18px] !text-black group-hover:text-white hover:!text-white"/>
          </Button>

          <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white
      text-black hover:!bg-[red] hover:text-white group">
          <IoGitCompareOutline className="text-[18px] !text-black group-hover:text-white hover:!text-white"/>
          </Button>

          <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white
      text-black hover:!bg-[red] hover:text-white group">
          <FaRegHeart className="text-[18px] !text-black group-hover:text-white hover:!text-white"/>
          </Button>
          </div>

      </div>

      <div className="info p-3 py-5 px-8 w-[75%]">
        <h6 className="text-[15px]">
          <Link to="/" className="link transition-all duration-300">
            Soy Green
          </Link>
        </h6>

        <h3 className="text-[18px] title mt-3 font-[500] mb-2 text-[rgba(0,0,0,0.9)]">
          
          <Link to="/" className="link transition-all duration-300">
            Sir Georgette Pink Color Saree with Blouse piece
          </Link>
        </h3>
        <p className="text-[14px] text-gray-600 mb-3 line-clamp-2">
          Elegant Georgette saree with intricate embroidery work. Comes with matching blouse piece, perfect for festive occasions and celebrations.
        </p>

        <Rating name="size-small" defaultValue={2} size="small" readOnly />

        <div className="flex items-center gap-4">
            <span className="oldPrice line-through text-grey-500 text-[16px] font-[500]">$500</span>
            <span className="price text-[red] font-bold">$500</span>
        </div>

        <div className="flex items-center gap-3 mt-3">
         <Button className="btn-org flex gap-2"><IoCartOutline className="text-[20px]"/>
            Add to Cart     

          </Button>
          </div>



      </div>
    </div>
  );
};

export default ProductItem;
