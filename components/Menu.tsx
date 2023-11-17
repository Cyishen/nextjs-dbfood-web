import React from 'react'
import { menu } from '@/data'
import Link from 'next/link'
import { Button } from './ui/button'
import { ChevronsDown } from 'lucide-react'

const Menu = () => {
  return (
    <section className="py-10 max-w-[1533px] mx-auto">
      <div className="lg:px-20 xl:px-40 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">
          The Best<br />
          <span className="burger-gradient">Burger</span> 
          {" "}&{" "} 
          <span className="donut-gradient">Donut</span>
        </h1>
        <p className="max-w-xs mx-auto text-gray-500 mt-3">
          Each bite is a perfect <br/ > combination of fresh, quality ingredients
        </p>
        <Button className='mt-4 font-semibold' variant="destructive">
          Order Now<ChevronsDown />
        </Button>
      </div>
      <div className="pl-4 sm:pr-4 py-4 lg:px-20 xl:px-40 flex flex-col md:flex-row items-center justify-center gap-4">
          {menu.map((category) => (
          <Link
              href={`/menu/${category.slug}`}
              key={category.id}
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[420px] bg-cover p-2 md:p-8 transform scale-100 transition-transform hover:scale-90"
              style={{ backgroundImage: `url(${category.img})` }}
          >
              <div className={`text-${category.color} w-1/2`}>
                <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
                <p className="text-sm my-2">{category.desc}</p>
                <button className={`hidden md:block bg-blue-400 text-${category.color === "black" ? "black" : "white"} py-2 px-4 rounded-md mb-1`}>Explore</button>
              </div>
          </Link>
          ))}
      </div>
    </section>
  )
}

export default Menu