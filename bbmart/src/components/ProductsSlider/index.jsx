import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
// import { Pagination } from 'swiper/modules';

// import required modules
import { Navigation } from "swiper/modules";
import ProductItem from "../Productitem";

const ProductsSlider = (props) => {
  return (
    <div className="productsSlider py-3">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={15}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>

        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>

        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>

        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>

        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>

        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>

        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>

        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>

        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>




      </Swiper>
    </div>
  );
};

export default ProductsSlider;
