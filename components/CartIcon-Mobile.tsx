"use client"

import { useCartStore } from '@/utils/store'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'



const CartIconMobile = () => {

  useEffect(() => {
    useCartStore.persist.rehydrate()
  },[])

    const { totalItems } = useCartStore()

  return (
    <Link href="/cart" className="">
        <div className="relative text-xl mr-4 flex-row bg-white opacity-50 rounded-full p-2">
            <Image src="/food-cart.png" alt="cart-logo" width={35} height={35} className=""/>
            {totalItems === 0 ? "" : 
                <span className="absolute -bottom-2 left-6 bg-red-200 rounded-full px-2">
                  {totalItems}
                </span>
            }
        </div>
    </Link>
  )
}

export default CartIconMobile