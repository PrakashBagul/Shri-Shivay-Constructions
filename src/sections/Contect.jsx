import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'
import { useState } from 'react'

const Contect = () => {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => { return { ...prev, [name]: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };


  return (
    <div id='contact' className='bg-white w-full'>
      <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between
    items-start gap-[5%]'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={slideUpVariants} className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'>
          <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl'>
            CONTACT US
          </motion.h1>
          <motion.h1 variants={slideUpVariants} className='text-black text-[40px] uppercase font-bold'>
            REACH US FOR ANY QUERY
          </motion.h1>
          <div className='w-[120px] h-[6px] bg-yellow-500'></div>
          <p className='text-3xl italic text-gray-700 mt-[60px]'>Feel free to reach out with any questions of queries about our construction company. We're here to help!</p>
          <p className='text-[18px] text-black mt-[60px] font-bold'>Contact us : <a href='contactto:9977465050' className='hover:text-blue-500'>+91-9977465050</a>  <p>E-Mail ID : <a href="mailto:shreeshivayconstructions@gmail.com" className='hover:text-blue-500 hover:underline'>shreeshivayconstructions@gmail.com</a></p></p>
        </motion.div>
        <motion.div variants={slideUpVariants} whileInView='visible' initial='hidden'
          className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
          <motion.form onSubmit={handleSubmit} initial='hidden' whileInView='visible' variants={zoomInVariants}
            className='flex flex-col justify-center items-start gap-4 w-full'>
            <input type='text' name='name' onChange={handleChange} placeholder='Enter Full Name' className='px-6 py-3 border-[2px] border-black
              text-black rounded-lg w-full'/>
            <input type='email' name='email' onChange={handleChange} placeholder='Enter E-Mail' className='px-6 py-3 border-[2px] border-black
              text-black rounded-lg w-full'/>
            <input type='number' name='mobile' onChange={handleChange} placeholder='Enter Mobile Number' className='px-6 py-3 border-[2px] border-black
              text-black rounded-lg w-full'/>
            <textarea name='message' onChange={handleChange} placeholder='Enter Your Message' className='px-6 py-3 border-[2px] border-black
              text-black rounded-lg w-full h-[200px]'></textarea>
            <motion.button variants={zoomInVariants} className='w-full py-4 px-10 rounded-lg text-black
              bg-yellow-500 hover:bg-black hover:text-white'>
              SUBMIT
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contect