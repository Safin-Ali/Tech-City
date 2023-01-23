import React, { useEffect, useState } from 'react';
import handleDynaForm from '../../lib/dyna-form/handleDynaForm';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const ProductAddition = () => {
    const handleForm = (obj,clearForm) => {
    };

    // get loaded schema data
    const fetchedData = useLoaderData();

    console.log(fetchedData)

    return (<></>
    );
};

export default ProductAddition;