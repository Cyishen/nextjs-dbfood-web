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
    }
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
    }
  ]