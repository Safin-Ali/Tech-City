import React from 'react';
import './spinner.css';

const LoadingSpinner = ({center,middle}) => {
    return (
        <div className={`${center && 'flex justify-center'} ${middle && 'items-center'}`}>
            <span className="loader"></span>
        </div>
    );
};

export default LoadingSpinner;