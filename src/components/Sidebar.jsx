import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import logo from '../assets/logo.png';
import { links } from '../assets/constants';

const NavLinks = ({ handleClick }) => (
  <div className='mt-10'>
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className='relative bottom-12 flex flex-row justify-start items-center my-8 text-sm font-poppins font-medium text-gray-400 hover:text-[#32c776]'
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className='w-6 h-6 mr-2' />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className='md:flex hidden flex-col w-[240px] py-6 px-4 bg-black'>
        <img src={logo} alt='logo' className='w-full h-32 object-contain' />
        <NavLinks />
      </div>

      <div className='absolute invisible sm:visible md:hidden block top-6 right-3'>
        {mobileMenuOpen ? (
          <RiCloseLine
            className='w-6 h-6 text-white mr-2 cursor-pointer'
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className='w-6 h-6 text-white mr-2 cursor-pointer'
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-black to-[#272f46] backdrop-blur-lg z-50 p-6 md:hidden smooth-transition 
        ${mobileMenuOpen ? 'left-0' : '-left-full'}`}
      >
        <img src={logo} alt='logo' className='w-full h-14 object-contain' />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
