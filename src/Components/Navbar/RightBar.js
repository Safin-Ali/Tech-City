import React from 'react';

const RightBar = ({children}) => {
    return (
        <aside className={`border-l w-full h-full`}>
            {children}
        </aside>
    );
};

export default RightBar;