import React from 'react';
import { X, Minus } from 'lucide-react';
import { FaGlobe, FaBell } from 'react-icons/fa';
import Button from './Button';

const Navbar = () => {
    return (
        <div className="w-full bg-body">
            <div className='flex flex-col gap-2'>

                <div className="flex justify-end p-1 space-x-2">
                    <button
                        className="hover:bg-yellow-400 hover:text-black px-2 rounded transition duration-200"
                        title="Minimize"
                    >
                        <Minus size={18} className='font-bold' />
                    </button>
                    <button
                        className="hover:bg-green-400 hover:text-black px-2 rounded transition duration-200"
                        title="Maximize"
                    >
                        <div className='border-2 border-black w-3 h-3'></div>
                    </button>
                    <button
                        className="hover:bg-red-500 hover:text-white px-2 rounded transition duration-200"
                        title="Close"
                    >
                        <X size={18} className='font-bold' />
                    </button>
                </div>
                <div className='flex justify-between items-center px-8 text-gray-500'>
                    <div className="h-8 w-60 bg-white drop-shadow-xl rounded-md flex justify-between pr-2 items-center focus-within:outline focus-within:outline-1 focus-within:outline-gray-400">
                        <input type="text" className="outline-none h-8 pl-2 w-full bg-transparent text-gray-900 font-normal text-[13px]" placeholder='Search...' />
                        <span className='cursor-pointer'>🔍</span>
                    </div>

                    <div className='flex gap-7 text mr-3'>
                        <div className='flex gap-1 items-center'>
                            <span className='font-inter'>English</span>
                            <FaGlobe size={15} />
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaBell size={17} className='text-yellow-400 outline-1 outline-1-black' />
                            <Button width={20} name={"login"} />
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Navbar;
