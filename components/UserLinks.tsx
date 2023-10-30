'use client'

import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"

const UserLinks = () => {

  const { data: session, status} = useSession();

  return (
    <div className="flex flex-row gap-3">
        {status === 'authenticated' ? (
          <div className="flex flex-row gap-3">
            {/* <Link href="/orders">
              <Button variant="outline" className="hidden md:block rounded-full">Order</Button>
            </Link> */}

            <Button
                variant="outline"
                className="cursor-pointer hidden md:block rounded-full "
                onClick={()=>signOut()}
            >
                SignOut
            </Button>
            <Image src={session.user?.image || ''}  alt="user" width={40} height={40} className="rounded-full flex items-center" ></Image>
          </div>
        ) : (
          <Link href="/login">
            <Button className="hidden md:block">
              Login
            </Button>
          </Link>
        )} 

        {/* {session?.user.isAdmin ? (
          <Link href="/add">
            <Button className="hidden md:block rounded-full">Add</Button>
          </Link>
        ) : (
          ""
        )} */}
    </div>
  )
}

export default UserLinks