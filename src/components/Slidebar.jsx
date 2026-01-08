import React, { useState, Link } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { IoChevronBackCircle } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { PiStepsFill } from "react-icons/pi";
import { MdDeveloperMode } from "react-icons/md";
import { GiInspiration } from "react-icons/gi";
import { MdContactMail } from "react-icons/md";
import { FaSchool } from "react-icons/fa6";
import { FaFileContract } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { MdAdd } from "react-icons/md";

const Logo = "/images/Logo.png";

function Slidebar () {
  const pathName = window.location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen((!isOpen));
  };

  const [openDrop, setDrop] = useState(false);
  const openDropdown = () => {
    setDrop((!openDrop))
  };

  return(
    <>
    <header className="sticky top-0 z-50">
      
      <nav className={"bg-transparent backdrop-blur-md shadow-lg shadow-emerald-200/10 border-b border-white/20 flex justify-between items-center h-20 px-4 " + (localStorage.getItem('token') && "xl:pr-40") }>
       <div className="max-w-[60px]">
        <a href="https://education.rajasthan.gov.in" className='z-20' target="_blank"><img className="max-w-full max-h-full" src={Logo} alt="" /></a>
      </div>
      <div className="flex justify-between hover:scale-105 transition-all duration-700 ease-in-out px-2 py-2 shrink-0">
        <a href="/" className='font-extrabold rounded-lg py-2 px-6 text-2xl text-green-900 z-20'>CODE <span className='text-yellow-600 font-extrabold'>चूरू</span></a>
      </div>
      {!isOpen && (
        <div onClick={openMenu} className="xl:hidden text-green-900 cursor-pointer">
          <TfiMenuAlt size={30} />
        </div>
      )}

      
      {isOpen ? (

        <div className="bg-green-800 overflow-y-hidden fixed z-10 top-16 left-0 w-[400px] xl:hidden lg:w-[500px] opacity-99 rounded-r-3xl h-[calc(100vh-4rem)] flex items-center flex-col gap-10 ease-in duration-700">
        <div className="w-full items-center flex flex-col">
          <h1 className="text-6xl font-serif font-bold mr-6 mt-5 mb-4">Menu</h1>
          <div className="w-full h-0.5 bg-green-100"></div>
        </div>
        <div className="absolute top-12 right-5">
          {isOpen && (
            <div onClick={openMenu} className="xl:hidden text-green-100 cursor-pointer z-20">
              <IoChevronBackCircle size={30} />
            </div>
          )}
        </div>
        <div className="flex justify-end items-center flex-col mt-10 gap-7 text-green-100">

          <div className="flex flex-col gap-7">
          <div className="max-w-fit">
            <a href="/home" className='relative text-2xl md:text-4xl font-serif font-semibold text-green-100 no-underline after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-green-100 after:transition-all after:duration-500 hover:after:w-full flex items-center'><span className="mr-2"><FaHome /></span> HOME</a>
          </div>
          <div className="max-w-fit">
            <a className='relative text-2xl md:text-4xl font-serif font-semibold text-green-100 no-underline after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-green-100 after:transition-all after:duration-500 hover:after:w-full flex items-center' href="/yourSchool"><span className="mr-2"><FaSchool /></span>ADMIN PANEL</a>
          </div>
          <div className="max-w-fit">
            <a className='relative text-2xl md:text-4xl font-serif font-semibold text-green-100 no-underline after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-green-100 after:transition-all after:duration-500 hover:after:w-full flex items-center' href="/schoolContribution"><span className="mr-2"><FaFileContract /></span> LEADERBOARD</a>
          </div>
          <div className="max-w-fit">
            <a className='relative text-2xl md:text-4xl font-serif font-semibold text-green-100 no-underline after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-green-100 after:transition-all after:duration-500 hover:after:w-full flex items-center' href="/initiatives"><span className="mr-2"><PiStepsFill /></span> INITIATIVES</a>
          </div>
          <div className="max-w-fit">
          <a className='relative text-2xl md:text-4xl font-serif font-semibold text-green-100 no-underline after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-green-100 after:transition-all after:duration-700 hover:after:w-full flex items-center' href="/inspiration"><span className="mr-2"><GiInspiration /></span> OUR INSPIRATION</a>
          </div>
          <div className="max-w-fit">
          <a className='relative text-2xl md:text-4xl font-serif font-semibold text-green-100 no-underline after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-green-100 after:transition-all after:duration-500 hover:after:w-full flex items-center' href="/developer"><span className="mr-2"><MdDeveloperMode /></span>DEVELOPERs</a>
          </div>
          <div className="max-w-fit">
          <a className='relative text-2xl md:text-4xl font-serif font-semibold text-green-100 no-underline after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-green-100 after:transition-all after:duration-500 hover:after:w-full flex items-center' href="/contact"><span className="mr-2"><MdContactMail /></span> CONTACT Us</a>
          </div>
          </div>
        </div>

          <div className="w-full items-center h-80 flex flex-col justify-end">
            <div className="bg-green-100 w-full h-0.5 mb-11"></div>
          <div className="max-w-fit rounded-lg text-green-100 animate-bounce cursor-pointer mt-3 mb-0 bg-green-500 py-3 px-7">
          <a className='text-2xl font-serif font-semibold flex items-center' href="/schoolRegister"><span className="mr-1"><MdAdd /></span> REGISTER</a>
          </div>
          </div>
      </div>

      ) : (
      <div className="bg-gray-800 overflow-y-hidden fixed z-10 top-16 left-[-150%] w-screen h-[calc(100vh-4rem)] flex items-center justify-center flex-col gap-10 ease-in duration-700"></div>
    )}

      {isOpen && (
            <div onClick={openMenu} className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] z-5">
            </div>
          )}

          {isOpen && (
            <div onClick={openMenu} className="xl:hidden text-green-900 cursor-pointer z-20">
              <IoClose size={35} />
            </div>
          )}

      
      <div className="hidden xl:flex gap-4 justify-center items-center h-full">
        <a href="/home" className='group flex items-center px-6 py-3 text-lg font-semibold text-emerald-800 transition-all duration-300 bg-black/5 backdrop-blur-md border border-white/40 rounded-xl shadow-md hover:bg-white/20 hover:text-emerald-950 hover:scale-105 hover:shadow-lg hover:shadow-emerald-300/50 transform'><span className="mr-2 text-emerald-700 transition-transform duration-300 group-hover:scale-110"><FaHome /></span> HOME</a>
       {pathName !== '/' && <a className='group flex items-center px-6 py-3 text-lg font-semibold text-emerald-800 transition-all duration-300 bg-black/5 backdrop-blur-md border border-white/40 rounded-xl shadow-md hover:bg-white/20 hover:text-emerald-950 hover:scale-105 hover:shadow-lg hover:shadow-emerald-300/50 transform' href="/yourSchool"><span className="mr-2 text-emerald-700 transition-transform duration-300 group-hover:scale-110"><FaSchool /></span>ADMIN PANEL</a> }
        <a className='group flex items-center px-6 py-3 text-lg font-semibold text-emerald-800 transition-all duration-300 bg-black/5 backdrop-blur-md border border-white/40 rounded-xl shadow-md hover:bg-white/20 hover:text-emerald-950 hover:scale-105 hover:shadow-lg hover:shadow-emerald-300/50 transform' href="/schoolContribution"><span className="mr-2 text-emerald-700 transition-transform duration-300 group-hover:scale-110"><FaFileContract /></span> LEADERBOARD</a>

        <div className="relative group">
          <div onClick={openDropdown} className='group flex items-center px-6 py-3 text-lg font-semibold text-emerald-800 transition-all duration-300 bg-black/5 backdrop-blur-md border border-white/40 rounded-xl shadow-md hover:bg-white/20 hover:text-emerald-950 hover:scale-105 hover:shadow-lg hover:shadow-emerald-300/50 transform cursor-pointer'>
            <h1 className="text-emerald-800">CONTEXT</h1>
            {openDrop ? <RiArrowDropUpLine size={30} className="text-emerald-800" /> : <RiArrowDropDownLine size={30} className="text-emerald-800" />}
          </div>
        </div>

        {!localStorage.getItem('token') && <div className="flex items-center justify-center pl-6">
          <div className="border-l-2 h-8 border-emerald-300/60"></div>
          <a href="/schoolRegister" className="ml-8 group flex items-center px-8 py-3 text-base font-bold tracking-wide text-green-800 transition-all duration-300 rounded-md border border-green-400 shadow-lg hover:shadow-xl hover:shadow-emerald-400/30 hover:scale-105 transform">
            <span className="mr-2 transition-transform duration-300 group-hover:scale-110"><MdAdd /></span> REGISTER
          </a>
        </div>}
      </div>

    </nav>
  </header>

  
  {openDrop && (
    <div className="fixed top-20 right-0 -translate-x-1/2 w-80 z-99999 rounded-3xl border border-white/30 shadow-2xl backdrop-blur-md bg-emerald-50/5">
      <div className="p-2">
        <div className="flex flex-col gap-1">
          <a className='group/item flex items-center gap-4 rounded-2xl px-4 py-3 text-lg font-semibold transition-all duration-300 hover:bg-emerald-500/20 hover:shadow-inner' href="/inspiration">
            <span className="rounded-lg bg-yellow-500/10 p-3 text-yellow-400 ring-1 ring-yellow-400/20 transition-all duration-300 group-hover/item:bg-yellow-500/20 group-hover/item:text-yellow-500 group-hover/item:scale-110"><GiInspiration size={24} /></span>
            <span className="transition-transform duration-300 text-green-800 group-hover/item:translate-x-1 ">OUR INSPIRATION</span>
          </a>
          <a className='group/item flex items-center gap-4 rounded-2xl px-4 py-3 text-lg font-semibold transition-all duration-300 hover:bg-emerald-500/20 hover:shadow-inner' href="/initiatives">
            <span className="rounded-lg bg-emerald-500/10 p-3 text-emerald-400 ring-1 ring-emerald-400/20 transition-all duration-300 group-hover/item:bg-emerald-500/20 group-hover/item:text-emerald-500 group-hover/item:scale-110"><PiStepsFill size={24} /></span>
            <span className="transition-transform duration-300 text-green-800 group-hover/item:translate-x-1 ">INITIATIVES</span>
          </a>
          <a className='group/item flex items-center gap-4 rounded-2xl px-4 py-3 text-lg font-semibold transition-all duration-300 hover:bg-emerald-500/20 hover:shadow-inner' href="/developer">
            <span className="rounded-lg bg-gray-500/10 p-3 text-gray-400 ring-1 ring-gray-400/20 transition-all duration-300 group-hover/item:bg-gray-500/20 group-hover/item:text-gray-500 group-hover/item:scale-110"><MdDeveloperMode size={24} /></span>
            <span className="transition-transform duration-300  text-green-800 group-hover/item:translate-x-1 ">DEVELOPERs</span>
          </a>
        </div>
      </div>
    </div>
  )}
  </>
)
};

export default Slidebar;