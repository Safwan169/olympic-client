import React, { useState, useEffect } from 'react';
import { Send, Mail, PaperclipIcon, ArrowRight, CheckCircle } from 'lucide-react';
import FAQ from './FAQ';
import Location from './Location';

const ContactPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState('');
  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const departments = [
    { id: 'General', name: 'General' },
    { id: 'Shareholder', name: 'Shareholder' },
    { id: 'Export', name: 'Customer Export' },
    { id: 'Media', name: 'Media ' },
    { id: 'CSR & Sustainbaility', name: 'CSR & Sustainbaility' }
  ];

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      selectedDepartment,
      feedbackType,
      message,
      files
    });

    setSubmitted(true);

    setTimeout(() => {
      setName('');
      setEmail('');
      setSelectedDepartment('');
      setFeedbackType('');
      setMessage('');
      setFiles([]);
      setSubmitted(false);
    }, 5000);
  };

  return (
    <>

      <img src="contact.png" alt="" />
      <div className="min-h-screen flex flex-col bg-black relative overflow-hidden">

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black opacity-80"></div>

          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-40 animate-pulse"
              style={{
                width: `${Math.random() * 10 + 1}px`,
                height: `${Math.random() * 10 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: `hsl(${Math.random() * 60 + 0}, 100%, 70%)`,
                boxShadow: `0 0 20px 2px hsla(${Math.random() * 60 + 0}, 100%, 70%, 0.8)`,
                animationDuration: `${Math.random() * 8 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}

          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(139, 0, 0, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139, 0, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: 'center center'
          }}></div>

          {[...Array(3)].map((_, i) => (
            <div
              key={`circle-${i}`}
              className="absolute rounded-full opacity-10 animate-pulse"
              style={{
                width: `${Math.random() * 400 + 200}px`,
                height: `${Math.random() * 400 + 200}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                border: `4px solid hsla(${Math.random() * 60 + 0}, 100%, 70%, 0.3)`,
                animationDuration: `${Math.random() * 15 + 20}s`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div
            className={`mx-auto transition-all  duration-1000 transform ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >

            <div className='lg:flex-row flex-col flex justify-evenly items-start gap-12'>

              <div className="w-full lg:w-1/2">
                <div className="text-center mt-20 mb-12">
                  <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 to-red-600 mb-6 animate-pulse">
                    Get In Touch
                  </h1>
                  <p className="text-lg text-yellow-300 max-w-lg mx-auto">
                    We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <div
                  className="bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-800 relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
                  style={{ backdropFilter: 'blur(10px)' }}
                >
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-500 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                  {submitted ? (
                    <div className="text-center py-16 animate-fade-in">
                      <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-green-900/30 border border-green-500">
                        <CheckCircle className="w-10 h-10 text-green-500 animate-bounce" />
                      </div>
                      <h2 className="text-3xl font-bold text-yellow-400 mb-4 animate-pulse">Thank You!</h2>
                      <p className="text-yellow-300">Your message has been sent successfully. We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 relative">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div
                          className="space-y-2 transition-all duration-300 hover:transform hover:translate-y-1"
                          style={{ animationDelay: '0.1s' }}
                        >
                          <label htmlFor="name" className="block text-sm font-medium text-yellow-400">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-yellow-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 placeholder-gray-500"
                            placeholder="John Doe"
                          />
                        </div>

                        <div
                          className="space-y-2 transition-all duration-300 hover:transform hover:translate-y-1"
                          style={{ animationDelay: '0.2s' }}
                        >
                          <label htmlFor="email" className="block text-sm font-medium text-yellow-400">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-yellow-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 placeholder-gray-500"
                            placeholder="johndoe@example.com"
                          />
                        </div>
                      </div>

                      <div
                        className="space-y-2 transition-all duration-300 hover:transform hover:translate-y-1"
                        style={{ animationDelay: '0.3s' }}
                      >
                        <label htmlFor="department" className="block text-sm font-medium text-yellow-400">
                          Department
                        </label>
                        <select
                          id="department"
                          required
                          value={selectedDepartment}
                          onChange={(e) => setSelectedDepartment(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-yellow-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 placeholder-gray-500"
                        >
                          <option value="">Select a Department</option>
                          {departments.map((dept) => (
                            <option key={dept.id} value={dept.id}>
                              {dept.name}
                            </option>
                          ))}
                        </select>
                      </div>


                      <div
                        className="space-y-2 transition-all duration-300 hover:transform hover:translate-y-1"
                        style={{ animationDelay: '0.5s' }}
                      >
                        <label htmlFor="message" className="block text-sm font-medium text-yellow-400">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={5}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-yellow-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 placeholder-gray-500"
                          placeholder="How can we help you today?"
                        ></textarea>
                      </div>

                      <div
                        className="space-y-2 transition-all duration-300 hover:transform hover:translate-y-1"
                        style={{ animationDelay: '0.6s' }}
                      >
                        <label htmlFor="attachment" className="block text-sm font-medium text-yellow-400">
                          Attachments (optional)
                        </label>
                        <div className="flex items-center justify-center w-full">
                          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer bg-gray-800/50 hover:bg-gray-700/30 transition-all duration-300">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg className="w-10 h-10 mb-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                              </svg>
                              <p className="mb-2 text-sm text-yellow-400">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                              </p>
                              <p className="text-xs text-yellow-500">PDF, DOC, JPG, PNG (MAX. 10MB)</p>
                            </div>
                            <input
                              id="attachment"
                              type="file"
                              className="hidden"
                              multiple
                              onChange={handleFileChange}
                            />
                          </label>
                        </div>
                        {files.length > 0 && (
                          <div className="mt-2">
                            <p className="text-sm text-yellow-400">Files selected: {files.length}</p>
                            <ul className="mt-1 text-xs text-yellow-300">
                              {files.map((file, index) => (
                                <li key={index} className="flex items-center">
                                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                  {file.name}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="flex justify-center pt-4">
                        <button
                          type="submit"
                          className="group relative overflow-hidden inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-500 hover:to-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-red-500 transition-all duration-500 transform hover:scale-105"
                        >
                          <span className="absolute inset-0 w-full h-full bg-yellow-300/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-full"></span>

                          <Send className="mr-2 h-5 w-5 animate-pulse" />
                          <span className="relative z-10">Send Message</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
              <div className="w-full  max-w-fit">
                <FAQ />
              </div>

            </div>


            <div className="mt-12">
              <Location />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {Array.from({ length: 3 }).map((_, index) => {
                const cardProps = [
                  {
                    icon: <Mail className="h-6 w-6 text-yellow-400" />,
                    title: "Email Us",
                    desc: "Our friendly team is here to help.",
                    contact: "hello@company.com",
                    color: "from-red-600/20 to-red-900/20",
                    borderColor: "border-red-800",
                    hoverColor: "hover:border-red-600",
                    hoverShadow: "hover:shadow-red-500/20",
                    delay: "0.1s"
                  },
                  {
                    icon: <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>,
                    title: "Call Us",
                    desc: "Mon-Fri from 8am to 5pm.",
                    contact: "+1 (234) 567-890",
                    color: "from-green-600/20 to-green-900/20",
                    borderColor: "border-green-800",
                    hoverColor: "hover:border-green-600",
                    hoverShadow: "hover:shadow-green-500/20",
                    delay: "0.3s"
                  },
                  {
                    icon: <svg className="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>,
                    title: "Visit Us",
                    desc: "Come say hello at our office.",
                    contact: "123 Business Ave, Suite 100<br />New York, NY 10001",
                    color: "from-red-600/20 to-red-900/20",
                    borderColor: "border-red-800",
                    hoverColor: "hover:border-red-600",
                    hoverShadow: "hover:shadow-red-500/20",
                    delay: "0.5s"
                  }
                ][index];

                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${cardProps.color} backdrop-blur-lg rounded-xl shadow-xl p-6 border ${cardProps.borderColor} flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 ${cardProps.hoverColor} ${cardProps.hoverShadow}`}
                    style={{
                      animationDelay: cardProps.delay,
                      backdropFilter: 'blur(4px)',
                      transitionDelay: cardProps.delay
                    }}
                  >
                    <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center mb-4 border border-red-700 animate-pulse">
                      {cardProps.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-2">{cardProps.title}</h3>
                    <p className="text-yellow-300">{cardProps.desc}</p>
                    <p
                      className={`${index === 1 ? 'text-green-400' : 'text-red-400'} font-medium mt-2 ${index === 1 ? 'hover:text-green-300' : 'hover:text-red-300'} transition-colors`}
                      dangerouslySetInnerHTML={{ __html: cardProps.contact }}
                    ></p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;