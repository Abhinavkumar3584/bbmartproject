import React from "react";
import Sidebar from "../../components/Sidebar/index.jsx";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ProductItem from "../../components/ProductItem/index.jsx";

const ProductListing = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/"
            className="link transition"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/"
            className="link transition"
          >
            <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Stationary
          </Link>
        </Breadcrumbs>
      </div>

      <div className="bg-white p-2 mt-4">
        <div className="container flex gap-3">
          <div className="sidebarwrapper w-[20%] h-full bg-white ">
            <Sidebar />
          </div>
          <div className="rightContent w-[80%]">

          <div className="bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center
justify-between">
            </div>



          <div className="grid grid-cols-4 md:grid-cols-4 gap-5">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
          
        </div>
        </div>

        
      </div>

      
    </section>
  );
};

export default ProductListing;
