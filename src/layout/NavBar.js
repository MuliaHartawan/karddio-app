import React from "react";
import { NavLink } from 'react-router-dom';

import ProgressIdb from "../data/progress-idb";

import { AiOutlineMenu, AiOutlineClose, AiFillHome } from 'react-icons/ai';
import { GiProgression } from 'react-icons/gi';
import { VscAccount } from 'react-icons/vsc';
import { HiOutlineLogout } from 'react-icons/hi';

const navs = [{
    path : '/',
    icon : <AiFillHome className="text-white text-2xl lg:text-3xl" />,
    name : 'Home'
},
{
    path : '/progress',
    icon : <GiProgression className="text-white text-2xl lg:text-3xl" />,
    name : 'Progress'
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
            <NavLink end to="/home" className="text-sm font-bold flex items-center leading-relaxed inline-block whitespace-nowrap uppercase text-white"
                >
                <img
                  src="./image/logo.jpg" alt=""
                  className="w-10 h-20 md:w-12 md:h-24 lg:w-16 llg:h-32" ></img>
            </NavLink>
          </div>
            <div className="flex flex-row items-center justify-between " >
                <NavLink end to="/profile"  className="flex flex-row hidden md:flex" >
                      <img src="./image/image-profile.jpg" alt=""
                          className="w-8 h-8 rounded-full object-cover mr-2 md:w-12 md:h-12 lg:w-16 lg:h-16" ></img>
                      <p className="flex items-center lg:text-lg" >Nama Orang</p>
                </NavLink>
                <button
                  className="text-white ml-16 cursor-pointer text-xl leading-none px-2 py-1 md:px-3 md:py-2 my-4 rounded bg-green-400 block outline-none focus:outline-none"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <AiOutlineMenu className="lg:w-8 lg:h-8"/>
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
                <NavLink end to={navItem.path} onClick={() => setNavbarOpen(!navbarOpen)}
                className={({ isActive }) => "flex flex-col items-center justify-center" + (isActive ? " activated" : "")}>
                    {navItem.icon}
                    <span className="text-white font-normal">{navItem.name}</span>
                </NavLink>
            </li>
            ))}
              <li className="nav-item">
                <NavLink end to="/login" onClick={()=> ProgressIdb.deleteToken()}
                className="flex flex flex-col justify-center items-center"
                  >
                      <HiOutlineLogout className="text-white text-2xl lg:text-3xl" />
                      <span className="text-white font-normal">Logout</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
}