import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  // Mock blog data - TODO: Replace with API call
  const blogPosts = [
    {
      id: 1,
      title: '10 Health Benefits of Eating Organic Foods',
      excerpt: 'Discover why choosing organic foods can significantly impact your health and well-being. From reduced exposure to pesticides to higher nutrient content...',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Sarah Johnson',
      date: '2025-01-18',
      category: 'Health & Nutrition',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'How to Start Your Own Organic Garden',
      excerpt: 'A complete beginner\'s guide to growing your own organic vegetables and herbs at home. Learn about soil preparation, seed selection...',
      image: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Mark Thompson',
      date: '2025-01-15',
      category: 'Gardening',
      readTime: '8 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Understanding Organic Certification Labels',
      excerpt: 'Navigate the world of organic labels and certifications. Learn what different organic seals mean and how to make informed purchasing decisions...',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Emily Chen',
      date: '2025-01-12',
      category: 'Education',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Seasonal Eating: Winter Organic Produce Guide',
      excerpt: 'Make the most of winter with this comprehensive guide to seasonal organic produce. Discover what\'s fresh, nutritious, and delicious...',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Rachel Green',
      date: '2025-01-10',
      category: 'Seasonal',
      readTime: '7 min read',
      featured: true
    },
    {
      id: 5,
      title: 'Organic vs Conventional: The Real Difference',
      excerpt: 'An in-depth comparison between organic and conventional farming practices. Learn about environmental impact, nutritional differences...',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Michael Rivera',
      date: '2025-01-08',
      category: 'Education',
      readTime: '10 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Healthy Organic Smoothie Recipes for Energy',
      excerpt: 'Boost your energy naturally with these delicious organic smoothie recipes. Perfect for breakfast, post-workout, or afternoon pick-me-ups...',
      image: 'https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Lisa Martinez',
      date: '2025-01-05',
      category: 'Recipes',
      readTime: '4 min read',
      featured: false
    }
  ];

  const categories = ['All Posts', 'Health & Nutrition', 'Gardening', 'Education', 'Seasonal', 'Recipes'];
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const BlogCard = ({ post, featured = false }) => (
    <article className={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 ${featured ? 'lg:col-span-2' : ''}`}>
      <div className={`${featured ? 'lg:flex' : ''}`}>
        <div className={`${featured ? 'lg:w-1/2' : ''}`}>
          <img
            src={post.image}
            alt={post.title}
            className={`w-full object-cover ${featured ? 'h-64 lg:h-full' : 'h-48'}`}
          />
        </div>
        
        <div className={`p-6 ${featured ? 'lg:w-1/2' : ''}`}>
          <div className="flex items-center space-x-4 mb-3">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          
          <h2 className={`font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors ${featured ? 'text-2xl' : 'text-lg'}`}>
            <Link to={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </h2>
          
          <p className={`text-gray-600 mb-4 ${featured ? 'text-base' : 'text-sm'}`}>
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                <div className="flex items-center text-gray-500 text-xs">
                  <Calendar className="h-3 w-3 mr-1" />
                  {formatDate(post.date)}
                </div>
              </div>
            </div>
            
            <Link
              to={`/blog/${post.id}`}
              className="text-green-600 hover:text-green-700 transition-colors group"
            >
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Health & Wellness Blog</h1>
          <p className="text-xl text-green-100">
            Discover the latest insights on organic living, nutrition, and sustainable farming
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                index === 0
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured={true} />
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with Our Latest Articles
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter and get the latest health tips, recipes, and organic living insights delivered to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-gray-500 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Popular Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Organic Nutrition', count: '24 articles', color: 'green' },
              { name: 'Home Gardening', count: '18 articles', color: 'blue' },
              { name: 'Healthy Recipes', count: '32 articles', color: 'orange' },
              { name: 'Sustainable Living', count: '15 articles', color: 'purple' }
            ].map((topic, index) => (
              <Link
                key={index}
                to={`/blog/category/${topic.name.toLowerCase().replace(' ', '-')}`}
                className={`bg-${topic.color}-50 border border-${topic.color}-200 rounded-lg p-6 text-center hover:bg-${topic.color}-100 transition-colors group`}
              >
                <h3 className={`font-semibold text-${topic.color}-900 mb-2 group-hover:text-${topic.color}-700`}>
                  {topic.name}
                </h3>
                <p className={`text-${topic.color}-600 text-sm`}>{topic.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;