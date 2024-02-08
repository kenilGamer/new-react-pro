/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Button from './Button'

function Produt({val,mover,index}) {
  return (
    <div onMouseEnter={()=>{mover(index)}} className='w-full py-20 h-[23rem] text-white'>
        <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className='text-6xl cap '>{val.title}</h1>
            <div className='dets w-1/3'>
                <p className='mb-10'>{val.description}</p>
                <div className='flex items-center gap-5'>
                {val.live && <Button title='Live website'/>}
                {val.case && <Button title='case Study'/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Produt