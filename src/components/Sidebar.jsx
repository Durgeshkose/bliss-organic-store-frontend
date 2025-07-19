import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, TrendingUp, Package, Gift, HelpCircle, Settings, Star, Truck, Shield, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    if (user) {
      navigate('/user/dashboard');
      onClose();
    } else {
      navigate('/login');
      onClose();
    }
  };

  const sidebarSections = [
    {
      title: 'Trending',
      icon: TrendingUp,
      items: [
        { name: 'Best Sellers', link: '/shop?sort=popular' },
        { name: 'New Arrivals', link: '/shop?sort=newest' },
        { name: 'Most Wishlisted', link: '/shop?sort=wishlist' },
        { name: 'Customer Favorites', link: '/shop?featured=true' }
      ]
    },
    {
      title: 'Shop by Category',
      icon: Package,
      items: [
        { name: 'Personal Care', link: '/shop?category=personal-care' },
        { name: 'Herbal Supplements', link: '/shop?category=herbal-supplements' },
        { name: 'Teas & Infusions', link: '/shop?category=teas-infusions' },
        { name: 'Packaged Foods', link: '/shop?category=packaged-foods' },
        { name: 'Gifting & Hampers', link: '/shop?category=gifting-hampers' },
        { name: 'Organic Cosmetics', link: '/shop?category=organic-cosmetics' }
      ]
    },
    {
      title: 'Programs & Features',
      icon: Gift,
      items: [
        { name: 'Organic Certification', link: '/organic-certification' },
        { name: 'Farm Fresh Guarantee', link: '/guarantee' },
        { name: 'Subscription Box', link: '/subscription' },
        { name: 'Bulk Orders', link: '/bulk-orders' },
        { name: 'Gift Cards', link: '/gift-cards' }
      ]
    },
    {
      title: 'Help & Settings',
      icon: HelpCircle,
      items: [
        { name: 'Customer Service', link: '/contact' },
        { name: 'FAQ', link: '/faq' },
        { name: 'Track Your Order', link: '/track-order' },
        { name: 'Return Policy', link: '/returns' }
      ]
    }
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-900 text-white">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <div>
              <div className="font-semibold">
                {user ? `Hello, ${user.name}` : 'Hello, Guest'}
              </div>
              <div className="text-sm text-gray-300">Welcome to Bliss Organic</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto h-full pb-20">
          {/* Quick Actions */}
          <div className="p-4 border-b border-gray-200">
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <span className="text-xs text-gray-600">Premium</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Truck className="h-6 w-6 text-orange-600" />
                </div>
                <span className="text-xs text-gray-600">Fast Delivery</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-xs text-gray-600">Quality</span>
              </div>
            </div>
          </div>

          {/* Sections */}
          {sidebarSections.map((section, index) => (
            <div key={index} className="border-b border-gray-200">
              <div className="flex items-center space-x-3 p-4 bg-gray-50">
                <section.icon className="h-5 w-5 text-gray-600" />
                <span className="font-semibold text-gray-900">{section.title}</span>
              </div>
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    to={item.link}
                    onClick={onClose}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors border-l-4 border-transparent hover:border-green-500"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Bottom Links */}
          <div className="p-4 space-y-3">
            <Link
              to="/blog"
              onClick={onClose}
              className="block text-green-600 font-medium hover:text-green-800 transition-colors"
            >
              Health & Wellness Blog
            </Link>
            <Link
              to="/about"
              onClick={onClose}
              className="block text-gray-600 hover:text-gray-800 transition-colors"
            >
              About Bliss Organic
            </Link>
            
            {/* Account Settings - Moved to Bottom */}
            <div className="pt-3 border-t border-gray-200">
              <button
                onClick={handleDashboardClick}
                className="w-full flex items-center space-x-3 p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Settings className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Account Settings</div>
                  <div className="text-sm text-green-100">
                    {user ? 'Manage your account' : 'Login to access'}
                  </div>
                </div>
              </button>
            </div>

            {/* Additional User Links - Only show if logged in */}
            {user && (
              <div className="space-y-2">
                <Link
                  to="/user/orders"
                  onClick={onClose}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors text-sm p-2 hover:bg-gray-50 rounded"
                >
                  <Package className="h-4 w-4" />
                  <span>My Orders</span>
                </Link>
                <Link
                  to="/user/wishlist"
                  onClick={onClose}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors text-sm p-2 hover:bg-gray-50 rounded"
                >
                  <Star className="h-4 w-4" />
                  <span>My Wishlist</span>
                </Link>
                <Link
                  to="/user/profile"
                  onClick={onClose}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors text-sm p-2 hover:bg-gray-50 rounded"
                >
                  <User className="h-4 w-4" />
                  <span>Profile Settings</span>
                </Link>
              </div>
            )}
            
            <div className="text-xs text-gray-500 pt-2 border-t border-gray-200">
              © 2025 Bliss Organic Store. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;