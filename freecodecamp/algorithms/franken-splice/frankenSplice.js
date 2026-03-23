// Input: arr1 = [1, 2, 3, 4]
// arr2 = []
// index = 0
// Output:
// [1, 2, 3, 4]

function frankenSplice(arr1, arr2, indice) {
  let resultArray = arr2.slice();

  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) {
    return arr1;
  }

  for (let i = 0; i < arr1.length; i++) {
    resultArray.splice(indice + i, 0, arr1[i]);
  }

  return resultArray;
}

module.exports = { frankenSplice };