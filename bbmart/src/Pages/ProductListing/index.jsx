import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/index.jsx";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ProductItem from "../../components/Productitem/index.jsx";
import ProductitemListView from "../../components/ProductitemListView/index.jsx";
import { IoGrid } from "react-icons/io5";
import { ImMenu } from "react-icons/im";
import { Button, IconButton, Drawer, Divider } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from '@mui/material/Pagination';
import { FaFilter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdSort } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { products, getProductsByCategory } from "../../data/products";

const ProductListing = () => {
  const [itemView, setItemView] = useState("grid");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sortAnchorEl, setSortAnchorEl] = useState(null);
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [sortOption, setSortOption] = useState("default");
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const sortMenuOpen = Boolean(sortAnchorEl);
  const filterMenuOpen = Boolean(filterAnchorEl);
  
  useEffect(() => {
    // Fetch products based on category
    setLoading(true);
    let filteredProducts = category ? getProductsByCategory(category) : products;
    
    // Sort products based on selected option
    switch (sortOption) {
      case "price-low":
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filteredProducts = [...filteredProducts].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "rating":
        filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sorting (popularity/review count)
        filteredProducts = [...filteredProducts].sort((a, b) => b.reviewCount - a.reviewCount);
    }
    
    setProductList(filteredProducts);
    setLoading(false);
  }, [category, sortOption]);
  
  const handleSortClick = (event) => {
    setSortAnchorEl(event.currentTarget);
  };
  
  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };
  
  const handleSortClose = () => {
    setSortAnchorEl(null);
  };
  
  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const handleSortChange = (option) => {
    setSortOption(option);
    handleSortClose();
  };
  
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    // Scroll to top of product section
    window.scrollTo({
      top: document.querySelector(".product-section").offsetTop - 100,
      behavior: "smooth"
    });
  };
  
  // Calculate current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(productList.length / itemsPerPage);
  
  const getCategoryTitle = () => {
    if (!category) return "All Products";
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <section className="py-3 pb-0 bg-gray-50 product-section">
      <div className="container px-4">
        <Breadcrumbs aria-label="breadcrumb" className="text-sm flex-wrap">
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
          <span className="text-xs sm:text-sm font-medium">
            {getCategoryTitle()}
          </span>
        </Breadcrumbs>
        
        <h1 className="text-xl sm:text-2xl font-bold mt-4 mb-6">{getCategoryTitle()}</h1>
      </div>

      <div className="bg-white p-2 mt-4 shadow-sm">
        <div className="container px-4">
          {/* Mobile filter button - visible only on small screens */}
          <div className="block md:hidden w-full mb-4">
            <Button 
              variant="outlined" 
              startIcon={<FaFilter />}
              onClick={toggleSidebar}
              fullWidth
              className="!border-gray-300 !text-gray-700"
            >
              Show Filters
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            {/* Sidebar - hidden on mobile, shown as drawer */}
            <div className="hidden md:block md:w-1/4 lg:w-1/5 bg-white">
              <Sidebar />
            </div>

            {/* Mobile sidebar drawer */}
            <Drawer
              anchor="left"
              open={sidebarOpen}
              onClose={toggleSidebar}
              className="md:hidden"
            >
              <div className="w-[280px] p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Filters</h3>
                  <IconButton onClick={toggleSidebar} size="small">
                    <IoClose />
                  </IconButton>
                </div>
                <Divider className="mb-4" />
                <Sidebar />
              </div>
            </Drawer>

            {/* Product content area */}
            <div className="w-full md:w-3/4 lg:w-4/5 py-2">
              {/* Toolbar */}
              <div className="bg-gray-100 p-3 mb-4 rounded-md flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <IconButton 
                    onClick={() => setItemView("list")}
                    className={`!p-2 ${itemView === "list" ? "!bg-blue-100" : ""}`}
                    aria-label="List view"
                  >
                    <ImMenu className={`${itemView === "list" ? "text-blue-600" : "text-gray-600"}`} />
                  </IconButton>

                  <IconButton 
                    onClick={() => setItemView("grid")}
                    className={`!p-2 ${itemView === "grid" ? "!bg-blue-100" : ""}`}
                    aria-label="Grid view"
                  >
                    <IoGrid className={`${itemView === "grid" ? "text-blue-600" : "text-gray-600"}`} />
                  </IconButton>

                  <span className="text-xs sm:text-sm font-medium text-gray-700 hidden sm:inline-block">
                    {productList.length} products
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 hidden sm:inline-block">
                    Sort by:
                  </span>

                  <Button
                    id="sort-button"
                    aria-controls={sortMenuOpen ? "sort-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={sortMenuOpen ? "true" : undefined}
                    onClick={handleSortClick}
                    startIcon={<MdSort />}
                    variant="outlined"
                    size="small"
                    className="!text-gray-700 !border-gray-300 !capitalize !text-xs sm:!text-sm"
                  >
                    <span className="hidden xs:inline-block">Sort</span>
                  </Button>
                  <Menu
                    id="sort-menu"
                    anchorEl={sortAnchorEl}
                    open={sortMenuOpen}
                    onClose={handleSortClose}
                    MenuListProps={{
                      "aria-labelledby": "sort-button",
                    }}
                  >
                    <MenuItem onClick={() => handleSortChange('default')}>Popularity</MenuItem>
                    <MenuItem onClick={() => handleSortChange('rating')}>Rating</MenuItem>
                    <MenuItem onClick={() => handleSortChange('name-asc')}>Name: A to Z</MenuItem>
                    <MenuItem onClick={() => handleSortChange('name-desc')}>Name: Z to A</MenuItem>
                    <MenuItem onClick={() => handleSortChange('price-low')}>Price: Low to High</MenuItem>
                    <MenuItem onClick={() => handleSortChange('price-high')}>Price: High to Low</MenuItem>
                  </Menu>
                </div>
              </div>

              {loading ? (
                <div className="flex justify-center items-center py-12">
                  <div className="spinner"></div>
                </div>
              ) : (
                <>
                  {currentItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <p className="text-lg font-medium text-gray-600 mb-4">No products found</p>
                      <p className="text-gray-500">Try adjusting your filters or search term</p>
                      <Button 
                        variant="contained"
                        className="mt-6 bg-blue-600 hover:bg-blue-700"
                        href="/productListing"
                      >
                        View All Products
                      </Button>
                    </div>
                  ) : (
                    <div
                      className={
                        itemView === "grid"
                          ? "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
                          : "grid grid-cols-1 gap-4"
                      }
                    >
                      {itemView === "grid" ? (
                        currentItems.map(item => (
                          <ProductItem key={item.id} product={item} />
                        ))
                      ) : (
                        currentItems.map(item => (
                          <ProductitemListView key={item.id} product={item} />
                        ))
                      )}
                    </div>
                  )}
                </>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center my-6">
                  <Pagination 
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    variant="outlined" 
                    color="primary" 
                    size="medium"
                    className="pagination-responsive" 
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
