import React, { useEffect } from 'react';
import { fetchProductsData } from '../../app/features/products-data-slice/productDataSlice';
import ProductCard from '../../Components/Card/ProductCard';
import LeftBar from '../../Components/Navbar/LeftBar';
import RightBar from '../../Components/Navbar/RightBar';
import { useDispatch, useSelector } from 'react-redux';

const ProductItems = () => {

    const {productsData,error,isLoading} = useSelector(state => state.productsData);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProductsData(window.location.pathname.split('/')[2]));
    },[]);

    if(!productsData.length === 0) return <p>wait</p>;

    const {products,relatedBrands} = productsData;

    return (
        <section className={`h-full overflow-hidden`}>
            <div className={`grid grid-cols-6`}>
                {/* Left Bar */}
                <LeftBar>
                    <div className={`h-[43%] border-b overflow-y-scroll`}>
                        <ul className={`text-center`}>
                            {relatedBrands?.map(item => <li className={`border p-2 cursor-pointer my-2`} key={item._id}>{item.brandName}</li>)}
                        </ul>
                    </div>
                </LeftBar>

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