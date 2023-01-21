import React from 'react';
import CategoriesSection from './Shared/CategoriesSection';
import Footer from './Shared/Footer';
import HeroSection from './Shared/HeroSection';
import ServicesSection from './Shared/ServicesSection';

const Home = () => {
    return (
        <section>
            <HeroSection></HeroSection>
            <ServicesSection></ServicesSection>
            <CategoriesSection></CategoriesSection>
            <Footer></Footer>
        </section>
    );
};

export default Home;