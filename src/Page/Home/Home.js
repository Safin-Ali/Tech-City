import React, { useEffect } from 'react';
import { fetchCategories } from '../../app/features/categorySlice/categorySlice';
import Spinner from '../../Components/Spinner/Spinner';
import useFetch from '../../Hooks/useFetch';
import CategoriesSection from './Shared/CategoriesSection';
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
            <CategoriesSection></CategoriesSection>
            <Footer></Footer>
        </section>
    );
};

export default Home;