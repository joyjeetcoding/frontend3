import React from 'react'
import Retro from "../assets/Retro.jpg";
import Laptop from "../assets/Laptop.jpg";
import Gaming from "../assets/Gaming.jpg";

const Short = () => {
  return (
    <div className='max-w-5xl px-5 font-writing md:flex mx-auto md:justify-between md:pt-2'>
        {/* Reviving Retro PCs */}
        <div className='flex max-w-[22rem] md:max-w-[18rem] mt-10 py-5 md:mt-0 md:py-0 md:pt-5'>
            {/* pic */}
            <div>
                <img src={Retro} alt="/" />
            </div>
            {/* Paragraph */}
            <div className='ml-4'>
                <h1 className='text-4xl text-[#c5c6ce] font-bold md:text-2xl'>01</h1>
                <h2 className='font-extrabold py-2 text-lg md:text-sm text-[#00001a] cursor-pointer hover:text-[#e9ab53] duration-500'>Reviving Retro PCs</h2>
                <p className='py-2 md:py-0 md:pt-2 text-[#c5c6ce] text-base md:text-sm'>What happend when old PCs are given upgrades?</p>
            </div>
        </div>

        {/* Top 10 Laptops of 2022 */}
        <div className='flex max-w-[22rem] md:max-w-[18rem] py-5 md:py-0 md:pt-5'>
            {/* pic */}
            <div>
                <img src={Laptop} alt="/" className='' />
            </div>
            {/* Paragraph */}
            <div className='ml-2'>
                <h1 className='text-4xl text-[#c5c6ce] font-bold md:text-2xl'>02</h1>
                <h2 className='font-extrabold py-2 text-lg md:text-sm text-[#00001a] cursor-pointer hover:text-[#e9ab53] duration-500 '>Top 10 Laptops of 2022</h2>
                <p className='py-2 md:py-0 md:pt-0 text-[#c5c6ce] text-base md:text-sm'>Our best picks for various needs and budgets.</p>
            </div>
        </div>

        {/* The Growth of Gaming */}
        <div className='flex max-w-[22rem] md:max-w-[18rem] py-5 md:py-0 md:pt-5'>
            {/* pic */}
            <div>
                <img src={Gaming} alt="/" className='' />
            </div>
            {/* Paragraph */}
            <div className='ml-4'>
                <h1 className='text-4xl text-[#c5c6ce] font-bold md:text-2xl'>03</h1>
                <h2 className='font-extrabold py-2 text-lg md:text-sm text-[#00001a] cursor-pointer hover:text-[#e9ab53] duration-500'>The Growth of Gaming</h2>
                <p className='py-2 text-[#c5c6ce] text-base md:text-sm'>How the pandemic has sparked fresh opportunities?</p>
            </div>
        </div>
    </div>
  )
}

export default Short