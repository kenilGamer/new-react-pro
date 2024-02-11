/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({width,srart,para,hover="false"}) {
  
  return (
    <motion.div  whileHover={{backgroundColor: hover === "true" && "#7443ff", padding: '30px'}} className={`p-5 z-100 rounded-xl bg-zinc-800 ${width} min-h-[30rem] flex flex-col justify-between `}>
        <div className='w-full'> 
        <div className='w-full flex justify-between items-center'>
        {srart && (
            <>
              <h3>Get in Touch</h3>
              <IoIosArrowRoundForward />
            </>
            )}
           {para === true && (
            <>
              <h3>Up Next: New </h3>
        <IoIosArrowRoundForward />
            </>
            )}

        </div>
        {srart && (
            <>
        <h1 className=' mt-10 text-4xl font-medium'>Let`s get to it, together.</h1>
            </>
            )}
           {para === true && (
            <>
            <h1 className=' mt-10 text-4xl font-medium'>Insights and behind the scenes</h1>
            </>
            )}
        </div>
        <div className='down w-full '>
            {srart && (
                <>
                 <h1 className='text-6xl font-semibold tracking-tight leading-none'>start a project</h1>
            <button className='rounded-full border-[1px] py-2  px-8 mt-5'>Contact us</button>
            </>
            )}
           {para === true && (
                <>
                {/* <h3>ddddd</h3> */}
                 <p className='text-sm text-zinc-600 font-medium'>Explor what drives our team.</p>
            </>
            )}
           
        </div>
    </motion.div>
  )
}

export default Card