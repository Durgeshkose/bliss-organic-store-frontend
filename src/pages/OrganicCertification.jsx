import React, { useState } from 'react';
import Footer from '../components/Footer';

const OrganicCertification = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const certificationBodies = [
    {
      name: 'USDA Organic',
      logo: '🇺🇸',
      description: 'United States Department of Agriculture certification ensuring products meet strict organic standards.'
    },
    {
      name: 'India Organic',
      logo: '🇮🇳',
      description: 'National Programme for Organic Production (NPOP) certification by Government of India.'
    },
    {
      name: 'ECOCERT',
      logo: '🌍',
      description: 'International organic certification body recognized worldwide for sustainable agriculture.'
    },
    {
      name: 'JAS Organic',
      logo: '🇯🇵',
      description: 'Japanese Agricultural Standards for organic food products and farming methods.'
    }
  ];

  const productCategories = [
    { name: 'Fresh Vegetables', icon: '🥕', count: '150+' },
    { name: 'Organic Fruits', icon: '🍎', count: '80+' },
    { name: 'Whole Grains', icon: '🌾', count: '45+' },
    { name: 'Pulses & Lentils', icon: '🫘', count: '35+' },
    { name: 'Dairy Products', icon: '🥛', count: '25+' },
    { name: 'Spices & Herbs', icon: '🌿', count: '60+' },
    { name: 'Oil & Ghee', icon: '🫒', count: '20+' },
    { name: 'Tea & Coffee', icon: '☕', count: '15+' }
  ];

  const healthBenefits = [
    {
      icon: '💪',
      title: 'Higher Nutrition',
      description: 'Organic foods contain higher levels of antioxidants, vitamins, and minerals compared to conventional products.'
    },
    {
      icon: '🚫',
      title: 'No Harmful Chemicals',
      description: 'Free from synthetic pesticides, herbicides, and artificial preservatives that can harm your health.'
    },
    {
      icon: '🧬',
      title: 'Non-GMO Guarantee',
      description: 'Certified organic products are never genetically modified, preserving natural food integrity.'
    },
    {
      icon: '🌱',
      title: 'Better Digestion',
      description: 'Natural farming methods result in foods that are easier to digest and gentler on your system.'
    }
  ];

  const environmentalBenefits = [
    {
      icon: '🌍',
      title: 'Soil Health',
      description: 'Organic farming improves soil fertility and prevents erosion through natural methods.'
    },
    {
      icon: '💧',
      title: 'Water Conservation',
      description: 'Reduces water pollution and promotes efficient water usage in agricultural practices.'
    },
    {
      icon: '🐝',
      title: 'Biodiversity',
      description: 'Supports wildlife habitats and protects beneficial insects like bees and butterflies.'
    },
    {
      icon: '🌡️',
      title: 'Climate Action',
      description: 'Lower carbon footprint through sustainable farming practices and reduced chemical usage.'
    }
  ];

  const faqs = [
    {
      question: 'How do I know if a product is truly organic?',
      answer: 'Look for official certification logos on the packaging, such as USDA Organic, India Organic, or ECOCERT. All our products display these certifications clearly. You can also check the certification number and verify it on the respective certification body\'s website.'
    },
    {
      question: 'What does "100% Organic" mean versus "Organic"?',
      answer: '100% Organic means the product contains only organic ingredients (excluding salt and water). "Organic" means at least 95% of ingredients are organic. "Made with Organic" indicates at least 70% organic ingredients. We clearly label each category on our products.'
    },
    {
      question: 'Are organic products more expensive? Why?',
      answer: 'Organic products may cost slightly more due to more labor-intensive farming methods, lower yields, and certification costs. However, the investment in your health and the environment makes it worthwhile. We strive to keep our prices competitive while maintaining quality.'
    },
    {
      question: 'How long do organic products last compared to conventional ones?',
      answer: 'Organic products may have a shorter shelf life since they don\'t contain artificial preservatives. However, they maintain their nutritional value better. We recommend consuming fresh organic produce within a few days and storing them properly to maximize freshness.'
    },
    {
      question: 'Can I trust all organic labels in the market?',
      answer: 'Not all organic labels are equal. Always look for recognized certification bodies like USDA, India Organic, or ECOCERT. Avoid products with vague terms like "natural" or "eco-friendly" without proper certification. At Bliss Organic Store, we only partner with verified certified suppliers.'
    },
    {
      question: 'Do you test your products for organic authenticity?',
      answer: 'Yes, we conduct regular third-party testing to verify the organic integrity of our products. Our suppliers must provide certification documents, and we perform random quality checks. All test results are available upon request for complete transparency.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <span className="text-4xl mr-3">🌱</span>
            <h1 className="text-4xl md:text-5xl font-bold">Bliss Organic Store</h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Organic Certification</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Your trust is our foundation. We're committed to providing you with genuinely certified organic products 
            that are healthy for you and sustainable for our planet. Every product in our store meets the highest 
            international organic standards.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* What is Organic Certification */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="text-3xl mr-3">🏆</span>
            What is Organic Certification?
          </h3>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Organic certification is a rigorous verification process that ensures products are grown, processed, 
              and handled according to strict organic standards. This certification prohibits the use of synthetic 
              pesticides, herbicides, fertilizers, GMOs, antibiotics, and growth hormones.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <p className="font-semibold text-green-800">
                Key Requirements for Organic Certification:
              </p>
              <ul className="mt-3 text-green-700 space-y-2">
                <li>• No synthetic chemicals or pesticides</li>
                <li>• No genetically modified organisms (GMOs)</li>
                <li>• Sustainable farming practices</li>
                <li>• Regular third-party inspections</li>
                <li>• Detailed record-keeping and traceability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why It's Important */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="text-3xl mr-3">💡</span>
            Why Organic Certification Matters
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">For Your Health</h4>
              <div className="grid gap-4">
                {healthBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                    <span className="text-2xl">{benefit.icon}</span>
                    <div>
                      <h5 className="font-semibold text-gray-800">{benefit.title}</h5>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">For Our Environment</h4>
              <div className="grid gap-4">
                {environmentalBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                    <span className="text-2xl">{benefit.icon}</span>
                    <div>
                      <h5 className="font-semibold text-gray-800">{benefit.title}</h5>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certification Bodies */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="text-3xl mr-3">🌍</span>
            Our Trusted Certification Bodies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificationBodies.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{cert.logo}</div>
                <h4 className="font-semibold text-gray-800 mb-2">{cert.name}</h4>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Categories */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="text-3xl mr-3">🛒</span>
            Our Certified Product Categories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl text-center hover:transform hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h4 className="font-semibold mb-1">{category.name}</h4>
                <p className="text-green-100 text-sm">{category.count} products</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Verify */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="text-3xl mr-3">🔍</span>
            How to Verify Our Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">Step-by-Step Verification:</h4>
              <ol className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  Look for certification logos on product packaging
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  Note the certification number displayed
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  Visit the certification body's official website
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  Enter the certification number in their verification portal
                </li>
              </ol>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">📧 Need Help?</h4>
              <p className="text-gray-600 mb-4">
                Can't find certification information? We're here to help! Contact our support team for:
              </p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Certification document copies</li>
                <li>• Product verification assistance</li>
                <li>• Supplier certification details</li>
                <li>• Third-party test reports</li>
              </ul>
              <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Contact Support 
              </button>
            </div>
          </div>
        </section>

        {/* Trust & Transparency */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="text-3xl mr-3">🤝</span>
            Our Trust & Transparency Policy
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl mb-3">📋</div>
              <h4 className="font-semibold text-gray-800 mb-2">Complete Documentation</h4>
              <p className="text-gray-600 text-sm">
                All certification documents, test reports, and supplier details are available for customer review upon request.
              </p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="text-3xl mb-3">🔬</div>
              <h4 className="font-semibold text-gray-800 mb-2">Regular Testing</h4>
              <p className="text-gray-600 text-sm">
                We conduct monthly third-party testing to ensure ongoing compliance with organic standards.
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl mb-3">👥</div>
              <h4 className="font-semibold text-gray-800 mb-2">Direct Relationships</h4>
              <p className="text-gray-600 text-sm">
                We work directly with certified organic farmers and suppliers, ensuring complete supply chain transparency.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="text-3xl mr-3">❓</span>
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <span className={`text-2xl transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaq === index && (
                  <div className="p-6 bg-white border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Your Organic Journey Today</h3>
          <p className="text-lg mb-6 opacity-90">
            Experience the difference of truly certified organic products. Your health and our planet will thank you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Shop Organic Products
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Download Certificates
            </button>
          </div>
        </section>
      </div>

      {/* footer */}

      <div>
        <Footer/>
        
      </div>
    </div>
  );
};

export default OrganicCertification;