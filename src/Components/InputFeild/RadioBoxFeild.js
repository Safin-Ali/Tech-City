import React from 'react';

const RadioBoxFeild = ({children,funcHooks}) => {
    return (
        <>
            <div onClick={()=>funcHooks(children.toLowerCase())} className={`my-5`}>
                <input type="radio" id={children} name="prodActivity" className="peer opacity-0" required/>
                <label htmlFor={children} className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                <div className="block">
                    {children}
                </div>
                </label>
            </div>
        </>
    );
};

export default RadioBoxFeild;