import { NavbarItemtypes } from '@/components/utils/NavbarArrayAndTypes'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi';

 const Expand:FC<{item:NavbarItemtypes}> = ({item}) => {
  const [isExpended , setExpended] = useState<boolean>(false);
   const [isTimeout , setTimeOut] = useState<boolean>(false);

   function handleExpand(){
    setExpended(!isExpended)
    setTimeout(()=>{
        setTimeOut(!isTimeout);
    },100);
  }
  return (
    <div>
    <li  className={` ${isExpended?" h-40":"h-12"} duration-300 list-none   border`}>
                    <div onClick={handleExpand} className="flex items-center justify-between  py-2 px-3  hover:bg-purple-300 duration-300 rounded-md">
                    <Link href={item.href}> {item.label}</Link>
                    {item.isDropDown? <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={15}/>:"" }
                    </div>
                    <div className="flex flex-col space-y-1 mt-2">
                        { isTimeout &&
                            item.dropDownData?.map((subitem:NavbarItemtypes)=>(
                                 <Link className=" hover:bg-gray-50 duration-300 px-10 " href={
                                  subitem.href}>{subitem.label}
                                  </Link>
                                
                            ))
                        }

                    </div>
                    </li>
    </div>
  )
}

export default Expand
