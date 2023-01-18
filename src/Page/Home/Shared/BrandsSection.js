import React from 'react';
import HeaderName from '../../../Components/Utilities/HeaderName';
import { useSelector } from 'react-redux';

const BrandsSection = () => {
    const categories = useSelector( state => console.log(state.categories));
    return (
        <section>
            <HeaderName>Choose Brand</HeaderName>
        </section>
    );
};

export default BrandsSection;