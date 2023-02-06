import React from 'react';

const RightBar = ({children,className='',width=0,top=0}) => {
    return (
        <aside style={{width:`${width}px`,top:`${top}px`}} className={`border-l ${className} w-full h-full`}>
            {children}
        </aside>
    );
};

export default RightBar;