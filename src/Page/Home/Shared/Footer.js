import React from 'react';
import {IoLocationSharp} from 'react-icons/io5';
import {FaPhoneAlt,FaFacebookSquare,FaLinkedin} from 'react-icons/fa';
import {GrMail,GrTwitter} from 'react-icons/gr';

const Footer = () => {
    return (
        <footer className={`bg-blackPrimary px-[5%] py-[2%]`}>
                <div className={`grid justify-center sm:justify-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-5`}>

                    {/* First Columns */}
                    <div>
                        <div className={`flex items-center gap-4 my-3`}>
                            <div className={`bg-blackTertiary p-1 rounded-full`}>
                                <IoLocationSharp className={`text-2xl text-whitePrimary`}></IoLocationSharp>
                            </div>
                            <div className={`text-whitePrimary`}>
                                <p className={`dark:text-whitePrimary`}>1216 Road Mirpur</p>
                                <p className={`dark:text-whitePrimary`}><strong>Dhaka, Bangladesh</strong></p>
                            </div>
                        </div>

                        <div className={`flex items-center gap-4 my-3`}>
                            <div className={`bg-blackTertiary p-2 rounded-full`}>
                                <FaPhoneAlt className={`text-xl text-whitePrimary`}></FaPhoneAlt>
                            </div>
                            <div className={`text-whitePrimary`}>
                                <p><strong>+880-1XXXXXXXXX</strong></p>
                            </div>
                        </div>

                        <div className={`flex items-center gap-4 my-3`}>
                            <div className={`bg-blackTertiary p-2 rounded-full`}>
                                <GrMail className={`text-xl text-whitePrimary`}></GrMail>
                            </div>
                            <div className={`text-whitePrimary`}>
                                <p><strong>xyz@tech-city.com</strong></p>
                            </div>
                        </div>
                    </div>

                    {/* Second Columns */}
                    <div className={`text-whitePrimary md:justify-self-center`}>
                        <h4 className={`font-semibold text-xl`}>About the Tech City</h4>
                        <p className={`font-medium text-gray-400 my-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit et error quo voluptas</p>
                    </div>

                    {/* Theree Columns */}
                    <div className={`sm:col-span-2 justify-self-center md:justify-self-end md:col-span-1 text-center md:text-left text-whitePrimary `}>
                        <h4 className={`font-semibold text-xl`}>Follow Us</h4>

                        <div className={`flex gap-5 my-5`}>
                            <p className={`p-3 cursor-pointer text-xl rounded-full bg-slate-700 w-fit`}><FaFacebookSquare></FaFacebookSquare></p>
                            <p className={`p-3 cursor-pointer text-xl rounded-full bg-slate-700 w-fit`}><FaLinkedin></FaLinkedin></p>
                            <p className={`p-3 cursor-pointer text-xl rounded-full bg-slate-700 w-fit`}><GrTwitter></GrTwitter></p>
                        </div>
                    </div>
                </div>

                {/* Subscribe Feild  */}
                    <div className={`text-center w-[80%] sm:w-[60%] md:w-1/2 lg:w-1/3 mx-auto my-5`}>
                        <div className={`flex`}>
                            <input type="text" className={`w-full pl-2 p-1 rounded-l-sm outline-none`}/>
                            <button className={`bg-bluePrimary text-whitePrimary px-2 py-1.5 rounded-r-sm`}>Subscribe</button>
                        </div>
                    </div>

                <div className={`col-span-3 text-center text-whitePrimary`}><i>© 2022 SA Safin Ali. All Rights Reserved.</i></div>
        </footer>
    );
};

export default Footer;