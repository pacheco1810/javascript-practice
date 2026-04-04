// Input: diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
// Output: ["pink wool"]

// First version
function diffArrayV1(arr1, arr2){
  let result = arr1.filter(element => !arr2.includes(element)).concat(arr2.filter(element => !arr1.includes(element)));
  return result; 
}

// Second version
function diffArray(arr1, arr2) {
  const set2 = new Set(arr2);
  const set1 = new Set(arr1);

  return [
    ...arr1.filter(item => !set2.has(item)),
    ...arr2.filter(item => !set1.has(item))
  ];
}

module.exports = {
  diffArrayV1,
  diffArray
};