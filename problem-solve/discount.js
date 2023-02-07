function ticketPrice(ticketQuantity) {
  const first100ticket = 100;
  const second100ticket = 90;
  const upto200ticket = 70;
  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100ticket;
    return price;
  } else if (ticketQuantity < 200) {
    const first100price = 100 * first100ticket;
    const resQuantity = ticketQuantity - 100;
    const resTicketPrice = resQuantity * second100ticket;
    const totalPrice = first100price + resTicketPrice;
    return totalPrice;
  } else {
    const firstprice = 100 * first100ticket;
    const secondticket = 100 * second100ticket;
    const resTicketQuantity = ticketQuantity - 200;
    const resticketPrice = resTicketQuantity * upto200ticket;
    const totalPriceTiket = firstprice + secondticket + resticketPrice;
    return totalPriceTiket;
  }
}
const price = ticketPrice(220);
console.log(price);
