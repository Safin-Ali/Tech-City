import React from 'react';
import Footer from './Shared/Footer';
import HeroSection from './Shared/HeroSection';
import ServicesSection from './Shared/ServicesSection';

const Home = () => {
    return (
        <section>
            <HeroSection></HeroSection>
            <ServicesSection></ServicesSection>
            <Footer></Footer>
        </section>
    );
};

export default Home;