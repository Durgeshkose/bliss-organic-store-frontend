import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Calendar } from 'lucide-react';
import axios from '../utils/axiosInstance';
import { useAuth } from '../context/AuthContext';

const OrderSuccess = () => {
  // Mock order data - TODO: Get from API/context
  const orderDetails = {
    orderNumber: 'ORD-' + Date.now().toString().slice(-6),
    total: 450.00,
    estimatedDelivery: '2-3 business days',
    items: [
      { name: 'Organic Red Apples', quantity: 2, price: 180 },
      { name: 'Fresh Organic Spinach', quantity: 1, price: 45 }
    ]
  };

  const { user, token } = useAuth(); // AuthContext se user aur token

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Place order API call
    const placeOrder = async () => {
      try {
        await axios.post('/orders', {
          items: orderDetails.items,
          totalAmount: orderDetails.total
          // nutritionFacts aur farmInfo yahan nahi hai, isliye skip kiya
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      } catch (err) {
        console.error("Order saving failed:", err);
      }
    };

    placeOrder();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
          <p className="text-lg text-gray-600">
            Thank you for your order. We'll send you a confirmation email shortly.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Order Details</h2>
            <p className="text-gray-600">Order Number: <span className="font-medium">{orderDetails.orderNumber}</span></p>
          </div>

          {/* Order Items */}
          <div className="space-y-4 mb-6">
            <h3 className="font-medium text-gray-900">Items Ordered:</h3>
            {orderDetails.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2">
                <div>
                  <span className="font-medium text-gray-900">{item.name}</span>
                  <span className="text-gray-500 ml-2">x{item.quantity}</span>
                </div>
                <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>₹{orderDetails.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-2">
              <Truck className="h-5 w-5 text-green-600" />
              <span className="font-medium text-green-900">Estimated Delivery</span>
            </div>
            <p className="text-green-700">{orderDetails.estimatedDelivery}</p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">What's Next?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Order Processing</h3>
              <p className="text-sm text-gray-600">We'll prepare your organic products with care</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Truck className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Shipped</h3>
              <p className="text-sm text-gray-600">You'll receive tracking information via email</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Delivered</h3>
              <p className="text-sm text-gray-600">Fresh organic products at your doorstep</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/shop"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-center font-medium"
          >
            Continue Shopping
          </Link>
          <Link
            to="/dashboard"
            className="bg-white text-green-600 border border-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors text-center font-medium"
          >
            View Order History
          </Link>
        </div>

        {/* Support Information */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            Need help with your order? Our customer support team is here to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Contact Support
            </Link>
            <Link
              to="/faq"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;