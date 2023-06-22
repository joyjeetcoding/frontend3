import React from 'react'
import  Mobile from "../assets/Mobile.jpg";
import  Desktop from "../assets/Desktop.jpg";

const Hero = () => {
  return (
    <div className='main-container max-w-5xl flex flex-col md:flex-row px-5 mx-auto'>
        {/* Image and heading sections */}
        <div className=''>
          <picture>
            <img src={Mobile} alt="/" className='w-full md:hidden' />
            <img src={Desktop} alt="/" className='hidden md:block w-[38rem]' />
          </picture>
          {/* Big heading section */}
          <div className='max-w-[23rem] md:flex md:max-w-[40rem] justify-between'>
            <h1 className='text-5xl font-extrabold font-writing my-5 md:my-0 md:mt-5 md:w-[20rem]'>
              The Bright Future of Web 3.0?
            </h1>
          {/* paragraph section */}
            <div className='pb-5 mb-5 md:pb-0 md:mb-0 max-w-[22rem] mt-4 '>
              <p className='font-writing '>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <button className='font-writing font-bold py-3 p-2 mt-5 px-8 uppercase tracking-[0.5em] bg-[#f15e50] text-white text-xs hover:bg-[#00001a] duration-500'>Read More</button>
            </div>
          </div>
        </div>

        {/* Black Box section */}
        <div className='font-writing px-5 py-6 md:py-5 bg-[#00001a] max-w-[22rem] md:w-[22rem]'>
          <h1 className='text-3xl font-bold text-[#e9ab53]'>New</h1>
          <div className=' py-6 md:py-5 border-b border-b-[#c5c6ce]'>
            <h2 className='text-xl font-bold text-white hover:text-[#e9ab53] duration-500 cursor-pointer'>Hydrogen VS Electric Cars</h2>
            <p className='text-sm max-w-[19rem] text-[#c5c6ce] mt-2'>Will the hydrogen-fueled cars ever catch up to EVs?</p>
            
          </div>
          <div className=' py-6 md:py-5 border-b border-b-[#c5c6ce]'>
            <h2 className='text-xl font-bold text-white hover:text-[#e9ab53] duration-500 cursor-pointer'>The Downsides of AI Artistry</h2>
            <p className='text-sm max-w-[18rem] text-[#c5c6ce] mt-2'>What are the possible adverse effects of on-demand AI image generation?</p>
            
          </div>
          <div className='py-3 md:py-0 md:pt-5'>
            <h2 className='text-xl font-bold text-white hover:text-[#e9ab53] duration-500 cursor-pointer'>Is VC Funding Drying Up?</h2>
            <p className='text-sm max-w-[18rem] text-[#c5c6ce] mt-2'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </div>
    </div>
  )
}

export default Hero