import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Tooltip from '../components/Tooltip'
import { MdArrowBack } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Booking = () => {
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

                        <div className='flex flex-col'>
                            <h1 className='font-bold text-lg'>Complete Your Booking</h1>
                        </div>
                    </div>

                    <div className='flex gap-10 ml-7'>
                        <div className='w-[450px] h-[450px] bg-white rounded-md drop-shadow-md p-7 flex flex-col gap-5'>
                            <h1 className='font-semibold text-md'>Booking Summary</h1>
                            <div className='flex flex-col items-center'>
                                <div className='flex flex-col'>

                                    <span className='text-sm'>Golden Haven Hotel</span>
                                    <span className='text-[11px] ml-7 text-slate-600'>New York City, NY</span>
                                </div>
                            </div>
                            <div className='border border-gray-200'></div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex justify-between'>
                                    <span className='text-[12px] text-slate-600'>Check-in</span>
                                    <span className='text-[12px] font-medium'>Aug 15, 2024</span>

                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-[12px] text-slate-600'>Check-out</span>
                                    <span className='text-[12px] font-medium'>Aug 20, 2024</span>

                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-[12px] text-slate-600'>Room Type</span>
                                    <span className='text-[12px] font-medium'>Deluxe Room</span>

                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-[12px] text-slate-600'>Number of Rooms</span>
                                    <span className='text-[12px] font-medium'>2</span>

                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-[12px] text-slate-600'>Nights</span>
                                    <span className='text-[12px] font-medium'>5</span>

                                </div>
                            </div>

                            <div className='flex justify-center'>
                                <div className='bg-body w-[90%] h-[136px] rounded-md px-4 py-2 drop-shadow-md flex flex-col gap-2'>
                                    <h1 className='text-sm font-semibold'> Price breakdown</h1>
                                    <div className='text-[11px] flex flex-col gap-1'>
                                        <div className='flex justify-between'>
                                            <span>Room Rate(5 nights)</span>
                                            <span>$1100.00</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <span>2 Rooms</span>
                                            <span>$2200.00</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <span>Taxes & Fees</span>
                                            <span>$33.00</span>
                                        </div>
                                    </div>
                                    <div className='border border-gray-200'></div>
                                    <div className='flex justify-between text-[11px] font-medium'>
                                        <span className=''>Total</span>
                                        <span>$3333.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment */}

                        <div className='bg-white w-[450px] h-[450px] rounded-md drop-shadow-md flex flex-col gap-3 p-7'>
                            <h1 className='text-md font-medium'>Guest Information</h1>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-[11px] text-slate-600'>First Name</span>
                                    <input type="text" name="" id="" className='outline-none border text-slate-900 text-sm rounded-md h-8 bg-gray-50 p-2' />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-[11px] text-slate-600'>Last Name</span>
                                    <input type="text" name="" id="" className='outline-none border text-slate-900 text-sm rounded-md h-8 bg-gray-50 p-2' />
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-[11px] text-slate-600'>Email Address</span>
                                    <input type="text" name="" id="" className='outline-none border text-slate-900 text-sm rounded-md h-8 bg-gray-50 p-2' />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-[11px] text-slate-600'>Phone Number</span>
                                    <input type="text" name="" id="" className='outline-none border text-slate-900 text-sm rounded-md h-8 bg-gray-50 p-2' />
                                </div>
                            </div>
                            <h1 className='text-md font-medium'>Payment Method</h1>
                            <div className='flex flex-col gap-5'>
                                <div className='flex justify-between'>
                                    <div className='w-[180px] rounded-md h-8 bg-gray-50 border flex items-center gap-2 p-2'>
                                        <input type="radio" className='w-[12px] h-3 ' name={"btn"} />
                                        <span className='text-[11px] text-slate-600'>Credit Card</span>
                                    </div>
                                    <div className='w-[180px] rounded-md h-8 bg-gray-50 border flex items-center gap-2 p-2'>
                                        <input type="radio" className='w-[12px] h-3' name={"btn"} />
                                        <span className='text-[11px] text-slate-600'>Credit Card</span>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex flex-col gap-1'>
                                        <span className='text-[11px] text-slate-600'>Card Number</span>
                                        <input type="text" className='w-full rounded-md outline-none text-[11px] p-2 bg-gray-50 h-8 border border-gray-200' />
                                    </div>
                                </div>
                                <div className='flex gap-1 text-[11px] items-center'>
                                    <input type="checkbox" className='w-[10px] h-5'  />
                                    <span>I agree to the</span>
                                    <span className='text-primary'>terms and condtions</span>
                                </div>
                                <Button name={"Complete Booking"} width={400} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking