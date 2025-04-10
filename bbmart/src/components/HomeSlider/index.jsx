import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./style.css";

// Banner data
const banners = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/G/31/img19/Baby/Homevision/Promo/1500x300-new-inc._SX2000_QL85_.jpg",
    alt: "Stationery Collection",
    link: "/productListing?category=notebooks"
  },
  {
    id: 2,
    image: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-25022023-MainBanner-Z10-P4-FortCollins-Min30.jpg",
    alt: "Art Supplies",
    link: "/productListing?category=markers"
  },
  {
    id: 3,
    image: "https://assets.ajio.com/cms/AJIO/WEB/25042023-UHP-D-MainBanner-P6-BrandDays-DNMX-Min60.jpg",
    alt: "Office Essentials",
    link: "/productListing?category=accessories"
  },
  {
    id: 4,
    image: "https://assets.ajio.com/cms/AJIO/WEB/30052023-UHP-D-MainBanner-P3-LevisAurelia-Flat60ExtraUpto30.jpg",
    alt: "Premium Collection",
    link: "/productListing?category=pens"
  }
];

const HomeSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check device size on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="home-slider pt-4 pb-6 sm:py-8">
      <div className="container px-4">
        <Swiper
          loop={true}
          spaceBetween={0}
          navigation={!isMobile}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <a href={banner.link} className="block w-full h-full">
                <div className="banner-slide relative overflow-hidden rounded-lg">
                  <img
                    src={banner.image}
                    alt={banner.alt}
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://placehold.co/1200x400?text=Banner';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex items-end">
                    <div className="p-4 sm:p-6 md:p-10 text-white max-w-md">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{banner.alt}</h2>
                      <p className="hidden sm:block text-sm sm:text-base">Discover our exclusive collection of premium products.</p>
                      <button className="mt-3 sm:mt-4 bg-white text-black hover:bg-blue-600 hover:text-white transition-colors py-2 px-4 rounded-md text-sm font-medium">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
