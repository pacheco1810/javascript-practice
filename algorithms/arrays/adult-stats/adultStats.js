/**
 * Problem: Calculate statistics for adult users (age >= 18)
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: getAdultStats(users)
// Output: { totalAdults: 3, names: ["Ana", "Luis", "Maria"], averageAge: 24.67 }

const users = [
  { name: "Juan", age: 17 },
  { name: "Ana", age: 22 },
  { name: "Luis", age: 30 },
  { name: "Maria", age: 22 }
];

function getAdults(users){
  return users.filter(user => user.age >= 18);
}

function getUserAdultsNames(users){
  return getAdults(users).map(user => user.name);
}

function countAdultsAges(users){
  let age = 0;
  getAdults(users).forEach(user => {
    age += user.age; 
  });
  return age; 
}

function getAdultStats(users){
  let result = getAdults(users).reduce((acc, user) => {
    acc.totalAdults++;
    acc.names.push(user.name);
    acc.totalAge += user.age; 
    return acc;
  }, {totalAdults: 0, names: [], totalAge: 0}); 
  
  return {
    totalAdults: result.totalAdults,
    names: result.names,
    averageAge: Number((result.totalAge / result.totalAdults).toFixed(2))
  };
}

module.exports = {
  users,
  getAdults,
  getUserAdultsNames,
  countAdultsAges,
  getAdultStats
};