// function namta(arr) {
//   for (let i = 1; i < arr; i++) {
//     let num = arr * 13;
//     return num;
//   }
// }
// console.log(namta(2));

/* function multiplicaiton_table(n) {
    let table = [];
  for (let i = 1; i <= n; i++) {
    let result = i * 13;
    table.push(result);
  }
  return table;
}
console.log(multiplicaiton_table(10)); */

function namtas(num) {
  let namta = [];
  for (let i = 1; i <= 10; i++) {
    let nam = i * 13;
    namta.push(nam);
  }
  return namta;
}
console.log(namtas(3));
