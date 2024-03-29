/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button';

function Produt({ val, mover, index }) {
  const handleMouseEnter = () => {
    // Check if the window width is greater than or equal to 750px
    if (window.innerWidth >= 750) {
      mover(index);
    }
    // If the window width is less than 750px, do nothing (disable onMouseEnter)
  };

  return (
    <div onMouseEnter={handleMouseEnter} className='w-full py-20 max-md:text-center relative min-h-[23rem] text-white'>
      <div className='max-w-screen-xl mx-auto flex max-md:flex-col items-center max-md:gap-20 justify-between'>
        <h1 className='lg:text-6xl max-md:text-2xl max-md:bottom-[120vh]   max-md:px-10 cap'>{val.title}</h1>
        <div className='dets w-1/3 max-md:w-full'>
          <p className='mb-10'>{val.description}</p>
          <div className='flex max-md:flex-col items-center  gap-5'>
            {val.live && <Button title='Live website' />}
            {val.case && <Button title='case Study' />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produt;
