import React from 'react';
import { Search, Check } from 'lucide-react';

const SearchBar = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Welcome to your new digital reality. Now.
        </h2>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search your query..."
            className="w-full px-6 py-4 rounded-lg shadow-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 p-3 rounded-lg text-white hover:bg-orange-600 transition duration-200">
            <Search className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-6 text-white">
          <div className="flex items-center">
            <Check className="w-4 h-4 mr-2" />
            <span>Instant results</span>
          </div>
          <div className="flex items-center">
            <Check className="w-4 h-4 mr-2" />
            <span>User-friendly interface</span>
          </div>
          <div className="flex items-center">
            <Check className="w-4 h-4 mr-2" />
            <span>Personalized customization</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;