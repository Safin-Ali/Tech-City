import React from 'react';

const RightBar = ({children,className=''}) => {
    return (
        <aside className={`border-l ${className} w-full h-full`}>
            {children}
        </aside>
    );
};

export default RightBar;