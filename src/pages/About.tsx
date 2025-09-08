import React from 'react';
import { Building2, Target, Eye, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <Building2 className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">My Equity School</h2>
          </div>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            <strong>My Equity School</strong> is dedicated to democratizing financial education and promoting equity in learning opportunities. 
            We believe that everyone deserves access to quality financial literacy education, regardless of their background, income level, or prior knowledge.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to break down barriers to financial education and create inclusive learning environments where all students can thrive. 
            Through innovative teaching methods, culturally responsive curriculum, and accessible resources, we empower learners to build financial confidence and achieve economic stability.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To provide accessible, high-quality financial education that empowers individuals from all backgrounds to make informed financial decisions and build wealth.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To create a world where financial literacy is accessible to everyone, eliminating economic disparities through education and empowerment.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600">
              Equity, accessibility, excellence, and empowerment guide our educational approach and commitment to student success.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Culturally responsive and inclusive curriculum design</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Evidence-based teaching methodologies</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Affordable and accessible learning options</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Personalized learning support and mentorship</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Continuous curriculum development and innovation</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Community partnerships and social impact focus</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;