import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Tooltip from '../components/Tooltip'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import Facility from '../components/Facility'
import Button from '../components/Button'

const Availability = () => {
    return (
        <div className='flex bg-body'>
            <Sidebar />
            <div className='flex flex-col gap-4 w-full'>

                <Navbar />
                <div className='flex flex-col ml-3'>
                    <div className='flex items-center gap-3'>
                        <Tooltip text={"Back"}>
                            <Link to={"/viewdetailone"} className='w-10'>
                                <MdArrowBack />
                            </Link>
                        </Tooltip>

                        <div className='flex flex-col'>
                            <h1 className='font-bold text-lg'>Golden Haven Hotel</h1>
                        </div>
                    </div>

                    <span className='text-[11px] ml-7 text-slate-600'>📍 123 Fifth Avenue, New York City, NY 10010</span>
                </div>
                <div className='px-10 flex flex-col gap-5'>
                    <h1 className='font-semibold text-md'>Available Rooms</h1>
                    <div className='w-full h-44 flex drop-shadow-md '>
                        <div className='w-[75%] bg-white drop-shadow-sm rounded-md flex gap-8 p-5'>
                            <img src="/deluxe.png" alt="" className='' />
                            <div className='flex flex-col gap-3'>
                                <h1 className='font-medium text-sm'>Deluxe Room</h1>
                                <div className='flex items-center gap-2'>
                                    <Facility name={"🛌 1 King Bed"} />
                                    <Facility name={"📏 450 Sq ft"} />
                                    <Facility name={"Free Wifi"} />
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Facility name={"TV"} />
                                    <Facility name={"Mini Bar"} />
                                    <Facility name={"City View"} />
                                </div>

                            </div>
                        </div>
                        <div className='bg-body drop-shadow-sm w-[25%] rounded-tr-md rounded-br-md p-7 flex flex-col justify-center gap-2'>
                            <div className='flex gap-2 items-center justify-center'>
                                <span className='text-primary font-semibold text-sm'>$220</span>
                                <span className='text-gray-500 text-[10px]'>Per Night</span>

                            </div>
                            <Tooltip text={"Click to Book"}>
                                <Button name={"Book Room"} width={180} to={"/availability"} />

                            </Tooltip>
                        </div>
                    </div>



                    <div className='w-full h-44 flex drop-shadow-md '>
                        <div className='w-[75%] bg-white drop-shadow-sm rounded-md flex gap-8 p-5'>
                            <img src="/standard.png" alt="" className='' width={250} />
                            <div className='flex flex-col gap-3'>
                                <h1 className='font-medium text-sm'>Standard Room</h1>
                                <div className='flex items-center gap-2'>
                                    <Facility name={"🛌 1 Bed"} />
                                    <Facility name={"📏 320 Sq ft"} />
                                    <Facility name={"Free Wifi"} />
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Facility name={"TV"} />
                                    <Facility name={"Mini Bar"} />
                                </div>

                            </div>
                        </div>
                        <div className='bg-body drop-shadow-sm w-[25%] rounded-tr-md rounded-br-md p-7 flex flex-col justify-center gap-2'>
                            <div className='flex gap-2 items-center justify-center'>
                                <span className='text-primary font-semibold text-sm'>$180</span>
                                <span className='text-gray-500 text-[10px]'>Per Night</span>

                            </div>
                            <Tooltip text={"Click to Book"}>
                                <Button name={"Book Room"} width={180} to={"/availability"} />

                            </Tooltip>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Availability