"use client"

import { useCartStore } from '@/utils/store'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'



const CartIcon = () => {

  useEffect(() => {
    useCartStore.persist.rehydrate()
  },[])

    const { totalItems } = useCartStore()

  return (
    <Link href="/cart" className="hidden md:block">
        <div className="relative text-xl mr-4 flex-row">
            <Image src="/food-cart.png" alt="cart-logo" width={35} height={35} className="hidden md:block"/>
            {totalItems === 0 ? "" : 
                <span className="absolute -bottom-2 left-6 bg-red-200 rounded-sm px-2 hidden md:block">
                  {totalItems}
                </span>
            }
        </div>
    </Link>
  )
}

export default CartIcon