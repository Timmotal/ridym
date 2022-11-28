import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from "react-icons/hi";

import { logo } from '../assets';
import { links } from "../assets/constants";

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => ( 
      <NavLink 
      key={item.name}
      to={item.to}
      className="flex flex-row justify-start my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
      // if handleClick exists only then call handle click, where is handleClick though?
      onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2"/>
        {item.name}
     
    ))}
  </div>
)





