import { useState } from 'react';
import { ArrowRight, ChevronDown, Globe, Heart, BookOpen, CloudRain, Users } from 'lucide-react';

const SustainabilityOverview = () => {
  const [activeSection, setActiveSection] = useState(null);
  
  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };
  
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section with Angled Overlay */}
      <div className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('/api/placeholder/1200/600')`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        
        <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-red-600">Sustainability</span> Overview
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Creating a positive impact through ethical business practices and community engagement
          </p>
          <div className="mt-8">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all transform hover:translate-x-1">
              View our Impact <ArrowRight size={18} />
            </button>
          </div>
        </div>
        
        {/* Diagonal cut design element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-black transform -skew-y-2 translate-y-12 z-10" />
      </div>
      
      {/* Mission Statement - Centered Section */}
      <div className="max-w-4xl mx-auto py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Commitment</h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          Olympic Industries is dedicated to improving the lives of workers and communities 
          through sustainable business practices. We align our initiatives with the
          <span className="text-red-600 font-semibold"> United Nations Sustainable Development Goals (SDGs)</span>.
        </p>
        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-red-600" size={36} />
              </div>
              <p className="font-semibold">Global Impact</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-red-600" size={36} />
              </div>
              <p className="font-semibold">Community Care</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                <Users className="text-red-600" size={36} />
              </div>
              <p className="font-semibold">Ethical Business</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Key Focus Areas - Accordion Style */}
      <div className="bg-zinc-900 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Focus Areas</h2>
          
          <div className="space-y-6">
            {/* Health & Nutrition */}
            <div className="border-b border-zinc-700 pb-4">
              <button 
                onClick={() => toggleSection('health')}
                className="w-full flex justify-between items-center text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-900/30 rounded-full flex items-center justify-center">
                    <Heart className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Health & Nutrition</h3>
                </div>
                <ChevronDown 
                  size={24} 
                  className={`text-red-600 transition-transform ${activeSection === 'health' ? 'rotate-180' : ''}`}
                />
              </button>
              
              {activeSection === 'health' && (
                <div className="mt-4 pl-16 pr-4 text-gray-300 leading-relaxed">
                  <p>
                    We provide access to healthcare services and promote better nutrition in local communities.
                    Our initiatives include medical camps, nutrition workshops, and partnerships with healthcare
                    providers to ensure communities have access to essential services.
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="bg-zinc-800 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-red-600">5,000+</p>
                      <p className="text-sm">People Reached</p>
                    </div>
                    <div className="bg-zinc-800 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-red-600">24</p>
                      <p className="text-sm">Medical Camps</p>
                    </div>
                    <div className="bg-zinc-800 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-red-600">12</p>
                      <p className="text-sm">Partner Organizations</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Education */}
            <div className="border-b border-zinc-700 pb-4">
              <button 
                onClick={() => toggleSection('education')}
                className="w-full flex justify-between items-center text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-900/30 rounded-full flex items-center justify-center">
                    <BookOpen className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <ChevronDown 
                  size={24} 
                  className={`text-red-600 transition-transform ${activeSection === 'education' ? 'rotate-180' : ''}`}
                />
              </button>
              
              {activeSection === 'education' && (
                <div className="mt-4 pl-16 pr-4 text-gray-300 leading-relaxed">
                  <p>
                    We support educational programs and provide resources to improve learning outcomes.
                    Our scholarship programs, school infrastructure development, and learning resource 
                    donations have helped thousands of students achieve their educational goals.
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="bg-zinc-800 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-red-600">2,500+</p>
                      <p className="text-sm">Students Supported</p>
                    </div>
                    <div className="bg-zinc-800 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-red-600">15</p>
                      <p className="text-sm">Schools Renovated</p>
                    </div>
                    <div className="bg-zinc-800 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-red-600">500</p>
                      <p className="text-sm">Scholarships Awarded</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Climate Action */}
            <div className="border-b border-zinc-700 pb-4">
              <button 
                onClick={() => toggleSection('climate')}
                className="w-full flex justify-between items-center text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-900/30 rounded-full flex items-center justify-center">
                    <CloudRain className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Climate Action</h3>
                </div>
                <ChevronDown 
                  size={24} 
                  className={`text-red-600 transition-transform ${activeSection === 'climate' ? 'rotate-180' : ''}`}
                />
              </button>
              
              {activeSection === 'climate' && (
                <div className="mt-4 pl-16 pr-4 text-gray-300 leading-relaxed">
                  <p>
                    We're reducing our environmental footprint and investing in renewable energy.
                    Our eco-friendly manufacturing processes, waste reduction initiatives, and 
                    renewable energy projects demonstrate our commitment to fighting climate change.
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="bg-zinc-800 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-red-600">30%</p>
                      <p className="text-sm">Carbon Reduction</p>
                    </div>
                    <div className="bg-zinc-800 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-red-600">2</p>
                      <p className="text-sm">Solar Installations</p>
                    </div>
                    <div className="bg-zinc-800 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-red-600">45%</p>
                      <p className="text-sm">Waste Recycled</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Gender Equity */}
            <div className="border-b border-zinc-700 pb-4">
              <button 
                onClick={() => toggleSection('gender')}
                className="w-full flex justify-between items-center text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-900/30 rounded-full flex items-center justify-center">
                    <Users className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Gender Equity</h3>
                </div>
                <ChevronDown 
                  size={24} 
                  className={`text-red-600 transition-transform ${activeSection === 'gender' ? 'rotate-180' : ''}`}
                />
              </button>
              
              {activeSection === 'gender' && (
                <div className="mt-4 pl-16 pr-4 text-gray-300 leading-relaxed">
                  <p>
                    We create equal opportunities for women and empower female leaders.
                    Through our gender equity initiatives, leadership development programs, 
                    and workplace policies, we're creating a more inclusive environment.
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="bg-zinc-800 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-red-600">40%</p>
                      <p className="text-sm">Female Leadership</p>
                    </div>
                    <div className="bg-zinc-800 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-red-600">1,200+</p>
                      <p className="text-sm">Women Employed</p>
                    </div>
                    <div className="bg-zinc-800 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-red-600">18</p>
                      <p className="text-sm">Empowerment Programs</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Impact Metrics - Visual Section */}
      <div className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4">Communities Served</h3>
              <div className="flex items-end gap-4">
                <div className="text-5xl font-bold text-red-600">27</div>
                <div className="text-gray-400 pb-2">across Bangladesh</div>
              </div>
              <p className="mt-4 text-gray-300">
                We've established sustainable programs in 27 communities, focusing on long-term development and self-sufficiency.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4">Lives Impacted</h3>
              <div className="flex items-end gap-4">
                <div className="text-5xl font-bold text-red-600">50,000+</div>
                <div className="text-gray-400 pb-2">individuals</div>
              </div>
              <p className="mt-4 text-gray-300">
                Our programs have positively affected over 50,000 individuals through health, education, and economic initiatives.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4">Environmental Impact</h3>
              <div className="flex items-end gap-4">
                <div className="text-5xl font-bold text-red-600">30%</div>
                <div className="text-gray-400 pb-2">reduction in emissions</div>
              </div>
              <p className="mt-4 text-gray-300">
                We've achieved a 30% reduction in our carbon footprint through sustainable manufacturing practices and renewable energy.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4">Educational Support</h3>
              <div className="flex items-end gap-4">
                <div className="text-5xl font-bold text-red-600">15</div>
                <div className="text-gray-400 pb-2">schools renovated</div>
              </div>
              <p className="mt-4 text-gray-300">
                We've renovated 15 schools and provided educational resources to enhance learning environments for thousands of students.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-red-900/30 to-black py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Learn More About Our Initiatives</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            For detailed insights and full reports on our sustainability projects, visit our official website or contact our sustainability team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://olympicbd.com/sustainability/overview/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-all"
            >
              Visit Sustainability Hub
            </a>
            <button className="bg-transparent border border-red-600 text-red-600 hover:bg-red-600/10 px-6 py-3 rounded-full transition-all">
              Download Annual Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityOverview;