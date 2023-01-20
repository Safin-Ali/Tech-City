import React, { useEffect } from 'react';
import { fetchAdditionalImgs } from '../../app/features/aditional-imagesSlice/additionalImagesSlice';
import Navbar from '../../Components/Navbar/Navbar';
import useFetch from '../../Hooks/useFetch';
import {Outlet, useLocation} from 'react-router-dom';
import Home from '../Home/Home';
import autoTitleChanger from '../../Hooks/autoTitleChanger';

const Main = () => {

    //auto fetch for extra images
    useFetch(fetchAdditionalImgs);

    // get pathName of URL
    const pathName = useLocation().pathname;

    // auto change the web title
    autoTitleChanger(pathName)
    
    return (
        <>
            <Navbar></Navbar>
            <main className={`max-h-screen overflow-y-scroll`}>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default Main;