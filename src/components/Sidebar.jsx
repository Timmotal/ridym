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
      </NavLink>
    ))}
  </div>
)


const Sidebar = () => {
  
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);

  return (
    <>
    
    <div className="md:flex hidden flex-col w-[240px] py-4 px-4 bg-[#191624]">
      <img src={logo} alt="logo" className="w-full h14 object-contain" />
      <NavLinks />
    </div>

     {/* on medium devices and upwards, thats what md:hidden implies tutor says, indeed. */}
     {/* an icon just to open the menu */}
     <div className="absolute md:hidden block top-6 right-3">
      {/* why is  RiCloseLine In Curly () Braces and Not HiOutLineMenu */}
      { mobileMenuOpen ? ( 
      <RiCloseLine className="w-6 h-6 text-white mr-2"  /> 
      ) : 
      
      }
     </div>

      {/* here is a static class the next class is a dynamic class */}
     {/* <div className="md:flex hidden flex-col w-[240px] py-4 px-4 bg-[#191624]"> */}
    
    </>
  );
    // <div>Sidebar</div>
};


