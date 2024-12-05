import React from 'react'
import images from '../assets/images.png'
import backgroundImage from '../assets/homeimg.webp'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'
import { Link } from 'react-scroll'


const Hero = () => {
  
  return (
    <div id='hero' className='bg-black w-full lg:h-[700px] 
    h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[50px] px-[20px]
     justify-between items-center lg:flex-row flex-col lg:gap-5
      gap-[50px] bg-cover bg-center' style={{
        backgroundImage: `url(${backgroundImage})`
      }}>
      <motion.div variants={slideUpVariants} initial='hidden'
        whileInView='visible'
        className='lg:w-[80%] w-full flex flex-col justify-center 
        items-start lg:gap-5 gap-4'>
        <motion.img src={images} alt={images} className='mt-2 items-center object-cover w-[120px] h-[80px] rounded-2xl bg-black'></motion.img>
        <motion.h1 variants={slideUpVariants}
          className='text-black text-2xl font-bold'>
          WE ARE BUILDERS</motion.h1>
        <motion.h1 variants={slideUpVariants}
          className='text-white uppercase text-[50px] font-bold'>
          we will build a community where dreams come true
        </motion.h1>
        <div className='w-[120px] h-[6px] bg-yellow-500'></div>
        <p className='text-white text-[20px]'>"Our value system is based on integrity, excellence in quality, continuous learning, growth, team-spirit, and exceeding customer expectations. Being a part of a dynamic and ever-changing industry, we keep abreast with the global developments and strive for excellence progressively."</p>
        <motion.div variants={zoomInVariants} initial='hidden' whileInView='visible'
          className='flex justify-center items-center gap-5'>
          <motion.div variants={zoomInVariants} className='bg-yellow-500
        hover:bg-white hover:text-black px-10 py-3 rounded-lg text-white font-bold cursor-pointer'>
            <Link to='about' spy={true} offset={-100} smooth={true}>READ MORE</Link>
          </motion.div>
          <motion.div variants={zoomInVariants} className='border-white hover:border-yellow-500
        hover:text-yellow-500 border-2 px-10 py-3 rounded-lg text-white font-bold cursor-pointer' >
            <Link to='contact' spy={true} offset={-100} smooth={true}>CONTACT US</Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>


  )
}

export default Hero