import React from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <span className="text-orange-500 uppercase tracking-wider font-medium">
              WELCOME TO REGISTERKARO.IN
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
              About Register Karo
            </h2>
            
            <p className="text-gray-600 mb-4">
              We have been using Intellegencia as our DevOps vendor for our field service 
              applications over the last couple of years and I'm extremely pleased with 
              their performance, ability to execute, and willingness to adapt in our ever changing 
              environment. Perry is an outstanding leader who is fanatical about 
              customer satisfaction. He has built a solid team which has consistently delivered 
              on projects thereby exceeding everyone's expectations.
            </p>
            
            <p className="text-gray-600 mb-6">
              I would strongly recommend their services to any organization that is looking for 
              solid, reliable, and predictable outcomes.
            </p>
            
            <button className="flex items-center text-blue-900 font-medium hover:text-orange-500 transition duration-200">
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                alt="About RegisterKaro"
                className="w-full h-auto rounded-lg shadow-xl"
                loading="lazy"
                width="800"
                height="600"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 w-24 h-24 rounded-full"></div>
              <div className="absolute -top-6 -left-6 bg-blue-500 w-16 h-16 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);