import React from 'react';

const HappyClients = () => {
  // Reduced number of logos to improve performance
  const clientLogos = [
    "https://cdn-icons-png.flaticon.com/512/5968/5968764.png", // Dropbox
    "https://cdn-icons-png.flaticon.com/512/5968/5968756.png", // Pinterest
    "https://cdn-icons-png.flaticon.com/512/5968/5968853.png", // Shopify
    "https://cdn-icons-png.flaticon.com/512/5968/5968866.png", // Slack
    "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", // Figma
    "https://cdn-icons-png.flaticon.com/512/5968/5968764.png", // Dropbox
    "https://cdn-icons-png.flaticon.com/512/5968/5968756.png", // Pinterest
    "https://cdn-icons-png.flaticon.com/512/5968/5968853.png", // Shopify
    "https://cdn-icons-png.flaticon.com/512/5968/5968866.png", // Slack
    "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", // Figma
    "https://cdn-icons-png.flaticon.com/512/5968/5968764.png", // Dropbox
    "https://cdn-icons-png.flaticon.com/512/5968/5968756.png", // Pinterest
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Happy Clients
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={logo} 
                alt={`Client ${index + 1}`} 
                className="h-10 grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
                width="40"
                height="40"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-blue-900 font-medium hover:text-orange-500 transition duration-200">
            Show more →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;