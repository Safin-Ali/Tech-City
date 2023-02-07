import React, { useState } from 'react';
import Tooltip from '../Tooltip/Tooltip';

const RangeSliderFeild = () => {

    const[rangeVal,setRangeVal] = useState();

    const handleSlider = (e) => {
        setRangeVal(e.target.value);
    }

    return (
        <div className={`relative my-5 p-4`}>
            <label htmlFor="steps-range" className="block font-medium text-gray-900">Price Range</label>
            <input onInput={handleSlider} id="steps-range" type="range" step="100" min="100" defaultValue={0} max="500" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
            <Tooltip>{rangeVal}</Tooltip>
        </div>
    );
};

export default RangeSliderFeild;