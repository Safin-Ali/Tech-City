import React, { useEffect } from 'react';
import { fetchProductsData, fetchProductsDeviceByBrand } from '../../app/features/products-data-slice/productDataSlice';
import ProductCard from '../../Components/Card/ProductCard';
import LeftBar from '../../Components/Navbar/LeftBar';
import RightBar from '../../Components/Navbar/RightBar';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

const ProductItems = () => {

    const { productsData, error, isLoading } = useSelector(state => state.productsData);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const location = useLocation().pathname;

    const navigatePath = (brandName) => {
        if (location.split('/').length === 4) {
            return navigate(`/products/${brandName.toLowerCase()}/${location.split('/')[3]}`);
        }
        else {
            return navigate(`/products/${brandName.toLowerCase()}/${location.split('/')[2]}`);
        };
    };

    useEffect(() => {

        const brand = location.split('/')[2];

        const device = location.split('/')[3];

        if (location.split('/').length === 4) {
            dispatch(fetchProductsDeviceByBrand({ brand, device }));
        }
        else {
            dispatch(fetchProductsData(location.split('/')[2]));
        };
    }, [location]);

    if (isLoading) return <p>wait</p>;

    const { products, relatedBrands } = productsData;

    return (
        <>
            <main>
                <div className={`grid grid-cols-6 overflow-hidden h-screen`}>

                    {/* Navbar */}
                    <div className={`col-span-6`}>
                        <Navbar></Navbar>
                    </div>

                    {/* Left Bar */}
                    <LeftBar>
                        <div className={`h-[80%] border-b overflow-y-scroll`}>
                            <ul className={`text-center`}>
                                {relatedBrands?.map(item => <li onClick={() => navigatePath(item.brandName)} className={`border-y p-2 cursor-pointer my-2`} key={item._id}>{item.brandName}</li>)}
                            </ul>
                        </div>
                    </LeftBar>

                    {/* Main card Listed Item */}
                    <div className={`col-span-4 h-full overflow-y-scroll cursor-n-resize`}>
                        <h4 className={`text-center font-bold text-3xl uppercase mt-5`}>{window.location.pathname.split('/')[2]}</h4>
                        <div className={`grid grid-cols-3 gap-5 hide-scrollbar p-[5%] overflow-y-scroll h-screen`}>
                            {
                                products?.map(elm => <ProductCard key={elm._id} data={elm}></ProductCard>)
                            }
                        </div>
                    </div>

                    {/* Right Bar */}
                    <RightBar></RightBar>
                </div>
            </main>
        </>
    );
};

export default ProductItems;