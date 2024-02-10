/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700'>
           <div className='flex items-center gap-16'>
           <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
            <div className="links flex gap-10 items-center">
                {["Home","Work","culture", "", "NEWS"].map((elem,index) => (
                    elem.length === 0 ? <span key={index} className='w-0.5 h-10 bg-zinc-700'></span> : (
                     <a key={index} href="#">
                        {index === 1 ? (<span key={index} style={{boxShadow: "0 0 10px 1px #00FF18"}} className=' inline-block w-1.5 h-1.5 p-0.5 bg-emerald-400 max-md:w-0  rounded-full mr-1'></span>) : null}
                     {elem}
                 </a>)
                ))} 
           </div>
        </div>
        <Button/>
    </div>
  )
}

export default Navbar