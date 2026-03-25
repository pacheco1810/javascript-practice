function bouncer(arrValue){
  let arrResponse = [];
  for(let i in arrValue){
    if(!(!arrValue[i])){
      arrResponse.push(arrValue[i]);
    }
  }
  return arrResponse; 
}

module.exports = {
    bouncer
};