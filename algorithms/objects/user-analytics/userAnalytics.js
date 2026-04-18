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

// Input: groupActiveUsersByAge(users)
// Output: { 25: ["Juan"], 22: ["Pedro"], 30: ["Ana"] }

function groupActiveUsersByAge(users){
   return users.filter(user => user.active).reduce((acc, user) =>{
       acc[user.age] = [...(acc[user.age] || []), user.name];
       return acc;
   }, {});    
}

// Input: getMostCommonActiveAge(users)
// Output: 25

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

// Input: getInactiveUserNames(users)
// Output: ["Maria", "Luis"]

function getInactiveUserNames(users){
    return users.filter(user => !user.active).map(user => user.name); 
}

// Input: groupUsersByActiveStatus(users)
// Output: { active: ["Juan", "Pedro", "Ana"], inactive: ["Maria", "Luis"] }

function groupUsersByActiveStatus(users){
    return users.reduce((acc, user) =>{
        if(user.active) acc.active.push(user.name);
        else acc.inactive.push(user.name);
        return acc;
    }, {active: [], inactive: []}); 
}

// Input: getAgeStats(users)
// Output: { 25: { active: 1, inactive: 1 }, 30: { active: 1, inactive: 1 }, 22: { active: 1, inactive: 0 } }

function getAgeStats(users) {
    return users.reduce((acc, { age, active }) => {
        acc[age] ??= { active: 0, inactive: 0 };

        acc[age][active ? "active" : "inactive"]++;

        return acc;
    }, {});
}

// Input: getTopActiveUsersByAge(users)
// Output: { 25: { name: ["Juan"], total: 1 }, 22: { name: ["Pedro"], total: 1 }, 30: { name: ["Ana"], total: 1 } }

function getTopActiveUsersByAge(users){
    return users.filter(user => user.active).reduce((acc, user) => {
        acc[user.age] = acc[user.age] || { name: [], total: 0 };
        acc[user.age].name.push(user.name);
        acc[user.age].total += 1;
        return acc;
    }, {});
}

module.exports = {
    users,
    groupActiveUsersByAge,
    getMostCommonActiveAge,
    getInactiveUserNames,
    groupUsersByActiveStatus,
    getAgeStats,
    getTopActiveUsersByAge
};