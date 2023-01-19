import React from 'react';
import { fetchAdditionalImgs } from '../../app/features/aditional-imagesSlice/additionalImagesSlice';
import Navbar from '../../Components/Navbar/Navbar';
import useFetch from '../../Hooks/useFetch';
import Home from '../Home/Home';

const Main = () => {

    // fetch for extra images
    useFetch(fetchAdditionalImgs)
    return (
        <>
            <Navbar></Navbar>
            <Home></Home>
        </>
    );
};

export default Main;