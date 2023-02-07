import React, { useState } from 'react';
import Tooltip from '../Tooltip/Tooltip';

const RangeSliderFeild = () => {

    const[rangeVal,setRangeVal] = useState();

    const handleSlider = (e) => {
        setRangeVal(e.target.value);
    }

    return (
        <div className={`relative p-4`}>
            <input onInput={handleSlider} id="steps-range" type="range" step="100" min="100" defaultValue={0} max="500" className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer" />
            <Tooltip>{rangeVal}</Tooltip>
        </div>
    );
};

export default RangeSliderFeild;