import React from 'react';
import Hero from '../../componants/hero/Hero';
import CarouselComponent from '../../componants/CarouselComponent';
import DesiredBrands from './DesiredBrands';
import DelightsSection from './DelightsSection';

const Home = () => {
    return (
        <>
            <Hero />
            <CarouselComponent />
            <DesiredBrands />
            <DelightsSection />
        </>
    );
};

export default Home;