import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const sections = [
    {
      title: "START A BUSINESS",
      links: ["Features", "Solutions", "Integrations", "Enterprise", "Solutions"]
    },
    {
      title: "GOVERNMENT REGISTRATION",
      links: ["Partners", "Community", "Developers", "App", "Blog"]
    },
    {
      title: "COMPLIANCE & TAX",
      links: ["Channels", "Scale", "Watch the Demo", "Our Competition"]
    },
    {
      title: "BIS & CDSCO",
      links: ["About Us", "News", "Leadership", "Media Kit"]
    }
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="text-gray-300 hover:text-white transition duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="flex space-x-6">
              <a href="mailto:info@registerkaro.in" className="text-gray-300 hover:text-white flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                info@registerkaro.in
              </a>
              <a href="tel:+918447772255" className="text-gray-300 hover:text-white flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +91 844 777 2255
              </a>
            </div>
          </div>

          <div className="text-center mt-8 text-gray-300">
            <p>© 2024 RegisterKaro. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;