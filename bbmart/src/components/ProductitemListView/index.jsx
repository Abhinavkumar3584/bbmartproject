import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Styled icon button for consistent appearance and touch targets
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: '#3f51b5',
    color: 'white',
  },
  width: '40px',
  height: '40px',
  boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
  margin: '0 4px',
  '@media (max-width: 640px)': {
    width: '36px',
    height: '36px',
  },
}));

const ProductItem = ({ product }) => {
  // Default values if product is not provided
  const defaultProduct = {
    id: 1,
    name: "Sample Product",
    category: "category",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4,
    reviewCount: 10,
    discount: 25,
    image: "https://placehold.co/300x300?text=Product",
    description: "This is a sample product description. Replace with actual product description."
  };
  
  // Use provided product data or defaults
  const {
    id, 
    name, 
    category,
    price, 
    oldPrice, 
    rating, 
    reviewCount,
    discount,
    image,
    description
  } = product || defaultProduct;

  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      {/* Image section */}
      <div className="relative w-full sm:w-1/4 h-64 sm:h-auto overflow-hidden">
        {discount && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">-{discount}%</span>
          </div>
        )}
        
        <Link to={`/product/${id}`} className="block h-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/300x300?text=Product';
            }}
          />
        </Link>
      </div>

      {/* Content section */}
      <div className="flex-1 p-4 sm:p-6 flex flex-col">
        <div className="mb-1">
          <Link to={`/productListing?category=${category}`} className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
            {category?.charAt(0).toUpperCase() + category?.slice(1)}
          </Link>
        </div>

        <h3 className="text-lg sm:text-xl font-medium mb-2">
          <Link to={`/product/${id}`} className="hover:text-blue-600 transition-colors">
            {name}
          </Link>
        </h3>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {description || `${name} - high-quality product available at BBMart.`}
        </p>

        <div className="flex items-center mb-3">
          <Rating 
            value={rating} 
            precision={0.5} 
            size="small" 
            readOnly 
            className="text-amber-400"
          />
          {reviewCount > 0 && (
            <span className="text-xs text-gray-500 ml-2">({reviewCount} reviews)</span>
          )}
        </div>

        <div className="flex items-center gap-3 mb-4">
          {oldPrice && (
            <span className="text-gray-500 line-through text-sm">${oldPrice.toFixed(2)}</span>
          )}
          <span className="text-red-600 font-bold text-xl">${price.toFixed(2)}</span>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2">
          <Button 
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            className="bg-blue-600 hover:bg-blue-700 min-h-[44px] px-4 py-2 text-sm"
          >
            Add to Cart
          </Button>
          
          <div className="flex items-center">
            <Tooltip title="Add to wishlist">
              <StyledIconButton aria-label="wishlist">
                <FavoriteBorderIcon />
              </StyledIconButton>
            </Tooltip>
            
            <Tooltip title="Quick view">
              <StyledIconButton aria-label="quick view">
                <VisibilityIcon />
              </StyledIconButton>
            </Tooltip>
            
            <Tooltip title="Compare">
              <StyledIconButton aria-label="compare">
                <CompareArrowsIcon />
              </StyledIconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
