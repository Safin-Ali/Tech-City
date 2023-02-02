import React from 'react';
import './spinner-style.css';

const LoadingSpinner01 = ({center,color,size}) => {
    return (
        <div className={`flex ${center ? 'justify-center' : 'justify-start'} items-center`}>
            <span style={{borderTopColor: color?color:'',width:size && `${size}px`,height:size && `${size}px`}} className="loader01"></span>
        </div>
    );
};

export default LoadingSpinner01;