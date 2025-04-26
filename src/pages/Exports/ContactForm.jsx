import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const countries = [
    "Select Country",
    "Afghanistan",
    "Australia",
    "Bangladesh",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Indonesia",
    "Japan",
    "Malaysia",
    "Nepal",
    "Pakistan",
    "Singapore",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-900 rounded-xl shadow-2xl">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/3">
          <div className="mb-4">
            <span className="text-red-500 font-medium text-sm uppercase tracking-wider">GET IN TOUCH</span>
            <div className="w-16 h-0.5 bg-red-500 mt-1"></div>
          </div>
          <h2 className="text-4xl font-bold leading-tight mb-6 text-white">
            Export <span className="text-red-500">Partnership</span> Enquiry
          </h2>
          <p className="text-gray-300 mb-6">
            Fill in the form to enquire about export opportunities and our team will contact you shortly.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-gray-800 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-300">export@olympic.com</span>
            </div>
            <div className="flex items-center">
              <div className="bg-gray-800 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-gray-300">+880 1234 567890</span>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-2/3 bg-gray-800 p-8 rounded-xl shadow-lg">
          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-900 text-green-300 rounded-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Thank you! Your enquiry has been submitted successfully.
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border-b-2 border-gray-600 py-3 px-4 text-white focus:outline-none focus:border-red-500 transition-colors peer"
                  required
                />
                <label className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-500 peer-valid:-top-4 peer-valid:text-xs">
                  Name
                </label>
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border-b-2 border-gray-600 py-3 px-4 text-white focus:outline-none focus:border-red-500 transition-colors peer"
                  required
                />
                <label className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-500 peer-valid:-top-4 peer-valid:text-xs">
                  Email
                </label>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border-b-2 border-gray-600 py-3 px-4 text-white focus:outline-none focus:border-red-500 transition-colors peer"
                  required
                />
                <label className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-500 peer-valid:-top-4 peer-valid:text-xs">
                  Phone
                </label>
              </div>
              
              <div className="relative">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border-b-2 border-gray-600 py-3 px-4 text-white focus:outline-none focus:border-red-500 appearance-none"
                  required
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country === "Select Country" ? "" : country} className="bg-gray-800">
                      {country}
                    </option>
                  ))}
                </select>
                <label className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-500 peer-valid:-top-4 peer-valid:text-xs">
                  
                </label>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="mb-8 relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-gray-700 border-b-2 border-gray-600 py-3 px-4 text-white focus:outline-none focus:border-red-500 resize-none transition-colors peer"
                required
              ></textarea>
              <label className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-500 peer-valid:-top-4 peer-valid:text-xs">
                Your Message
              </label>
            </div>
            
            <div className="flex justify-end">
              <button 
                type="submit" 
                className={`flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <span className="mr-2">Submit Enquiry</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}