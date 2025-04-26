import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Phone, Mail, Clock, ExternalLink, Plus, X } from 'lucide-react'; // Added X icon

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What are your business hours?',
      answer: 'Our business hours are Monday to Friday, 9:00 AM to 5:00 PM. We are closed on weekends and public holidays.'
    },
    {
      id: 2,
      question: 'How quickly can I expect a response?',
      answer: 'We aim to respond to all inquiries within 24-48 business hours. For urgent matters, please contact our customer support line directly.'
    },
    {
      id: 3,
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary depending on the destination.'
    },
    {
      id: 4,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, bank transfers, and various local payment methods depending on your region.'
    }
  ];


  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };



  return (
    // Adjusted padding and text color
    <div className="bg-transparent w-full lg:mt-40 text-yellow-300 px-4 py-16"> {/* Keep padding/py here */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Updated header gradient */}
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 to-red-600">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              // Updated border color, removed gradient background, set solid dark background, added hover shadow
              className="border border-red-800 rounded-xl overflow-hidden bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.01 }} // Kept hover scale effect
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left focus:outline-none group"
                onClick={() => toggleFaq(faq.id)}
              >
                {/* Updated question text color */}
                <span className="font-medium text-yellow-400 text-lg">{faq.question}</span>
                {/* Use motion for animation on the container */}
                <motion.div
                  // Rotate based on active state
                  animate={{ rotate: activeFaq === faq.id ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800 p-1 rounded-full flex-shrink-0" // Added flex-shrink-0
                >
                  {/* Conditionally render Plus or X based on active state */}
                  {activeFaq === faq.id ? (
                     // X icon when expanded, red color
                    <X size={20} className="text-red-400" />
                  ) : (
                     // Plus icon when collapsed, red color
                    <Plus size={20} className="text-red-400" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {activeFaq === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    // **Fix for width increase**: Add w-full here
                    className="overflow-hidden max-w-[500px]"
                  >
                    {/* Updated border color, removed background gradient, text color updated */}
                    <div className="p-5 border-t border-red-800"> {/* Inherits bg-gray-800 from parent */}
                      <p className="text-yellow-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ;