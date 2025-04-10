import React, { useState } from 'react';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ProductZoom from '../../components/ProductZoom/Index';
import Rating from '@mui/material/Rating';
import { Button, IconButton, Tabs, Tab, Box, Typography, Divider } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from 'react-icons/md';
import ProductItem from '../../components/Productitem';

// Sample product data to simulate a database
const productData = {
  id: 1,
  name: "Premium Notebook with Leather Cover",
  category: "Notebooks",
  price: 45.99,
  oldPrice: 59.99,
  rating: 4.5,
  reviewCount: 23,
  inStock: true,
  description: "This premium notebook features a genuine leather cover, 200 pages of high-quality 100 GSM cream paper, and an elegant bookmark. Perfect for professionals, students, and anyone who appreciates fine stationery.",
  features: [
    "Genuine leather cover",
    "200 pages (100 sheets) of premium cream paper",
    "Acid-free, 100 GSM paper",
    "Thread-bound for durability",
    "Elastic closure band",
    "Inner pocket for loose notes",
    "Ribbon bookmark",
    "Size: 7 x 10 inches (17.8 x 25.4 cm)"
  ],
  specifications: {
    "Brand": "BBMart",
    "Material": "Leather cover, premium paper",
    "Dimensions": "7 x 10 inches (17.8 x 25.4 cm)",
    "Weight": "450g",
    "Paper Type": "100 GSM cream",
    "Page Count": "200 pages",
    "Binding": "Thread-bound",
    "Origin": "Made in India"
  },
  images: [
    "https://m.media-amazon.com/images/I/71agZnsk6IL._AC_UF894,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/71FegSuP91L._AC_UF894,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/71KZttLFJXL._AC_UF894,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/71+motR9GXL._AC_UF894,1000_QL80_.jpg"
  ]
};

// Sample related products
const relatedProducts = [
  {
    id: 2,
    name: "Deluxe Journal with Gold Embossing",
    price: 39.99
  },
  {
    id: 3,
    name: "Pocket-sized Travel Notebook",
    price: 24.99
  },
  {
    id: 4,
    name: "Professional Planner 2025",
    price: 35.99
  },
  {
    id: 5,
    name: "Classic Ruled Notebook",
    price: 19.99
  }
];

// Tab Panel Component for product details
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-tabpanel-${index}`}
      aria-labelledby={`product-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleQuantityChange = (amount) => {
    const newQuantity = Math.max(1, quantity + amount);
    setQuantity(newQuantity);
  };

  return (
    <>
      <div className="py-3 sm:py-5 bg-gray-50">
        <div className="container px-4">
          <Breadcrumbs aria-label="breadcrumb" className="text-sm mb-4">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
              <span className="text-xs sm:text-sm">Home</span>
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/productListing?category=notebooks"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <span className="text-xs sm:text-sm">Notebooks</span>
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
              fontSize="inherit"
            >
              <span className="text-xs sm:text-sm truncate max-w-[150px] sm:max-w-none">
                {productData.name}
              </span>
            </Typography>
          </Breadcrumbs>
        </div>
      </div>

      <section className="py-4 sm:py-8 bg-white">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Product Images */}
            <div className="w-full md:w-[45%] lg:w-[40%]">
              <ProductZoom images={productData.images} />
            </div>

            {/* Product Info */}
            <div className="w-full md:w-[55%] lg:w-[60%]">
              <h1 className="text-xl sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3">
                {productData.name}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <Rating value={productData.rating} precision={0.5} readOnly size="small" />
                <span className="text-sm text-gray-600">({productData.reviewCount} reviews)</span>
              </div>

              <div className="mb-4">
                <span className="text-lg sm:text-xl font-bold text-blue-600">
                  ${productData.price.toFixed(2)}
                </span>
                {productData.oldPrice && (
                  <span className="ml-3 text-sm sm:text-base text-gray-500 line-through">
                    ${productData.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <div className="text-sm mb-6 text-gray-700">
                <p>{productData.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-gray-700 mr-2 w-24">Availability:</span>
                  {productData.inStock ? (
                    <span className="text-green-600 font-medium">In Stock</span>
                  ) : (
                    <span className="text-red-600 font-medium">Out of Stock</span>
                  )}
                </div>

                <div className="flex items-center">
                  <span className="text-gray-700 mr-2 w-24">Category:</span>
                  <span>{productData.category}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                <div className="flex items-center h-12 rounded-md border border-gray-300">
                  <Button 
                    variant="text" 
                    size="small" 
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="h-full aspect-square text-xl"
                  >
                    -
                  </Button>
                  <div className="w-12 text-center font-medium">{quantity}</div>
                  <Button 
                    variant="text" 
                    size="small" 
                    onClick={() => handleQuantityChange(1)}
                    className="h-full aspect-square text-xl"
                  >
                    +
                  </Button>
                </div>

                <Button 
                  variant="contained" 
                  startIcon={<MdOutlineShoppingCart />}
                  className="bg-blue-600 hover:bg-blue-700 py-3"
                  fullWidth
                >
                  Add to Cart
                </Button>

                <IconButton aria-label="add to favorites" className="border border-gray-300 rounded-md h-12 w-12">
                  <FaRegHeart />
                </IconButton>

                <IconButton aria-label="compare" className="border border-gray-300 rounded-md h-12 w-12">
                  <IoGitCompareOutline />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-6 sm:py-8 bg-gray-50">
        <div className="container px-4">
          <Box sx={{ 
            width: '100%',
            typography: {
              fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem' }
            }
          }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs 
                value={tabValue} 
                onChange={handleTabChange} 
                aria-label="product details tabs"
                variant="scrollable"
                scrollButtons="auto"
                sx={{ 
                  '& .MuiTab-root': { 
                    fontSize: { xs: '0.875rem', sm: '0.9rem' },
                    padding: { xs: '10px', sm: '12px 16px' }
                  } 
                }}
              >
                <Tab label="Description" id="product-tab-0" />
                <Tab label="Features" id="product-tab-1" />
                <Tab label="Specifications" id="product-tab-2" />
                <Tab label="Reviews" id="product-tab-3" />
              </Tabs>
            </Box>
            <TabPanel value={tabValue} index={0}>
              <p className="text-sm sm:text-base text-gray-700">{productData.description}</p>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <ul className="list-disc pl-5 space-y-2">
                {productData.features.map((feature, index) => (
                  <li key={index} className="text-sm sm:text-base text-gray-700">{feature}</li>
                ))}
              </ul>
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(productData.specifications).map(([key, value]) => (
                  <div key={key} className="flex border-b pb-2">
                    <span className="text-sm sm:text-base font-medium w-36">{key}:</span>
                    <span className="text-sm sm:text-base text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel value={tabValue} index={3}>
              <div className="text-center py-4">
                <p className="text-sm sm:text-base text-gray-700 mb-4">This product has {productData.reviewCount} reviews with an average rating of {productData.rating} out of 5.</p>
                <Button variant="outlined" size="medium">Write a Review</Button>
              </div>
            </TabPanel>
          </Box>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-8 bg-white">
        <div className="container px-4">
          <h2 className="text-lg sm:text-xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, index) => (
              <ProductItem key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;