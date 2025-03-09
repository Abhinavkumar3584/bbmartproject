import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/index.jsx";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ProductItem from "../../components/ProductItem/index.jsx";
import ProductitemListView from "../../components/ProductitemListView/index.jsx";

import { IoGrid } from "react-icons/io5";
import { ImMenu } from "react-icons/im";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import Button from "@mui/material/Button";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const ProductListing = () => {
  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="py-5 pb-0">
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
          <div className="rightContent w-[80%] py-3">
            <div
              className="bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center
justify-between"
            >
              <div className="col1 flex items-center ">
                <Button
                  className="!w-[40px] !h-[40px] !min-w-[48px] !rounded-full !text-[#000]"
                  onClick={() => setItemView("list")}
                >
                  <ImMenu className="text-[rgba(0,0,0,0.7)]" />
                </Button>

                <Button
                  className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]"
                  onClick={() => setItemView("grid")}
                >
                  <IoGrid className="text-[rgba(0,0,0,0.7)]" />
                </Button>

                <span className="text-[14px] font-[500] p1-3 text-[rgba(0,0,0,0.7)]">
                  There are 27 products.
                </span>
              </div>

              <div className="col2 flex items-center justify-end gap-2 pr-4">
                <span className="text-[14px] font-[500] p1-3 text-[rgba(0,0,0,0.7)]">
                  Sort by:{" "}
                </span>

                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className=" !text-[#000] !bg-white !text-[14px] !capitalize !border-1 !border-[#000] !rounded-[10px] "
                >
                  Filter Out
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Sales, high to low
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Relevance
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Name: A to Z
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Name: Z to A
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Price, low to high
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Price, high to low
                  </MenuItem>
                </Menu>
              </div>
            </div>

            <div
              className={`grid ${
                itemView === "grid"
                  ? "grid-cols-4 md:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-1"
              } gap-4`}
            >
              {itemView === "grid" ? (
                <>
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </>
              ) : (
                <>
                  <ProductitemListView />
                  <ProductitemListView />
                  <ProductitemListView />
                  <ProductitemListView />
                </>
              )}
            </div>

      <div className="flex items-center justify-center mt-5">
      <Pagination count={10} variant="outlined" color="primary" />
      </div>
    
      
    
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
