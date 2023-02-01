function factorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
  }
  return result;
}
let num = 5;
let fact = factorial(num);
console.log(fact, num);
