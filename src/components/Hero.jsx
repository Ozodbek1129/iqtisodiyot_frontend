import Image from 'next/image'
import React from 'react'
import HeroImg from "@/images/Media.png"
export default function Hero() {
  return (
    <div className='my-10 felx flex-col'>
      <div className='text-center pl-16'>
        <h2 className='text-[85px] max-w-[1500px]'>Toshkent Iqtisodiyot va Pedagogika Instituti</h2>
      </div>
      <div className='flex justify-center'>
        <button className='bg-nav_bg py-3 px-10 text-white'>Contact us</button>
        <button className='py-3 px-10'>Contact us</button>
      </div>
        <div className='flex justify-center my-10 h-[500px] object-contain'>
        <Image src={HeroImg} alt='hero'/>
        </div>
    </div>
  )
}
