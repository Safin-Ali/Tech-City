import React, { useState } from 'react';
import handleDynaForm from '../../lib/dyna-form/handleDynaForm';
import axios from 'axios';
import { useLoaderData, useLocation } from 'react-router-dom';
import ScaleFeild from '../InputFeild/ScaleFeild';
import FileUploadFeild from '../InputFeild/FileUploadFeild';
import PrimaryButton from '../Button/PrimaryButton';
import { useDispatch, useSelector } from 'react-redux';
import SelectFeild from '../InputFeild/SelectFeild';
import EmptyData from '../Error/EmptyData';
import { productSchemaTypeReducer } from '../../Schema/products/productTypeReducer';
import uploadImage from '../../Hooks/uploadImage';
import { toggleLoadPost } from '../../app/features/toggleBoolean-Slice/toggleBoolSlice';
import LoadingSpinner01 from '../Loading-Spinner/LoadingSpinner01';
import RadioBoxFeild from '../InputFeild/RadioBoxFeild';

const ProductAddition = () => {

    // set product brand
    const [storeBrand, setBrand] = useState(null);

    // set product activity
    const [prodAcv, setProdAcv] = useState(null);

    const location = useLocation().pathname.split('/')[2];

    const { loadPost } = useSelector(state => state.toggleBool);

    const dispatch = useDispatch();

    // handle submited form
    const handleForm = async (obj, clearForm, form) => {
        try {

            dispatch(toggleLoadPost(true));

            const dynaSchema = productSchemaTypeReducer({ ...obj, brand: storeBrand, device: location, activity: prodAcv });

            // upload image
            const imageURL = await uploadImage(dynaSchema.deviceImage);

            if(!imageURL) {
                // select files feild
                const files = form.querySelector(`input[type='file']`);
                // clear files feild value
                files.value = '';
                return dispatch(toggleLoadPost(false));
            };

            dynaSchema.deviceImage = imageURL;

            // upload full schema model to the database
            const res = await (await axios.post('https://tech-city.vercel.app/allProducts', dynaSchema)).data;

            if (res === 'exist') {
                dispatch(toggleLoadPost(false));
                return alert('Already have');
            };

            if (res.acknowledged) {
                dispatch(toggleLoadPost(false));
                alert('Post Success');
                return clearForm();
            }
        }
        catch (err) {
            dispatch(toggleLoadPost(false));
            console.log(err.message);
        }
    };

    // get all brandName
    const { prodBrands } = useSelector(state => state.productBrands);

    // filter brandName
    const filteredBrands = prodBrands.map(obj => {
        const lowerCaseStr = obj.product.map(str => str.toLowerCase());
        return { ...obj, product: lowerCaseStr };
    }).filter(elm => elm.product.includes(location));

    // get loaded schema data
    const fetchedData = useLoaderData();

    if (!fetchedData) return <EmptyData></EmptyData>

    return (
        <>
            <section className={`m-[5%]`}>
                <form onSubmit={handleDynaForm(handleForm)}>
                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center`}>
                        {
                            Object.keys(fetchedData).filter(filterElm => filterElm !== '_id' && filterElm !== 'device').map((elm, id) => {
                                const exactValue = fetchedData[elm];

                                return elm === 'ProductImages' ?

                                    <div key={id} className={`col-span-1 w-full sm:col-span-2 sm:w-2/3 md:w-1/2 mx-auto`}> <FileUploadFeild name={elm}></FileUploadFeild></div> :

                                    <div key={id} className={`border p-5 rounded-md hover:shadow hover:shadow-blackAlpha`}>
                                        <h4 className={`my-2`}>{elm}</h4>
                                        {
                                            Array.isArray(exactValue) &&

                                            exactValue.map((childElm, childId) => {
                                                const childElmName = Object.keys(childElm)[0];
                                                const childElmArray = childElm[childElmName];
                                                const checkChildArrType = Array.isArray(childElmArray);
                                                return <div key={childId}>
                                                    <div className={`${checkChildArrType ? 'flex gap-5 items-center' : ''} my-3`}>

                                                        {checkChildArrType ?

                                                            <div>
                                                                <h5>{childElmName}</h5></div> : childElmName === 'Brand' ?

                                                                <>
                                                                    <h5>Brand</h5>
                                                                    <SelectFeild setValCallback={setBrand} options={filteredBrands}></SelectFeild>
                                                                </> :

                                                                <ScaleFeild name={`${childElmName + elm}`} value={childElmName}></ScaleFeild>}

                                                        {
                                                            checkChildArrType && childElmArray.map((iiChild, iiChildId) => <div key={iiChildId}>
                                                                <ScaleFeild name={childElmName + iiChild} value={iiChild}></ScaleFeild>
                                                            </div>)
                                                        }

                                                    </div>
                                                </div>
                                            })
                                        }
                                        {
                                            elm === 'Activity' &&
                                            <div>
                                                <RadioBoxFeild funcHooks={setProdAcv}>Available</RadioBoxFeild>
                                                <RadioBoxFeild funcHooks={setProdAcv}>Upcoming</RadioBoxFeild>
                                                <RadioBoxFeild funcHooks={setProdAcv}>Unavailable</RadioBoxFeild>
                                            </div>
                                        }
                                    </div>
                            })
                        }
                    </div>

                    <div className={`text-center my-5`}>
                        <PrimaryButton padding={'px-8 py-2'} disabled={loadPost}>
                            {
                                loadPost ?
                                    <LoadingSpinner01 color={`#F1F2F3`} size={20}></LoadingSpinner01>
                                    :
                                    'POST'
                            }
                        </PrimaryButton>
                    </div>
                </form>
            </section>
        </>
    );
};

export default ProductAddition;