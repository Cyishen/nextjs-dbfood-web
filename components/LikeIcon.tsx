"use client"

import React, { useEffect } from 'react'
import { Heart } from 'lucide-react';
import { useLikeStore } from '@/utils/like';
import Link from 'next/link';

const LikeIcon = () => {
  useEffect(() => {
    useLikeStore.persist.rehydrate()
  },[])

    const { favorites } = useLikeStore()

  return (
    <Link href="/like" className='hidden md:flex items-center'>
      <Heart />
    </Link>
  )
}

export default LikeIcon