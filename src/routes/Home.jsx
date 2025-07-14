import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Facility from '../components/Facility'
import Tooltip from '../components/Tooltip'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex bg-body'>
            <Sidebar />
            <div className='flex flex-col gap-4 w-full'>

                <Navbar />
                <div className='flex flex-col gap-3 px-10'>
                    <h1 className='font-bold text-xl'>Find Your Perfect Stay</h1>
                    <div className='h-48 w-full flex flex-col gap-4 bg-white drop-shadow-md rounded-md p-7 '>
                        <div className='font-medium'>
                            What's Your Preference?
                        </div>
                        <div className='flex gap-5 items-center'>
                            <div className='flex flex-col gap-2'>
                                <span className='text-slate-600'>Destination</span>
                                <input
                                    type="text" placeholder='Where are you going?'
                                    className="w-[214px] p-2 text-[13px] text-slate-900 border border-gray-300 placeholder:text-[13px] placeholder:text-slate-900 focus:outline focus:outline-none rounded-md"
                                />

                            </div>
                            
                            <div className='flex flex-col gap-2'>
                                <span className='text-slate-600'>Date</span>
                                <input
                                    type="date" placeholder='Where are you going?'
                                    className="w-56 p-2 cursor-pointer text-[13px] text-slate-900 border border-gray-300 placeholder:text-[13px] placeholder:text-slate-700 focus:outline focus:outline-none rounded-md"
                                />

                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='text-slate-600'>Room Type</span>
                                <select name="" id="" className='w-56 p-2 cursor-pointer text-[13px] text-slate-900 border border-gray-300 placeholder:text-[13px] placeholder:text-slate-700 focus:outline focus:outline-none rounded-md'>
                                    <option value="">Standard</option>
                                    <option value="">Deluxe</option>
                                    <option value="">Single</option>
                                </select>

                            </div>
                            
                            <div className='mt-8'>

                                <Button name={"Search Hotels"} width={160} height={37} />
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-60 drop-shadow-md bg-white rounded-md p-7 flex flex-col gap-2'>
                        <div>
                            <span className='font-semibold'>Recommended Hotel Lists</span>
                        </div>

                        {/*  Number 1 Recommended Hotel List*/}
                        <div className='flex justify-between'>
                            <div className='bg-body/40 bg rounded-md border border-gray-300 opacity- w-72 h-38 flex flex-col gap-2 p-2 px-3'>
                                <div className='flex items-center justify-between'>
                                    <span className='text-[13px] text-black font-medium'>Golden Haven Hotel</span>
                                    <Tooltip text={"Rating"}>
                                        <div className='h-[15px] w-10 bg-gray-700 rounded-sm flex items-center p-1 justify-between cursor-pointer'>
                                            <span className='text-white text-[8px] font-semibold'>4.8</span>
                                            <span className='text-[8px]'>⭐</span>
                                        </div>
                                    </Tooltip>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <span className='text-[10px]'>
                                        📍
                                    </span>
                                    <span className='text-black text-[12px]'>New York City, NY</span>
                                </div>
                                <div className='flex gap-2'>
                                    <Facility name={"Free Wifi"} />
                                    <Facility name={"Pool"} />
                                    <Facility name={"Gym"} />
                                </div>
                                <div className='border border-gray-300'></div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex flex-col'>
                                        <span className='text-primary font-semibold'>$200</span>
                                        <span className='text-gray-500 text-[10px]'>Per Night</span>
                                    </div>
                                    <Tooltip text={"Click to View Details"}>
                                        <Button name={"View Details"} height={34} to={"/viewdetailone"} />
                                    </Tooltip>
                                </div>
                            </div>

                            {/* Number 2 Recommended Hotle List */}
                            <div className='bg-body/40 bg rounded-md border border-gray-300 opacity- w-72 h-38 flex flex-col gap-2 p-2 px-3'>
                                <div className='flex items-center justify-between'>
                                    <span className='text-[13px] text-black font-medium'>Luxury Stay</span>
                                    <Tooltip text={"Rating"}>
                                        <div className='h-[15px] w-10 bg-gray-700 rounded-sm flex items-center p-1 justify-between cursor-pointer'>
                                            <span className='text-white text-[8px] font-semibold'>4.7</span>
                                            <span className='text-[8px]'>⭐</span>
                                        </div>
                                    </Tooltip>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <span className='text-[10px]'>
                                        📍
                                    </span>
                                    <span className='text-black text-[12px]'>Paris, France</span>
                                </div>
                                <div className='flex gap-2'>
                                    <Facility name={"Free Wifi"} />
                                    <Facility name={"Resturant"} />
                                    <Facility name={"Spa"} />
                                </div>
                                <div className='border border-gray-300'></div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex flex-col'>
                                        <span className='text-primary font-semibold'>$180</span>
                                        <span className='text-gray-500 text-[10px]'>Per Night</span>
                                    </div>
                                    <Tooltip text={"Click to View Details"}>
                                        <Button name={"View Details"} height={34} />
                                    </Tooltip>
                                </div>
                            </div>


                            {/* Number 3 Recommended Hotel List */}
                            <div className='bg-body/40 bg rounded-md border border-gray-300 opacity- w-72 h-38 flex flex-col gap-2 p-2 px-3'>
                                <div className='flex items-center justify-between'>
                                    <span className='text-[13px] text-black font-medium'>Resort & Spa</span>
                                    <Tooltip text={"Rating"}>
                                        <div className='h-[15px] w-10 bg-gray-700 rounded-sm flex items-center p-1 justify-between cursor-pointer'>
                                            <span className='text-white text-[8px] font-semibold'>4.9</span>
                                            <span className='text-[8px]'>⭐</span>
                                        </div>
                                    </Tooltip>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <span className='text-[10px]'>
                                        📍
                                    </span>
                                    <span className='text-black text-[12px]'>Miami, USA</span>
                                </div>
                                <div className='flex gap-2'>
                                    <Facility name={"Free Wifi"} />
                                    <Facility name={"Beach Acess"} />
                                    <Facility name={"Pool"} />
                                </div>
                                <div className='border border-gray-300'></div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex flex-col'>
                                        <span className='text-primary font-semibold'>$250</span>
                                        <span className='text-gray-500 text-[10px]'>Per Night</span>
                                    </div>
                                    <Tooltip text={"Click to View Details"}>
                                        <Button name={"View Details"} height={34} />
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home