import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { FaArrowLeft } from 'react-icons/fa'
import { MdArrowBack } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Tooltip from '../components/Tooltip'
import Button from '../components/Button'

const ViewDetailOne = () => {
    return (
        <div className='flex bg-body'>
            <Sidebar />
            <div className='flex flex-col gap-4 w-full'>

                <Navbar />
                <div className='flex flex-col ml-3'>
                    <div className='flex items-center gap-3'>
                        <Tooltip text={"Back"}>
                            <Link to={"/"} className='w-10'>
                                <MdArrowBack />
                            </Link>
                        </Tooltip>

                        <div className='flex flex-col'>
                            <h1 className='font-bold text-lg'>Golden Haven Hotel</h1>
                        </div>
                    </div>

                    <span className='text-[11px] ml-7 text-slate-600'>📍 123 Fifth Avenue, New York City, NY 10010</span>
                </div>


                <div className='flex flex-col gap-3 px-10'>
                    <div className='flex flex-col gap-3'>

                        <div className='w-full h-44 drop-shadow-md mt-2 rounded-sm flex'>
                            <div className='w-[75%] flex flex-col gap-5 bg-white drop-shadow-sm p-7 rounded-tl-md rounded-bl-md'>
                                <h1 className='text-md font-semibold'>Hotel Facilities</h1>
                                <div className='flex items-center justify-between'>
                                    <div className='text-slate-800 text-[13px]'>🏊‍♀️&nbsp;&nbsp;Swimming Pool</div>
                                    <div className='text-slate-800 text-[13px]'>🍽️&nbsp;&nbsp;Resturant</div>
                                    <div className='text-slate-800 text-[13px]'>♨&nbsp;&nbsp;Spa Service</div>
                                    <div className='text-slate-800 text-[13px]'>🎽&nbsp;&nbsp;Gym</div>
                                    <div className='text-slate-800 text-[13px]'>🚗&nbsp;&nbsp;Free Parking</div>
                                </div>
                                <div className='flex'>
                                    <div className='text-slate-800 text-[13px] w-[180px]'>🍳&nbsp;&nbsp;Breakfast</div>
                                    <div className='flex flex-col w-[155px]'>
                                        <div className='text-slate-800 text-[13px]'>🧹&nbsp;&nbsp;Daily</div>
                                        <div className='text-slate-800 ml-6 text-[13px]'>Housekeeping</div>
                                    </div>
                                    <div className='text-slate-800 text-[13px]'>💻&nbsp;&nbsp;Business Center</div>

                                </div>
                            </div>
                            <div className='bg-body drop-shadow-sm w-[25%] rounded-tr-md rounded-br-md p-7 flex flex-col justify-center gap-2'>
                                <div className='flex gap-2 items-center justify-center'>
                                    <span className='text-primary font-semibold text-sm'>$180 - $220</span>
                                    <span className='text-gray-500 text-[10px]'>Per Night</span>

                                </div>
                                <Button name={"Check Availability"} width={180} />
                            </div>
                        </div>

                        <div className='bg-white flex flex-col gap-4 rounded-md w-full h-60 drop-shadow-md p-7'>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-semibold text-md'>
                                    Guest Reviews
                                </h1>

                                <div className='flex items-center gap-2'>
                                    <span className='font-semibold'>4.8</span>
                                    <span className='text-[14px]'>⭐⭐⭐⭐⭐</span>
                                    <span className='text-[11px] text-slate-600'>(240 reviews)</span>
                                </div>


                            </div>
                            <div>
                                <div className='flex flex-col gap-'>
                                    <div className='flex justify-between'>
                                        <span className='font-medium text-[13px]'>David Ben</span>
                                        <div className='flex gap-1 items-center'>
                                            <span className='font-semibold text-[13px]'>5.0</span>
                                            <span className='text-[12px]'>⭐</span>
                                        </div>
                                    </div>
                                    <span className='text-slate-600 text-[11px] italic'>Stayed in August 3</span>
                                </div>
                                <span className='text-[12px] text-slate-900'>Absolutely loved our stay! The staff was incredibly friendly and the amenities were top-notch. </span>
                            </div>
                            <div className='border border-gray-200'></div>
                            <div>
                                <div className='flex flex-col gap-'>
                                    <div className='flex justify-between'>
                                        <span className='font-medium text-[13px]'>Sonia Johnson</span>
                                        <div className='flex gap-1 items-center'>
                                            <span className='font-semibold text-[13px]'>4.5</span>
                                            <span className='text-[12px]'>⭐</span>
                                        </div>
                                    </div>
                                    <span className='text-slate-600 text-[11px] italic'>Stayed in July 30</span>
                                </div>
                                <span className='text-[12px] text-slate-900'>Great Location and stunning views from our room. The breakfast was delicious with many options.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDetailOne