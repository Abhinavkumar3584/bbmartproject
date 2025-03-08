import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation,Autoplay } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeSlider pt-4 py-8">
      <div className="container">
        <Swiper
        loop={true}
        
          spaceBetween={15}
          navigation={true}
          modules={[Navigation,Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="/choices-shopping-winter-holidays-concept-cute-smiling-redhead-girl-with-curly-red-hair-yellow.jpg"
                alt="banner"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="/choices-shopping-winter-holidays-concept-cute-smiling-redhead-girl-with-curly-red-hair-yellow.jpg"
                alt="banner"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="/choices-shopping-winter-holidays-concept-cute-smiling-redhead-girl-with-curly-red-hair-yellow.jpg"
                alt="banner"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="/choices-shopping-winter-holidays-concept-cute-smiling-redhead-girl-with-curly-red-hair-yellow.jpg"
                alt="banner"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="/choices-shopping-winter-holidays-concept-cute-smiling-redhead-girl-with-curly-red-hair-yellow.jpg"
                alt="banner"
                className="w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
