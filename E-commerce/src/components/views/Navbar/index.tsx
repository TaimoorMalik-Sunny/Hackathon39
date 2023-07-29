"use client"
import { NavbarArray , NavbarItemtypes } from '@/components/utils/NavbarArrayAndTypes'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsCart2} from 'react-icons/bs'
import {HiOutlineChevronDown} from 'react-icons/hi'
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoMdClose} from 'react-icons/io'

import Dropdown from './Subcomponents/Dropdown'
import Expand from './Subcomponents/Expand'

 const index = () => {
  const [isNavbarOpen , setNavbarOpen] = useState<boolean>(false);
  const [cartItemNumber , setcartItemNumber] = useState<number>(2);
  return (
    <div className="sticky top-0 bg-white z-50">
    <div className="  flex py-6 justify-between items-center space-x-12">
        <div className="w-36 flex-shrink-0">
            
            <Image width={500} height={500} src={"/Logo.webp"} alt="logo" />
        </div>
        <div className="hidden lg:flex justify-between items-center w-full ">
        <ul className="flex flex-shrink-0 relative gap-x-4 font-medium text-lg text-purple-950">
          {NavbarArray.map((item:NavbarItemtypes, index:number)=>(
            <li className="flex items-center  rounded-md px-3 py-1 hover:bg-gray-100 cursor-pointer group">
              <Link  href={item.href} >{item.label}</Link>
              { item.isDropDown? <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={15}/>:""}
              {item.isDropDown && <div className={` invisible group-hover:visible  absolute top-10 py-2 px-6 bg-gray-100 text-sm font-light min-w-[6rem]`}>
            <Dropdown item = {item}/>
              </div>}
            </li>))}
        </ul>
        <div className="border flex items-center text-gray-600 px-3 rounded-md " >
          <BiSearch />
          <input 
          type="text" 
          className=" focus:outline-none pl-1 pr-5 py-1 w-72"
          placeholder="Search in our store "/>
        </div>
        <div className=" flex-shrink-0 relative w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
          <div className="absolute right-2 flex items-center justify-center top-1 w-3 h-3 rounded-full bg-red-400 text-xs font-light">
            {cartItemNumber}
          </div>
          <BsCart2 size={25} />
        </div>
        </div>
         <div onClick={()=>setNavbarOpen(!isNavbarOpen)}>
         {isNavbarOpen?
          <div className="flex lg:hidden">
            <IoMdClose size={28}/>
          </div>
          :
          <div className="flex lg:hidden">
          <RxHamburgerMenu size={25}/>
          </div>}
          </div>
      
    </div>
    <div className=" lg:hidden ">
      {isNavbarOpen  &&<MobileNavbar/>}
      </div>
  
    </div>
  )
}
export default index


const MobileNavbar = () => {
   const[isExpended, setExpended] =  useState<boolean>(false);
    
  return (
    
         
    <div className="w-full px-4 py-4 bg-gray-100">
        {
            NavbarArray.map((item:NavbarItemtypes , index:number)=>{
                return(
                    <Expand key={index} item={item}/>
                )
            })
        }
    </div>
          
   
    
  )
}