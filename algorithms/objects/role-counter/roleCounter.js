/**
 * Problem: Count users by role, group users by role, and filter users by role
 * Topic: Objects
 * Difficulty: Easy
 */

// Input: countRoles(users)
// Output: { admin: 2, user: 2, guest: 1 }

// Input: groupByRoles(users)
// Output: { admin: ["Juan", "Luis"], user: ["Ana", "Maria"], guest: ["Pedro"] }

// Input: filterByRole(users, "admin")
// Output: [{ name: "Juan", role: "admin" }, { name: "Luis", role: "admin" }]

function countRoles(users){
  if(!Array.isArray(users) || users.length === 0){
    return {};
  }
  
  return users.reduce((acc, user) => {
    if(typeof user !== 'object' || user === null || Array.isArray(user) || typeof user.role !== "string"){
      return acc;
    }
    
    acc[user.role] = (acc[user.role] ?? 0) + 1;
    return acc;
  }, {});
}

function groupByRoles(users){
  if(!Array.isArray(users) || users.length === 0){
    return {}; 
  }
  
  return users.reduce((acc, user) => {
    if(typeof user !== 'object' || user === null || Array.isArray(user) || typeof user.role !== "string"){
      return acc;
    }
    
    acc[user.role] = acc[user.role] || [];
    acc[user.role].push(user.name);
    
    return acc;
  }, {}); 
}

function filterByRole(users, role){
  if(!Array.isArray(users) || users.length === 0 || typeof role !== 'string'){
    return []; 
  }
  
  return users.filter(user => user.role === role);
}

module.exports = {
  countRoles,
  groupByRoles,
  filterByRole
};