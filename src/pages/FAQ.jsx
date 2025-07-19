import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import Footer from '../components/Footer';


const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState({});

  const faqCategories = [
    {
      title: 'Orders & Shipping',
      items: [
        {
          question: 'How do I place an order?',
          answer: 'Simply browse our products, add items to your cart, and proceed to checkout. You can pay using credit/debit cards or choose cash on delivery.'
        },
        {
          question: 'What are your delivery charges?',
          answer: 'We offer free delivery on orders above ₹500. For orders below ₹500, a delivery charge of ₹50 applies.'
        },
        {
          question: 'How long does delivery take?',
          answer: 'Standard delivery takes 1-2 business days. Same-day delivery is available for orders placed before 2 PM in select areas.'
        },
        {
          question: 'Can I track my order?',
          answer: 'Yes! Once your order is dispatched, you\'ll receive a tracking link via SMS and email to monitor your delivery status.'
        }
      ]
    },
    {
      title: 'Products & Quality',
      items: [
        {
          question: 'Are all your products certified organic?',
          answer: 'Yes, all our products are certified organic by recognized certification bodies like USDA, India Organic, and NPOP.'
        },
        {
          question: 'How do you ensure product freshness?',
          answer: 'We maintain a cold chain from farm to your doorstep and work directly with farmers to ensure minimal time between harvest and delivery.'
        },
        {
          question: 'What if I receive damaged or spoiled products?',
          answer: 'We have a 100% satisfaction guarantee. Contact us within 24 hours with photos, and we\'ll provide a full refund or replacement immediately.'
        },
        {
          question: 'Do you offer seasonal products?',
          answer: 'Yes! Our inventory changes based on seasonal availability to ensure you get the freshest produce at its peak quality.'
        }
      ]
    },
    {
      title: 'Account & Payments',
      items: [
        {
          question: 'Do I need to create an account to shop?',
          answer: 'You can browse products without an account, but you need to register to place orders and track purchases.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit/debit cards, UPI, net banking, and cash on delivery (COD) for your convenience.'
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Absolutely! We use SSL encryption and comply with PCI DSS standards to ensure your payment information is completely secure.'
        },
        {
          question: 'Can I save multiple addresses?',
          answer: 'Yes, you can save multiple delivery addresses in your account for easy checkout and faster ordering.'
        }
      ]
    },
    {
      title: 'Returns & Refunds',
      items: [
        {
          question: 'What is your return policy?',
          answer: 'We offer hassle-free returns within 24 hours of delivery. Fresh produce must be reported immediately for quality issues.'
        },
        {
          question: 'How do I return a product?',
          answer: 'Contact our customer service team, and we\'ll arrange pickup for return items. Most returns are processed within 3-5 business days.'
        },
        {
          question: 'When will I receive my refund?',
          answer: 'Refunds are processed within 5-7 business days after we receive the returned item. The amount will be credited to your original payment method.'
        },
        {
          question: 'Can I exchange products?',
          answer: 'Yes, you can exchange products for the same or different items of equal or greater value, subject to availability.'
        }
      ]
    },
    {
      title: 'Subscription & Bulk Orders',
      items: [
        {
          question: 'Do you offer subscription services?',
          answer: 'Yes! Set up weekly, bi-weekly, or monthly subscriptions for your favorite products and save up to 15% on recurring orders.'
        },
        {
          question: 'Can I modify or cancel my subscription?',
          answer: 'You can easily modify, pause, or cancel your subscription anytime from your account dashboard or by contacting our support team.'
        },
        {
          question: 'Do you provide bulk order discounts?',
          answer: 'Yes, we offer special pricing for bulk orders above ₹5,000. Contact our sales team for custom quotes and volume discounts.'
        },
        {
          question: 'Is there a minimum order quantity for bulk purchases?',
          answer: 'Bulk pricing starts from orders of ₹5,000 or more. For institutional orders, we can accommodate custom requirements.'
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex, itemIndex) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-green-100 mb-8">
            Find quick answers to common questions about our organic products and services
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              placeholder="Search for answers..."
            />
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {searchTerm && (
          <div className="mb-8">
            <p className="text-gray-600">
              {filteredCategories.reduce((total, category) => total + category.items.length, 0)} result(s) found for "{searchTerm}"
            </p>
          </div>
        )}

        <div className="space-y-8">
          {filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {category.items.map((item, itemIndex) => {
                  const key = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openItems[key];
                  
                  return (
                    <div key={itemIndex}>
                      <button
                        onClick={() => toggleItem(categoryIndex, itemIndex)}
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-900 pr-4">{item.question}</h3>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${
                              isOpen ? 'transform rotate-180' : ''
                            }`}
                          />
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-500 mb-6">
              Try different keywords or browse our categories above
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Clear search and show all FAQs
            </button>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our customer support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Contact Support
            </a>
            <a
              href="tel:+919876543210"
              className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors font-medium"
            >
              Call Us: +91 98765 43210
            </a>
          </div>
          
          <div className="mt-6 pt-6 border-t border-green-200">
            <p className="text-sm text-gray-600">
              <strong>Support Hours:</strong> Monday - Saturday: 8 AM - 8 PM | Sunday: 9 AM - 6 PM
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;