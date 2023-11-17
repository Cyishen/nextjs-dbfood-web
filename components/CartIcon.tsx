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
            <Image src="/cart.svg" alt="cart-logo" width={40} height={40} className="hidden md:block"/>
            {totalItems === 0 ? "" : 
                <span className="absolute -bottom-0 left-8 bg-red-500 text-white px-2 hidden md:block text-sm rounded-sm">
                  {totalItems}
                </span>
            }
        </div>
    </Link>
  )
}

export default CartIcon