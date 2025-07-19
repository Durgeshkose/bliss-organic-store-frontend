import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Leaf, Droplets, Heart, ShoppingBag, Star } from 'lucide-react';

const NormalCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const banners = [
    {
      id: 1,
      title: "Shop Natural, Live Pure",
      subtitle: "Discover our premium collection of organic products",
      cta: "Shop Now",
      background: "bg-gradient-to-br from-green-50 via-white to-green-100",
      accentColor: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700",
      icon: <Leaf className="w-16 h-16 text-green-400" />,
      decorativeElements: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-green-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 left-20 w-20 h-20 bg-green-300 rounded-full opacity-30"></div>
          <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-green-400 rounded-full opacity-20"></div>
        </div>
      )
    },
    {
      id: 2,
      title: "Nature in Every Drop",
      subtitle: "Pure herbal cosmetics for radiant skin",
      cta: "Explore Beauty",
      background: "bg-gradient-to-br from-emerald-50 via-white to-teal-50",
      accentColor: "text-emerald-600",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700",
      icon: <Droplets className="w-16 h-16 text-emerald-400" />,
      decorativeElements: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 left-16 w-24 h-24 bg-emerald-200 rounded-full opacity-25"></div>
          <div className="absolute bottom-16 right-16 w-40 h-40 bg-teal-200 rounded-full opacity-15"></div>
          <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-emerald-300 rounded-full opacity-40"></div>
        </div>
      )
    },
    {
      id: 3,
      title: "Go Organic Today",
      subtitle: "Fresh vegetables straight from nature's garden",
      cta: "Shop Fresh",
      background: "bg-gradient-to-br from-lime-50 via-white to-green-50",
      accentColor: "text-lime-600",
      buttonColor: "bg-lime-600 hover:bg-lime-700",
      icon: <Heart className="w-16 h-16 text-lime-400" />,
      decorativeElements: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-8 right-8 w-28 h-28 bg-lime-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-12 left-12 w-36 h-36 bg-green-200 rounded-full opacity-15"></div>
          <div className="absolute top-2/3 right-1/3 w-16 h-16 bg-lime-300 rounded-full opacity-25"></div>
        </div>
      )
    },
    {
      id: 4,
      title: "Eco-Friendly Living",
      subtitle: "Sustainable products for a better tomorrow",
      cta: "Go Green",
      background: "bg-gradient-to-br from-stone-50 via-white to-green-50",
      accentColor: "text-stone-600",
      buttonColor: "bg-stone-600 hover:bg-stone-700",
      icon: <ShoppingBag className="w-16 h-16 text-stone-400" />,
      decorativeElements: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-12 left-12 w-32 h-32 bg-stone-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-200 rounded-full opacity-25"></div>
          <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-stone-300 rounded-full opacity-30"></div>
        </div>
      )
    },
    {
      id: 5,
      title: "Premium Quality",
      subtitle: "Certified organic products you can trust",
      cta: "Discover More",
      background: "bg-gradient-to-br from-sage-50 via-white to-green-50",
      accentColor: "text-green-700",
      buttonColor: "bg-green-700 hover:bg-green-800",
      icon: <Star className="w-16 h-16 text-green-500" />,
      decorativeElements: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-14 right-14 w-20 h-20 bg-green-300 rounded-full opacity-20"></div>
          <div className="absolute bottom-16 left-16 w-28 h-28 bg-green-200 rounded-full opacity-25"></div>
          <div className="absolute top-1/4 right-1/4 w-14 h-14 bg-green-400 rounded-full opacity-15"></div>
        </div>
      )
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentBanner = banners[currentSlide];

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
      {/* Banner Content */}
      <div className={`${currentBanner.background} w-full h-full relative transition-all duration-1000 ease-in-out`}>
        {/* Decorative Background Elements */}
        {currentBanner.decorativeElements}
        
        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-between h-full px-6 md:px-12">
          {/* Left Content */}
          <div className="flex-1 max-w-lg">
            <div className="mb-6">
              {currentBanner.icon}
            </div>
            <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${currentBanner.accentColor} leading-tight`}>
              {currentBanner.title}
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
              {currentBanner.subtitle}
            </p>
            <button className={`${currentBanner.buttonColor} text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
              {currentBanner.cta}
            </button>
          </div>

          {/* Right Decorative Section */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-white bg-opacity-40 rounded-full backdrop-blur-sm shadow-xl flex items-center justify-center">
                <div className="w-48 h-48 bg-white bg-opacity-60 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                    <div className={`w-16 h-16 ${currentBanner.accentColor.replace('text-', 'bg-')} rounded-full opacity-60`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      
      <button
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white shadow-lg scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 bg-white bg-opacity-80 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
        {currentSlide + 1} / {banners.length}
      </div>
    </div>
  );
};

export default NormalCarousel;