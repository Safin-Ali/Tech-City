import React from 'react';
import HeaderName from '../../../Components/Utilities/HeaderName';
import { useSelector } from 'react-redux';
import CategoryCard from '../../../Components/Card/CategoryCard';
import EmptyData from '../../../Components/Error/EmptyData';

const CategoriesSection = () => {
    const {categoriesData,isLoading} = useSelector( state => state.categories);
    return (
        <section className={`m-[5%]`}>
            <HeaderName>Choose Device</HeaderName>

            <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 justify-center`}>
                {
                    isLoading ?

                    [...Array(4).keys()].map(idx => <CategoryCard key={idx}></CategoryCard>) :

                    !categoriesData?.length ?

                    <div className={`col-span-4`}><EmptyData></EmptyData></div> :
                    
                    categoriesData.map(elm => <CategoryCard key={elm._id} icon={elm.icon} description={elm.description} category={elm.category}></CategoryCard>)
                }
            </div>
        </section>
    );
};

export default CategoriesSection;