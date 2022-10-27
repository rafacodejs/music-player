import React from 'react';
import { useState } from 'react';
import { links } from '../assets/constants';
import { NavLink } from 'react-router-dom';

const TabBar = () => {
  const [active, setActive] = useState('Discover');
  return (
    <div
      className={`flex justify-around items-center w-full h-16 bg-black fixed left-0 bottom-0 sm:hidden z-10`}
    >
      {links.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          className={`flex flex-col justify-center items-center font-primary font-medium cursor-pointer ${
            active === item.name ? 'text-[#32c776]' : 'text-white'
          } 
          
          `}
          onClick={() => setActive(item.name)}
        >
          <item.icon className='w-6 h-6' />
          <div className='text-white text-[10px] font-poppins font-normal mt-1'>{item.name}</div>
        </NavLink>
      ))}
    </div>
  );
};

export default TabBar;
