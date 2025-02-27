import React from 'react';
import { Shield, DollarSign, UserCheck, Clock } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
    <div className="text-orange-500 mb-4">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyChoose = () => {
  const features = [
    {
      icon: Shield,
      title: "Confidential & Safe",
      description: "All your private information is safe with us"
    },
    {
      icon: DollarSign,
      title: "No Hidden Fee",
      description: "Everything is put before you with no hidden charges or conditions"
    },
    {
      icon: UserCheck,
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals"
    },
    {
      icon: Clock,
      title: "Guaranteed Satisfaction",
      description: "We ensure that you stay 100% satisfied with our offered services"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-orange-500 uppercase tracking-wider font-medium">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Why Choose Register Karo
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            It is with consistent services and results that build trust with the people and that in
            turn help us to serve the business better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;