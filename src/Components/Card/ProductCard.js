import React from 'react';
import { BsBookmark, BsBookmarkCheckFill, BsStar, BsStarFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import DiscountBadge from '../Badge/DiscountBadge';
import PrimaryButton from '../Button/PrimaryButton';

const ProductCard = ({ data }) => {

    // destrucred product data
    const { deviceImage, brand, price, others, device, _id, activity } = data;

    // navigate hooks for change current url path
    const navigate = useNavigate();

    // navigate product single page
    const navigateProduct = (brand,device,id) => navigate(`/product/${brand}/${device}/${id}`,{state:data})

    return (
        <div className={`shadow cursor-auto hover:scale-105 duration-300 h-fit border rounded-xl`}>

            {/* Product Card Button */}
            <div className={`bg-gray-100 border-b p-2 rounded-t-xl`}>
                <div className={`flex justify-between`}>
                    <BsStar className={`cursor-pointer`}></BsStar>
                    <BsBookmark className={`cursor-pointer`}></BsBookmark>
                </div>
            </div>

            {/* Product thumb */}
            <div className={`relative`}>
                <div className={`w-2/3 mx-auto p-3`}>
                    <img src={deviceImage} alt="Product" />
                </div>
                {!!price.discount && <DiscountBadge>{price.discount}</DiscountBadge>}
            </div>

            {/* content */}
            <div className={`border-t py-3 `}>

                {/* product model */}
                <div className={`text-center text-xl my-1 font-medium`}><h5>{others.model}</h5></div>

                <div className={`flex mt-3 justify-around`}>
                    <div className={`border min-w-[70px] rounded px-1`}><span className={`text-center p-3 font-semibold text-xl`}>${price.total}</span></div>
                    <div className={`min-w-[70px] rounded-md px-2 py-0.5`}>
                        <div className={`flex gap-1 items-center`}>
                            {
                                [...Array(4).keys()].map(elm => <BsStarFill color={'#FCC73B'} key={elm}></BsStarFill>)
                            }
                            <BsStar color={'#FCC73B'}></BsStar>
                        </div>
                    </div>
                </div>

                <div className={`flex mt-3 justify-around`}>
                    <div className={`border min-w-[70px] rounded uppercase px-1`}><span className={`font-semibold text-center`}>{brand}</span></div>
                    <div className={`border min-w-[70px] ${activity === 'unavailable' ? 'border-red-600 text-red-600' : 'border-green-600 text-green-600'} capitalize rounded-md px-2 py-0.5`}><span className={`font-medium text-center`}>{activity}</span></div>
                </div>

                <div className={`mt-5 text-center`}>
                    <PrimaryButton onClick={()=>navigateProduct(brand,device,_id)} padding={`px-5 py-1.5`}>Buy Now</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;