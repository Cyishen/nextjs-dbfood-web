import CartIconMobile from "@/components/CartIcon-Mobile"
import Menu from "@/components/Menu"
import Slide from "@/components/Slide"
import React from 'react'

export default function Home() {
  return (
    <main>
      <Menu />
      <Slide />
      <div className="cart-icon block md:hidden">
        <CartIconMobile />
      </div>
    </main>
  )
}
