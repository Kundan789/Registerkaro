import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-700">{question}</span>
        <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, our software allows you to recover deleted files from your desktop. The recovery process is simple and efficient."
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, our software allows you to recover deleted files from your desktop. The recovery process is simple and efficient."
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, our software allows you to recover deleted files from your desktop. The recovery process is simple and efficient."
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, our software allows you to recover deleted files from your desktop. The recovery process is simple and efficient."
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, our software allows you to recover deleted files from your desktop. The recovery process is simple and efficient."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-orange-500 uppercase tracking-wider font-medium">
            FAQ
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Frequent Ask Questions
          </h2>
        </div>

        <div className="bg-white rounded-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="border-l-4 border-blue-500 bg-white shadow-sm mb-4">
              <FAQItem {...faq} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition duration-200">
            Show more →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;