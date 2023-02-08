/* const num = [2, 4, 6, 7, 87, 4, 5, 3];
for (const nu of num) {
  console.log(nu);
} */

const products = [
  {
    id: 1,
    name: "walton mobail",
    price: 19000,
  },
  {
    id: 2,
    name: "samsung mobail",
    price: 16000,
  },
  {
    id: 3,
    name: "walton laptop",
    price: 70000,
  },
  {
    id: 4,
    name: "lenevo laptop",
    price: 78000,
  },
  {
    id: 5,
    name: "iphon mobail",
    price: 120000,
  },
  {
    id: 6,
    name: "semphony mobail",
    price: 12000,
  },
  {
    id: 7,
    name: "dell laptop",
    price: 56000,
  },
  {
    id: 8,
    name: "blackbery mobail",
    price: 87000,
  },
  {
    id: 9,
    name: "hp laptop",
    price: 123000,
  },
];

/* for (const product of products) {
  console.log(product);
} */

function matchProduct(products, search) {
  const match = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      match.push(product);
    }
  }
  return match;
}
const result = matchProduct(products, "Mobail");
console.log(result);
