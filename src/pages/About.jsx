import React, { useState } from "react";
import {
  Leaf,
  Heart,
  Users,
  Shield,
  Recycle,
  Droplets,
  Sun,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Award,
  CheckCircle,
} from "lucide-react";
import Footer from "../components/Footer";

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Health Enthusiast",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1c2?w=150&h=150&fit=crop&crop=face",
      text: "Bliss Organic Store has transformed my skincare routine. Their herbal products are gentle yet effective, and I love knowing they're sustainably made.",
    },
    {
      name: "Michael Chen",
      role: "Sustainable Living Advocate",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "The quality of organic groceries here is unmatched. Fresh, natural, and delivered with care. This store truly lives up to its mission.",
    },
    {
      name: "Emma Rodriguez",
      role: "Eco-Conscious Mom",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "I trust Bliss Organic Store for all my family's needs. Their commitment to sustainability and natural ingredients gives me peace of mind.",
    },
  ];

  const teamMembers = [
    {
      name: "Alex Green",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      bio: "Passionate about sustainable living and natural wellness",
    },
    {
      name: "Maya Patel",
      role: "Head of Product",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
      bio: "Expert in organic formulations and eco-friendly sourcing",
    },
    {
      name: "David Wilson",
      role: "Sustainability Director",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face",
      bio: "Dedicated to reducing environmental impact through innovation",
    },
  ];

  const journeySteps = [
    {
      year: "2018",
      title: "The Seed is Planted",
      description:
        "Founded with a vision to make organic living accessible to everyone",
    },
    {
      year: "2019",
      title: "First Harvest",
      description: "Launched our first line of herbal skincare products",
    },
    {
      year: "2021",
      title: "Growing Roots",
      description: "Expanded to include organic groceries and home essentials",
    },
    {
      year: "2023",
      title: "Blooming Community",
      description:
        "Reached 10,000+ happy customers and launched sustainability initiatives",
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Continuing to innovate with new eco-friendly product lines",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-emerald-50 opacity-70"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-emerald-200 rounded-full opacity-30"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Leaf className="w-16 h-16 text-green-600 mx-auto mb-4" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6 leading-tight">
            About Bliss Organic Store
          </h1>
          <p className="text-xl md:text-2xl text-green-600 font-medium mb-8">
            Rooted in nature, grown with love
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We believe in the power of nature to nourish, heal, and sustain. Our
            journey began with a simple mission: to bring you the purest, most
            sustainable products that honor both your health and our planet.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Guided by our core values, we're committed to creating a
              healthier, more sustainable world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Nature First
              </h3>
              <p className="text-gray-600">
                We source only the finest natural ingredients, respecting the
                earth's bounty while delivering exceptional quality to your
                doorstep.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Community
              </h3>
              <p className="text-gray-600">
                Building a community of like-minded individuals who share our
                passion for sustainable living and natural wellness.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Trust
              </h3>
              <p className="text-gray-600">
                Transparency in our processes, authenticity in our products, and
                integrity in every interaction with our valued customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The passionate individuals behind Bliss Organic Store, dedicated
              to bringing you the best of nature
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From a small idea to a thriving community of nature lovers
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>

            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "pr-8" : "pl-8"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold">
                          {step.year}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Our Commitment to Sustainability
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every choice we make is guided by our responsibility to protect
              and preserve our planet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Zero Waste
              </h3>
              <p className="text-gray-600 text-sm">
                Minimal packaging, maximum impact
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Water Conservation
              </h3>
              <p className="text-gray-600 text-sm">
                Protecting our most precious resource
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Renewable Energy
              </h3>
              <p className="text-gray-600 text-sm">
                Powered by clean, sustainable energy
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Certified Organic
              </h3>
              <p className="text-gray-600 text-sm">
                Verified quality and authenticity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-lg">
              Real stories from our community
            </p>
          </div>

          <div className="relative bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 text-lg mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <h4 className="text-xl font-semibold text-green-800 mb-2">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-green-600">
                {testimonials[currentTestimonial].role}
              </p>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-green-100 hover:bg-green-200 rounded-full p-3 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-green-600" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-100 hover:bg-green-200 rounded-full p-3 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-green-600" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? "bg-green-600" : "bg-green-200"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Journey CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Journey
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Be part of our growing community and stay updated with the latest in
            sustainable living, exclusive offers, and nature-inspired wellness
            tips.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white text-gray-700"
              />
              <button
                onClick={handleSubscribe}
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Subscribe</span>
              </button>
            </div>

            {subscribed && (
              <div className="mt-4 p-3 bg-green-500 rounded-lg">
                <div className="flex items-center justify-center space-x-2 text-white">
                  <CheckCircle className="w-5 h-5" />
                  <span>Thank you for joining our journey! 🌱</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;