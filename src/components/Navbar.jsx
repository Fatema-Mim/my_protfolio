import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]/95 backdrop-blur-sm text-gray-300 z-50 border-b border-cyan-500/10'>
      <div>
        <p className='text-5xl font-bold text-transparent text-cyan-500 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text'>Mim</p>
      </div>

      {/* menu */}
      <ul className='hidden gap-2 md:flex'>
        <li className='transition-colors duration-300 hover:text-cyan-500'>
          <Link to='home' smooth={true} duration={500} className='px-4 py-2 rounded-lg hover:bg-cyan-500/10'>
            Home
          </Link>
        </li>
        <li className='transition-colors duration-300 hover:text-cyan-500'>
          <Link to='about' smooth={true} duration={500} className='px-4 py-2 rounded-lg hover:bg-cyan-500/10'>
            About
          </Link>
        </li>
        <li className='transition-colors duration-300 hover:text-cyan-500'>
          <Link to='skills' smooth={true} duration={500} className='px-4 py-2 rounded-lg hover:bg-cyan-500/10'>
            Skills
          </Link>
        </li>
        <li className='transition-colors duration-300 hover:text-cyan-500'>
          <Link to='experience' smooth={true} duration={500} className='px-4 py-2 rounded-lg hover:bg-cyan-500/10'>
            Experience
          </Link>
        </li>
        <li className='transition-colors duration-300 hover:text-cyan-500'>
          <Link to='work' smooth={true} duration={500} className='px-4 py-2 rounded-lg hover:bg-cyan-500/10'>
            Work
          </Link>
        </li>
        <li className='transition-colors duration-300 hover:text-cyan-500'>
          <Link to='contact' smooth={true} duration={500} className='px-4 py-2 rounded-lg hover:bg-cyan-500/10'>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='z-10 transition-colors cursor-pointer md:hidden hover:text-cyan-500'>
        {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] flex flex-col justify-center items-center backdrop-blur-sm'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='experience' smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;