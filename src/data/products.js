export const products = [
  {
    id: 1,
    name: "Hamburguesa Clásica",
    category: "hamburguesas",
    price: 8.99,
    image: "/images/burger1.jpg",
    description: "Hamburguesa con carne, lechuga, tomate y queso",
    ingredients: ["Carne", "Lechuga", "Tomate", "Queso", "Pan", "Salsa"]
  },
  {
    id: 2,
    name: "Hamburguesa Doble",
    category: "hamburguesas",
    price: 12.99,
    image: "/images/burger2.jpg",
    description: "Doble carne con queso cheddar",
    ingredients: [
      "Doble Carne",
      "Queso Cheddar",
      "Cebolla",
      "Pepinillos",
      "Pan",
      "Salsa especial"
    ]
  },
  {
    id: 3,
    name: "Pizza Margarita",
    category: "pizzas",
    price: 10.99,
    image: "/images/pizza1.jpg",
    description: "Pizza clásica con tomate y mozzarella",
    ingredients: [
      "Salsa de tomate",
      "Mozzarella",
      "Albahaca",
      "Aceite de oliva"
    ]
  },
  {
    id: 4,
    name: "Pizza Pepperoni",
    category: "pizzas",
    price: 13.99,
    image: "/images/pizza2.jpg",
    description: "Pizza con pepperoni y queso",
    ingredients: ["Salsa de tomate", "Mozzarella", "Pepperoni", "Orégano"]
  },
  {
    id: 5,
    name: "Hot Dog Clásico",
    category: "hotdogs",
    price: 5.99,
    image: "/images/hotdog1.jpg",
    description: "Hot dog con salchica y vegetales",
    ingredients: ["Salchicha", "Pan", "Mostaza", "Ketchup", "Cebolla"]
  },
  {
    id: 6,
    name: "Papas Fritas",
    category: "acompañamientos",
    price: 3.99,
    image: "/images/fries.jpg",
    description: "Papas fritas crujientes",
    ingredients: ["Papas", "Sal"]
  },
  {
    id: 7,
    name: "Coca Cola",
    category: "bebidas",
    price: 2.99,
    image: "/images/coke.jpg",
    description: "Bebida refrescante 500ml",
    ingredients: []
  },
  {
    id: 8,
    name: "Nuggets x10",
    category: "acompañamientos",
    price: 6.99,
    image: "/images/nuggets.jpg",
    description: "10 nuggets de pollo crujientes",
    ingredients: ["Pollo", "Empanizado", "Salsa BBQ"]
  }
];

export const categories = [
  { id: "todos", name: "Todos" },
  { id: "hamburguesas", name: "Hamburguesas" },
  { id: "pizzas", name: "Pizzas" },
  { id: "hotdogs", name: "Hot Dogs" },
  { id: "acompañamientos", name: "Acompañamientos" },
  { id: "bebidas", name: "Bebidas" }
];
