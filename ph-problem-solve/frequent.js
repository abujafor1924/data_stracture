// find duplicat number
const frequentNum = (frequent) => {
  let frequency = {};
  frequent.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });
  let frequentElement = frequent[0];
  for (let num of frequent) {
    if (frequency[num] > frequency[frequentElement]) {
      frequentElement = num;
    }
  }
  return frequentElement;
};
const numArr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const frequent = frequentNum(numArr);
console.log(frequent);
