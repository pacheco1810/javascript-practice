/**
 * Problem: Filter, transform, and group users by different criteria
 * Topic: Arrays
 * Difficulty: Easy
 */

// Input: filterUsersActive(users)
// Output: Array of users with active: true

// Input: getActiveUserNames(users)
// Output: ["Ana", "Carlos", "Marta"]

// Input: filterUsersAdults(users)
// Output: ["Ana (25) - ACTIVE", "Carlos (30) - ACTIVE", "Sofía (22) - INACTIVE"]

// Input: groupUsers(users)
// Output: { active: [users with active: true], inactive: [users with active: false] }

const users = [
  { id: 1, name: "Ana", age: 25, active: true },
  { id: 2, name: "Luis", age: 16, active: false },
  { id: 3, name: "Carlos", age: 30, active: true },
  { id: 4, name: "Marta", age: 15, active: true },
  { id: 5, name: "Sofía", age: 22, active: false }
];

// Input: filterUsersActive(users)
// Output: [{ id: 1, name: "Ana", age: 25, active: true }, { id: 3, name: "Carlos", age: 30, active: true }, { id: 4, name: "Marta", age: 15, active: true }]

function filterUsersActive(users){
    return users.filter(user => user.active);
}

// Input: getActiveUserNames(users)
// Output: ["Ana", "Carlos", "Marta"]

function getActiveUserNames(users){
    return users.filter(user => user.active).map(user => user.name);
}

// Input: filterUsersAdults(users)
// Output: ["Ana (25) - ACTIVE", "Carlos (30) - ACTIVE", "Sofía (22) - INACTIVE"]

function filterUsersAdults(users){
    return users.filter(({age}) => age >= 18).map(({name, age, active}) => `${name} (${age}) - ${active ? "ACTIVE" : "INACTIVE"}`);
}

// Input: groupUsers(users)
// Output: { active: [users with active: true], inactive: [users with active: false] }

function groupUsers(users){
    return users.reduce((acc, { active, ...user }) =>{
        if(active) acc.active.push({ active, ...user });
        else acc.inactive.push({ active, ...user });
        return acc;
    }, {"active": [], "inactive": []})
}

module.exports = {
    users,
    filterUsersActive,
    getActiveUserNames,
    filterUsersAdults,
    groupUsers
};