export const dishes = [
  {
    id: "burger",
    name: "Classic Beef Burger",
    price: 12.9,
    category: "Burgers",
    description:
      "A juicy beef patty with cheddar, crisp lettuce, tomato, pickles, and our signature house sauce.",
    imageUrl:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    modelUrl: "/models/burger.glb",
    ingredients: [
      "Beef patty",
      "Cheddar",
      "Lettuce",
      "Tomato",
      "Pickles",
      "Brioche bun",
    ],
    allergens: ["Wheat", "Milk", "Soy"],
    calories: 780,
  },
  {
    id: "pizza",
    name: "Margherita Pizza",
    price: 14.5,
    category: "Pizza",
    description:
      "Stone-baked pizza with tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.",
    imageUrl:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=80",
    modelUrl: "/models/pizza.glb",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella",
      "Basil",
      "Olive oil",
    ],
    allergens: ["Wheat", "Milk"],
    calories: 620,
  },
  {
    id: "fries",
    name: "Crispy Seasoned Fries",
    price: 6.25,
    category: "Sides",
    description:
      "Hand-cut fries tossed in signature seasoning and served with garlic aioli on the side.",
    imageUrl:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=80",
    modelUrl: "/models/fries.glb",
    ingredients: [
      "Potatoes",
      "Sea salt",
      "Paprika",
      "Garlic powder",
      "Sunflower oil",
    ],
    allergens: ["Soy"],
    calories: 410,
  },
];