import React, { useEffect, useState } from 'react';
import { fetchProductsData, fetchProductsDeviceByBrand } from '../../app/features/products-data-slice/productDataSlice';
import ProductCard from '../../Components/Card/ProductCard';
import LeftBar from '../../Components/Navbar/LeftBar';
import RightBar from '../../Components/Navbar/RightBar';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import RangeSliderFeild from '../../Components/InputFeild/RangeSliderFeild';

const ProductItems = () => {

    const { productsData: { productsData, error, isLoading }, categories } = useSelector(state => state);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const location = useLocation().pathname;

    // get location brand params
    const brand = location.split('/')[2];

    // get location device params
    const device = location.split('/')[3];

    // get others device name without current device
    const othersDevices = (function () {
        const categoriesData = (name) => {
            return categories.categoriesData.filter(elm => {
                const x = elm.category.toLowerCase();
                return x !== name;
            })
        }
        if (location.split('/').length === 4) return categoriesData(device);
        return categoriesData(location.split('/')[2]);
    })();

    const [layoutUnit, setLayoutUnit] = useState(null);

    const navigatePath = (brandName) => {
        if (location.split('/').length === 4) {
            return navigate(`/products/${brandName.toLowerCase()}/${location.split('/')[3]}`);
        }
        else {
            return navigate(`/products/${brandName.toLowerCase()}/${location.split('/')[2]}`);
        };
    };

    // navigate device path
    const navigateDevice = (deviceName) => {
        return navigate(`/products/${deviceName.toLowerCase()}`);
    };

    // fetch product data
    useEffect(() => {
        if (location.split('/').length === 4) {
            dispatch(fetchProductsDeviceByBrand({ brand, device }));
        }
        else {
            dispatch(fetchProductsData(location.split('/')[2]));
        };
    }, [location]);

    // get header and get width for sidebar
    useEffect(() => {
        window.addEventListener('resize', () => {
            return getPageLayoutUnit();
        });
        getPageLayoutUnit()
    }, []);

    const getPageLayoutUnit = () => {
        const headerHeight = document.querySelector('header').offsetHeight;
        let sideBarWidth = window.screen.width;
        const mrBool = sideBarWidth > 1023;
        sideBarWidth = sideBarWidth > 1023 ? parseInt(sideBarWidth / 6) : sideBarWidth >= 768 ? parseInt(sideBarWidth / 4) : 0;
        return setLayoutUnit({ sideBarWidth, headerHeight, mrBool });
    };

    if (isLoading) return <p>wait</p>;

    const { products, relatedBrands, upComingProducts } = productsData;
    return (
        <>

            {/* Left Bar */}
            <LeftBar top={layoutUnit?.headerHeight} width={layoutUnit && layoutUnit.sideBarWidth} className={`hidden md:block md:fixed`}>

                <div className={`h-[70%] border-b`}>
                    <div className={`mt-2 text-center`}><h5 className={`font-medium`}>RELATED BRAND</h5></div>
                    <div className={`overflow-y-auto`}>
                        <ul className={`text-center uppercase`}>
                            {relatedBrands?.map(item => <li onClick={() => navigatePath(item.brandName)} className={`border-y p-2 cursor-pointer my-2`} key={item._id}>{item.brandName}</li>)}
                        </ul>
                    </div>
                </div>

                <div className={`text-center my-2`}>
                    <h5 className={`font-medium mb-2`}>Search by Price Range</h5>
                    <div className={`bg-blue-100`}>
                    <RangeSliderFeild></RangeSliderFeild>
                    </div>
                </div>
            </LeftBar>

            {/* Main card Listed Item */}
            <div style={{ marginTop: '0px', marginBottom: '0px', marginLeft: `${layoutUnit && layoutUnit.sideBarWidth}px`, marginRight: `${layoutUnit && layoutUnit.mrBool ? layoutUnit.sideBarWidth + 'px' : '0px'}` }}
                className={`col-span-1 md:col-span-3 lg:col-span-4 h-full cursor-n-resize`}>
                <h4 className={`text-center font-bold text-3xl uppercase mt-5`}>{window.location.pathname.split('/')[2]}</h4>
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 hide-scrollbar p-[5%]`}>
                    {
                        products?.map(elm => <ProductCard key={elm._id} data={elm}></ProductCard>)
                    }
                </div>
            </div>

            {/* Right Bar */}
            <RightBar top={layoutUnit?.headerHeight} width={layoutUnit && layoutUnit.sideBarWidth} className={`hidden lg:block lg:fixed lg:right-0`}>
                <div className={`mb-3 min-h-[50%] border-b`}>
                    <div className={`mt-2 text-center`}>
                        <h5 className={`font-medium`}>UP COMING</h5>
                    </div>

                    <div className={`overflow-y-auto`}>
                        <ul className={`text-center`}>
                            {upComingProducts?.map(item => <li onClick={() => navigatePath(item.brandName)} className={`border-y capitalize p-2 cursor-pointer my-2`} key={item._id}>{item.brand.concat(' ', item.others.model)}</li>)}
                        </ul>
                    </div>
                </div>

                <div className={`mt-3 min-h-[50%]`}>
                    <div className={`mt-2 text-center border-b`}>
                        <h5 className={`font-medium mb-3`}>More Devices</h5>
                    </div>

                    <div className={`overflow-y-auto my-2`}>
                        <ul className={`text-center`}>
                            {othersDevices?.map(item => <li onClick={() => navigateDevice(item.category)} className={`border capitalize p-2 cursor-pointer my-2`} key={item._id}>{item.category}</li>)}
                        </ul>
                    </div>
                </div>

            </RightBar>
        </>
    );
};

export default ProductItems;