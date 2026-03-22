// Input: [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

// Expected Output
// [5, 27, 39, 1001]

function largestOfAll(arr) {
  if (!Array.isArray(arr)) return [];

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i]) || arr[i].length === 0) {
      result.push(undefined);
      continue;
    }

    let max = arr[i][0];

    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }

    result.push(max);
  }

  return result;
}

module.exports = {
  largestOfAll
};