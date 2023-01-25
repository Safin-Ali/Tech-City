import React from 'react';
import './spinner.css';

const LoadingSpinner = ({center,middle,blurBG}) => {
    return (
        <div className={`${center && 'flex justify-center'} ${middle && 'items-center'} ${blurBG && 'blur'}`}>
            <span className="loader"></span>
        </div>
    );
};

export default LoadingSpinner;