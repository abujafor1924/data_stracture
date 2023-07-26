function findTwoNumbersWithSum(arr, target) {
  const numIndexMap = {};
  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    const complement = target - currentNum;

    if (numIndexMap[complement] !== undefined) {
      return [numIndexMap[complement], i];
    }
    numIndexMap[currentNum] = i;
  }
  return [];
}
const inputArra = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const indices = findTwoNumbersWithSum(inputArra, targetValue);
console.log(indices);
