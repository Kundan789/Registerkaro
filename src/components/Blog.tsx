import React from 'react';
import { ArrowRight } from 'lucide-react';

const BlogCard = ({ image, date, author, title, description, tags }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
      loading="lazy"
      width="400"
      height="200"
    />
    <div className="p-6">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <span>{author}</span>
        <span className="mx-2">•</span>
        <span>{date}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2 hover:text-orange-500 transition duration-200">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <button className="text-blue-900 font-medium hover:text-orange-500 transition duration-200 flex items-center">
        Read more <ArrowRight className="ml-2 w-4 h-4" />
      </button>
    </div>
  </div>
);

const Blog = () => {
  // Reduced to 3 blog posts for initial load
  const blogs = [
    {
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
      date: "1 Jan 2023",
      author: "Prabhash Mishra",
      title: "Small business & Startup",
      description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Tax & Audit", "Management"]
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      date: "1 Jan 2023",
      author: "Mukesh Kumar",
      title: "Scale-Up Company Offer",
      description: "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Compliance"]
    },
    {
      image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=800",
      date: "1 Jan 2023",
      author: "Rakhi Verma",
      title: "Growing Business Package",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Audit", "Money Back"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-orange-500 uppercase tracking-wider font-medium">
            EXPLORE OUR BLOGS
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Accelerate Digital Transformation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition duration-200">
            Show more blogs →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;