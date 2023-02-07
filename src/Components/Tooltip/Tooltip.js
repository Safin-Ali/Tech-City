import React from 'react';

const Tooltip = ({top,children=0}) => {
    return (
            <div className={`${children || 'hidden'} bg-slate-900 z-[2] left-[48%] -translate-x-1/2 top-[85%] absolute h-fit text-whitePrimary w-fit px-2 py-1`}>
                <span>{children}</span>
                <div className={`bg-slate-900 z-[1] w-3 h-3 absolute left-[50%] ${top ? top : 'top-[-14%]'} -translate-x-1/2 rotate-[-45deg]`}></div>
            </div>
    );
};

export default Tooltip;