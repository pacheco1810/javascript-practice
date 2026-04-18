/**
 * Problem: Copy an object using different methods
 * Topic: Objects
 * Difficulty: Easy
 */

// Input: copyObjBySpread({ a: 1, b: { c: 2 } })
// Output: { a: 1, b: { c: 2 } }

function copyObjBySpread(obj){
    let copyObj = {...obj};
    return copyObj;
}

// Input: copyObjByAssign({ a: 1, b: { c: 2 } })
// Output: { a: 1, b: { c: 2 } }

function copyObjByAssign(obj){
    let copyObj = Object.assign({}, obj);
    return copyObj;
}

// Input: copyObjByJSON({ a: 1, b: { c: 2 } })
// Output: { a: 1, b: { c: 2 } }

function copyObjByJSON(obj){
    let copyObj = JSON.parse(JSON.stringify(obj));
    return copyObj;
}

// Input: copyObjByStructured({ a: 1, b: { c: 2 } })
// Output: { a: 1, b: { c: 2 } }

function copyObjByStructured(obj){
    let copyObj = structuredClone(obj);
    return copyObj;
}

module.exports = {
    copyObjBySpread,
    copyObjByAssign,
    copyObjByJSON,
    copyObjByStructured
}