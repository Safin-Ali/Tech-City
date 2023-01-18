import React, { useEffect } from 'react';
import { fetchCategories } from '../../app/features/categorySlice/categorySlice';
import useFetch from '../../Hooks/useFetch';
import BrandsSection from './Shared/BrandsSection';
import Footer from './Shared/Footer';
import HeroSection from './Shared/HeroSection';
import ServicesSection from './Shared/ServicesSection';

const Home = () => {

    // call fetch categories name
    useFetch(fetchCategories);

    return (
        <section>
            <HeroSection></HeroSection>
            <ServicesSection></ServicesSection>
            <BrandsSection></BrandsSection>
            <Footer></Footer>
        </section>
    );
};

export default Home;