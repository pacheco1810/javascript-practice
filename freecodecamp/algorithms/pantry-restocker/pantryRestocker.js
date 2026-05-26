/**
 * Problem: Smart Pantry Restocker - Parse shipment, plan actions, group by zone
 * Topic: Arrays / Objects
 * Difficulty: Medium
 */

// Input: parseShipment(["A1|Rice|10|2025-12-31|north", "B2|Beans|5|2025-12-31|south"])
// Output: [{ sku: "A1", name: "Rice", qty: 10, expires: "2025-12-31", zone: "north" }, ...]

function parseShipment(rawData){
  if(!Array.isArray(rawData) || rawData.length === 0) return [];
  
  let skus = new Set();
  let result = [];
  
  for(let shipment of rawData){
    
    const [sku, name, qty, expires, zone] = shipment.split("|");

    if(!skus.has(sku)){
      result.push({sku: sku,
      name: name,
      qty: Number(qty),
      expires: expires,
      zone: zone ?? "general"});
      skus.add(sku);
    }
    
  }
  
  return result; 
}

// Input: planRestock(pantry, shipment)
// Output: [{ type: "restock", item: { sku: "A1", qty: 3, zone: "north" } }, ...]

function planRestock(pantry, shipment){
  const pantrySkus = new Set();
  let result = [];
  
  for(let {sku} of pantry){
    pantrySkus.add(sku);
  }
  
  for(const item of shipment){
    const { sku, qty } = item;
    let type; 
    
    if(qty <= 0) type = "discard";
    else if(pantrySkus.has(sku)) type = "restock"; 
    else type = "donate";
    
    result.push({type: type, item: item})
  }
  
  return result;
}

// Input: groupByZone(actions)
// Output: { north: [{ type: "restock", item: {...} }], general: [...] }

function groupByZone(actions){
  return actions.reduce((acc, action) => {
    const {item} = action;
    const zone = item.zone ?? "general";
    acc[zone] ??= [];
    acc[zone].push(action);
    return acc;
  }, {});
}

// Input: clonePantry(pantry)
// Output: Deep copy of pantry array

function clonePantry(pantry){
  return pantry.map(item => ({ ...item }));
}

module.exports = {
  parseShipment,
  planRestock,
  groupByZone,
  clonePantry
};