function wood(a, b, c) {
  const x = 2;
  const y = 4;
  const z = 5;
  const ab = a * x;
  const bc = b * y;
  const cd = c * z;
  const trotal = ab + bc + cd;
  return trotal;
}
const wooded = wood(0, 0, 4);
console.log(wooded);
