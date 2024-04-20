import React, { useState } from "react";
import { useMobileLayout } from "../moblayout/mob";

const Navbar = () => {
    const isMobile = useMobileLayout();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-black fixed z-10 top-0 w-full p-2 h-20 flex justify-between items-center">
            <div className='flex items-center'>
                <div className=' border bg-[#17a2b8] ml-4 rounded cursor-pointer'>
                    <p className='m-2 mx-6 font-extrabold text-2xl text-white'>TMDB</p>
                </div>
                
                {isMobile ? (
                    <div className="absolute ml-auto mr-4 right-2">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-6 w-6" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M4 6h16M4 12h16m-7 6h7" 
                                />
                            </svg>
                        </button>
                    </div>
                ) : (
                    <>
                        <div className=' cursor-pointer'>
                            <p className='m-2 mx-10 font-bold text-lg text-gray-400'>Home</p>
                        </div>
                        <div className=' cursor-pointer'>
                            <p className='m-2 mx-10 font-bold text-lg text-gray-400'>Genre</p>
                        </div>
                        <div className=' cursor-pointer'>
                            <p className='m-2 mx-10 font-bold text-lg text-gray-400'>Movie</p>
                        </div>
                        <div className=' cursor-pointer'>
                            <p className='m-2 mx-10 font-bold text-lg text-gray-400'>TV Series</p>
                        </div>
                    </>
                )}
            </div>
            
            {!isMobile && (
                <div>
                    <button className="mr-2 p-2 bg-[#17a2b8] text-white rounded">
                        Register/ Login
                    </button>
                </div>
            )}

            {isMobile && isMenuOpen && (
                <div className="fixed top-20 left-0 w-full h-screen bg-black text-white">
                    <div className="flex flex-col items-center justify-center h-full">
                        <p className='m-4 font-bold text-lg'>Home</p>
                        <p className='m-4 font-bold text-lg'>Genre</p>
                        <p className='m-4 font-bold text-lg'>Movie</p>
                        <p className='m-4 font-bold text-lg'>TV Series</p>
                        <button className="mt-4 p-2 bg-[#17a2b8] text-white rounded">
                            Register/ Login
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
