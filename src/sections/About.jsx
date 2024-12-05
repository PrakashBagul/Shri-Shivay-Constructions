import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'

const About = () => {
  return (
    <div id='about' className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between
    items-start gap-[5%]'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={slideUpVariants} className='lg:w-[60%] w-full flex flex-col justify-center
    items-start gap-6'>
        <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl'>
          Highest Standards in the Industry
        </motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-white text-[40px] uppercase font-bold'>
          Why did you choose us ?
        </motion.h1>
        <div className='w-[120px] h-[6px] bg-yellow-500'></div>
        <p className='text-3xl italic text-gray-50 mt-[60px]'>Our every residential project starts with a vision and an emotion to provide everyone with an affordable home yet includes all the modern amenities. From the concept and design development to the structural, landscaping, and water supply & electrical connections, our architectures carefully craft each flat/apartment, duplex, or villa with these elements in mind.</p>
      </motion.div>
      <motion.div variants={slideUpVariants} whileInView='visible' initial='hidden'
        className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
        <p className='text-white text-lg text-justify'>A construction company's vision typically reflects its long-term goals and aspirations. Here are some key elements that might be included.A commitment to eco-friendly practices and sustainable building methods to minimize environmental impect.Emphasizing the use of cutting-edge technology and materials to improve efficiency and quality in construction projects.A focus on delivering high-quality work while prioritizing the safety of employees and clients. A vision that includes positively contributing to local communities, whether throgh job creation, infrastructure improvements or community engagement. A dedication to understanding and exceeding client expectations, ensuring a collaborative and transparent process. Aspiring to be a leader in the industry through strategic growth, diversification and exceptional project execution.</p>
        {/* <motion.button variants={zoomInVariants} className='bg-yellow-500
        hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold'>
          READ MORE
        </motion.button> */}
      </motion.div>
    </div>
  )
}

export default About