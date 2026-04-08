/**
 * Problem: Group active users by age and find most common age
 * Topic: Objects
 * Difficulty: Medium
 */

// Input: getMostCommonActiveAge(users)
// Output: 25

const users = [
  { id: 1, name: "Juan", age: 25, active: true },
  { id: 2, name: "Maria", age: 30, active: false },
  { id: 3, name: "Pedro", age: 22, active: true },
  { id: 4, name: "Ana", age: 30, active: true },
  { id: 5, name: "Luis", age: 25, active: false }
];

function groupActiveUsersByAge(users){
   return users.filter(user => user.active).reduce((acc, user) =>{
       acc[user.age] = [...(acc[user.age] || []), user.name];
       return acc;
   }, {});    
}

function getMostCommonActiveAge(users){
    return users.filter(user => user.active).reduce((acc, user) => {
        acc.count[user.age] = (acc.count[user.age] ?? 0) + 1;
        
        if (acc.count[user.age] > acc.max) {
            acc.max = acc.count[user.age];
            acc.age = user.age;
        }
        
        return acc; 
    }, {count: {}, max: 0, age: null }).age;
}

module.exports = {
    users,
    groupActiveUsersByAge,
    getMostCommonActiveAge
};