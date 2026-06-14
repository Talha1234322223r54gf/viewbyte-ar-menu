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
    modelUrl:
      "https://sketchfab.com/models/4eaaa4e13530467a9e1541269d101655/embed",
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
  {
    id: "steak",
    name: "Grilled Steak Platter",
    price: 18.99,
    category: "Mains",
    description:
      "A premium grilled steak platter with rich presentation, ideal for realistic AR food preview.",
    imageUrl:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
    modelUrl:
      "https://sketchfab.com/models/ee29f0fc621c452a9c72231bf991ab7a/embed",
    ingredients: ["Steak", "Seasoning", "Herbs", "Sauce"],
    allergens: [],
    calories: 690,
  },
  {
    id: "chicken",
    name: "Roasted Chicken and Potatoes",
    price: 16.99,
    category: "Mains",
    description:
      "A realistic roasted chicken and potatoes dish preview for premium restaurant menu presentation.",
    imageUrl:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=80",
    modelUrl:
      "https://sketchfab.com/models/46f428194e8845dda0aee626188275ea/embed",
    ingredients: ["Roasted chicken", "Potatoes", "Herbs", "Salt", "Black pepper"],
    allergens: [],
    calories: 720,
  },
  {
    id: "dessert",
    name: "Chocolate Dessert",
    price: 9.99,
    category: "Desserts",
    description:
      "A rich chocolate dessert preview designed to showcase sweet dishes using interactive 3D visualization.",
    imageUrl:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    modelUrl:
      "https://sketchfab.com/models/222b4fcfaeaa4155a1b6a34f20bbf883/embed",
    ingredients: ["Chocolate", "Cream", "Sugar", "Cocoa"],
    allergens: ["Milk"],
    calories: 480,
  },
];