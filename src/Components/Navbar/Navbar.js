import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { FaUserPlus, FaBars } from 'react-icons/fa';

const navItems = ['Home', 'Product'];

const Navbar = () => {

    const [expand, setExpandBool] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.screen.width);

    const handleNavExpand = () => {
        setExpandBool(!expand);
    };

    // auto call when screen resize
    window.addEventListener('resize', function () {
        return setScreenWidth(window.screen.width);
    });

    const navTransition = `transition duration-[400ms] linear`

    return (
        <header className={`sticky backdrop-blur-sm top-0 w-full z-[111]`}>
            <nav className={`flex md:px-[5%] bg-transparent py-[2%] gap-3 lg:py-[1%] z-[3] relative shadow justify-between items-center`}>

                <div className={`flex w-full gap-2 items-center`}>
                    {/* Brand Name */}
                    <div className={`whitespace-nowrap px-[2.5%] md:px-0`}>
                        <h2 className={`text-lg md:text-3xl dark:text-whitePrimary font-bold font-mincho`}>Tech <span className={`text-bluePrimary`}>City</span></h2>
                    </div>

                    {/* Searchbar */}
                    <div className={`border rounded-md flex items-center`}>

                        <div className={`border-r p-2`}>
                            <BsSearch></BsSearch>
                        </div>

                        {/* Search Feild */}
                        <div className={``}>
                            <input type="text" className={`w-full p-1 outline-none bg-transparent pl-3`} />
                        </div>
                    </div>
                </div>

                {/* Middle / ResBar Item */}
                {
                    screenWidth < 768 && <div className={`block md:hidden px-[2.5%] md:px-0`} onClick={handleNavExpand}>
                        <FaBars className={`text-2xl ${expand && 'text-bluePrimary'}`}></FaBars>
                    </div>
                }

                {/* Right Content */}
                <div className={`absolute md:flex md:static md:scale-100 ${expand ? 'scale-y-100' : 'scale-y-0'} ${screenWidth < 768 && navTransition} origin-top z-[111] w-full pl-0 top-full`}>
                    <ul className={`backdrop-blur-sm bg-transparent md:ml-auto md:bg-transparent flex flex-col md:flex-row justify-center gap-3 items-center`}>

                        {
                            navItems.map((item, id) => <li className={`border-b md:border-none p-2 text-center border-black w-full`} key={id}><Link
                                to={
                                    item === 'Home' ? '/' : item.toLowerCase()
                                } className="cursor-pointer">
                                {item}
                            </Link></li>)
                        }

                        {/* Development Path For Controller */}
                        <li className={`border-b md:border-none p-2 text-center cursor-pointer border-black w-full`}><Link to={'/development'}>Development</Link></li>

                        <li className={`p-2`}>
                            <div className={`cursor-pointer`}>
                                <FaUserPlus className={`text-xl`}></FaUserPlus>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;