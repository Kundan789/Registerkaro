import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white py-4 px-6 fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <div 
              className="text-2xl font-bold text-blue-900 cursor-pointer" 
              onClick={() => scrollToSection('home')}
            >
              RegisterKaro
            </div>
            
            <div className="hidden md:flex space-x-6">
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                className={`${activeSection === 'home' ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}
              >
                Home
              </a>
              <a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                className={`${activeSection === 'services' ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}
              >
                Our Services
              </a>
              <a 
                href="#blog" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('blog');
                }}
                className={`${activeSection === 'blog' ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}
              >
                Blog
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className={`${activeSection === 'contact' ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}
              >
                Contact Us
              </a>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className={`${activeSection === 'about' ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}
              >
                About us
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5 text-gray-500" />
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-200">
              Talk An Expert
            </button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                className={`${activeSection === 'home' ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}
              >
                Home
              </a>
              <a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                className={`${activeSection === 'services' ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}
              >
                Our Services
              </a>
              <a 
                href="#blog" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('blog');
                }}
                className={`${activeSection === 'blog' ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}
              >
                Blog
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className={`${activeSection === 'contact' ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}
              >
                Contact Us
              </a>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className={`${activeSection === 'about' ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}
              >
                About us
              </a>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-200">
                Talk An Expert
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;