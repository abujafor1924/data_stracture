/* function sum(...params1) {
  // Reste oparetor ...
  console.log(params1);
  let total = 0;
  params1.forEach((parElemt) => {
    // airetmatic opretor +=
    total += parElemt;
  });
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)); */

function totalSum(...number) {
  console.log(number);
  let total = 0;
  number.forEach((perElem) => {
    total += perElem;
  });
  return total;
}

let totalNum = totalSum(2, 4, 78, 4, 5, 89, 67, 89);
console.log(totalNum);
