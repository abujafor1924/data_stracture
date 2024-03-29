function findSecondSmallest(arr) {
  if (arr.length < 2) {
    throw new Error("Array must have at least two elements.");
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  if (secondSmallest === Infinity) {
    throw new Error("No second smallest element found.");
  }

  return secondSmallest;
}

// Test case
const numbers = [7, 2, 10, 4, 5, 3, 8, 9, 6];
console.log(findSecondSmallest(numbers)); // Output: 3
