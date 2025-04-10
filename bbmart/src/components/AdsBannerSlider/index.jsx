import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import BannerBox from '../BannerBox';

const AdsBannerSlider = ({ 
  banners,
  slidesPerView = { 
    mobile: 1, 
    tablet: 2, 
    desktop: 3 
  },
  autoplay = true,
  showPagination = true,
  className = ""
}) => {
  const defaultBanners = [
    {
      id: 1,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1738923793_Valentines-Week.jpg?im=Resize=(768,448)",
      title: "Valentine's Special",
      subtitle: "Shop our exclusive collection",
      link: "/"
    },
    {
      id: 2,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1738923793_Valentines-Week.jpg?im=Resize=(768,448)",
      title: "New Arrivals",
      subtitle: "Check out our latest products",
      link: "/"
    },
    {
      id: 3,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1738923793_Valentines-Week.jpg?im=Resize=(768,448)",
      title: "Special Offers",
      subtitle: "Limited time deals",
      link: "/"
    },
    {
      id: 4,
      img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1738923793_Valentines-Week.jpg?im=Resize=(768,448)",
      title: "Seasonal Collection",
      subtitle: "Trending items for the season",
      link: "/"
    }
  ];

  const items = banners || defaultBanners;

  return (
    <div className={`py-4 w-full ${className}`}>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        navigation={true}
        pagination={showPagination ? { clickable: true } : false}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
        breakpoints={{
          // Mobile
          320: {
            slidesPerView: slidesPerView.mobile,
            spaceBetween: 12
          },
          // Tablet
          640: {
            slidesPerView: slidesPerView.tablet,
            spaceBetween: 16
          },
          // Desktop
          1024: {
            slidesPerView: slidesPerView.desktop,
            spaceBetween: 20
          }
        }}
        className="banner-swiper rounded-lg overflow-hidden"
      >
        {items.map((banner) => (
          <SwiperSlide key={banner.id}>
            <BannerBox 
              img={banner.img} 
              title={banner.title}
              subtitle={banner.subtitle}
              link={banner.link} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;