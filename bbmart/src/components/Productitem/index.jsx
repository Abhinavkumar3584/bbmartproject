import React from 'react';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: '#3f51b5',
    color: 'white',
  },
  width: '35px',
  height: '35px',
  boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
  margin: '0 2px',
  '@media (max-width: 640px)': {
    width: '32px',
    height: '32px',
    padding: '4px',
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
    image: "https://placehold.co/300x300?text=Product"
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
    image
  } = product || defaultProduct;

  return (
    <div className="product-item group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
      <div className="img-wrapper relative overflow-hidden">
        {discount && (
          <div className="product-tag absolute top-3 left-3 z-10">
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">-{discount}%</span>
          </div>
        )}

        <Link to={`/product/${id}`} className="block">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/300x300?text=Product';
            }}
          />
        </Link>

        <div className="actions absolute right-2 top-2 md:right-0 md:top-1/2 md:-translate-y-1/2 md:opacity-0 md:group-hover:opacity-100 md:group-hover:right-2 transition-all duration-300 flex md:flex-col gap-1">
          <Tooltip title="Add to wishlist" placement="left">
            <StyledIconButton aria-label="wishlist">
              <FavoriteBorderIcon fontSize="small" />
            </StyledIconButton>
          </Tooltip>
          <Tooltip title="Quick view" placement="left">
            <StyledIconButton aria-label="quick view">
              <VisibilityIcon fontSize="small" />
            </StyledIconButton>
          </Tooltip>
          <Tooltip title="Compare" placement="left">
            <StyledIconButton aria-label="compare">
              <CompareArrowsIcon fontSize="small" />
            </StyledIconButton>
          </Tooltip>
          <Tooltip title="Add to cart" placement="left">
            <StyledIconButton aria-label="add to cart">
              <ShoppingCartIcon fontSize="small" />
            </StyledIconButton>
          </Tooltip>
        </div>
      </div>

      <div className="info p-3 py-2 flex flex-col">
        <div className="category">
          <Link to={`/productListing?category=${category}`} className="text-xs text-gray-500 hover:text-blue-600 transition-colors">
            {category?.charAt(0).toUpperCase() + category?.slice(1)}
          </Link>
        </div>

        <h3 className="text-sm sm:text-base font-medium mt-1 mb-2 line-clamp-2 h-12">
          <Link to={`/product/${id}`} className="hover:text-blue-600 transition-colors">
            {name}
          </Link>
        </h3>

        <div className="mt-auto">
          <div className="flex items-center mb-2">
            <Rating name="product-rating" value={rating} precision={0.5} size="small" readOnly className="text-amber-400" />
            {reviewCount > 0 && (
              <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
            )}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {oldPrice && (
              <span className="text-gray-500 line-through text-sm">${oldPrice.toFixed(2)}</span>
            )}
            <span className="text-red-600 font-bold text-base">${price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
