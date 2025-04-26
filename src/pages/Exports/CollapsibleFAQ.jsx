import React, { useState } from "react";

const faqs = [
  {
    question: "What products does Olympic Industries export?",
    answer:
      "Olympic Industries exports biscuits, confectionery, bakery items, noodles, and snacks. We currently export to over 32 countries worldwide."
  },
  {
    question: "What certifications does Olympic Industries hold?",
    answer:
      "We are the first biscuit manufacturer in Bangladesh to receive ISO 22000 certification. All our facilities are also Halal certified."
  },
  {
    question: "Is the product packaging multilingual?",
    answer:
      "Yes, a significant portion of our product packaging is multilingual to cater to our international clients."
  },
  {
    question: "How can I inquire about export opportunities?",
    answer:
      "You can visit the Export section of our website, or contact our Export Manager directly at export@olympicbd.com or by phone at +880 1760-403595."
  },
  {
    question: "Where can I explore your products?",
    answer:
      "You can explore our diverse product range by visiting the 'Brands' page on our website."
  }
];

export default function CollapsibleFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <span className="text-red-500 font-medium uppercase tracking-wider">FREQUENTLY ASKED</span>
        <h2 className="text-4xl font-bold mt-2 text-white">Export FAQs</h2>
        <div className="w-16 h-0.5 bg-red-500 mx-auto mt-4"></div>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-600"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left px-6 py-5 flex justify-between items-center transition-colors duration-300 ${
                openIndex === index 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-900 hover:bg-gray-800 text-gray-300'
              }`}
            >
              <span className="text-lg font-medium mr-4">{faq.question}</span>
              <svg 
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180 text-red-500' : 'text-gray-400'
                }`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-800 text-gray-300 border-t border-gray-700 animate-fadeIn">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}