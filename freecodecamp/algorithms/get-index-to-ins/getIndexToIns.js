// Input: getIndexToIns([10, 20, 30, 40, 50], 35)
// Output: 3
// Input: getIndexToIns([5, 3, 20, 3], 5)
// Output: 2

function getIndexToIns(arr, num){
  arr.sort((a,b) => a - b);
  let index = arr.findIndex(element => num <= element);
  return index === -1 ? arr.length : index;
}

module.exports = {
  getIndexToIns
};