import React, { lazy, Suspense, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import Footer from './components/Footer';

// Lazy load non-critical components
const About = lazy(() => import('./components/About'));
const Stats = lazy(() => import('./components/Stats'));
const SearchBar = lazy(() => import('./components/SearchBar'));
const MobileApp = lazy(() => import('./components/MobileApp'));
const VideoSection = lazy(() => import('./components/VideoSection'));
const HappyClients = lazy(() => import('./components/HappyClients'));
const Process = lazy(() => import('./components/Process'));
const Blog = lazy(() => import('./components/Blog'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const WhyChoose = lazy(() => import('./components/WhyChoose'));
const FAQ = lazy(() => import('./components/FAQ'));

// Loading fallback
const LoadingFallback = () => (
  <div className="flex justify-center items-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900"></div>
  </div>
);

function App() {
  // Handle hash navigation on page load
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <Brands />
      <div id="services">
        <Services />
      </div>
      
      <Suspense fallback={<LoadingFallback />}>
        <div id="about">
          <About />
        </div>
        <Stats />
        <SearchBar />
        <MobileApp />
        <VideoSection />
        <HappyClients />
        <Process />
        <div id="blog">
          <Blog />
        </div>
        <Testimonials />
        <WhyChoose />
        <FAQ />
      </Suspense>
      
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;