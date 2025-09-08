import React from 'react';
import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Get in touch with us for any inquiries or support
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Business Information */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Building2 className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">Business Information</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Legal Business Name:</h3>
                <p className="text-gray-700">My Equity School</p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Phone className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">Contact Details</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Phone Number:</p>
                  <p className="text-gray-700">+91-XXXX-XXXXXX</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Email Address:</p>
                  <p className="text-gray-700">info@myequityschool.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="flex items-center mb-4">
            <MapPin className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-900">Registered Address</h2>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <address className="text-gray-700 not-italic leading-relaxed">
              Mehra Industrial Compound, 2nd Floor, Office No. 206,<br />
              VTM Building No.2, A K Road, Sakinaka, Mumbai,<br />
              Mumbai Suburban, Maharashtra, 400072
            </address>
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="flex items-center mb-4">
            <Clock className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-900">Business Hours</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700">Monday - Friday:</span>
                <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700">Saturday:</span>
                <span className="text-gray-900 font-medium">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-700">Sunday:</span>
                <span className="text-gray-900 font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          <p className="text-gray-600 mb-6">
            Have questions about our courses, need enrollment assistance, or want to learn more about our financial education programs? We're here to help!
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;