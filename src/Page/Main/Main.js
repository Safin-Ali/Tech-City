import React, { useEffect } from 'react';
import { fetchAdditionalImgs } from '../../app/features/aditional-imagesSlice/additionalImagesSlice';
import Navbar from '../../Components/Navbar/Navbar';
import useFetch from '../../Hooks/useFetch';
import { Outlet, useLocation } from 'react-router-dom';
import autoTitleChanger from '../../Hooks/autoTitleChanger';
import { fetchCategories } from '../../app/features/categorySlice/categorySlice';
import { fetchProdBrands } from '../../app/features/product-brands/prodBrandsSlice';

const Main = () => {

    //auto fetch for extra images
    useFetch(fetchAdditionalImgs);

    //auto fetch for categories
    useFetch(fetchCategories);

    //auto fetch for productBrands
    useFetch(fetchProdBrands);

    // get pathName of URL
    const pathName = useLocation().pathname;

    // auto change the web title
    autoTitleChanger(pathName);

    return (
        <>
            <Navbar></Navbar>
            <main className={`h-full`}>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default Main;