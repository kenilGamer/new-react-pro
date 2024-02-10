/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
function Button({title = "Get Started" }) {
  return (
    <div className='lg:w-40 md:w-32 px-4 text-black rounded-full py-4 bg-slate-50 flex items-center justify-between '>
        <span className='text-ms'>{title} </span><IoIosReturnRight />
    </div>
  )
}

export default Button