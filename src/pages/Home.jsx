import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Truck,
  Shield,
  Leaf,
  Star,
  Users,
  ShoppingCart,
} from "lucide-react";
import ProductCard from "../components/ProductCard";
import { useAuth } from "../context/AuthContext";
import Footer from "../components/Footer"; 

const Home = () => {
  const { user } = useAuth();

  // Categories for front page
  const categories = [
    {
      name: "Personal Care",
      image: "/HomePageImages/Personal-Care.jpg",
      link: "/shop?category=personal-care",
      count: "50+ varieties",
    },
    {
      name: "Herbal Supplements",
      image: "/HomePageImages/Herbal-Supplement.jpg",
      link: "/shop?category=herbal-supplements",
      count: "80+ varieties",
    },
    {
      name: "Teas & Infusions",
      image: "/HomePageImages/tea.jpg",
      link: "/shop?category=teas-infusions",
      count: "25+ varieties",
    },
    {
      name: "Packaged Foods",
      image: "/HomePageImages/Packaged-Foods.jpg",
      link: "/shop?category=packaged-foods",
      count: "15+ varieties",
    },
  ];

  const [backendProducts, setBackendProducts] = useState([]);
  const [personalCareProducts, setPersonalCareProducts] = useState([]);
  const [giftingProducts, setGiftingProducts] = useState([]);

  useEffect(() => {
    const fetchBackendProducts = async () => {
      try {
        const res = await fetch("https://bliss-organic-store-backend-1.onrender.com/api/products"); // Change URL if needed
        const data = await res.json();
        // Sort by creation date (newest first) and take only the latest 7 products for carousel
        const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        const latestProducts = sortedData.slice(0, 7);
        setBackendProducts(latestProducts);

        // Filter products by category for Personal Care (latest 4)
        const personalCare = data
          .filter(product => 
            product.category?.toLowerCase().includes('personal care') || 
            product.category?.toLowerCase().includes('personal-care') ||
            product.name?.toLowerCase().includes('personal') ||
            product.name?.toLowerCase().includes('care')
          )
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 4);
        setPersonalCareProducts(personalCare);

        // Filter products by category for Gifting & Hampers (latest 4)
        const gifting = data
          .filter(product => 
            product.category?.toLowerCase().includes('gift') || 
            product.category?.toLowerCase().includes('hamper') ||
            product.name?.toLowerCase().includes('gift') ||
            product.name?.toLowerCase().includes('hamper')
          )
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 4);
        setGiftingProducts(gifting);

      } catch (err) {
        console.error("Error fetching backend products:", err);
      }
    };

    fetchBackendProducts();
  }, []);

  // Duplicate products for seamless infinite scroll
  const duplicatedProducts = [...backendProducts, ...backendProducts];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-green-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Pure <span className="text-green-600">Organic</span> Products
                  for a Healthier You
                </h1>
                <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
                  Discover farm-fresh, organic produce delivered straight to
                  your doorstep. 100% natural, pesticide-free, and packed with
                  nutrients.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/shop"
                  className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 group text-base sm:text-lg"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Shop Now</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                {!user && (
                  <div className="flex gap-2 sm:gap-3">
                    <Link
                      to="/login?role=user"
                      className="bg-white text-green-600 border-2 border-green-600 px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center text-base"
                    >
                      Login
                    </Link>
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-green-200">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-600">
                    10K+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Happy Customers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-600">
                    500+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Organic Products
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-600">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Fresh Delivery
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <img
                src="/HomePageImages/Front.png"
                alt="Fresh organic produce"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-3 sm:p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.8/5</span>
                  <span className="text-gray-500 text-xs sm:text-sm">
                    Rating
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Marquee Notification */}
      <div className="overflow-hidden bg-yellow-100 relative">
        <div className="animate-marquee whitespace-nowrap py-3 text-center font-bold text-black text-sm sm:text-base lg:text-lg">
          🔥 Hurry! Up to 50% Off on All Organic Products — Limited Time Only!
          🔥 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🌱 Fresh Organic
          Vegetables Just Arrived! 🌱
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ⚡ Free Delivery on
          Orders Above ₹500! ⚡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          🎉 New Customer? Get 20% Off Your First Order! 🎉
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Explore our wide range of organic products, from fresh fruits and
              vegetables to whole grains and dairy products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm opacity-90">{category.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Products Carousel from Admin */}
      {backendProducts.length > 0 && (
        <section className="py-10 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                  Latest Products from Admin
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Dynamically added items by our store admin team.
                </p>
              </div>
              <Link
                to="/shop"
                className="text-green-600 hover:text-green-700 font-semibold flex items-center space-x-2 group text-sm sm:text-base"
              >
                <span>View All</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Carousel Container */}
            <div className="overflow-hidden relative bg-gray-50 rounded-lg">
              <div 
                className="flex space-x-6 py-4"
                style={{
                  animation: 'scroll-infinite 30s linear infinite',
                  width: `${duplicatedProducts.length * 288}px` // 288px = 18rem (w-72) + 1.5rem (gap)
                }}
                onMouseEnter={(e) => e.target.style.animationPlayState = 'paused'}
                onMouseLeave={(e) => e.target.style.animationPlayState = 'running'}
              >
                {duplicatedProducts.map((product, index) => (
                  <div key={`${product._id}-${index}`} className="flex-shrink-0 w-72">
                    <ProductCard
                      product={{
                        ...product,
                        id: product._id,
                        image: product.imageURL || product.image,
                        originalPrice: product.price + 20,
                        discount: product.discount || 10,
                        rating: product.rating || 4.5,
                        reviews: product.reviews || 25,
                        unit: product.unit || "unit",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Personal Care Products Section */}
      {personalCareProducts.length > 0 && (
        <section className="py-10 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                  Personal Care Products
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Natural and organic personal care essentials for your daily routine.
                </p>
              </div>
              <Link
                to="/shop?category=personal-care"
                className="text-green-600 hover:text-green-700 font-semibold flex items-center space-x-2 group text-sm sm:text-base"
              >
                <span>View All</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {personalCareProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  product={{
                    ...product,
                    id: product._id,
                    image: product.imageURL || product.image,
                    originalPrice: product.price + 20,
                    discount: product.discount || 10,
                    rating: product.rating || 4.5,
                    reviews: product.reviews || 25,
                    unit: product.unit || "unit",
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gifting & Hampers Products Section */}
      {giftingProducts.length > 0 && (
        <section className="py-10 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                  Gifting & Hampers
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Thoughtful gifts for your loved ones.
                </p>
              </div>
              <Link
                to="/shop?category=gifting-hampers"
                className="text-green-600 hover:text-green-700 font-semibold flex items-center space-x-2 group text-sm sm:text-base"
              >
                <span>View All</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {giftingProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  product={{
                    ...product,
                    id: product._id,
                    image: product.imageURL || product.image,
                    originalPrice: product.price + 20,
                    discount: product.discount || 10,
                    rating: product.rating || 4.5,
                    reviews: product.reviews || 25,
                    unit: product.unit || "unit",
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}

      {/* Features Section */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Organic</h3>
              <p className="text-gray-600">
                Certified organic produce without harmful chemicals
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Same-day delivery for orders placed before 2 PM
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Quality Guarantee
              </h3>
              <p className="text-gray-600">
                100% money-back guarantee on all products
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Expert Support
              </h3>
              <p className="text-gray-600">
                24/7 customer support from nutrition experts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-10 sm:py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">
            Stay Fresh with Our Newsletter
          </h2>
          <p className="text-green-100 mb-4 sm:mb-8 text-base sm:text-lg">
            Get the latest updates on new arrivals, special offers, and health
            tips delivered to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 sm:py-3 rounded-lg border border-green-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-sm sm:text-base"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-sm sm:text-base"
            >
              Subscribe
            </button>
          </form>

          <p className="text-green-100 text-xs sm:text-sm mt-2 sm:mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
  x;
};

export default Home;
