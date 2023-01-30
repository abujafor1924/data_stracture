function same(array1, arrary2) {
  if (array1.length !== arrary2.length) {
    return flash;
  }
  for (let i = 0; i < array1.length; i++) {
    let currectIndex = arrary2.indexOf(array1[i] ** 2);
    console.log(currectIndex);
  }
}
same([2, 3, 6], [9, 4, 36]);
