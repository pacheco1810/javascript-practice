function sumAll([n, m]){
  let max = Math.max(n, m), min = Math.min(n, m);
  let result = 0; 
  for(let i = min; i <= max; i++){
    result += i;
  }
  return result;
}

module.exports = {
  sumAll
};