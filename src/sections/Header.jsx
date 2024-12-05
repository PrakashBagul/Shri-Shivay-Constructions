import React, { useState } from 'react'
import { FaXmark, FaBars } from 'react-icons/fa6'
import { Link } from 'react-scroll'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); }

  const closeMenu = () => { setIsMenuOpen(false); }

  const navItems = [
    {
      link: 'Home', path: 'hero'
    },
    {
      link: 'About', path: 'about'
    },
    {
      link: 'Services', path: 'services'
    },
    {
      link: 'Projects', path: 'projects'
    },
    {
      link: 'Clients', path: 'clients'
    },
    {
      link: 'Contact Us', path: 'contact'
    },
  ]

  return (
    <nav className='flex lg:flex-row flex-col w-full bg-white justify-between items-center gap-1 lg:px-10 px-6 py-4 sticky top-0 z-50'>
      <div className='flex-row justify-between items-center'><h1 className='text-orange-400 md:text-4xl text-3xl font-bold font-rubik italic'>श्री
        <span className='text-yellow-500 italic'> Shivay Constructions</span></h1>
        <h4 className='text-black italic font-bold'>"Crafting Tomorrow's Foundations Today."</h4>
        </div>
      <ul className='lg:flex justify-center items-center gap-6 hidden'>
        {navItems.map(({ link, path }) => (
          <Link key={path} className='transform hover:scale-105 transition-transform duration-300 md:flex hiddentext-black uppercase font-bold cursor-pointer p-3 rounded-full
            hover:bg-yellow-500 hover:text-black text-[15px]' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
        ))}
      </ul>
      

      <div className='flex justify-center items-center lg:hidden mt-3' onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className='text-yellow-500 text-3xl cursor-pointer' /> :
            <FaBars className='text-yellow-500 text-3xl cursor-pointer' />}
        </div>
<div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-yellow-500 p-4 absolute top-[72px] left-0`} onClick={closeMenu}>
<ul className='flex flex-col justify-center items-center gap-2 w-full'>
  {navItems.map(({link, path}) => ( <Link key={path} className='text-black uppercase font-semibold cursor-pointer
  p-2 rounded-lg hover:bg-black hover:text-white w-full text-center' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>))}
</ul>
</div>

      </div>
    </nav>
  )
}

export default Header