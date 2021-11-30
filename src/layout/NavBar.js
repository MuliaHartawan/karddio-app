import React from "react";
import { NavLink } from 'react-router-dom';

import { AiOutlineMenu, AiOutlineClose, AiFillHome } from 'react-icons/ai';
import { BiDumbbell } from 'react-icons/bi';
import { FaTrophy } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import { HiOutlineLogout } from 'react-icons/hi';

const navs = [{
    path : '/',
    icon : <AiFillHome className="text-white text-2xl lg:text-3xl" />,
    name : 'Home'
},
{
    path : '/workout',
    icon : <BiDumbbell className="text-white text-2xl lg:text-3xl" />,
    name : 'Workout'
},
{
    path : '/achievement',
    icon : <FaTrophy className="text-white text-2xl lg:text-3xl" />,
    name : 'Achievement'
},
{
    path : '/profile',
    icon : <VscAccount className="text-white text-3xl" />,
    name : 'Profile'
},
]


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
      <header className="relative flex flex-wrap items-center justify-between px-4 mb-3 md:px-24">
        <div className="container flex flex-row items-center justify-between">
          <div className=" relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold flex items-center leading-relaxed inline-block whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              <img 
                src="./image/logo.jpg" alt=""
                className="w-10 h-20 md:w-12 md:h-24 lg:w-16 llg:h-32" ></img>
            </a>
          </div>
            <div className="flex flex-row items-center justify-between" >
                <a href="tes" className="flex flex-row mr-16 hidden md:flex" >
                    <img src="./image/image-profile.jpg" alt=""
                        className="w-8 h-8 rounded-full object-cover mr-2 md:w-12 md:h-12" ></img>
                    <p className="flex items-center" >Nama Orang</p>
                </a>
                <button
                  className="text-white  cursor-pointer text-xl leading-none px-2 py-1 md:px-3 md:py-2 my-4 rounded bg-green-400 block outline-none focus:outline-none"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <AiOutlineMenu />
                </button>
            </div>
          <nav
            className={
              "absolute z-10 h-screen w-screen right-0 top-0 flex flex-grow justify-center items-center bg-green-400 md:w-40" +
              (navbarOpen ? "" : " hidden")
            }
          >
            <ul className="inline-block flex flex-col list-none space-y-8">
                <li className="flex flex-row items-center justify-center" >
                    <button
                    className="text-white cursor-pointer text-sm leading-none px-2 py-1 outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                    <AiOutlineClose className="text-2xl lg:text-3xl" />
                    </button>
                </li>
                {navs.map((navItem) => (
            <li>
                <NavLink end to={navItem.path}
                className={({ isActive }) => "flex flex-col items-center justify-center" + (isActive ? " activated" : "")}>
                    {navItem.icon}
                    <span className="text-white font-normal">{navItem.name}</span>
                </NavLink>
            </li>
            ))}
              <li className="nav-item">
                <a
                  className="flex flex flex-col justify-center items-center"
                  href="#pablo"
                >
                    <HiOutlineLogout className="text-white text-2xl lg:text-3xl" />
                    <span className="text-white font-normal">Logout</span></a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
}