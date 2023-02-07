function paperRequirements(fbook, sbook, tbook) {
  const book1 = fbook * 100;
  const book2 = sbook * 200;
  const book3 = tbook * 300;
  let book = book1 + book2 + book3;
  return book;
}
const totlaBook = paperRequirements(6, 5, 3);
console.log(totlaBook);
