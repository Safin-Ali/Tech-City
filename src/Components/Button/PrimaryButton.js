import React from 'react';

const PrimaryButton = ({children,onClick, disabled,padding}) => {
    return (
        <div>
            <button onClick={onClick} className={`bg-bluePrimary ${padding ? padding : 'p-[2%]'} rounded-md hover:bg-blueSecondary text-white duration-150`} disabled={disabled}>{children}</button>
        </div>
    );
};

export default PrimaryButton;