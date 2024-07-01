"use client"

import { useLikeStore } from '@/utils/like'
import Image from 'next/image'
import React, { useEffect } from 'react'


const LikePage = () => {

  useEffect(() => {
    useLikeStore.persist.rehydrate()
  },[])

  const { favorites, removeFromFavorites } = useLikeStore()

  return (
    <div className='flex w-full h-[100vh]'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-auto mt-5 gap-5 bg-red-300'>
        {favorites.length === 0 ? (
          <h1 className='flex justify-center items-center h-[100px] font-bold capitalize bg-slate-300'>
              Add your favorites
          </h1>
          ) : (
          <>
            {favorites.map((item)=> (
              <div 
                className="w-[20vw] p-4 flex flex-col items-center mb-4 gap-5 bg-slate-50" 
                key={item.id}
              >
                  { item.img && (
                      <Image src={item.img} alt="" width={100} height={100} />
                  )}

                  <div className="font-bold hidden md:block">{item.price}</div>
          
                  <div className='flex flex-row gap-6'>
                      <h2 className="font-bold">${item.price}</h2>
                      <span className="bg-red-400 text-white px-2 rounded-md cursor-pointer" 
                          onClick={ ()=>removeFromFavorites(item) }
                      >X</span>
                  </div>
              </div>    
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default LikePage