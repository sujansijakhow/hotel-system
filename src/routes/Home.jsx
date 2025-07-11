import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div className='flex bg-body'>
            <Sidebar />
            <div className='flex flex-col gap-4 w-full'>

                <Navbar />
                <div className='flex flex-col gap-3 px-10'>
                    <h1 className='font-bold text-xl'>Find Your Perfect Stay</h1>
                    <div className='h-52 w-full bg-white drop-shadow-md rounded-md p-5 px-10 '>
                        <div className='flex gap-5'>
                            <div className='flex flex-col gap-2'>
                                <span>Destination</span>
                                <input
                                    type="text" placeholder='Where are you going?'
                                    className="w-44 p-2 border border-gray-300 placeholder:text-[13px] placeholder:text-border-gray-200 focus:outline focus:outline-none rounded-md"
                                />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home