/* eslint-disable no-unused-vars */
import React from 'react'

function Footer() {
  return (
    <div className='w-full '>
        <div className='max-w-screen-xl py-10 flex items-start gap-32  px-10 mx-auto'>
            <div className='basis-1/2'>
                <h1 className='text-4xl font-semibold leading-none tracking-tight'>Refolkus</h1>
            </div>
            <div className='basis-1/2 flex gap-10 items-center'>
              <h4>Privacy Policy</h4>
              <h4>Cookie Policy</h4>
              <h4>Impressum</h4>
              <h4>Terms</h4>
            </div>
        </div>
    </div>
  )
}

export default Footer