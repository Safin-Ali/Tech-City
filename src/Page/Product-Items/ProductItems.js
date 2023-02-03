import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../../Components/Card/ProductCard';
import LeftBar from '../../Components/Navbar/LeftBar';
import RightBar from '../../Components/Navbar/RightBar';

const ProductItems = () => {

    const {products,relatedBrands} = useLoaderData();

    return (
        <section className={`h-full overflow-hidden`}>
            <div className={`grid grid-cols-6`}>
                {/* Left Bar */}
                <LeftBar></LeftBar>

                {/* Main card Listed Item */}
                <div className={`col-span-4`}>
                    <h4 className={`text-center font-bold text-3xl capitalize mt-5`}>{window.location.pathname.split('/')[2]}</h4>
                    <div className={`grid grid-cols-3 gap-5 hide-scrollbar p-[5%] overflow-y-scroll h-screen`}>
                        {
                            products?.map(elm => <ProductCard key={elm._id} data={elm}></ProductCard>)
                        }
                    </div>
                </div>

                {/* Right Bar */}
                <RightBar></RightBar>
            </div>
        </section>
    );
};

export default ProductItems;