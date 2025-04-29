/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// Styled components for the section
const GlanceSection = styled.section`
  background-color: #000000;
  color: #ffffff;
  padding: 80px 0;
  text-align: center;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #e5b80b; /* Golden color for titles as specified in SRS */
  margin-bottom: 50px;
  text-transform: uppercase;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    width: 80px;
    height: 3px;
    background-color: #ff0000; /* Red accent as specified in SRS */
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StatBox = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 15px;
  padding: 20px;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    margin: 10px 20px;
  }
`;

const StatIcon = styled.svg`
  width: 50px;
  height: 50px;
  margin: 0 auto 15px;
  fill: #ff0000; /* Red accent for icons */
`;

const StatNumber = styled.div`
  font-size: 72px;
  font-weight: bold;
  color: #ff0000; /* Red accent for numbers */
  margin-bottom: 5px;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 60px;
  }
`;

const StatSuffix = styled.span`
  font-size: 36px;
  color: #ff0000;
  vertical-align: text-top;
`;

const StatTitle = styled.div`
  font-size: 16px;
  color: #ffffff;
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Attribution = styled.div`
  font-size: 12px;
  color: #888888;
  margin-top: 40px;
  font-style: italic;
`;

// Counter component that animates from 0 to the target number
const AnimatedCounter = ({ target, duration = 2000, suffix }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounter = () => {
    // Parse the target to ensure it's a number
    const targetNumber = parseInt(target, 10);
    // Calculate the increment per frame for smooth animation
    const incrementPerFrame = targetNumber / (duration / 16);
    let currentCount = 0;
    const startTime = performance.now();

    const updateCounter = (timestamp) => {
      const elapsed = timestamp - startTime;
      if (elapsed < duration) {
        // Calculate the progress (0 to 1) based on elapsed time
        const progress = elapsed / duration;
        // Use easeOutQuad for smoother animation near the end
        const easedProgress = -Math.pow(progress - 1, 2) + 1;
        currentCount = Math.min(
          Math.floor(targetNumber * easedProgress),
          targetNumber
        );
        setCount(currentCount);
        requestAnimationFrame(updateCounter);
      } else {
        // Ensure the final count is exactly the target
        setCount(targetNumber);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <StatNumber ref={counterRef}>
      {count}
      {suffix && <StatSuffix>{suffix}</StatSuffix>}
    </StatNumber>
  );
};

// Main component
const OlympicAtAGlance = () => {
  // These stats come from the SRS document and the image
  const stats = [
    {
      id: 1,
      number: "41",
      title: "Biscuit Varieties",
      icon: "M12,5A3.5,3.5 0 0,0 8.5,8.5A3.5,3.5 0 0,0 12,12A3.5,3.5 0 0,0 15.5,8.5A3.5,3.5 0 0,0 12,5M12,7A1.5,1.5 0 0,1 13.5,8.5A1.5,1.5 0 0,1 12,10A1.5,1.5 0 0,1 10.5,8.5A1.5,1.5 0 0,1 12,7M5.5,8A2.5,2.5 0 0,0 3,10.5C3,11.44 3.53,12.25 4.29,12.68C4.65,12.88 5.05,13 5.5,13C5.95,13 6.35,12.88 6.71,12.68C7.08,12.47 7.39,12.17 7.62,11.81C6.89,10.86 6.5,9.7 6.5,8.5C6.5,8.41 6.5,8.31 6.5,8.22C6.2,8.08 5.86,8 5.5,8M18.5,8C18.14,8 17.8,8.08 17.5,8.22C17.5,8.31 17.5,8.41 17.5,8.5C17.5,9.7 17.11,10.86 16.38,11.81C16.5,12 16.63,12.15 16.78,12.3C16.94,12.45 17.1,12.58 17.29,12.68C17.65,12.88 18.05,13 18.5,13C18.95,13 19.35,12.88 19.71,12.68C20.47,12.25 21,11.44 21,10.5A2.5,2.5 0 0,0 18.5,8M12,14C9.66,14 5,15.17 5,17.5V19H19V17.5C19,15.17 14.34,14 12,14M4.71,14.55C2.78,14.78 0,15.76 0,17.5V19H3V17.07C3,16.06 3.69,15.22 4.71,14.55M19.29,14.55C20.31,15.22 21,16.06 21,17.07V19H24V17.5C24,15.76 21.22,14.78 19.29,14.55M12,16C13.53,16 15.24,16.5 16.23,17H7.77C8.76,16.5 10.47,16 12,16Z",
    },
    {
      id: 2,
      number: "6",
      title: "Cake Varieties",
      icon: "M12,2C14.21,2 16,3.79 16,6H8A4,4 0 0,1 12,2M16.5,8H20A1,1 0 0,1 21,9A1,1 0 0,1 20,10H19.74L17.84,19.5C17.69,20.07 17.12,20.5 16.5,20.5H7.5C6.88,20.5 6.3,20.07 6.15,19.5L4.25,10H4A1,1 0 0,1 3,9A1,1 0 0,1 4,8H7.5V7.5A3,3 0 0,1 10.5,4.5A3,3 0 0,1 13.5,7.5V8H16.5M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11Z",
    },
    {
      id: 3,
      number: "27",
      title: "Biscuit Varieties Exported",
      icon: "M12,3L2,12H5V20H19V12H22L12,3M12,8.5C14.34,8.5 16.46,9.43 18,10.94L16.8,12.12C15.58,10.91 13.88,10.17 12,10.17C10.12,10.17 8.42,10.91 7.2,12.12L6,10.94C7.54,9.43 9.66,8.5 12,8.5M12,11.83C13.4,11.83 14.67,12.39 15.6,13.3L14.4,14.47C13.79,13.87 12.94,13.5 12,13.5C11.06,13.5 10.21,13.87 9.6,14.47L8.4,13.3C9.33,12.39 10.6,11.83 12,11.83M12,15.17C12.94,15.17 13.7,15.91 13.7,16.83C13.7,17.75 12.94,18.5 12,18.5C11.06,18.5 10.3,17.75 10.3,16.83C10.3,15.91 11.06,15.17 12,15.17Z",
    },
    {
      id: 4,
      number: "4",
      suffix: "th",
      title: "Largest Biscuit Brand*",
      icon: "M6,9H8V11H10V13H8V15H6V13H4V11H6V9M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z",
    },
    {
      id: 5,
      number: "5",
      suffix: "th",
      title: "Largest Cakes Brand*",
      icon: "M12 2C13.11 2 14 2.9 14 4S13.11 6 12 6 10 5.11 10 4 10.9 2 12 2M15.33 13.77L14 13.12V10H15V8H9V10H10V13.12L8.67 13.77L5 16.88V19H7V17.5L9 15.9L9.67 16.22L9.1 18.32L11 19L11.5 17.07L11.58 16.14L13 17L15 16L16.23 15.39L18 16.88V19H20V16.88L16.33 13.77M13 14.12L11.76 13.5L11.76 13.5L12.69 13L13 14.12Z",
    },
  ];

  // Reference for the whole section to detect when it's scrolled into view
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          // If you want to reset counters when scrolling away, uncomment this:
          // setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <GlanceSection id="at-a-glance" ref={sectionRef}>
      <StatsContainer>
        {stats.map((stat) => (
          <StatBox key={stat.id}>
            <StatIcon viewBox="0 0 24 24">
              <path d={stat.icon} />
            </StatIcon>
            <AnimatedCounter
              target={stat.number}
              duration={2000} // 2 seconds for the animation
              suffix={stat.suffix}
            />
            <StatTitle>{stat.title}</StatTitle>
          </StatBox>
        ))}
      </StatsContainer>
    </GlanceSection>
  );
};

export default OlympicAtAGlance;
