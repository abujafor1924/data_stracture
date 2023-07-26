function romanToInt(romanNumeral) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentSymbol = romanNumerals[romanNumeral[i]];
    const nextSymbol = romanNumerals[romanNumeral[i + 1]];

    if (nextSymbol > currentSymbol) {
      result += nextSymbol - currentSymbol;
      i++; // Skip the next symbol since it has already been considered
    } else {
      result += currentSymbol;
    }
  }

  return result;
}

// Test cases
console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("IX")); // Output: 9
console.log(romanToInt("XXI")); // Output: 21
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
