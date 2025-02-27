import React from 'react';
import { Building2, FileText, Home, Calculator, Users, BookOpen } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <div className="text-orange-500 mb-4">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="text-blue-900 font-medium hover:text-orange-500 transition duration-200 flex items-center">
      Learn more <span className="ml-2">→</span>
    </button>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Company Formation',
      description: 'Build web-based solutions that enhance customer experience.'
    },
    {
      icon: FileText,
      title: 'Company Secretarial Services',
      description: 'Make data-driven decisions and utilize technology to reach business goals.'
    },
    {
      icon: Home,
      title: 'Virtual Office Address',
      description: 'Foster customer relationships by effectively serving your market.'
    },
    {
      icon: Calculator,
      title: 'Annual Compliance Services',
      description: 'Turn your ideas into modern products with our design experts.'
    },
    {
      icon: Users,
      title: 'Payroll Services',
      description: 'Expand your business across the globe with minimal effort.'
    },
    {
      icon: BookOpen,
      title: 'Bookkeeping Services',
      description: 'Steering user behaviours with creative design, data insights & technology.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-orange-500 uppercase tracking-wider font-medium">
            WELCOME TO REGISTERKARO.IN
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Explore Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition duration-200"
            onClick={() => {
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            See All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;