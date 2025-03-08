import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../components/AdsBannerSlider";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import ProductsSlider from "../../components/ProductsSlider";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
// import { Pagination } from 'swiper/modules';

// import required modules
import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem";
import Footer from "../../components/Footer/footer";

function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
    >
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
      <Tab label="Item Four" />
      <Tab label="Item Five" />
      <Tab label="Item Six" />
      <Tab label="Item Seven" />
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
      <Tab label="Item Four" />
      <Tab label="Item Five" />
      <Tab label="Item Six" />
      <Tab label="Item Seven" />
    </Tabs>
  );
}

export const Home = () => {
  return (
    <>
      <HomeSlider />
      <HomeCatSlider />
      <section className="bg-white py-10 mt-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[25px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[400]">
                Do not miss the current offers until the end of March
              </p>
            </div>
            <div className="rightSec w-[60%]">
              <ScrollableTabsButtonAuto />
            </div>
          </div>

          <ProductsSlider items={6} />
        </div>
      </section>

      <section className="py-10 bg-white mt-5">
        <div className="container">
          <div className="freeShipping w-[80%] m-auto py-4 p-4 border-2 border-[#ffa9a9] flex items-center justify-between  rounded-md mb-5">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                {" "}
                Free Shipping
              </span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[500]">
                Free delivery on your first order and over 500 Rs
              </p>
            </div>

            <p className="font-bold text-[25px]"> - Only Rs 500/-</p>
          </div>

          <AdsBannerSlider items={4} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[25px] font-[600]">Latest Products</h2>
          <ProductsSlider items={6} />

          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[25px] font-[600]">Featured Products</h2>
          <ProductsSlider items={6} />

          <AdsBannerSlider items={2} />
        </div>
      </section>

      <section className="py-5 pb-8 pt-0 bg-white blogsection">
      
        <div className="container py-5">
        <h2 className="text-[25px] font-[600] mb-4">From the Blog</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

          </Swiper>
        </div>
      </section>

      <Footer />

    </>
  );
};

export default Home;
