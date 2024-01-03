import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const rowOneImages = [
  {
    url: "/burgers/b1.png",
  },
  {
    url: "/burgers/b2.png",
  },
  {
    url: "/burgers/b3.png",
  },
  {
    url: "/burgers/b4.png",
  },
  {
    url: "/donuts/d1.png",
  },
  {
    url: "/donuts/d2.png",
  },
  {
    url: "/donuts/d3.png",
  },
  {
    url: "/donuts/d4.png",
  },
  {
    url: "/donuts/d5.png",
  },
  {
    url: "/donuts/d6.png",
  },
]

const Slide = () => {
  return (
    <div className='w-full flex items-center justify-center mb-10 md:mb-20'>
      <div className='relative sm:px-4'>
        <div className="flex items-center justify-center max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-red-500 px-4 sm:px-0">NEW Coming</h1>
          <Image src="/hot.svg" alt='hot' width={50} height={50}/>
        </div>
        <div className='mt-10'>
          <Marquee>
            {rowOneImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="w-[200px] m-2 md:w-[300px] rounded-[20px]"
                  width={500}
                  height={300}
                />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default Slide