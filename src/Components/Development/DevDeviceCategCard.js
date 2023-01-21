import React, { useContext } from 'react';
import {BsImage} from 'react-icons/bs';

const DevDeviceCategCard = ({category,icon,}) => {

    return (
        <div className={`hover:shadow-[0px_0px_10px] hover:border-bluePrimary border p-3 cursor-pointer hover:shadow-blackAlpha duration-200 rounded-md`}>
            <div className={`${icon ? 'w-[60%]':'w-full'} mx-auto p-2`}>
                {
                    !icon ?
                    <div className={`w-full h-[225px] flex animate-pulse justify-center items-center bg-slate-300 rounded-md`}>
                        <BsImage className={`text-4xl text-slate-500`}></BsImage>
                    </div> :
                    <img src={icon} alt={`${category}_Category_Icon`} />                    
                }
            </div>
           
           <div className={`dark:text-whitePrimary text-center`}>
            {
                !category ?
                <div className={`animate-pulse`}>
                    <div className={`w-1/2 my-2 mx-auto h-5 rounded-lg bg-slate-300`}></div>
                </div> :
                <>
                    <h3 className={`font-bold text-xl`}>{category}</h3>
                </>
            }
           </div>
        </div>
    );
};

export default DevDeviceCategCard;