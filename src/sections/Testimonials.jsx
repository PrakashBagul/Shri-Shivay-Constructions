import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'
import { clients } from '../export'

const Testimonials = () => {
  return (
    <div id='clients' className='w-full'>
      <motion.div variants={slideUpVariants} initial='hidden' whileInView='visible'
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'>
        <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl'>
          TESTIMONIALS</motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold text-center'>
          WHAT OUR CLIENTS SAYS</motion.h1>
        <motion.div variants={slideUpVariants} className='w-[120px] h-[6px] bg-yellow-500'></motion.div>
        <motion.div initial='hidden' whileInView='visible' variants={zoomInVariants}
          className='lg:w-full w-[90%] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-8 mt-[30px] '>
          {
            clients.map((item, index) => (
              <motion.div key={index} variants={zoomInVariants}
                className='flex flex-col justify-center items-center'>
                <div className='border-2 border-white hover:bg-yellow-500 pb-[100px] pt-[30px] rounded-lg'>
                  <p className='text-white text-lg hover:text-black text-center'>{item.about}</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-[5px]'>
                  <img src={item.image} alt="client image" className='mt-[-50px] w-[100px] border-2 border-white hover:border-yellow-500 rounded-lg transform hover:scale-125 transition-transform duration-300 cursor-pointer md:flex hidden' />
                  <h1 className='text-white text-[27px] font-semibold uppercase'>{item.name}</h1>
                  <h1 className='text-yellow-500 text-[22px]'></h1>
                </div>
              </motion.div>
            ))

            // Add more clients here if needed.

            // Example:
            // <motion.div key={3} variants={zoomInVariants}
            //   className='flex flex-col gap-5 border-2 border-yellow-
          }
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Testimonials