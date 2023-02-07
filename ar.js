/* function maxArray(number) {
  let large = number[0];
  for (let i = 0; i < number.length; i++) {
    const index = i;
    const element = number[index];
    const compear = large && element;
    if (compear < 0) {
      let total = (large = number[i]);

      console.log(total);
    }
  }
  return large;
}
let max = [5, 1, -4, -7];
maxArray(max);
 */

function fin(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] < 0) {
      total++;
    }
  }
  return total;
}
console.log(fin([2, 4, 3, 6, -5, 8, -3]));
