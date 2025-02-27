import React from 'react';
import { Users, Award, Globe, Briefcase, Building } from 'lucide-react';

const StatItem = ({ number, label }) => (
  <div className="text-center">
    <div className="text-4xl font-bold text-gray-900 mb-2">{number}</div>
    <div className="text-sm text-gray-600 uppercase tracking-wide">{label}</div>
  </div>
);

const Stats = () => {
  const stats = [
    { number: "1M+", label: "Customers" },
    { number: "12+", label: "Years of Excellence" },
    { number: "41+", label: "R&D Engineers" },
    { number: "78+", label: "Countries" },
    { number: "3287+", label: "Partners" },
    { number: "41+", label: "Awards Received" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-orange-500 uppercase tracking-wider font-medium">
            WHY REGISTERKARO?
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Some Numbers are important
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;