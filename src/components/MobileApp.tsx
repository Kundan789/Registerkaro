import React from 'react';
import { Smartphone, Download } from 'lucide-react';

const MobileApp = () => {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">
              Manage Your Services by your Mobile Phone
            </h2>
            <p className="text-blue-100 mb-8">
              Download our app to manage and track your services. Our app enables you to stay in touch with our experts and stay up-to-date with your progress.
            </p>
            <div className="flex space-x-4">
              <button className="flex items-center bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition duration-200">
                <img src="https://cdn-icons-png.flaticon.com/512/831/831276.png" alt="App Store" className="w-6 h-6 mr-2" />
                App Store
              </button>
              <button className="flex items-center bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition duration-200">
                <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="Google Play" className="w-6 h-6 mr-2" />
                Google Play
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400"
                alt="Mobile App"
                className="relative z-10 rounded-xl shadow-2xl"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400"
                alt="Mobile App"
                className="absolute -bottom-10 -right-10 z-0 rounded-xl shadow-2xl w-3/4"
                loading="lazy"
              />
              <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full z-20">
                <img src="https://cdn-icons-png.flaticon.com/512/5977/5977575.png" alt="RegisterKaro" className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;