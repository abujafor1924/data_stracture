/* function arrayReplace(inputArray, elimentToReplace, subtractionEliment) {
  inputArray.forEach((element, index) => {
    if (element === elimentToReplace) {
      inputArray[index] = subtractionEliment;
    }
  });
  console.log(inputArray);
}
arrayReplace([1, 2, 1], 1, 3);
 */

function arrayReplace(iar, etr, se) {
  iar.forEach((element, index) => {
    if (element === etr) {
      iar[index] = se;
    }
  });
  console.log(iar);
}
arrayReplace([1, 2, 1], 1, 3);
