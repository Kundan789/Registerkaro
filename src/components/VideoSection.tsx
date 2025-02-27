import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="bg-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 text-white">
            <h2 className="text-3xl font-bold mb-6">Our Video Introductions</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-full">
                  <Play className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Explore ideas together</h3>
                  <p className="text-blue-100">
                    Engage audience segments and finally create actionable insights.
                    Amplify vertical integration.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-full">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Bring those ideas to life</h3>
                  <p className="text-blue-100">
                    Engage audience segments and finally create actionable insights.
                    Amplify vertical integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
                alt="Video Thumbnail"
                className="rounded-lg shadow-xl"
                loading="lazy"
              />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 p-6 rounded-full text-white hover:bg-orange-600 transition duration-200">
                <Play className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;