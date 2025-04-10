import React, { useState, useEffect } from "react";
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
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
import BlogItem from "../../components/BlogItem";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { products } from "../../data/products";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "10 Creative Ways to Use Your Notebook",
    excerpt: "Discover unique and inspirational ways to utilize your notebook beyond simple note-taking...",
    date: "April 8, 2025",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "The History of Stationery: From Quills to Digital",
    excerpt: "Explore the fascinating evolution of writing instruments throughout human history...",
    date: "April 2, 2025",
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Sustainable Stationery: Eco-Friendly Options",
    excerpt: "Learn about environmentally conscious alternatives to traditional paper products...",
    date: "March 27, 2025",
    image: "https://images.unsplash.com/photo-1544239265-ee5eedde5469?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Bullet Journaling: Organization Made Beautiful",
    excerpt: "Master the art of bullet journaling with these tips and tricks for beginners...",
    date: "March 20, 2025",
    image: "https://images.unsplash.com/photo-1598275326217-c2d47df9c7ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Back to School: Essential Supplies for Success",
    excerpt: "Prepare for the new academic year with our guide to must-have school supplies...",
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1600058644231-f59e7e431501?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

// Filter products by category for each section
const getProductsByCategory = (category) => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase()).slice(0, 8);
};

// Create product sets
const popularProducts = products.filter(product => product.popular).slice(0, 10);
const newProducts = products.slice(0, 10);
const featuredProducts = products.filter(product => product.featured).slice(0, 10);

function ProductTabs() {
  const [value, setValue] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ 
      width: '100%', 
      typography: { 
        fontSize: { 
          xs: '0.8rem', 
          sm: '0.875rem' 
        } 
      } 
    }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="product category tabs"
        sx={{
          '& .MuiTab-root': {
            minHeight: '44px',
            padding: '8px 16px',
            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' }
          }
        }}
      >
        <Tab label="All Products" />
        <Tab label="Notebooks" />
        <Tab label="Pens" />
        <Tab label="Markers" />
        <Tab label="Accessories" />
        <Tab label="Organizers" />
      </Tabs>
    </Box>
  );
}

export const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <HomeSlider />
      <HomeCatSlider />
      
      {/* Popular Products Section */}
      <section className="bg-white py-8 mt-4">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-semibold mb-1">Popular Products</h2>
              <p className="text-sm text-gray-600">
                Do not miss the current offers until the end of March
              </p>
            </div>
            <div className="w-full md:w-auto md:flex-1">
              <ProductTabs />
            </div>
          </div>

          <ProductsSlider 
            products={popularProducts} 
            slidesPerViewMobile={1.2}
            slidesPerViewTablet={2.5}
            slidesPerViewDesktop={4}
            slidesPerViewLarge={5}
          />
        </div>
      </section>

      {/* Free Shipping Banner */}
      <section className="py-6 bg-white">
        <div className="container px-4">
          <div className="shipping-banner w-full lg:w-[90%] mx-auto py-4 px-4 sm:px-6 border-2 border-red-200 rounded-lg shadow-sm bg-gradient-to-r from-red-50 to-white">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FaShippingFast className="text-3xl sm:text-4xl text-red-500" />
                <span className="text-base sm:text-lg font-semibold uppercase">
                  Free Shipping
                </span>
              </div>

              <div className="text-center sm:text-left">
                <p className="font-medium text-sm sm:text-base">
                  Free delivery on your first order and over ₹500
                </p>
              </div>

              <p className="font-bold text-lg sm:text-xl text-red-600">Only ₹500/-</p>
            </div>
          </div>

          <div className="mt-8">
            <AdsBannerSlider items={4} />
          </div>
        </div>
      </section>

      {/* Latest Products Section */}
      <section className="py-8 bg-white">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold">Latest Products</h2>
            <a href="/productListing" className="text-sm text-blue-600 hover:underline">
              View All
            </a>
          </div>
          
          <ProductsSlider 
            products={newProducts}
            slidesPerViewMobile={1.2}
            slidesPerViewTablet={2.5}
            slidesPerViewDesktop={4}
            slidesPerViewLarge={5}
          />

          <div className="mt-8">
            <AdsBannerSlider items={2} />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-8 bg-white">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold">Featured Products</h2>
            <a href="/productListing" className="text-sm text-blue-600 hover:underline">
              View All
            </a>
          </div>
          
          <ProductsSlider 
            products={featuredProducts}
            slidesPerViewMobile={1.2}
            slidesPerViewTablet={2.5}
            slidesPerViewDesktop={4}
            slidesPerViewLarge={5}
          />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-8 bg-gray-50">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold">From the Blog</h2>
            <Link to="/blog" className="text-sm text-blue-600 hover:underline">
              View All Posts
            </Link>
          </div>
          
          <Swiper
            slidesPerView={isMobile ? 1.2 : 3}
            spaceBetween={20}
            navigation={!isMobile}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation, Pagination]}
            className="blog-swiper pb-10"
          >
            {blogPosts.map((blog) => (
              <SwiperSlide key={blog.id}>
                <BlogItem post={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Home;
