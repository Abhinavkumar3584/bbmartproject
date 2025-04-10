import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const HomeCatSlider = () => {
  // Category data with images, titles, and links
  const categories = [
    {
      id: 1,
      title: "Notebooks",
      image: "https://m.media-amazon.com/images/I/61e+jkIs9-L._AC_UF894,1000_QL80_.jpg",
      link: "/productListing?category=notebooks"
    },
    {
      id: 2,
      title: "Pens",
      image: "https://m.media-amazon.com/images/I/71eZM3QR+YL._AC_UF894,1000_QL80_.jpg",
      link: "/productListing?category=pens"
    },
    {
      id: 3,
      title: "Markers",
      image: "https://m.media-amazon.com/images/I/71rz1g4MAkL._AC_UF1000,1000_QL80_.jpg",
      link: "/productListing?category=markers"
    },
    {
      id: 4,
      title: "Organizers",
      image: "https://m.media-amazon.com/images/I/61wKZ4r7INL._AC_UF894,1000_QL80_.jpg",
      link: "/productListing?category=organizers"
    },
    {
      id: 5,
      title: "Accessories",
      image: "https://m.media-amazon.com/images/I/81SYo-Dp5HL._AC_UF894,1000_QL80_.jpg",
      link: "/productListing?category=accessories"
    },
    {
      id: 6,
      title: "Printing",
      image: "https://m.printvenue.com/static/shirt-17-10",
      link: "/custom-printing"
    },
    {
      id: 7,
      title: "Office Supplies",
      image: "https://m.media-amazon.com/images/I/71OxELSGQIL._AC_UF894,1000_QL80_.jpg",
      link: "/productListing?category=office-supplies"
    }
  ];

  return (
    <div className="py-6">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          // Mobile
          320: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          // Tablet
          640: {
            slidesPerView: 4,
            spaceBetween: 12,
          },
          // Desktop
          1024: {
            slidesPerView: 6,
            spaceBetween: 16,
          },
        }}
        className="category-swiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <Link to={category.link} className="block">
              <div className="category-item flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="img-container w-16 h-16 flex items-center justify-center mb-3">
                  <img
                    src={category.image}
                    className="w-full h-full object-contain"
                    alt={category.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://placehold.co/100x100?text=Category';
                    }}
                  />
                </div>
                <h3 className="text-sm font-medium text-center line-clamp-1">{category.title}</h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCatSlider;
