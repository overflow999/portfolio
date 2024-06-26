"use client"
import {Bars3Icon,XMarkIcon} from "@heroicons/react/24/solid";
import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'
import NavLink from './NavLink'
import MenuOverlay from "./MenuOverlay";
import logo from '../../public/logo2.png'

    
  
const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];
export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
   <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
    <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link href={"/"}> 
        <Image src={logo} alt="Logo"   className='rounded-full w-20 h-20'/> 
        </Link>
        <div className='mobile-menu block md:hidden'>
            {
                !navbarOpen ? (
                    <button onClick={()=>setNavbarOpen(true)} className="flex text-slate-200 border-slate-200 px-3 py-2 border rounded hover:text-white hover:border-white">
                        <Bars3Icon className="h-5 w-5" />
                    </button>
                ):(
                    <button onClick={()=>setNavbarOpen(false)} className="flex text-slate-200 border-slate-200 px-3 py-2 border rounded hover:text-white hover:border-white">
                          <XMarkIcon className="h-5 w-5" />
                    </button>
                )
            }
        </div>
        <div className='menu hidden md:block md:w-auto' id="navbar">
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            
               {navLinks.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title}/>
                </li>
  
               ))
               }
               
            </ul>
        </div>
    </div>
    {navbarOpen? <MenuOverlay links={navLinks}/>:null}
   </nav>
  )
}
