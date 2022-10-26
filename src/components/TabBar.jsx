import React from 'react';

import { links } from '../assets/constants';
import { NavLink } from 'react-router-dom';

const TabBar = ({ handleClick }) => {
  return (
    <div
      className={`flex justify-around items-center w-full h-16 bg-black fixed left-0 bottom-0 sm:hidden z-10`}
    >
      {links.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          className='flex  text-gray-400 hover:text-[#32c776]'
          onClick={() => handleClick && handleClick()}
        >
          <item.icon className='w-6 h-6' />
        </NavLink>
      ))}
    </div>
  );
};

export default TabBar;
