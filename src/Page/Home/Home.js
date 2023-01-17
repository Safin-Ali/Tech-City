import React from 'react';
import HeroSection from './Shared/HeroSection';
import ServicesSection from './Shared/ServicesSection';

const Home = () => {
    return (
        <section className={`mx-[3%]`}>
            <HeroSection></HeroSection>
            <ServicesSection></ServicesSection>
        </section>
    );
};

export default Home;