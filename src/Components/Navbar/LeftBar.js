import React from 'react';

const LeftBar = ({children,className=''}) => {
    return (
        <aside className={`border-r ${className} h-full w-full`}>
            {children}
        </aside>
    );
};

export default LeftBar;