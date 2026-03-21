// Input: 7;

// Expected Output: 5040

function factorialCalculator(num) {
  if (typeof num !== "number" || num < 0) return 0;

  num = Math.floor(num);
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

module.exports = {
  factorialCalculator
};