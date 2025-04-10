import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CustomPrinting = () => {
  const [selectedItem, setSelectedItem] = useState('tshirt');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [customOptions, setCustomOptions] = useState({
    size: 'M',
    color: 'white',
    quantity: 1,
    position: 'front'
  });

  // Product information with pricing
  const products = {
    tshirt: {
      name: 'Custom T-Shirt',
      basePrice: 599,
      description: 'High-quality cotton t-shirt customized with your design',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['white', 'black', 'blue', 'red', 'grey'],
      image: '/tshirt.jpg',
      placeholder: 'https://placehold.co/400x400?text=T-Shirt'
    },
    hoodie: {
      name: 'Custom Hoodie',
      basePrice: 899,
      description: 'Warm and comfortable hoodie with your personalized design',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['black', 'white', 'grey', 'navy'],
      image: '/hoodie.jpg',
      placeholder: 'https://placehold.co/400x400?text=Hoodie'
    },
    mug: {
      name: 'Custom Mug',
      basePrice: 299,
      description: 'Ceramic mug that showcases your design in vibrant colors',
      sizes: ['Standard'],
      colors: ['white', 'black'],
      image: '/mug.jpg',
      placeholder: 'https://placehold.co/400x400?text=Mug'
    },
    diary: {
      name: 'Custom Diary',
      basePrice: 349,
      description: 'Premium quality diary with your logo or design on the cover',
      sizes: ['A5', 'A4'],
      colors: ['brown', 'black', 'blue'],
      image: '/diary.jpg',
      placeholder: 'https://placehold.co/400x400?text=Diary'
    }
  };

  // Handle file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB
        alert('File size exceeds 5MB. Please choose a smaller file.');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(file);
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle option changes
  const handleOptionChange = (e) => {
    const { name, value } = e.target;
    setCustomOptions({
      ...customOptions,
      [name]: value
    });
  };

  // Reset when changing product
  const handleProductChange = (product) => {
    setSelectedItem(product);
    // Reset size to first available size for this product
    setCustomOptions({
      ...customOptions,
      size: products[product].sizes[0]
    });
  };

  // Calculate total price
  const calculatePrice = () => {
    let price = products[selectedItem].basePrice;
    
    // Add premium for certain sizes
    if (selectedItem === 'tshirt' || selectedItem === 'hoodie') {
      if (customOptions.size === 'XL') price += 50;
      if (customOptions.size === 'XXL') price += 100;
    }
    
    // Multiply by quantity
    price *= customOptions.quantity;
    
    return price;
  };

  // Add to cart function
  const addToCart = () => {
    if (!uploadedImage) {
      alert('Please upload a logo or image first.');
      return;
    }
    
    // In a real app, this would use state management to add to cart
    alert(`Added ${products[selectedItem].name} to cart with custom design!`);
  };

  return (
    <div className="bg-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Custom Printing Services</h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-10">
          Upload your design and customize products with your logo or image.
        </p>
        
        {/* Product Selection Tabs - Scrollable on mobile */}
        <div className="mb-6 sm:mb-10 overflow-x-auto pb-2">
          <div className="border-b border-gray-200 min-width-full whitespace-nowrap">
            <nav className="flex space-x-4 sm:space-x-8" aria-label="Products">
              {Object.keys(products).map((key) => (
                <button
                  key={key}
                  onClick={() => handleProductChange(key)}
                  className={`py-3 px-1 border-b-2 font-medium text-sm ${
                    selectedItem === key
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  style={{ color: selectedItem === key ? '#3f51b5' : '', borderColor: selectedItem === key ? '#3f51b5' : '' }}
                >
                  {products[key].name}
                </button>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
          {/* Product Preview */}
          <div className="md:w-1/2">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg text-center">
              <div className="relative mb-4 max-w-xs mx-auto sm:max-w-none">
                <img 
                  src={products[selectedItem].image} 
                  alt={products[selectedItem].name}
                  className="h-64 sm:h-80 w-auto mx-auto object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = products[selectedItem].placeholder;
                  }}
                />
                
                {/* Display uploaded logo on the product */}
                {previewUrl && (
                  <div 
                    className="absolute" 
                    style={{
                      width: '30%',
                      height: '30%',
                      top: customOptions.position === 'front' ? '30%' : '65%',
                      left: customOptions.position === 'left' ? '15%' : 
                             customOptions.position === 'right' ? '55%' : '35%',
                    }}
                  >
                    <img 
                      src={previewUrl} 
                      alt="Your design" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>
              
              <h3 className="text-lg font-medium mb-2">{products[selectedItem].name}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{products[selectedItem].description}</p>
              
              {/* Upload Section */}
              <div className="mt-5 p-3 sm:p-4 border border-dashed border-gray-300 rounded-lg">
                <h4 className="font-medium mb-2 text-sm sm:text-base">Upload Your Logo or Design</h4>
                <p className="text-xs sm:text-sm text-gray-500 mb-3">
                  Supported formats: PNG, JPG (Max size: 5MB)
                </p>
                
                <div className="flex flex-col items-center">
                  <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-md mb-3 text-sm sm:text-base">
                    <span>Select File</span>
                    <input 
                      type="file" 
                      className="hidden"
                      accept=".png,.jpg,.jpeg"
                      onChange={handleImageUpload}
                    />
                  </label>
                  
                  {uploadedImage && (
                    <div className="mt-2 text-xs sm:text-sm text-gray-600">
                      File: {uploadedImage.name}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Customization Options */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Customize Your {products[selectedItem].name}</h2>
              
              {/* Size Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                <div className="flex flex-wrap gap-2">
                  {products[selectedItem].sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setCustomOptions({...customOptions, size})}
                      className={`px-4 py-2 border rounded-md text-sm ${
                        customOptions.size === size
                          ? 'bg-primary text-white border-primary'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                      style={{ 
                        backgroundColor: customOptions.size === size ? '#3f51b5' : '',
                        borderColor: customOptions.size === size ? '#3f51b5' : ''
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Color Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                <div className="flex flex-wrap gap-3">
                  {products[selectedItem].colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setCustomOptions({...customOptions, color})}
                      className={`w-8 h-8 rounded-full border ${
                        customOptions.color === color
                          ? 'ring-2 ring-primary ring-offset-2'
                          : 'border-gray-300'
                      }`}
                      style={{ 
                        backgroundColor: color,
                        ringColor: '#3f51b5'
                      }}
                      title={color.charAt(0).toUpperCase() + color.slice(1)}
                    />
                  ))}
                </div>
              </div>
              
              {/* Logo Position (only for wearables) */}
              {(selectedItem === 'tshirt' || selectedItem === 'hoodie') && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Logo Position</label>
                  <select
                    name="position"
                    value={customOptions.position}
                    onChange={handleOptionChange}
                    className="w-full p-2 border border-gray-300 rounded-md bg-white"
                  >
                    <option value="front">Front Center</option>
                    <option value="back">Back Center</option>
                    <option value="left">Left Chest</option>
                    <option value="right">Right Chest</option>
                  </select>
                </div>
              )}
              
              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex">
                  <button
                    onClick={() => setCustomOptions({
                      ...customOptions, 
                      quantity: Math.max(1, customOptions.quantity - 1)
                    })}
                    className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-50"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    value={customOptions.quantity}
                    onChange={handleOptionChange}
                    className="w-16 text-center border-t border-b border-gray-300"
                  />
                  <button
                    onClick={() => setCustomOptions({
                      ...customOptions, 
                      quantity: customOptions.quantity + 1
                    })}
                    className="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Price & Add to Cart */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-medium">Total Price:</span>
                  <span className="text-2xl font-bold">₹{calculatePrice().toFixed(2)}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={addToCart}
                    className="flex-1 bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition duration-200"
                    style={{ backgroundColor: '#3f51b5' }}
                  >
                    Add to Cart
                  </button>
                  
                  <Link
                    to="#"
                    className="flex-1 border border-gray-300 text-gray-700 text-center py-3 px-6 rounded-md hover:bg-gray-50 transition duration-200"
                  >
                    Save Design
                  </Link>
                </div>
                
                <p className="text-sm text-gray-500 mt-4">
                  * Design preview is for representation only. Actual print may vary slightly.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Information */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">Custom Printing Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Print Quality</h3>
              <p className="text-gray-700 text-sm md:text-base">
                We use high-quality digital printing technology to ensure vibrant, long-lasting designs on all our products.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Design Guidelines</h3>
              <p className="text-gray-700 text-sm md:text-base">
                For best results, upload high-resolution images (300 DPI) with transparent backgrounds for logos.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Bulk Orders</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Special pricing available for bulk orders of 10+ items. Contact us for corporate and event packages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPrinting;
