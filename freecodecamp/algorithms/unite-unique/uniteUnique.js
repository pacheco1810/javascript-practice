function uniteUnique(...restArr){
  let newArr = [];
  for(let i = 0; i < restArr.length; i++){
    for(let j = 0; j < restArr[i].length; j++){
      if(!newArr.includes(restArr[i][j])){
        newArr.push(restArr[i][j]);
      }
    }
  }
  
  return newArr;
}

module.exports = {
  uniteUnique
};