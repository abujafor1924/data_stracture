function same(array1, arrary2) {
  if (array1.length !== arrary2.length) {
    return flash;
  }
  for (let i = 0; i < array1.length; i++) {
    let currectIndex = arrary2.indexOf(array1[i] ** 2);
    if (currectIndex === -1) {
      return flash;
    }
    arrary2.splice(currectIndex, 1);
  }
  return true;
}
console.log(same([2, 3, 6], [36, 9, 4]));
