/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import Produt from './Produt';
import Parallax from 'parallax-js';
import { motion } from 'framer-motion';


function Produts() {
 

  let produts = [
    {
      title: 'Arqitel',
      description:
        'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.',
      live: true,

      case: false,
    },
    {
      title: 'Cula',
      description:
        'We immersed ourselves in a 3D world we created to explain how Cula\'s platform collects data from carbon removal processes and converts them into carbon credit certificates.',
      live: true,
      case: false,
    },

    {
      title: 'TTR',
      description:
        'We\'ve created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.',
      live: true,
      case: false,
    },

    {
      title: 'Maniv',
      description:
        'A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.',
      live: true,
      case: false,
    },

    {
      title: 'YIR 2022',
      description:
        'Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate',
      live: true,
      case: true,
    },

    {
      title: 'Yahoo!',
      description:
        'We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.',
      live: true,
      case: false,
    },
    {
        title: 'Rainfall',
        description:'We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.',
        live: true,
        case: true,
    },
    {
        title: 'Jungle',
        description:'We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.',
        live: true,
        case: false,
    },
    {
        title: 'Silvr',
        description:'We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.        ',
        live: true,
        case: false,
    },
    {
        title: 'Remind',
        description:'Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families. ',
        live: true,
        case: true,
    },
    {
        title: 'Summon',
        description:'We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.',
        live: true,
        case: true,
    },
    {
        title: 'Like Magic        ',
        description:'We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.',
        live: true,
        case: false,
    },
    {
        title: 'RocketChat',
        description:'We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.         ',
        live: true,
        case: false,
    },
    {
        title: 'Haufe',
        description:'Besides the continuous work we do with Haufe—shipping over 50 projects per year—we partnered with them to create a new website for their core brand.        ',
        live: true,
        case: false,
    },
    {
        title: 'YIR  2021',
        description:'We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.        ',
        live: true,
        case: false,
    },
  
  ];

  const [pos, setPos] = useState(0);
  const mover = (val)=>{
    setPos(val*23)
  }
  return (
    <div className="mt-32  relative">
      {produts.map((elem, index) => (
        <Produt key={index} mover={mover} val={elem} index={index} />
      ))}
      <div className="w-full absolute top-0 h-full  pointer-events-none">
        <motion.div 
        initial={{y: pos, x: "-50%"}} 
        animate={{y: pos+`rem`}}
        transition={{ ease: [0.76, 0, 0.24, 1], duration:  0.8 }}
        className="w-[32rem] left-[44%]  absolute h-[23rem] max-md:w-0 max-md:h-0 bg-white overflow-hidden">
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration:  1 }} animate={{y: -pos +`rem`}} className="w-full h-full xl:bg-sky-100  max-md:relative  parallax-scene">
            <video  className='top-20 max-md:bg-none' src="../../../videos/Arqitel project video 4_3.webm" autoPlay muted loop></video>
          </motion.div>
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration:  1 }} animate={{y: -pos +`rem`}} className="w-full h-full xl:bg-sky-200  max-md:relative">
            <video className='top-20 max-md:bg-none' src="../../../videos/Cula_promo_new_4_3.mp4" autoPlay muted loop></video>
          </motion.div>
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration:  1 }} animate={{y: -pos +`rem`}} className="w-full h-full xl:bg-sky-300  max-md:relative">
            <video className='top-24 max-md:bg-none' src="../../../videos/TTR project video 4_3_H.264.webm" autoPlay muted loop></video>
          </motion.div>
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration:  1 }} animate={{y: -pos +`rem`}} className="w-full h-full xl:bg-sky-400  max-md:relative">
            <video className='top-28 max-md:bg-none' src="../../../videos/Maniv-Compressed.mp4" autoPlay muted loop></video>
          </motion.div>
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration:  1 }} animate={{y: -pos +`rem`}} className="w-full h-full xl:bg-sky-500  max-md:relative" >
            <video className='top-32 max-md:bg-none' src="../../../videos/haufe.webm" autoPlay muted loop></video>
          </motion.div>
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration:  1 }} animate={{y: -pos +`rem`}} className="w-full h-full xl:bg-sky-600  max-md:relative">
            <video className='top-36 max-md:bg-none ' src="../../../videos/yahoo.webm" autoPlay muted loop></video>
          </motion.div>
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration:  1 }} animate={{y: -pos +`rem`}} className="w-full h-full xl:bg-sky-700  max-md:relative">
            <video className='top-36 max-md:bg-none' src="../../../videos/rainfall.webm" autoPlay muted loop></video>
          </motion.div>
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration:  1 }} animate={{y: -pos +`rem`}} className="w-full h-full xl:bg-sky-800  max-md:relative">
            <video className='top-40 max-md:bg-none' src="../../../videos/jungle-4-3-.webm" autoPlay muted loop></video>
          </motion.div>
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration:  1 }} animate={{y: -pos +`rem`}} className="w-full h-full xl:bg-sky-900  max-md:relative">
            <video className='top-44 max-md:bg-none' src="../../../videos/Silvr.webm" autoPlay muted loop></video>
          </motion.div>
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration:  1 }} animate={{y: -pos +`rem`}} className="w-full h-full xl:bg-sky-100  max-md:relative">
            <video className='top-48 max-md:bg-none' src="../../../videos/remind.webm" autoPlay muted loop></video>
          </motion.div>
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration:  1 }} animate={{y: -pos +`rem`}} className="w-full h-full xl:bg-sky-200  max-md:relative">
            <video className='top-52 max-md:bg-none' src="../../../videos/summon.webm" autoPlay muted loop></video>
          </motion.div>
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration:  1 }} animate={{y: -pos +`rem`}} className="w-full h-full xl:bg-sky-300  max-md:relative">
            <video className='top-56 max-md:bg-none' src="../../../videos/weglotlikemagic.webm" autoPlay muted loop></video>
          </motion.div>
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration:  1 }} animate={{y: -pos +`rem`}} className="w-full h-full xl:bg-sky-400  max-md:relative">
            <video className='top-64 max-md:bg-none' src="../../../videos/weglot.webm" autoPlay muted loop></video>
          </motion.div>
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration:  1 }} animate={{y: -pos +`rem`}} className="w-full h-full xl:bg-sky-500  max-md:relative">
            <video className='top-72 max-md:bg-none' src="../../../videos/haufe.webm" autoPlay muted loop></video>
          </motion.div>
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration:  1 }} animate={{y: -pos +`rem`}} className="w-full h-full xl:bg-sky-600  max-md:relative">
            <video className='top-72 max-md:bg-none' src="../../../videos/yearinreview.webm" autoPlay muted loop></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Produts;