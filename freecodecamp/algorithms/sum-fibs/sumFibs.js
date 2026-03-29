// Input: sumFibs(1000)
// Output: 1785

function sumFibs(num){
  let prev = 0;
  let curr = 1; 
  let sum = 0;
  let next;
  if(num < 2) return num;
  while(curr <= num){
    if(curr % 2){
      sum += curr;
    }
    next = prev + curr;
    prev = curr;
    curr = next;
  }

  return sum;
}

module.exports = {
  sumFibs
};