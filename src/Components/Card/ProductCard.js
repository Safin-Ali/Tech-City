import React from 'react';
import {BsBookmark,BsBookmarkCheckFill,BsStar,BsStarFill} from 'react-icons/bs';
import DiscountBadge from '../Badge/DiscountBadge';

const ProductCard = ({data}) => {

    const {deviceImage,brand,price,others,device} = data;

    return (
        <div className={`shadow cursor-pointer hover:scale-105 duration-300 h-fit border rounded-xl`}>

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
                <div className={`flex justify-around`}>
                    <div className={`border rounded px-1`}><span className={`font-medium`}>{brand}</span></div>
                    <div className={`border rounded-md px-2 py-0.5`}><span className={`font-medium`}>${price.total}</span></div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;