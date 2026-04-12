/**
 * Problem: Transform and aggregate user data (sum ages and collect active names in uppercase)
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: transformUsersForEach([
//   { name: "Angel", age: 23, active: true },
//   { name: "Juan", age: 30, active: false },
//   { name: "Ana", age: 25, active: true }
// ])
// Output: { totalAge: 48, activeNames: ["ANGEL", "ANA"] }

// Solution 1 — forEach
function transformUsersForEach(users) {
    let totalAge = 0, activeNames = [];
    users.forEach(user => {
        if(user.active){
            totalAge += user.age;
            activeNames.push(user.name.toUpperCase());
        }
    });
    return {totalAge, activeNames};
}

// Input: transformUsersMap([
//   { name: "Angel", age: 23, active: true },
//   { name: "Juan", age: 30, active: false },
//   { name: "Ana", age: 25, active: true }
// ])
// Output: { totalAge: 48, activeNames: ["ANGEL", "ANA"] }

// Solution 2 — filter + map + forEach
function transformUsersMap(users) {
    let totalAge = 0, activeNames = users.filter(user => user.active).map(user => user.name.toUpperCase());
    users.forEach(ages => {
        if(ages.active){
            totalAge += ages.age; 
        }
    })
    return {totalAge, activeNames};
}

// Input: transformUsersReduce([
//   { name: "Angel", age: 23, active: true },
//   { name: "Juan", age: 30, active: false },
//   { name: "Ana", age: 25, active: true }
// ])
// Output: { totalAge: 48, activeNames: ["ANGEL", "ANA"] }

// Solution 3 — reduce
function transformUsersReduce(users) {
    return users.reduce((acc, user) => {
        if(user.active){
            acc.totalAge += user.age;
            acc.activeNames.push(user.name.toUpperCase()); 
        }
        return acc;
    }, { totalAge: 0, activeNames: [] })
}

module.exports = {
    transformUsersForEach,
    transformUsersMap,
    transformUsersReduce
};