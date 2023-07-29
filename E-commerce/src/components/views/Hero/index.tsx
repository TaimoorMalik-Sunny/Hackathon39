import {brand1, brand2,brand3,brand4, heroGirlsimg } from '@/components/assets'
import Image from 'next/image'
import React from 'react'
import { BsCart2 } from 'react-icons/bs'

export const Hero = () => {
    const textbtn = "Start Shoping"
  return (
    <div className="flex justify-between items-center mt-10">
        {/*Right Side */}
        <div className=" space-y-6 max-w-sm">
        <button 
        aria-label="redirect the user to sale page "
        className=" rounded-md bg-primarywhite text-purple-800 font-semibold py-2 px-4">
             Sale 70 %
             </button>
        <h1 className=" text-4xl  md:text-6xl font-bold">An Industrial Take on Streetwear</h1>
        <p className="text-gray-700">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
        <button
        aria-label="redirect the user to shopping page "
        className=" flex gap-1 items-center rounded-sm ring-1 ring-slate-800  bg-gray-900 text-white px-7 py-3 font-semibold">
            <BsCart2 size={26}/>
             <p className=" whitespace-pre leading-5">
                {textbtn}
             </p>
        </button>
        <div className="flex gap-x-10 gap-y-5 flex-wrap">
            <div className="w-14  md:w-28">
            <Image src={brand1} alt='brand1'/>
            </div>
             <div className="w-14  md:w-28">
            <Image src={brand2} alt='brand2'/>
            </div>
            {/*thie is use for sanity */}
             <div className="w-14  md:w-28">
            <Image width={90} height={90} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured3.6076521d.png&w=256&q=75"} alt='brand3'/>
             </div>
             <div className="w-14  md:w-28">
            <Image width={90} height={90}  src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured4.0489f1fc.png&w=256&q=75"} alt='brand4'/>
            </div>
        </div>
            
        </div>
        {/*Left Side */}
        <div className="hidden  md:flex flex-shrink-0  bg-primarywhite  rounded-full w-96 h-96">
        <Image src={heroGirlsimg} alt='girlimg'/>
        </div>


    </div>
  )
}

export default Hero
