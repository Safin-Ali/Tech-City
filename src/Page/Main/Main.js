import React from 'react';
import { fetchAdditionalImgs } from '../../app/features/aditional-imagesSlice/additionalImagesSlice';
import Navbar from '../../Components/Navbar/Navbar';
import useFetch from '../../Hooks/useFetch';
import {Outlet, useLocation} from 'react-router-dom';
import autoTitleChanger from '../../Hooks/autoTitleChanger';
import { fetchCategories } from '../../app/features/categorySlice/categorySlice';

const Main = () => {

    //auto fetch for extra images
    useFetch(fetchAdditionalImgs);

    //auto fetch for categories
    useFetch(fetchCategories);

    // get pathName of URL
    const pathName = useLocation().pathname;

    // auto change the web title
    autoTitleChanger(pathName)

    return (
        <>
            <Navbar></Navbar>
            <main className={`max-h-[90vh] overflow-y-scroll`}>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default Main;