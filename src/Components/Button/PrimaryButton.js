import React from 'react';

const PrimaryButton = ({children,onClick, disabled}) => {
    return (
        <div>
            <button onClick={onClick} className={`bg-bluePrimary p-[2%] rounded-md hover:bg-blueSecondary text-white dark:text-blackPrimary duration-150`} disabled={disabled}>{children}</button>
        </div>
    );
};

export default PrimaryButton;