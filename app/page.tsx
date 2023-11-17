import CartIconMobile from "@/components/CartIcon-Mobile"
import Event from "@/components/Event"
import Menu from "@/components/Menu"
import React from 'react'


export default function Home() {
  return (
    <main>
      <Menu />
      {/* <Event /> */}
      <div className="cart-icon block md:hidden">
        <CartIconMobile />
      </div>
    </main>
  )
}
