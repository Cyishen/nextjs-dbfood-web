"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link";
// import { useSession } from "next-auth/react";


import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"

const links = [
  { id: 1, title: "Burgers", url: "/menu/burgers" },
  { id: 2, title: "Donuts", url: "/menu/donuts" },
  { id: 3, title: "Cart", url: "/cart" },
];

const MobileSidebar = () => {

  // const { data: session, status} = useSession();

  return (
    <Sheet>
        <SheetTrigger className='md:hidden pr-4'>
          <Menu />
        </SheetTrigger>

        <SheetContent side='right' className='p-0'>
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold p-5 flex justify-center">Menu</SheetTitle>
          </SheetHeader>
            {links.map( (item)=> (
              <Link href={item.url} key={item.id}>
                <div className="flex flex-col text-2xl font-bold px-5 mb-3 py-3 cursor-pointer hover:text-red-300">
                  {item.title}
                </div>
              </Link>
            ))}

            {/* {session?.user.isAdmin ? (
              <Link href="/add">
                <div className="text-2xl font-bold px-5 mb-3 py-3 flex justify-center">Add item</div>
              </Link>
            ) : (
              ""
            )} */}
        </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar