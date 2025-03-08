import React from 'react';
// import './index.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
// import { Pagination } from 'swiper/modules';

// import required modules
import { Navigation } from "swiper/modules";
import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {
    return (
      <div className='py-5 w-full'>
        <Swiper
          slidesPerView={props.items}
          spaceBetween={15}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <BannerBox img={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1738923793_Valentines-Week.jpg?im=Resize=(768,448)"} link={'/'} />
          </SwiperSlide>

          <SwiperSlide>
            <BannerBox img={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1738923793_Valentines-Week.jpg?im=Resize=(768,448)"} link={'/'} />
          </SwiperSlide>

          <SwiperSlide>
            <BannerBox img={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1738923793_Valentines-Week.jpg?im=Resize=(768,448)"} link={'/'} />
          </SwiperSlide>

          <SwiperSlide>
            <BannerBox img={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1738923793_Valentines-Week.jpg?im=Resize=(768,448)"} link={'/'} />
          </SwiperSlide>

          <SwiperSlide>
            <BannerBox img={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1738923793_Valentines-Week.jpg?im=Resize=(768,448)"} link={'/'} />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default AdsBannerSlider;