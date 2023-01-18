import React from 'react';

const Navbar = () => {
    return (
        <header>
            <nav className={`flex px-[5%] py-[1%] shadow justify-between items-center`}>
                <div><h2 className={`text-3xl dark:text-whitePrimary font-bold font-mincho`}>Tech <span className={`text-bluePrimary`}>City</span></h2></div>

                <div>
                    <ul className={`flex gap-3`}>
                        <li>Home</li>
                        <li>Product</li>
                        <li>Login</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;