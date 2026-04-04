// Input: destroyer([1, 2, 3, 1, 2, 3], 2, 3)
// Output: [1, 1]
// Input: destroyerBySet([1, 2, 3, 1, 2, 3], 2, 3)
// Output: [1, 1]

function destroyer(arr, ...rest){
  return arr.filter(item => !rest.includes(item));
}

function destroyerBySet(arr, ...valuesToRemove){
  const valuesSet = new Set(valuesToRemove); 
  return arr.filter(item => !valuesSet.has(item));
}

module.exports = {
  destroyer,
  destroyerBySet
};