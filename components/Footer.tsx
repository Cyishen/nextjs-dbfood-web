import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#502314] w-full'>
      <div className="flex flex-col sm:flex-row gap-4 py-10 px-5 min-h-64 max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 mr-20">
          <p className='text-[#e8bb72] font-semibold text-xl'>About</p>
          <div className="text-white font-light">
            <p className='word-hover'>About us</p>
            <p className='word-hover'>Blog</p>
            <p className='word-hover'>Apps</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 mr-10">
          <p className='text-[#e8bb72] font-semibold text-xl'>Your Account</p>
          <div className="text-white font-light">
            <p className='word-hover'>Sign up</p>
            <p className='word-hover'>Log in</p>
            <p className='word-hover'>Help</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 mr-10">
          <p className='text-[#e8bb72] font-semibold text-xl'>Follow us</p>
          <div className="flex flex-row gap-3">
            <div className='img-hover'>
              <Image 
                src="/media/twitter.svg"
                alt="logo"
                width={30}
                height={30}
              />
            </div>
            <div className='img-hover'>
              <Image 
                src="/media/youtube.svg"
                alt="logo"
                width={30}
                height={30}
              />
            </div>
            <div className='img-hover'>
              <Image 
                src="/media/fb.svg"
                alt="logo"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='h-auto md:h-24 p-5 flex flex-col sm:flex-row sm:justify-between gap-3 max-w-7xl mx-auto'>
        <p className='font-bold text-[#e8bb72] text-xl'>
          Donut & Burger 
        </p>
        <p className='font-light text-[#e8bb72] text-lg'>
          &copy; 2023 Website | All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer