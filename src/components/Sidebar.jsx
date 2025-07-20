import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
    const location = useLocation();
    const path = location.pathname;

    const isMyBooking = path === '/mybooking';

    return (
        <div className='w-[270px] font-inter bg-white border rounded-tr-md rounded-br-md h-[590px] drop-shadow-xl'>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col items-center'>
                    <div className='h-10 w-10 rounded-full bg-black text-center'></div>
                    <h1 className='text-primary font-bold text-[24px]'>Golden Haven Hotel</h1>
                    <div className='border-b-2 border-[#F5F5F5] w-[250px]'></div>
                </div>

                {/* Search Hotels */}
                <Link to={"/"}>
                    <div className='flex items-center gap-3 ml-6'>
                        <p>🔍</p>
                        <span className={isMyBooking ? 'text-secondary' : 'text-primary'}>
                            Search Hotels
                        </span>
                    </div>
                </Link>

                {/* My Bookings */}
                <Link to={"/mybooking"}>
                    <div className='flex items-center gap-3 ml-6'>
                        <p>🔖</p>
                        <span className={isMyBooking ? 'text-primary' : 'text-secondary'}>
                            My Bookings
                        </span>
                    </div>
                </Link>

                {/* Hotel Lists */}
                <div className='flex items-center gap-3 ml-6'>
                    <p>📃</p>
                    <span className='text-secondary'>Hotel lists</span>
                </div>
            </div>

            <div className='flex flex-col gap-6 mt-72'>
                <div className='ml-2 border-b-2 border-[#F5F5F5] w-[250px]'></div>
                <div className='flex items-center gap-3 ml-6'>
                    <p>⏫</p>
                    <span className='text-secondary'>Logout</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
