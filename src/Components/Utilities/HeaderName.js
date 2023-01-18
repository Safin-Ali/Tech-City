import React from 'react';

const HeaderName = ({children}) => {
    return (
        <div className={`my-5`}>
            <h5 className={`text-3xl font-bold text-center text-blackSecondary dark:text-whitePrimary dark:glow-text`}>{children}</h5>
        </div>
    );
};

export default HeaderName;