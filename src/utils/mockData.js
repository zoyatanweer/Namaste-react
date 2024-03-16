const resList = [
  {
    name: "KFC",
    id: "1",
    cuisines: "Burgers, Fast Food",
    rating: "4",
    deliveryTime: "25-30 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
    costForTwo: 400,
  },
  {
    name: "Meghna Foods",
    id: "2",
    cuisines: "Biryani, North Indian, South Indian",
    rating: "4.5",
    deliveryTime: "40-45 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi",
    costForTwo: 400,
  },
  {
    name: "Wow! Momo",
    id: "3",
    cuisines: "Tibetan, Healthy Food, Asian",
    rating: "4.4",
    deliveryTime: "30-35 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/64fd45fd9f44c1737bc446e470bed666",
    costForTwo: 300,
  },
  {
    name: "McDonald's",
    id: "4",
    cuisines: "Burgers, Fast Food, Beverages, Desserts",
    rating: "4.1",
    deliveryTime: "25-30 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f62564e14944753903849c4ef673af4d",
    costForTwo: 400,
  },
  {
    name: "Domino's",
    id: "5",
    cuisines: "Pizzas, Fast Food, Garlic Bread",
    rating: "4.0",
    deliveryTime: "30-35 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aadw5xxrjtv6xxhtscai",
    costForTwo: 500,
  },
  {
    name: "The Bowl Company",
    id: "6",
    cuisines: "Bowl, North Indian, Continental, Chinese",
    rating: "4.2",
    deliveryTime: "40-45 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/bb6049fae59b8a2413a9177eb0338b49",
    costForTwo: 350,
  },
  {
    name: "Pizza Hut",
    id: "7",
    cuisines: "Pizzas, Desserts, Beverages",
    rating: "3.8",
    deliveryTime: "30-35 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
    costForTwo: 400,
  },
  {
    name: "Paratha Envy",
    id: "8",
    cuisines: "Paratha, North Indian",
    rating: "4.2",
    deliveryTime: "55-60 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/zmmzb7mdfgzcidj0nvmr",
    costForTwo: 400,
  },
  {
    name: "Faasos - Wraps and Rolls",
    id: "9",
    cuisines: "Shawarma, Rolls, Rice Bowl, Desserts",
    rating: "4.2",
    deliveryTime: "30 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/af33b81798b11deba338e94b7585d348",
    costForTwo: 400,
  },
  {
    name: "Gokul Veg",
    id: "10",
    cuisines: "North indian, South Indian, Juices, Beverages",
    rating: "3.5",
    deliveryTime: "30-35 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zdbcuis4zrpyuebesrtu",
    costForTwo: 400,
  },
  {
    name: "New Udupi Prahar",
    id: "11",
    cuisines: "North India, South Indian",
    rating: "4.6",
    deliveryTime: "20-25 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b14cd9fc40129fcfb97aa7e621719d07",
    costForTwo: 400,
  },
  {
    name: "Hotel Empire",
    id: "12",
    cuisines: "Chicken, North Indian, Desserts",
    rating: "4.1",
    deliveryTime: "30-35 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qltgnkyywuo5gmnpqzbm",
    costForTwo: 400,
  },
  {
    name: "Kanti Sweets",
    id: "13",
    cuisines: "Sweets, Beverages",
    rating: "3.5",
    deliveryTime: "40-45 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dhcdvnp6oohqaenixza2",
    costForTwo: 400,
  },
  {
    name: "Chowman",
    id: "14",
    cuisines: "Chinese, Asian, Beverages",
    rating: "4.0",
    deliveryTime: "40-45 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a7hllyytdxc7tgf2nuub",
    costForTwo: 400,
  },
  {
    name: "Glen's Bakehouse",
    id: "15",
    cuisines: "Desserts, Bakery, Beverages",
    rating: "4.6",
    deliveryTime: "30-35 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/m6jahioyu7zrodei5pcq",
    costForTwo: 400,
  },
  {
    name: "Paakshala",
    id: "16",
    cuisines: "South Indian, North Indian, Beverages",
    rating: "4.0",
    deliveryTime: "15-20 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bfcea2108aea7a98f2b370b78b2fdac0",
    costForTwo: 400,
  },
  {
    name: "Chinese Square",
    id: "17",
    cuisines: "Chinese, Juices, Beverages",
    rating: "3.8",
    deliveryTime: "40-45 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gk6xrjcty3mslfujlbrv",
    costForTwo: 400,
  },
  {
    name: "Juice Junction",
    id: "18",
    cuisines: "Sandwich, Juices, Beverages",
    rating: "3.3",
    deliveryTime: "15-20 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/q8agywer8hwfawv51ghh",
    costForTwo: 400,
  },
];

export default resList;
