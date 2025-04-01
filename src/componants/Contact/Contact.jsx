import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Paperclip, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [feedbackType, setFeedbackType] = useState('');

  const departments = [
    { name: 'Customer Service', email: 'customerservice@company.com' },
    { name: 'Sales', email: 'sales@company.com' },
    { name: 'Marketing', email: 'marketing@company.com' },
    { name: 'Technical Support', email: 'techsupport@company.com' },
    { name: 'General Inquiries', email: 'info@company.com' },
  ];

  const feedbackOptions = [
    { value: 'product', label: 'Product Feedback' },
    { value: 'service', label: 'Service Feedback' },
    { value: 'both', label: 'Both Product & Service' },
  ];

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log({
      name,
      email,
      subject,
      message,
      selectedDepartment,
      feedbackType,
      file,
    });
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setSelectedDepartment('');
      setFeedbackType('');
      setFile(null);
    }, 3000);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl font-bold text-indigo-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            We're here to help! Reach out to our team with any questions, feedback, or concerns.
          </motion.p>
        </div>

        {submitted ? (
          <motion.div 
            className="bg-white rounded-lg shadow-xl p-8 text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
            <p className="text-gray-600 mb-4">
              Your message has been sent successfully to our {selectedDepartment} department.
            </p>
            <p className="text-gray-500 text-sm">
              We'll get back to you as soon as possible.
            </p>
          </motion.div>
        ) : (
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div 
                  variants={fadeIn}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    required
                  />
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    required
                  />
                </motion.div>
              </div>

              <motion.div 
                className="mb-6"
                variants={fadeIn}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="department">
                  Department
                </label>
                <select
                  id="department"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  required
                >
                  <option value="" disabled>Select a department</option>
                  {departments.map((dept) => (
                    <option key={dept.name} value={dept.name}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </motion.div>

              <motion.div 
                className="mb-6"
                variants={fadeIn}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="feedback">
                  Feedback Type
                </label>
                <div className="flex flex-wrap gap-4">
                  {feedbackOptions.map((option) => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        name="feedbackType"
                        value={option.value}
                        checked={feedbackType === option.value}
                        onChange={() => setFeedbackType(option.value)}
                        className="mr-2 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="mb-6"
                variants={fadeIn}
                transition={{ delay: 0.7 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  required
                />
              </motion.div>
              
              <motion.div 
                className="mb-6"
                variants={fadeIn}
                transition={{ delay: 0.8 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  required
                ></textarea>
              </motion.div>
              
              <motion.div 
                className="mb-8"
                variants={fadeIn}
                transition={{ delay: 0.9 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="attachment">
                  Attachment
                </label>
                <div className="flex items-center">
                  <label className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md cursor-pointer hover:bg-gray-200 transition-all">
                    <Paperclip className="w-5 h-5 mr-2" />
                    <span>{file ? file.name : "Choose file"}</span>
                    <input
                      type="file"
                      id="attachment"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  {file && (
                    <button
                      type="button"
                      onClick={() => setFile(null)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="px-8 py-4 bg-gray-50 border-t border-gray-200 flex justify-end"
              variants={fadeIn}
              transition={{ delay: 1 }}
            >
              <motion.button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-md flex items-center hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </motion.button>
            </motion.div>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;