/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { motion } from 'framer-motion';
import React from 'react';

function Maruee({ imgs,direction }) {
  return (
    <div className='flex w-full py-5 gap-20 whitespace-nowrap overflow-hidden'>
      <motion.div initial={{ x: direction === "left" ? '0' : '-100%' }} animate={{x: direction === "left" ? '-100%' : '0'  }} transition={{ease:"linear",repeat: Infinity, duration:15}} className='flex flex-shrink-0 gap-40 py-10 pr-40'>
        {imgs.map((elem, index) => (
          <motion.img key={index} src={elem} className=''   />
        ))}
      </motion.div>
      <motion.div initial={{ x: direction === "left" ? '0' : '-100%' }} animate={{x: direction === "left" ? '-100%' : '0'  }} transition={{ease:"linear",repeat: Infinity, duration:15}} className='flex flex-shrink-0 gap-40 py-10 pr-40'>
        {imgs.map((elem, index) => (
          <motion.img key={index} src={elem} className=''   />
        ))}
      </motion.div>
    </div>
  );
}

export default Maruee;
