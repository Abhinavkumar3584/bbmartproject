import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../Sidebar/style.css";

import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Button from "@mui/material/Button";

import React, { useState } from "react";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";

export const Sidebar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  const [isOpenAvailabilityFilter, setisOpenAvailabilityFilter] =
    useState(true);

  const [isOpenSizeFilter, setisOpenSizeFilter] = useState(true);

  return (
    <aside className="sidebar py-5">
      <div className="box">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Shop by Category
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Stationary"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Printing"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Branding"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Essentials"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Clothing"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Groceries"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Stationary"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Stationary"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-3">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Availability
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            onClick={() =>
              setisOpenAvailabilityFilter(!isOpenAvailabilityFilter)
            }
          >
            {isOpenAvailabilityFilter ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenAvailabilityFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Available (20)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="In stock (20)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Not available (20)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-3 ">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Size
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            onClick={() => setisOpenSizeFilter(!isOpenSizeFilter)}
          >
            {isOpenSizeFilter ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Small (20)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Medium (20)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Large (20)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-4">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Filter By Price
        </h3>

        <RangeSlider />

        <div className="flex pt-4 pb-2 priceRange">
          <span className="text-[13px]">
            From: <strong className="text-dark">Rs: (100)</strong>
          </span>
          <span className="ml-auto text-[13px]">
            From: <strong className="text-dark">Rs: (5000)</strong>
          </span>
        </div>
      </div>

      <div className="box mt-4">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Filter By Ratings
        </h3>

        <di className="w-full">
        <Rating name="size-small" defaultValue={5} size="small" readOnly />
        </di>
        <di className="w-full">
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        </di>
        <di className="w-full">
        <Rating name="size-small" defaultValue={3} size="small" readOnly />
        </di>
        <di className="w-full">
        <Rating name="size-small" defaultValue={2} size="small" readOnly />
        </di>
        <di className="w-full">
        <Rating name="size-small" defaultValue={1} size="small" readOnly />
        </di>
       

    
      </div>


    </aside>
  );
};

export default Sidebar;
