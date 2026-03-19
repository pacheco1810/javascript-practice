// Input:
// [
//   { name: "Angel", role: "admin" },
//   { name: "Juan", role: "user" },
//   { name: "Ana", role: "admin" }
// ]

// Output:
// {
//   admin: ["Angel", "Ana"],
//   user: ["Juan"]
// }


// Solution 1 — Classic loop
function groupByClassic(arr) {
    let groupObj = {};
    
    for(let user of arr){
        if(!groupObj[user.role]){
            groupObj[user.role] = [];
        }
        groupObj[user.role].push(user.name)
    }
    
    return groupObj;
}



// Solution 2 — forEach
function groupByForEach(arr) {
    let groupObj = {};

    arr.forEach(user => {
        if(!groupObj[user.role]){
            groupObj[user.role] = [];
        }
        groupObj[user.role].push(user.name);
    });
    
    return groupObj;
}



// Solution 3 — reduce
function groupByReduce(arr) {
    return arr.reduce((acc, user) => {
        if(!acc[user.role]) acc[user.role] = [];
        acc[user.role].push(user.name);
    return acc}, {});
}

module.exports = {
  groupByClassic,
  groupByForEach,
  groupByReduce
};