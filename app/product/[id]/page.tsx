"use client"

import { burgers, donuts } from "@/data";
import Link from "next/link";

import Price from "@/components/Price";
import Animate from "@/components/Animate";
import { Button } from "@/components/ui/button";

import { useParams } from "next/navigation";


const SingleProductPage = () => {

  const { id } = useParams();
  const product = findProductById(id as string);

  function findProductById(id: string) {
    let product = burgers.find((item) => item.id === id);
    if (!product) {
      product = donuts.find((item) => item.id === id);
    }
    return product;
  }

  return (
    <div className="relative">
      <div className="flex justify-start items-center max-w-7xl mx-auto mt-5 uppercase font-bold text-2xl px-4 gap-3">
        <Link href="/"><Button variant={"outline"} className="md:ml-[115px]">Menu</Button></Link>
      </div>

      <div className="p-4 md:px-24 lg:px-32 xl:px-40 max-w-[1280px] mx-auto h-auto flex flex-col justify-around md:flex-row md:gap-6 md:items-center mb-36 relative">
        {product?.img && (
          <div className="relative w-1/2 h-1/2 md:h-[60%] flex justify-center">
            <Animate src={product.img} />
          </div>
        )}

        <div className="w-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center p-4 bg-white bg-opacity-50">
          <h1 className="text-3xl font-bold xl:text-5xl">{product?.title}</h1>
          <p>{product?.desc}</p>

          {product && <Price product={product} />}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;

