import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Tooltip from '../components/Tooltip'
import { MdArrowBack } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const MyBooking = () => {
    return (
        <div className='flex bg-body'>
            <Sidebar />
            <div className='flex flex-col gap-4 w-full'>

                <Navbar />
                <div className='flex flex-col ml-3 gap-4'>
                    <div className='flex items-center gap-3'>
                        <Tooltip text={"Back"}>
                            <Link to={"/availability"} className='w-10'>
                                <MdArrowBack />
                            </Link>
                        </Tooltip>
                        <h1 className='text-md font-bold'>My booking</h1>
                    </div>

                    <div className='w-full px-8 flex flex-col'>
                        <div className='w-full flex drop-shadow-md'>
                            <div className='w-[75%] bg-white drop-shadow-sm rounded-md flex gap-8 p-5'>
                                <img src="/deluxe.png" alt="" className='' />
                                <div className='flex flex-col gap-3'>
                                    <div className='flex flex-col'>
                                        <h1 className='font-medium text-sm'>Golden Haven Hotel</h1>
                                        <span className='text-[11px] text-slate-600 '>New York City, NY</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex gap-20 items-center'>
                                            <span className='text-[11px] text-slate-600'>Check-in </span>
                                            <span className='text-[11px] text-slate-600'>Check-out </span>
                                        </div>
                                        <div className='flex gap-[52px] items-center'>
                                            <span className='text-[12px] text-slate-900'>Aug 15, 2024 </span>
                                            <span className='text-[12px] text-slate-900'>Aug 20, 2024 </span>
                                        </div>
                                    </div>
                                    <span className='text-[12px] text-slate-600'>Room: Deluxe Room</span>

                                </div>
                            </div>

                            <div className='bg-body drop-shadow-sm w-[25%] rounded-tr-md rounded-br-md p-7 flex flex-col justify-center gap-2'>
                                <div className='flex flex-col gap-2 items-end'>
                                    <button className='px-2 py-1 bg-green-200 text-green-800 text-[12px] rounded-md w-[70%]'>Confirmed</button>
                                    <button className='px-2 py-1 bg-primary text-white text-[12px] rounded-md w-full'>Modify</button>
                                    <button className='px-2 py-1 bg-red-200 text-red-800 text-[12px] rounded-md w-full'>Canced</button>
                                    <button className='px-2 py-1 bg-transparent text-[12px] border border-primary rounded-md w-full'>Download Eticket</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MyBooking