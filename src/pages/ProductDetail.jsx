import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  Heart,
  ShoppingCart,
  Truck,
  Shield,
  ArrowLeft,
  Plus,
  Minus,
  Image as ImageIcon,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import ProductCard from "../components/ProductCard";
import axios from "../utils/axiosInstance";
import Footer from "../components/Footer";
import NormalCarousel from "../components/NormalCarousel";    

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log("Fetching product with ID:", id);
        
        // Fetch product details
        const productRes = await axios.get(`/products/${id}`);
        console.log("Product response:", productRes.data);
        
        if (productRes.data) {
          const productData = productRes.data;
          setProduct(productData);
          
          // Fetch related products
          if (productData.category) {
            try {
              const relatedRes = await axios.get(`/products?category=${productData.category}&limit=4`);
              const relatedData = relatedRes.data.products || relatedRes.data || [];
              const filteredRelated = relatedData.filter(p => 
                (p._id && p._id !== id) || (p.id && p.id !== parseInt(id))
              );
              setRelatedProducts(filteredRelated.slice(0, 4));
            } catch (relatedErr) {
              console.log("Could not fetch related products:", relatedErr);
              setRelatedProducts([]);
            }
          }
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Product not found or could not be loaded");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!user) {
      window.location.href = "/login";
      return;
    }
    addToCart(product, quantity);
  };

  const handleWishlist = () => {
    console.log("Add to wishlist:", product?.id);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {error || "Product not found"}
          </h2>
          <Link to="/shop" className="text-green-600 hover:text-green-700">
            Return to shop
          </Link>
        </div>
      </div>
    );
  }

  // Get product images with correct field name
  const getProductImages = () => {
    let images = [];
    
    if (product.images && Array.isArray(product.images) && product.images.length > 0) {
      images = product.images;
    } else if (product.imageURL) {
      images = [product.imageURL];
    } else if (product.image) {
      images = [product.image];
    } else if (product.imageUrl) {
      images = [product.imageUrl];
    } else if (product.photo) {
      images = [product.photo];
    }
    
    console.log("Found images:", images);
    return images;
  };

  const productImages = getProductImages();
  const hasMultipleImages = productImages.length > 1;
  const hasImages = productImages.length > 0;

  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
    
    let baseURL = '';
    if (axios.defaults.baseURL) {
      baseURL = axios.defaults.baseURL;
    } else {
      baseURL = `${window.location.protocol}//${window.location.hostname}:5000`;
    }
    
    if (imagePath.startsWith('/')) {
      return `${baseURL}${imagePath}`;
    } else {
      return `${baseURL}/${imagePath}`;
    }
  };

  const ImagePlaceholder = ({ className = "" }) => (
    <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
      <div className="text-center text-gray-500">
        <ImageIcon className="h-16 w-16 mx-auto mb-2" />
        <p className="text-sm">No Image Available</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/shop" className="text-gray-500 hover:text-gray-700">
              Shop
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              to={`/shop?category=${
                product?.category ? product.category.toLowerCase() : "all"
              }`}
              className="text-gray-500 hover:text-gray-700"
            >
              {product?.category || "All Products"}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product?.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/shop"
          className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 mb-6 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Shop</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
              {hasImages && !imageError ? (
                <img
                  src={getImageUrl(productImages[activeImage])}
                  alt={product?.name || "Product"}
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    console.error("Image failed to load:", e.target.src);
                    setImageError(true);
                  }}
                  onLoad={() => {
                    console.log("Image loaded successfully:", getImageUrl(productImages[activeImage]));
                    setImageError(false);
                  }}
                />
              ) : (
                <ImagePlaceholder className="w-full h-96" />
              )}
            </div>

            {/* Thumbnail Images */}
            {hasMultipleImages && !imageError && (
              <div className="flex space-x-4 overflow-x-auto">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      activeImage === index
                        ? "border-green-500"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={getImageUrl(image)}
                      alt={`${product?.name || "Product"} ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error("Thumbnail failed to load:", e.target.src);
                        e.target.style.display = 'none';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {product?.isOrganic && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Organic Certified
                </span>
              )}
              {product?.isBestSeller && (
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Best Seller
                </span>
              )}
              {product?.discount && product.discount > 0 && (
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  {product.discount}% Off
                </span>
              )}
            </div>

            {/* Title and Rating */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product?.name}
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.floor(product?.rating || 4)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product?.rating || "4.0"}/5
                  {product?.reviews && ` (${product.reviews} reviews)`}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-gray-900">
                  ₹{product?.price}
                </span>
                {product?.originalPrice &&
                  product.originalPrice > product.price && (
                    <span className="text-xl text-gray-500 line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                <span className="text-sm text-gray-600">
                  {product?.unit && `per ${product.unit}`}
                </span>
              </div>
              {product?.originalPrice &&
                product.originalPrice > product.price && (
                  <p className="text-green-600 font-medium">
                    You save ₹{product.originalPrice - product.price}
                    {product?.discount && ` (${product.discount}%)`}
                  </p>
                )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              {(product?.stock || 0) > 10 ? (
                <span className="text-green-600 font-medium">✓ In Stock</span>
              ) : (product?.stock || 0) > 0 ? (
                <span className="text-orange-600 font-medium">
                  ⚠ Only {product.stock} left
                </span>
              ) : (
                <span className="text-red-600 font-medium">✗ Out of Stock</span>
              )}
            </div>

            {/* Description */}
            {product?.description && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="font-medium text-gray-900">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={(product?.stock || 0) === 0}
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>
                    {(product?.stock || 0) > 0 ? "Add to Cart" : "Out of Stock"}
                  </span>
                </button>
                <button
                  onClick={handleWishlist}
                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Features */}
            {product?.features && Array.isArray(product.features) && product.features.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Delivery Info */}
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-green-600" />
                <span className="text-gray-900 font-medium">
                  Free delivery on orders above ₹500
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-gray-900 font-medium">
                  100% quality guarantee
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Tabs */}
        {(product?.nutritionFacts || product?.farmInfo) && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-16">
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex space-x-8">
                {product?.nutritionFacts && (
                  <button className="border-b-2 border-green-500 pb-2 text-green-600 font-medium">
                    Nutrition Facts
                  </button>
                )}
                {product?.farmInfo && (
                  <button className="pb-2 text-gray-500 hover:text-gray-700">
                    Farm Information
                  </button>
                )}
                <button className="pb-2 text-gray-500 hover:text-gray-700">
                  Reviews
                </button>
              </nav>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Nutritional Information
                </h3>
                <div className="space-y-2">
                  {product.nutritionFacts ? (
                    Object.entries(product.nutritionFacts).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between py-2 border-b border-gray-100"
                      >
                        <span className="text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, " $1")}
                        </span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No nutritional information available.</p>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Farm Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-600">Farm Name:</span>
                    <span className="ml-2 font-medium">
                      {product.farmInfo.name}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Location:</span>
                    <span className="ml-2 font-medium">
                      {product.farmInfo.location}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Certification:</span>
                    <span className="ml-2 font-medium">
                      {product.farmInfo.certification}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.isArray(relatedProducts) && relatedProducts.length > 0 ? (
              relatedProducts.map((relatedProduct) => (
                <ProductCard 
                  key={relatedProduct._id || relatedProduct.id} 
                  product={relatedProduct} 
                />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">
                No related products found.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Carousel */}
        <div>
          <NormalCarousel />
        </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>

    </div>
  );
};

export default ProductDetail;
