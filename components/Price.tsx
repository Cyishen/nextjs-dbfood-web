"use client"


import Image from "next/image";
import { Button } from "./ui/button";
import { combo, singleProduct } from "@/data";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { ProductType } from "@/types/types"
import { useCartStore } from "@/utils/store";

import { Heart } from 'lucide-react';
import { useLikeStore, LikeItemType } from "@/utils/like";


const Price = ({ product, liked }: {product: ProductType, liked: LikeItemType }) => {
    const [total, setTotal] = useState(product.price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    const router = useRouter();
    const { addToCart } = useCartStore();

    const handleCart = () => {
        addToCart({
        id: product.id,
        title: product.title,
        img: product.img,
        price: total,
        ...(product.options?.length && {optionTitle: product.options[selected].title}),
        quantity: quantity,
        })
        toast.success("The product add to cart")
    }

    const { addToFavorites } = useLikeStore();

    const handleLike = () => {
      if (liked) {
        addToFavorites({
          id: liked.id,
          title: liked.title,
          img: liked.img,
          price: liked.price,
        });
        toast.success("The product add to love")
      } else {
        console.error("Invalid 'liked' object:", liked);
      }
    }

    useEffect(() => {
        if (product.options?.length) {
        const additional = product.options[selected]?.additionalPrice ?? 0;
        setTotal(
            quantity * product.price + additional
        )
        } else {
        setTotal(quantity * product.price);
        }
    }, [quantity, selected, product]);

  return (
    <div className="flex flex-col gap-4">
        <div className="bg-gray-100 px-6 flex items-center gap-3">
            {product?.img ? (
                <Image src={product.img as string} alt="" width={60} height={60} />
            ) : null}
            <p className="font-bold">{product.title} x {quantity}</p>
        </div>

        {selected === 0 ?  "": 
        <>
            <div className="bg-gray-100 px-6 flex items-center gap-3">
                <Image src={combo.img as string} alt="" width={60} height={60} />
                <p className="font-bold">{combo.title} x 1 (套餐)</p>
            </div>
            <div className="bg-gray-100 px-6 flex items-center gap-3">
                <Image src={combo.img2 as string} alt="" width={60} height={60} />
                <p className="font-bold">{combo.title2} x 1 (套餐)</p>
            </div>
        </>}
        
        <h2 className="text-2xl font-bold">${total}</h2>
        <div className="flex gap-4">
            {product.options?.length && product.options?.map((option, index) => (
            <button
                key={option.title}
                className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
                style={{
                    background: selected === index ? "rgb(248 113 113)" : "white",
                    color: selected === index ? "white" : "red",
                }}
                onClick={() => setSelected(index)}
            >
                {option.title} + {option.additionalPrice}
            </button>
            ))}
        </div>

        {/* quantity option */}
        <div className="flex flex-col items-center">
            <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
                <span className="flex items-center">Quantity</span>
                <div className="flex gap-4 items-center">
                    <button
                        className="bg-gray-100 px-3 py-2 rounded-md"
                        onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                    >
                    {"-"}
                    </button>
                    <span>{quantity}</span>
                    <button
                        className="bg-gray-100 px-3 py-2 rounded-md"
                        onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
                    >
                    {"+"}
                    </button>
                </div>
            </div>

            <div className="flex justify-between w-full py-3 mb-5">
                <Button variant={"outline"} onClick={()=>router.back()}>
                    上一頁
                </Button>
                <Button variant={"destructive"} className="w-56" onClick={handleCart}>
                    加入購物車
                </Button>
                <Button variant="outline" onClick={handleLike}>
                    <Heart />
                </Button>
            </div>
        </div>
    </div>
  );
};

export default Price;