import React, { useEffect, useState } from 'react';
import handleDynaForm from '../../lib/dyna-form/handleDynaForm';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import ScaleFeild from '../InputFeild/ScaleFeild';
import FileUploadFeild from '../InputFeild/FileUploadFeild';
import PrimaryButton from '../Button/PrimaryButton';

const ProductAddition = () => {
    const handleForm = (obj,clearForm) => {
        console.log(obj)
    };

    // get loaded schema data
    const fetchedData = useLoaderData();

    return (
    <>
        <section className={`m-[5%]`}>
            <form onSubmit={handleDynaForm(handleForm)}>
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center`}>
                    {
                        Object.keys(fetchedData).filter(filterElm => filterElm !== '_id' && filterElm !== 'device').map((elm,id) => {
                            const exactValue = fetchedData[elm];

                            return elm === 'ProductImages' ?

                            <div key={id} className={`col-span-1 w-full sm:col-span-2 sm:w-2/3 md:w-1/2 mx-auto`}> <FileUploadFeild name={elm}></FileUploadFeild></div> :

                            <div key={id} className={`border p-5`}>
                                <h4 className={`my-2`}>{elm}</h4>
                                    {
                                        Array.isArray(exactValue) ?

                                        exactValue.map((childElm,childId) => {
                                            const childElmName = Object.keys(childElm)[0];
                                            const childElmArray = childElm[childElmName];
                                            const checkChildArrType = Array.isArray(childElmArray);
                                            return <div key={childId}>
                                                <div className={`${checkChildArrType ? 'flex gap-5 items-center' : ''}`}>

                                                {checkChildArrType ?

                                                <div>
                                                    <h5>{childElmName}</h5></div> :

                                                <ScaleFeild value={childElmName}></ScaleFeild>}

                                                    {
                                                        checkChildArrType && childElmArray.map((iiChild,iiChildId) => <div key={iiChildId}>
                                                            <ScaleFeild value={iiChild}></ScaleFeild>
                                                        </div>)
                                                    }

                                                </div>
                                            </div>
                                        }) :

                                        <ScaleFeild value={exactValue}></ScaleFeild>
                                    }

                            </div>
                        })
                    }
                </div>

                <div className={`text-center my-5`}><PrimaryButton padding={'px-8 py-2'}>POST</PrimaryButton></div>
            </form>
        </section>
    </>
    );
};

export default ProductAddition;