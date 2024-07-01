"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Loading from "@/components/Loading";

const LoginPage = () => {

  const { data: session, status } = useSession()
  const router = useRouter()
  
  console.log("data:", session)
  console.log("status:", status)

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [status, router]);

  const handleLogin = () => {
    signIn('google');
  };

  if ( status === 'loading') {
    return (
      <div className="flex justify-center m-14">
        <Loading />
      </div>
    )
  }


  return (
    <div className="p-4 h-[700px] flex items-center justify-center">
      <div className=" h-full shadow-2xl rounded-2xl flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2 bg-white bg-opacity-50">
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/burger.svg" alt="" fill className="object-contain items-center justify-center"/>
        </div>

        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
          <p>Login into your account or create a new one using social buttons</p>

          <button className="flex gap-4 p-4 ring-1 ring-orange-200 rounded-md login-hover" onClick={handleLogin}>
            <FcGoogle size={30} />
            <span>Sign in with Google</span>
          </button>

          <button className="flex gap-4 p-4 ring-1 ring-blue-200 rounded-md">
            <Image
              src="/facebook.png"
              alt=""
              width={27}
              height={27}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>

          <p className="text-sm">
            Have a problem?<Link className="underline" href="/"> Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
