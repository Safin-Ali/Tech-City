import React from 'react';

const ServiceCard = ({servName,servImg,servDesc}) => {
    
    return (
        <div className={`shadow-[0px_0px_10px] duration-150 dark:bg-blackPrimary hover:scale-[1.02] shadow-blackAlpha rounded-lg p-[3%] dark:shadow-whiteAlpha`}>
            {/* Service Icon */}
            <div className={`w-[70%] mx-auto`}>
                <img src={servImg} alt="Service_Icon" />
            </div>

            <div className={`px-3`}>
                <h4 className={`text-xl font-semibold text-blackPrimary`}>{servName}</h4>
                <p className={`font-medium text-blackTertiary`}>{servDesc}</p>
            </div>
        </div>
    );
};

export default ServiceCard;