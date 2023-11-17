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
        <div className="relative text-xl mr-4 flex-row bg-black opacity-50 rounded-full p-2">
            <Image src="/cart.svg" alt="cart-logo" width={35} height={35} className=""/>
            {totalItems === 0 ? "" : 
                <span className="absolute -bottom-1 left-9 bg-red-500 text-white text-sm px-2 rounded-sm">
                  {totalItems}
                </span>
            }
        </div>
    </Link>
  )
}

export default CartIconMobile