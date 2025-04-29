import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import cadbury from "../../../../assets/history/cadbury.png";
import been from "../../../../assets/history/cocoa-bean.png";

// Create an introduction slide to add at the beginning of the timeline
const introSlide = {
  year: "INTRO",
  title: "CADBURY TIMELINE",
  description: "Cadbury has been part of British culture and society since 1824. These are the key moments from our history that have made Cadbury what it is today.",
  image: cadbury,
  cocoaImage: been,
  isIntro: true
};

// Original timeline data
const historicalData = [
  {
    year: 1824,
    title: "THE BEGINNING",
    description: "John Cadbury opened his grocer's shop at 93 Bull Street, Birmingham. Amongst other goods, he sold cocoa and drinking chocolate, which he prepared himself using a pestle and mortar.",
    image: cadbury,
    cocoaImage: been
  },
  {
    year: 1866,
    title: "THE LAUNCH OF COCOA ESSENCE",
    description: "John's sons, George and Richard, heard about a Dutch cocoa press, able to squeeze out significantly purer cocoa butter. The brothers bought one and found they could make their drinking chocolate 100% pure. They called it 'Cocoa Essence', and advertised it as, 'Absolutely pure, therefore best'. Sales increased so much, it marked a major turning point for Cadbury.",
    image: cadbury,
    cocoaImage: been
  },
  {
    year: 1905,
    title: "DAIRY MILK IS BORN",
    description: "Cadbury's Dairy Milk was launched to compete against the dominant Swiss chocolate brands. With its higher milk content, it was advertised as having 'a glass and a half of full cream milk in every half pound'. The new recipe was a huge success and Dairy Milk became the company's best selling product by 1913.",
    image: cadbury,
    cocoaImage: been
  },
  {
    year: 1915,
    title: "MILK TRAY INTRODUCED",
    description: "Milk Tray was launched as an assortment of milk chocolates in a simple cardboard box, as opposed to the more elaborate presentation boxes of the time. It was designed as an affordable gift for everyday occasions.",
    image: cadbury,
    cocoaImage: been
  },
  {
    year: 1928,
    title: "CREATION OF CRUNCHIE",
    description: "The Crunchie bar, with its distinctive honeycomb center covered in milk chocolate, was introduced and quickly became one of Cadbury's most iconic products.",
    image: cadbury,
    cocoaImage: been
  },
  {
    year: 1969,
    title: "CREME EGG DEBUT",
    description: "Cadbury Creme Eggs were introduced. The chocolate eggs with a soft fondant filling would go on to become a seasonal favorite and an Easter tradition for many.",
    image: cadbury,
    cocoaImage: been
  },
  {
    year: 1990,
    title: "CARAMEL INNOVATION",
    description: "Cadbury launched several products featuring its signature caramel, expanding its offering beyond the traditional Dairy Milk range and establishing caramel as a key flavor in the Cadbury portfolio.",
    image: cadbury,
    cocoaImage: been
  }
];

// Combine intro with historical data
const timelineData = [introSlide, ...historicalData];

const HistorySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationState, setAnimationState] = useState('initial');
  const [direction, setDirection] = useState('next');
  const timelineRef = useRef(null);
  const scrollRef = useRef(null);
  const wheelTimeoutRef = useRef(null);
  const isScrollingRef = useRef(false);
  
  // Fixed handle wheel scrolling with improved responsiveness
  const handleWheel = useCallback((e) => {
    // Prevent the default scroll behavior
    e.preventDefault();
    
    // If already handling a scroll event, return
    if (isScrollingRef.current) return;
    
    isScrollingRef.current = true;
    
    // Clear any existing timeout
    if (wheelTimeoutRef.current) {
      clearTimeout(wheelTimeoutRef.current);
    }
    
    if (e.deltaY > 0) {
      // Scrolling down - next slide
      setDirection('next');
      nextSlide();
    } else if (e.deltaY < 0) {
      // Scrolling up - previous slide
      setDirection('prev');
      prevSlide();
    }
    
    // Set a timeout to reset the scrolling flag - shorter for better responsiveness
    wheelTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 600);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationState('entering');
          setTimeout(() => {
            setAnimationState('visible');
          }, 100);
        } else {
          setAnimationState('exiting');
          setTimeout(() => {
            setAnimationState('initial');
          }, 600);
        }
      },
      { threshold: 0.1 }
    );
    
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    
    // Add wheel event listener for scroll navigation
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
      if (currentScrollRef) {
        currentScrollRef.removeEventListener('wheel', handleWheel);
      }
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
    };
  }, [handleWheel]);
  
  const nextSlide = () => {
    setAnimationState('exiting');
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === timelineData.length - 1 ? 0 : prev + 1));
      setAnimationState('entering');
      
      setTimeout(() => {
        setAnimationState('visible');
      }, 100);
    }, 600);
  };
  
  const prevSlide = () => {
    setAnimationState('exiting');
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? timelineData.length - 1 : prev - 1));
      setAnimationState('entering');
      
      setTimeout(() => {
        setAnimationState('visible');
      }, 100);
    }, 600);
  };

  const startJourney = () => {
    setDirection('next');
    setAnimationState('exiting');
    
    setTimeout(() => {
      setCurrentSlide(1); // Move to the first historical slide
      setAnimationState('entering');
      
      setTimeout(() => {
        setAnimationState('visible');
      }, 100);
    }, 600);
  };
  
  const goToSlide = (index) => {
    // Set direction based on target index
    setDirection(index > currentSlide ? 'next' : 'prev');
    setAnimationState('exiting');
    
    setTimeout(() => {
      setCurrentSlide(index);
      setAnimationState('entering');
      
      setTimeout(() => {
        setAnimationState('visible');
      }, 100);
    }, 600);
  };
  
  // Get animation classes based on current state and direction
  const getContentAnimation = () => {
    if (animationState === 'initial') return 'opacity-0';
    if (animationState === 'entering') {
      return direction === 'next' 
        ? 'opacity-0 translate-y-12 scale-95' 
        : 'opacity-0 -translate-y-12 scale-95';
    }
    if (animationState === 'visible') return 'opacity-100 translate-y-0 scale-100';
    if (animationState === 'exiting') {
      return direction === 'next' 
        ? 'opacity-0 -translate-y-12 scale-95' 
        : 'opacity-0 translate-y-12 scale-95';
    }
    return '';
  };
  
  // Get image animation classes based on current state and direction
  const getImageAnimation = () => {
    if (animationState === 'initial') return 'opacity-0';
    if (animationState === 'entering') {
      return direction === 'next' 
        ? 'opacity-0 translate-x-12 rotate-6 scale-90' 
        : 'opacity-0 -translate-x-12 -rotate-6 scale-90';
    }
    if (animationState === 'visible') return 'opacity-100 translate-x-0 rotate-0 scale-100';
    if (animationState === 'exiting') {
      return direction === 'next' 
        ? 'opacity-0 -translate-x-12 -rotate-6 scale-90' 
        : 'opacity-0 translate-x-12 rotate-6 scale-90';
    }
    return '';
  };
  
  // Get decorative bean animation
  const getBeanAnimation = (position) => {
    if (animationState === 'initial') return 'opacity-0';
    if (animationState === 'entering') return 'opacity-0 scale-0';
    if (animationState === 'visible') {
      if (position === 'top') return 'opacity-100 scale-100 animate-float-slow rotate-12';
      if (position === 'left') return 'opacity-100 scale-100 animate-float-slow-reverse -rotate-12';
      if (position === 'bottom') return 'opacity-100 scale-100 animate-pulse-slow rotate-6';
    }
    if (animationState === 'exiting') return 'opacity-0 scale-0';
    return '';
  };
  
  // Get year number animation
  const getYearAnimation = () => {
    if (animationState === 'initial') return 'opacity-0 blur-lg';
    if (animationState === 'entering') return 'opacity-0 blur-lg scale-125';
    if (animationState === 'visible') return 'opacity-100 blur-0 scale-100';
    if (animationState === 'exiting') return 'opacity-0 blur-lg scale-75';
    return '';
  };
  
  const currentItem = timelineData[currentSlide];
  const isIntroSlide = currentSlide === 0;

  return (
    <div className="bg-gray-900 text-white overflow-hidden">
      {/* Background pattern for the entire section */}
      <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none" style={{ 
        backgroundSize: '400px',
        backgroundRepeat: 'repeat',
      }}></div>
      
      {/* Timeline Section */}
      <div 
        ref={timelineRef} 
        className="relative px-4 py-16 min-h-screen flex flex-col"
      >
        <div 
          ref={scrollRef} 
          className="container mx-auto max-w-6xl h-full flex flex-col"
          style={{ touchAction: 'none' }} // Prevents touch scrolling on mobile
        >
          {!isIntroSlide && (
            <div className="flex justify-end mb-8">
              <button 
                className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-full p-4 flex items-center gap-2 text-white"
                onClick={() => goToSlide(0)}
              >
                <span>Back to intro</span> 
                <ChevronUp className="w-5 h-5" />
              </button>
            </div>
          )}
          
          {isIntroSlide ? (
            /* Introduction Section as first slide */
            <div className="flex flex-col items-center justify-center min-h-screen">
              <h1 className={`text-6xl md:text-8xl font-bold text-yellow-300 mb-10 text-center transition-all duration-700 ${getYearAnimation()}`}>
                {currentItem.title}
              </h1>
              <div className={`max-w-3xl text-center mb-16 transition-all duration-700 ${getContentAnimation()}`}>
                <p className="text-xl md:text-2xl">
                  {currentItem.description}
                </p>
              </div>
              <button 
                onClick={startJourney}
                className={`inline-flex flex-col items-center gap-2 text-yellow-300 hover:text-yellow-100 transition-colors group cursor-pointer transition-all duration-700 ${getContentAnimation()}`}
              >
                <span className="text-2xl font-semibold">START THE JOURNEY</span>
                <ChevronDown className="w-10 h-10 animate-bounce group-hover:animate-pulse" />
              </button>
            </div>
          ) : (
            /* Historical timeline slides */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12 flex-1">
              {/* Year and Content */}
              <div className="overflow-hidden">
                <h2 className={`text-7xl md:text-9xl font-bold text-yellow-300 mb-8 transition-all duration-700 transform ${getYearAnimation()}`}>
                  {currentItem.year}
                </h2>
                <div className={`border-l-4 border-yellow-300 pl-6 transition-all duration-700 transform ${getContentAnimation()}`}>
                  <h3 className="text-2xl md:text-4xl font-bold mb-6">
                    {currentItem.title}
                  </h3>
                  {/* Fixed height text box */}
                  <div className="h-40 overflow-y-auto pr-4 text-lg md:text-xl">
                    <p>{currentItem.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Images with enhanced animations */}
              <div className="overflow-hidden">
                <div className="relative">
                  {/* Main image */}
                  <div className={`relative z-10 shadow-xl rounded-lg overflow-hidden transition-all duration-700 transform ${getImageAnimation()}`}>
                    <img 
                      src={currentItem.image} 
                      alt={`Cadbury in ${currentItem.year}`} 
                      className="w-full h-auto"
                    />
                    
                    {/* Semi-transparent overlay that fades in */}
                    <div className={`absolute inset-0 bg-yellow-900 bg-opacity-10 transition-opacity duration-1000 ${
                      animationState === 'visible' ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>
                  
                  {/* Decorative elements with more interesting animations */}
                  <div className={`absolute -top-6 -right-6 w-16 h-16 z-20 transition-all duration-1000 ${getBeanAnimation('top')}`}>
                    <img 
                      src={been}
                      alt="Cocoa bean" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className={`absolute top-1/3 -left-8 w-12 h-12 z-20 transition-all duration-1000 ${getBeanAnimation('left')}`}>
                    <img 
                      src={been} 
                      alt="Cocoa bean" 
                      className="w-full h-auto"
                    />
                  </div>
                  
                  {/* Additional decorative element */}
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 z-0 transition-all duration-1000 ${getBeanAnimation('bottom')}`}>
                    <img 
                      src={been} 
                      alt="Cocoa bean" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Navigation - Only show for non-intro slides */}
          {!isIntroSlide && (
            <div className="flex flex-col items-center gap-4 mb-8">
              <span className="text-lg font-medium">{currentSlide} / {timelineData.length - 1}</span>
              <div className="flex gap-6">
                {/* Swapped icons: previous uses ChevronDown, next uses ChevronUp */}
                <button 
                  onClick={prevSlide}
                  className="bg-gray-800 hover:bg-gray-700 rounded-full p-4 transition-colors transform hover:scale-110 active:scale-95 duration-300"
                  aria-label="Previous slide"
                >
                  <ChevronDown className="w-6 h-6 rotate-90" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="bg-gray-800 hover:bg-gray-700 rounded-full p-4 transition-colors transform hover:scale-110 active:scale-95 duration-300"
                  aria-label="Next slide"
                >
                  <ChevronUp className="w-6 h-6 rotate-90" />
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Timeline dots navigation - Only show for non-intro slides */}
        {!isIntroSlide && (
          <div className="fixed right-8 top-1/2 transform -translate-y-1/2 h-1/2 flex flex-col justify-center items-center z-30">
            <div className="w-1 bg-white bg-opacity-20 rounded-full h-full relative">
              {/* Animated progress indicator */}
              <div 
                className="absolute w-1 rounded-full bg-yellow-300 transition-all duration-700 ease-in-out"
                style={{ 
                  top: '0', 
                  height: `${((currentSlide - 1) / (timelineData.length - 2)) * 100}%`,
                  opacity: animationState === 'visible' ? 1 : 0,
                }}
              ></div>
              
              {/* Skip the intro slide in the dots navigation */}
              {timelineData.slice(1).map((item, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index + 1)} // +1 because we're skipping the intro
                  className={`absolute w-4 h-4 rounded-full -left-1.5 transition-all duration-500 ${
                    index + 1 === currentSlide 
                      ? 'bg-yellow-300 scale-125 shadow-glow' 
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75 hover:scale-110'
                  }`}
                  style={{ 
                    top: `${(index / (timelineData.length - 2)) * 100}%`,
                    boxShadow: index + 1 === currentSlide ? '0 0 10px 2px rgba(252, 211, 77, 0.5)' : 'none'
                  }}
                  aria-label={`Go to ${item.year}`}
                >
                  {/* Tooltip for year */}
                  <span className={`absolute right-6 top-0 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity ${
                    index + 1 === currentSlide ? 'opacity-100' : 'opacity-0 hover:opacity-100'
                  }`}>
                    {item.year}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Add these custom animations to your global CSS or as a style tag */}
      <style jsx>{`
        @keyframes float-slow {
          0% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(15deg); }
          100% { transform: translateY(0) rotate(12deg); }
        }
        
        @keyframes float-slow-reverse {
          0% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(10px) rotate(-15deg); }
          100% { transform: translateY(0) rotate(-12deg); }
        }
        
        @keyframes pulse-slow {
          0% { transform: scale(1) rotate(6deg); }
          50% { transform: scale(1.1) rotate(8deg); }
          100% { transform: scale(1) rotate(6deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delay {
          0% { opacity: 0; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-slow-reverse {
          animation: float-slow-reverse 5s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1.5s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1.5s ease-out 0.5s both;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 2s ease-out forwards;
        }
        
        .shadow-glow {
          box-shadow: 0 0 15px 5px rgba(252, 211, 77, 0.4);
        }
      `}</style>
    </div>
  );
};

export default HistorySection;