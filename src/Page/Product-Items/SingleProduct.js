import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PrimaryButton from '../../Components/Button/PrimaryButton';

const SingleProduct = () => {

    // get this product data
    const fetchedData = useLoaderData();

    // doller symbol
    const dollerSymbol = (type) => {
        if(type === 'base') return '$';
        if(type === 'total') return '$';
        if(type === 'delivery') return '$';
    };

    // check nested object and array and return single valaues
    const checkNestedType = (val) => {
        if (Array.isArray(val)) {
            return <div className={`bg-[#d3d3d3] p-2`}><h6 className={`font-bold p-1`}>{
                val.map(elm => elm)
            }</h6></div>

        } else if (typeof val === 'object') {

            return Object.keys(val).map(elm => {
                return <div className={`flex capitalize overflow-scroll my-1 even:bg-[#ebebeb] bg-[#d3d3d3] px-2 items-center`}>
                    <h5 className={`font-medium`}>{elm}: {dollerSymbol(elm)}</h5>
                    {checkNestedType(val[elm])}
                </div>
            });
        }
        return <div><h6 className={`font-bold p-1`}>{val}</h6></div>
    };

    return (
        <section className={`border w-[90%] md:w-[80%] lg:w-[60%] mx-auto`}>

            <div className={`my-5`}>
                <h4 className={`capitalize underline text-center text-3xl font-semibold`}>{fetchedData.brand.concat(' ', fetchedData.device)}</h4>
            </div>

            <div className={`my-5`}>
                <img src={fetchedData.deviceImage} className={`mx-auto`} alt="Product_Icon" />
            </div>

            <div className={`my-4 border w-1/2 mx-auto p-1`}>
                <h5 className={`font-semibold text-3xl text-center`}>{fetchedData.others.model}</h5>
            </div>
            {
                Object.keys(fetchedData).filter(property => property !== '_id' && property !== 'deviceImage' && property !== 'brand' && property !== 'device' && property !== 'activity').map((elm, idx) => {
                    return (
                        <div key={idx} className={`grid my-3 sm:my-0 border-t sm:border-t-0 grid-cols-1 gap-y-3 md:gap-y-0 sm:grid-cols-3 gap-x-1 w-full`}>
                            <div className={`capitalize bg-[#f1f2f250] border-r border-b col-span-1 px-0.5 py-2`}>
                                <h4 className={`font-semibold ml-2`}>{elm}</h4>
                            </div>
                            <div className={`col-span-2`}>
                                {checkNestedType(fetchedData[elm])}
                            </div>
                        </div>
                    )
                })
            }
            <div className={`text-center`}>
                <PrimaryButton padding={`py-2 px-5 my-5`}>Buy Now</PrimaryButton>
            </div>
        </section>
    );
};

export default SingleProduct;