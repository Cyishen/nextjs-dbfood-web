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
    id: "burger1",
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
    id: "burger2",
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
    id: "burger3",
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
    id: "burger4",
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

export const donuts: Products = [
  {
    id: "donut1",
    title: "吸血德古拉",
    desc: "紫薯巧克力、 黑巧克力、白巧克力、草莓巧克力、草莓醬內餡, 滿口是血的吸血德古拉在剛吸完血就被逮個正著！甜而不膩的紫薯巧克力，每一口咬下，深紅色的草莓醬滲出，彷彿自己就是萬聖節的紅牌人物吸血鬼！",
    img: "/donuts/d3.png",
    price: 60,
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
    id: "donut2",
    title: "終極木乃伊",
    desc: "經典糖霜、特級苦甜巧克力、白巧克力、黑巧克力, 古老的木乃伊從死亡的深淵中復活，經歷了時間的洗禮，嚐盡世上的各種滋味。以經典糖霜為基底，淋上深黑苦甜巧克力，而千年不死的終極木乃伊擁有苦甜成熟的美味。",
    img: "/donuts/d4.png",
    price: 60,
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
    id: "donut3",
    title: "萬聖南瓜王",
    desc: "南瓜巧克力、黑巧克力、南瓜子、南瓜卡士達, 替亡魂照亮黑暗的南瓜王，邪惡的眼神以及詭譎的笑容，在黑暗中顫動，仿佛有著自己的生命…萬聖南瓜王表面淋上南瓜巧克力，內餡也灌入南瓜卡士達，整口的南瓜香味，是道地的南瓜王！",
    img: "/donuts/d5.png",
    price: 60,
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
    id: "donut4",
    title: "繽紛草莓甜甜圈",
    desc: "外表多熱鬧，口感就多豐富！草莓甜甜圈撒滿多彩繽紛彩糖，歡慶時刻就在你口！",
    img: "/donuts/d1.png",
    price: 45,
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
    id: "donut5",
    title: "花生糖霜甜甜圈",
    desc: "香濃花生醬和特製糖霜厚厚覆蓋在甜甜圈表層，飾以黑巧克力線條，絕配滋味令花生迷愛不釋口！",
    img: "/donuts/d6.png",
    price: 45,
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
  price: 99,
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