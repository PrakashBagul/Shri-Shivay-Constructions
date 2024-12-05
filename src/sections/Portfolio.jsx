import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants, zoomOutVariants } from './animation'
import project1 from '../assets/project1.jpeg'
import project2 from '../assets/project2.jpeg'
import project3 from '../assets/project3.jpeg'
import project4 from '../assets/project4.jpeg'
import project5 from '../assets/project5.jpeg'
import project6 from '../assets/project6.jpeg'
import project7 from '../assets/project7.jpeg'
import project8 from '../assets/project8.jpeg'

const Portfolio = () => {
  return (
    <div id='projects' className='w-full' >
      <motion.div variants={slideUpVariants} initial='hidden' whileInView='visible'
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'>
        <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl'>
          PORTFOLIO</motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold text-center'>
          OUR BEST PROJECTS</motion.h1>
        <motion.div variants={slideUpVariants} className='w-[120px] h-[6px] bg-yellow-500'></motion.div></motion.div>
        <motion.div variants={zoomInVariants} initial='hidden' whileInView='visible' 
        className='w-full m-auto grid lg:grid-cols-4 grid-cols-1 '>
          <img src={project1} alt='project1' className='object-cover w-full h-[250px] transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden'/>
          <img src={project2} alt='project2' className='object-cover w-full h-[250px] transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden'/>
          <img src={project3} alt='project3' className='object-cover w-full h-[250px] transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden'/>
          <img src={project4} alt='project4' className='object-cover w-full h-[250px] transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden'/>
          <img src={project5} alt='project5' className='object-cover w-full h-[250px] transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden'/>
          <img src={project6} alt='project6' className='object-cover w-full h-[250px] transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden'/>
          <img src={project7} alt='project7' className='object-cover w-full h-[250px] transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden'/>
          <img src={project8} alt='project8' className='object-cover w-full h-[250px] transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden'/>
          </motion.div> 
    </div>

  )
}

export default Portfolio