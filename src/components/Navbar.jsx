import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { user, logout } = useAuth();
  const { getTotalItems, setIsOpen } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleCategoryClick = (category) => {
    console.log('Category clicked:', category);
    const encodedCategory = encodeURIComponent(category);
    navigate(`/shop?category=${encodedCategory}`);
    setActiveDropdown(null); // Close dropdown after click
  };

  const dropdownCategories = [
    {
      name: 'Teas & Infusions',
      items: [
        { name: 'All Teas & Infusions', value: 'Teas & Infusions' },
        { name: 'Green Tea', value: 'Green Tea' },
        { name: 'Herbal Tea', value: 'Herbal Tea' },
        { name: 'Black Tea', value: 'Black Tea' }
      ]
    },
    {
      name: 'Herbal Supplements',
      items: [
        { name: 'All Supplements', value: 'Herbal Supplements' },
        { name: 'Vitamins', value: 'Vitamins' },
        { name: 'Ayurvedic', value: 'Ayurvedic' },
        { name: 'Immunity Boosters', value: 'Immunity Boosters' }
      ]
    },
    {
      name: 'Packaged Foods',
      items: [
        { name: 'All Packaged Foods', value: 'Packaged Foods' },
        { name: 'Healthy Snacks', value: 'Snacks' },
        { name: 'Ready To Cook', value: 'Ready To Cook' },
        { name: 'Organic Cereals', value: 'Cereals' }
      ]
    },
    {
      name: 'Gifting & Hampers',
      items: [
        { name: 'All Gift Items', value: 'Gifting & Hampers' },
        { name: 'Festival Hampers', value: 'Festival Hampers' },
        { name: 'Corporate Gifts', value: 'Corporate Gifts' },
        { name: 'Wedding Gifts', value: 'Wedding Gifts' }
      ]
    }
  ];

  return (
    <>
      {/* Top Header */}
      <div className="bg-gray-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>Free shipping on orders over ₹500</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="hover:text-green-400 transition-colors">
              Help & Support
            </Link>
            {user ? ( 
              <div className="flex items-center space-x-2">
                <span>Welcome, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="hover:text-green-400 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="hover:text-green-400 transition-colors">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold text-gray-900">Bliss Organic</div>
                  <div className="text-xs text-gray-600">Natural & Fresh</div>
                </div>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8 hidden md:block">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for organic products..."
                  className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-green-600 transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {user && user.role === 'admin' && (
                <Link
                  to="/admin/dashboard"
                  className="px-3 py-2 text-sm bg-orange-100 text-orange-800 rounded-lg hover:bg-orange-200 transition-colors hidden sm:block"
                >
                  Admin Panel
                </Link>
              )}
              
              <button
                onClick={() => setIsOpen(true)}
                className="relative p-2 text-gray-700 hover:text-green-600 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              <Link
                to={user ? "/user/dashboard" : "/login"}
                className="p-2 text-gray-700 hover:text-green-600 transition-colors"
              >
                <User className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Links with Dropdowns */}
        <div className="border-t border-gray-200 bg-gray-50 hidden md:block relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center space-x-8 py-3 text-sm">
              {/* Shop Link */}
              <Link 
                to="/shop" 
                className="text-gray-700 hover:text-green-600 transition-colors font-medium whitespace-nowrap"
              >
                Shop
              </Link>
              
              {/* Category Dropdowns */}
              {dropdownCategories.map((category, index) => (
                <div 
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap flex items-center py-2">
                    {category.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-200 z-[100] ${
                    activeDropdown === index 
                      ? 'opacity-100 visible transform translate-y-0' 
                      : 'opacity-0 invisible transform -translate-y-2'
                  }`}>
                    <div className="py-2">
                      {category.items.map((item, itemIndex) => (
                        <button 
                          key={itemIndex}
                          onClick={() => handleCategoryClick(item.value)}
                          className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Static Links */}
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
              >
                About Us
              </Link>
              
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
              >
                Contact
              </Link>
              
              <Link 
                to="/faq" 
                className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Navbar;