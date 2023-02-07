const phones = [
  {
    name: "samsung",
    price: 22000,
    model: "f3dt",
  },
  {
    name: "samsung1",
    price: 21000,
    model: "f3dt",
  },
  {
    name: "samsung2",
    price: 20000,
    model: "f3dt",
  },
  {
    name: "samsung3",
    price: 19000,
    model: "f3dt",
  },
  {
    name: "samsung4",
    price: 18000,
    model: "f3dt",
  },
];
function cphestPricePhone(phones) {
  let chepest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < chepest.price) {
      chepest = phone;
    }
  }
  return chepest;
}

let chepestPrice = cphestPricePhone(phones);
console.log(chepestPrice);
