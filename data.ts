type Product = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const burgers: Products = [
  {
    id: "1",
    title: "捲捲德腸烤牛堡",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/burgers/b1.png",
    price: 99,
    options: [
      {
        title: "單點",
        additionalPrice: 0,
      },
      {
        title: "套餐",
        additionalPrice: 60,
      },
    ],
  },
  {
    id: "2",
    title: "香酥鮭魚堡",
    desc: "Crunchy Salmon Burger - A crispy delight featuring tender salmon, topped with fresh vegetables and savory sauce, a mouthwatering treat!",
    img: "/burgers/b2.png",
    price: 99,
    options: [
      {
        title: "單點",
        additionalPrice: 0,
      },
      {
        title: "套餐",
        additionalPrice: 60,
      },
    ],
  },
  {
    id: "3",
    title: "香酥鮭魚烤牛堡",
    desc: "Crispy Grilled Salmon Beef Burger - A perfect fusion of crispy grilled salmon and succulent beef, delivering a delightful taste sensation.",
    img: "/burgers/b3.png",
    price: 109,
    options: [
      {
        title: "單點",
        additionalPrice: 0,
      },
      {
        title: "套餐",
        additionalPrice: 60,
      },
    ],
  },
  {
    id: "4",
    title: "香酥鮭魚海老堡",
    desc: "Crunchy Salmon and Shrimp Burger - A delectable blend of crispy salmon and succulent shrimp, offering a delightful burst of flavors in every bite.",
    img: "/burgers/b4.png",
    price: 129,
    options: [
      {
        title: "單點",
        additionalPrice: 0,
      },
      {
        title: "套餐",
        additionalPrice: 60,
      },
    ],
  },
]

//TODO:donuts
export const donuts: Products = [
  {
    id: "1",
    title: "donut1",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/donuts/d1.png",
    price: 99,
    options: [
      {
        title: "單點",
        additionalPrice: 0,
      },
      {
        title: "套餐",
        additionalPrice: 60,
      },
    ],
  },
  {
    id: "2",
    title: "donut1",
    desc: "Crunchy Salmon Burger - A crispy delight featuring tender salmon, topped with fresh vegetables and savory sauce, a mouthwatering treat!",
    img: "/donuts/d2.png",
    price: 99,
    options: [
      {
        title: "單點",
        additionalPrice: 0,
      },
      {
        title: "套餐",
        additionalPrice: 60,
      },
    ],
  },
]


export const singleProduct: Product = {
  id: "1",
  title: "捲捲德腸烤牛堡",
  desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
  img: "/burgers/b1.png",
  price: 24.5,
  options: [
    {
      title: "單點",
      additionalPrice: 0,
    },
    {
      title: "套餐",
      additionalPrice: 4,
    },
  ],
};

type Combo = {
  id: number;
  title: string;
  title2: string;
  img?: string;
  img2?: string;
}
export const combo: Combo = {
  id: 1,
  title: "薯條",
  title2: "可樂",
  img: "/burgers/fries.png",
  img2: "/burgers/coca.png",
}

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Burger Delight: Succulent patties, bursting flavors, and a medley of gourmet toppings.",
    img: "/m1.png",
    color: "black",
  },
  {
    id: 2,
    slug: "donuts",
    title: "Soft Donuts",
    desc: "Donut Delight: Fluffy pastries, sweet indulgence, and delightful toppings abound.",
    img: "/m4.png",
    color: "white",
  },
];