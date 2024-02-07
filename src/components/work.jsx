/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
function Work() {
    // let images = 
    const [images, setImages] = useState([
      {
        url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png', top: "50%", 
        left: "50%", 
        isActive: false
      },

      {
        url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png', top: "52%", 
        left: "54%", 
        isActive: false
      },

      {
        url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png', top: "51%", 
        left: "52%", 
        isActive: false
      },

      {
        url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png', top: "54%", 
        left: "42%", 
        isActive: false
      },

      {
        url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png', top: "50%", 
        left: "50%", 
        isActive: false
      },

      {
        url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png', top: "65%", 
        left: "49%", 
        isActive: false
      
      },
  ])

  const { scrollYProgress } = useScroll();

  const imagesShow = (arr) => {
    setImages((prev) =>
      prev.map((item, index) => ({
        ...item,
        isActive: arr.indexOf(index) !== -1,
      }))
    );
  };

  scrollYProgress.on('change', (data) => {
    const progress = Math.floor(data * 100);

    switch (progress) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
      case 5:
        imagesShow([0, 1, 2, 3, 4]);
        break;
        case 6:
        imagesShow([0, 1, 2, 3, 4,5]);
        break;
        case 7:
        imagesShow([0, 1, 2, 3, 4,5,6]);
        break;
      default:
        break;
    }
  });

  return (
    <div className='w-full'>
      <div className='relative max-w-screen-xl mx-auto text-center'>
        <h1 className='text-[32vw] leading-none font-medium tracking-tight select-none'>Work</h1>
        <div className='w-full h-full absolute top-0'>
          {images.map((elem, index) => (
            elem.isActive && (
              <motion.img
                key={index}
                src={elem.url}
                style={{ top: elem.top, left: elem.left }}
                className='w-60 absolute rounded-lg -translate-x-[50%] -translate-y-[50%]'
                alt=''
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;