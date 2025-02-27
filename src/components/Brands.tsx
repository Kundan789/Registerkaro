import React from 'react';

const Brands = () => {
  const brands = [
    { name: "Oracle", logo: "https://cdn-icons-png.flaticon.com/512/5969/5969114.png" },
    { name: "Samsung", logo: "https://cdn-icons-png.flaticon.com/512/882/882836.png" },
    { name: "Segment", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968382.png" },
    { name: "Monday", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968875.png" },
    { name: "Dropbox", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968517.png" },
    { name: "Slack", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968890.png" }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            Trusted By Over 100+ Startups and freelance business
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-75">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img src={brand.logo} alt={brand.name} className="h-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;