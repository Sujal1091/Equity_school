import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">My Equity School</span>
            </div>
            <p className="text-gray-300 mb-4">
              Committed to delivering high-quality products/services while ensuring customer trust and transparency.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Mehra Industrial Compound, 2nd Floor, Office No. 206,<br />
                  VTM Building No.2, A K Road, Sakinaka, Mumbai,<br />
                  Mumbai Suburban, Maharashtra, 400072
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300"></p>
              </div>
              <p className="text-gray-300">+91-8329646041</p>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300"></p>
              </div>
              <p className="text-gray-300">info@myequityschool.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors duration-200">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Contact Us
              </Link>
              <Link to="/terms" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Terms and Conditions
              </Link>
              <Link to="/privacy" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Company Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">My Equity School</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering learners through accessible financial education and promoting equity in learning opportunities for all.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2025 My Equity School. All rights reserved.
            </p>
            <div className="text-gray-400 text-sm">
              © 2025 Your Company Legal Name. All rights reserved.
            <p className="text-gray-400 text-sm">
              Company Number: [As per MSME Certificate]
              Registered Educational Institution
            </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;