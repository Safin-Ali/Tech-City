import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DevDeviceCategCard from '../../Components/Development/DevDeviceCategCard';
import EmptyData from '../../Components/Error/EmptyData';
import HeaderName from '../../Components/Utilities/HeaderName';

const Development = () => {

    const {categoriesData,isLoading} = useSelector( state => state.categories);

    return (
        <section className={`m-5`}>

            <HeaderName> Welcome Developer </HeaderName>

            <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 justify-center`}>
                {
                        isLoading ?

                        [...Array(4).keys()].map(idx => <DevDeviceCategCard key={idx}></DevDeviceCategCard>) :

                        !categoriesData?.length ?

                        <div className={`col-span-4`}><EmptyData></EmptyData></div> :
                        
                        categoriesData.map(elm => <DevDeviceCategCard key={elm._id} icon={elm.icon} category={elm.category}></DevDeviceCategCard>)
                }
            </div>

        </section>
    );
};

export default Development;