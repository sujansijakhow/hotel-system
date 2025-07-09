import React from 'react'
import { MdClose, MdMinimize, MdMaximize } from "react-icons/md";

const Navbar
 = () => {
  return (
    <div>
        <div className='flex flex-col'>
            <div className='flex'>
                <span><MdClose /></span>
                <span><MdMinimize /></span>
                <span><MdMaximize /></span>
            </div>
        </div>
    </div>
  )
}

export default Navbar
