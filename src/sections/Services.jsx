import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'
import { allservices } from '../export'
const Services = () => {
  return (
    <div id='services' className='w-full bg-white'>
      <motion.div variants={slideUpVariants} initial='hidden' whileInView='visible'
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'>
        <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl'>
          SPACIAL OFFER</motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-black uppercase text-[40px] font-bold text-center'>
          OUR BEST SERVICES</motion.h1>
        <motion.div variants={slideUpVariants} className='w-[120px] h-[6px] bg-yellow-500'></motion.div>
        <motion.div initial='hidden' whileInView='visible' variants={zoomInVariants}
          className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-[20px] mt-[30px]'>
          {
            allservices.map((item, index) => (
                  <motion.div variants={zoomInVariants} key={index}
                  className='flex justify-center items-start gap-5 p-8 '>
                    <img src={item.icon} alt="icon" className='w-[70px] border-2 border-yellow-500 hover:bg-yellow-500 rounded-lg p-2' />
                    <div className='flex flex-col justify-center items-start gap-3'>
                    <h1 className='text-xl font-bold text-black'>{item.title}</h1>
                    <p className='text-[18px]]'>{item.about}</p>
                    </div>
                  </motion.div>
              ))
          }
        </motion.div>
      </motion.div>
      <motion.div variants={zoomInVariants} initial='hidden' whileInView='visible' className='p-5'>
        <p className='text-center text-gray-700'>
          We provide a wide range of services to help you achieve your goals.
        </p>
      </motion.div>
    </div>
  )
}

export default Services