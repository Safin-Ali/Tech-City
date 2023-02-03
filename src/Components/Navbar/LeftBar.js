import React from 'react';

const LeftBar = ({children}) => {
    return (
        <aside className={`border-r h-full w-full`}>
            {children}
        </aside>
    );
};

export default LeftBar;