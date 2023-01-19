import React from 'react';

const ProdSlide = ({className,imgPath}) => {
    return (
        <div className={className}>
            <div className={`rounded-[100px] p-2 sm:w-[70%] mx-auto`}>
                <img src={imgPath} alt="banner-images" />
            </div>
        </div>
    );
};

export default ProdSlide;