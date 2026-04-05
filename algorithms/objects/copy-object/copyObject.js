/**
 * Problem: Copy an object using different methods
 * Topic: Objects
 * Difficulty: Easy
 */

// Input: copyObjByJSON({ a: 1, b: { c: 2 } })
// Output: The original object is [object Object] and copy object is [object Object]

function copyObjBySpread(obj){
    let copyObj = {...obj};
    return copyObj;
}

function copyObjByAssign(obj){
    let copyObj = Object.assign({}, obj);
    return copyObj;
}

function copyObjByJSON(obj){
    let copyObj = JSON.parse(JSON.stringify(obj));
    return copyObj;
}

function copyObjByStructured(obj){
    let copyObj = structuredClone(obj);
    return copyObj;
}

module.exports = {
    copyObjBySpread,
    copyObjByAssign,
    copyObjByJSON,
    copyObjByStructured
};