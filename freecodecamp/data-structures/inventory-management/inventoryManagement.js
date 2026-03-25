let inventory = [];

function findProductIndex(name) {
  name = name.toLowerCase();
  let index = inventory.findIndex(product => product.name === name);
  return index; 
}

function addProduct(product){
  product.name = product.name.toLowerCase();
  let index = findProductIndex(product.name);
  if(index != -1){
    inventory[index].quantity += product.quantity; 
    console.log(`${product.name} quantity updated`);
  }else{
    inventory.push({
      name: product.name,
      quantity: product.quantity
    }); 
    console.log(`${product.name} added to inventory`);
  }
}

function removeProduct(name, quantity){
  name = name.toLowerCase();
  let index = findProductIndex(name);
  if(index === -1){
    console.log(`${name} not found`);
    return;
  }
  if(inventory[index].quantity < quantity){
    console.log(`Not enough ${name} available, remaining pieces: ${inventory[index].quantity}`);
    return;
  }
  inventory[index].quantity -= quantity;

  console.log(`Remaining ${name} pieces: ${inventory[index].quantity}`);

  if(inventory[index].quantity === 0){
    inventory.splice(index, 1);
  }
}

module.exports = {
  inventory,
  findProductIndex,
  addProduct,
  removeProduct
};