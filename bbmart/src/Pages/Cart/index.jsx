import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';

const Cart = () => {
  // Sample cart items - in a real app, this would come from a context or state management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Notebook',
      price: 250,
      quantity: 2,
      image: '/notebook.jpg',
      category: 'Stationery'
    },
    {
      id: 2,
      name: 'Custom T-Shirt',
      price: 599,
      quantity: 1,
      image: '/tshirt.jpg',
      category: 'Custom Printing',
      customization: 'Logo on front'
    },
    {
      id: 3,
      name: 'Gel Pen Set',
      price: 120,
      quantity: 3,
      image: '/pen-set.jpg',
      category: 'Stationery'
    }
  ]);

  // Function to update item quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Function to remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Shipping cost - could be dynamic based on location or free above certain amount
  const shippingCost = subtotal > 1000 ? 0 : 50;
  
  // Grand total
  const grandTotal = subtotal + shippingCost;

  return (
    <div className="bg-gray-50 py-8 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-10 md:py-16">
            <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link 
              to="/" 
              className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition duration-200"
              style={{ backgroundColor: '#3f51b5' }}
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="border-b p-4">
                  <h2 className="text-lg md:text-xl font-semibold">Shopping Cart ({cartItems.length} items)</h2>
                </div>
                
                <div className="divide-y">
                  {cartItems.map(item => (
                    <div key={item.id} className="p-4 flex flex-col sm:flex-row items-center gap-4">
                      {/* Product Image */}
                      <div className="sm:w-24 h-24 w-full max-w-[150px] flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover rounded-md"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://placehold.co/100x100?text=${item.name.charAt(0)}`;
                          }}
                        />
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-grow text-center sm:text-left">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">Category: {item.category}</p>
                        {item.customization && (
                          <p className="text-sm text-gray-600 mb-1">Customization: {item.customization}</p>
                        )}
                        <p className="text-sm font-medium">₹{item.price.toFixed(2)}</p>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2 sm:mt-0">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          className="w-12 h-8 border border-gray-300 rounded text-center"
                        />
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded"
                        >
                          +
                        </button>
                      </div>
                      
                      {/* Item Total & Remove Button */}
                      <div className="text-center sm:text-right min-w-[100px] mt-2 sm:mt-0">
                        <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 mt-1 flex items-center gap-1 text-sm mx-auto sm:ml-auto"
                        >
                          <MdDelete size={16} />
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t p-4 flex flex-col sm:flex-row justify-between gap-4">
                  <Link 
                    to="/" 
                    className="text-primary hover:underline flex items-center justify-center sm:justify-start gap-1 w-full sm:w-auto"
                    style={{ color: '#3f51b5' }}
                  >
                    ← Continue Shopping
                  </Link>
                  
                  <button 
                    onClick={() => setCartItems([])} 
                    className="text-red-500 hover:text-red-700 flex items-center justify-center sm:justify-start gap-1 w-full sm:w-auto"
                  >
                    <MdDelete size={16} />
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3 mt-6 lg:mt-0">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shippingCost === 0 ? 'Free' : `₹${shippingCost.toFixed(2)}`}</span>
                  </div>
                  
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-medium text-lg">
                      <span>Total</span>
                      <span>₹{grandTotal.toFixed(2)}</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">Including GST</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Link 
                    to="/checkout" 
                    className="block w-full bg-primary text-white text-center py-3 px-4 rounded-md hover:bg-primary-dark transition duration-200"
                    style={{ backgroundColor: '#3f51b5' }}
                  >
                    Proceed to Checkout
                  </Link>
                  
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Secure Checkout</span>
                  </div>
                </div>
                
                {/* Payment Methods */}
                <div className="mt-6">
                  <p className="text-sm text-gray-600 mb-2">We Accept:</p>
                  <div className="flex gap-2 flex-wrap">
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
