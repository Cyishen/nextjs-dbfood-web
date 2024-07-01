import { Button } from "@/components/ui/button";
import { burgers, donuts } from "@/data";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { category: string},
}

const CategoryPage = ({ params }: Props) => {

  const mergedProducts = [
    ...burgers.map((product) => ({ ...product, category: "burgers" })),
    ...donuts.map((product) => ({ ...product, category: "donuts" })),
  ]

  const products = mergedProducts.filter((product) => product.category === params.category);
  // console.log('目前頁面有的商品：',products)

  return (
    <>
      <div className="flex justify-start items-center max-w-7xl mx-auto mt-5 uppercase font-bold text-2xl px-4 gap-3">
        {params.category}
        <Link href="/"><Button variant={"outline"}>Menu</Button></Link>
      </div>
      
      <div className="flex flex-wrap max-w-7xl mx-auto mt-5">
        {products.map((item) => (
          <div 
            key={item.id}
            className="h-[40vh] w-1/2 lg:w-1/3 p-4 flex flex-col group"
          >
            {item.img ? ( 
              <Link href={`/product/${item.id}`} className="relative h-[80%]">
                <Image src={item.img} alt="" fill className="object-contain transform scale-100 transition-transform hover:scale-110"/>
              </Link>
            ) : (
              <Link href={`/product/${item.id}`} className="h-[80%] flex items-center justify-center"> 
                <Image src="https://fakeimg.pl/350x200/?text=NoImage" alt="No Image Available" width={350} height={200} />
              </Link>
            )}

            <div className="flex flex-col items-center font-bold py-3">
              <h1 className="text-lg md:text-2xl uppercase p-2">{item.title}</h1>

              <div className="flex justify-between items-center gap-10">
                <h2 className="text-xl">${item.price}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryPage;