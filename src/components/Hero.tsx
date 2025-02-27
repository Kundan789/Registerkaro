import React from 'react';
import { Star, ArrowRight, Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">Google Rating</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Your trusted partner<br />
              for compliance business needs
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              An online business compliance platform that helps entrepreneurs and
              other individuals with various registrations, tax filings, and other legal matters.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-900">4.5+</span>
                <span className="ml-2 text-sm text-gray-600">Customer Rating</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-900">20,000+</span>
                <span className="ml-2 text-sm text-gray-600">Clients</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-900">99.8%</span>
                <span className="ml-2 text-sm text-gray-600">Financial Stability</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-200">
                Talk An Expert
              </button>
              <button className="flex items-center text-blue-900 px-6 py-3 rounded-md border border-blue-900 hover:bg-blue-50 transition duration-200">
                See how it works
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=800"
              alt="Business Compliance"
              className="w-full h-auto rounded-lg shadow-xl"
              loading="eager"
              width="800"
              height="600"
            />
            <div className="absolute -top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="bg-orange-100 p-2 rounded-full mr-3">
                  <Search className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Annual Compliance</p>
                </div>
              </div>
            </div>
            <div className="absolute top-1/4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Search className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Payroll Services</p>
                </div>
              </div>
            </div>
            <div className="absolute top-2/4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <Search className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Company Formation</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-1/4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <Search className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Annual Compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;