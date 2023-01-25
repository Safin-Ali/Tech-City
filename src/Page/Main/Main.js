import React, { useEffect, useState } from 'react';
import { fetchAdditionalImgs } from '../../app/features/aditional-imagesSlice/additionalImagesSlice';
import Navbar from '../../Components/Navbar/Navbar';
import useFetch from '../../Hooks/useFetch';
import {Outlet, useLocation} from 'react-router-dom';
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



    // get header section height
    const [headerSecH,setHeaderSecH] = useState(0);

    useEffect(()=>setHeaderSecH(document.querySelector('header').clientHeight+'px'),[]);

    return (
        <>
            <Navbar></Navbar>
            <main style={{height: `calc(100vh - ${headerSecH})`}} className={`overflow-y-scroll`}>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default Main;