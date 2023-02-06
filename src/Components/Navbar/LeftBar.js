import React from 'react';

const LeftBar = ({children,className='',width=0,top=0}) => {
    return (
        <aside style={{width:`${width}px`,top:`${top}px`}} className={`border-r ${className} h-full w-full`}>
            {children}
        </aside>
    );
};

export default LeftBar;