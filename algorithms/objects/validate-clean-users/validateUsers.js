/**
 * Problem: Validate and clean user data (email, active status, role)
 * Topic: Strings
 * Difficulty: Medium
 */

// Input: validateUsers([
//   { email: "  ANGEL@mail.com  ", active: true, role: "admin" },
//   { email: "juan@mail.com", active: true, role: "user" },
//   { email: "invalidEmail", active: false, role: "user" }
// ])
// Output: {
//   cleanedUsers: [
//     { email: "angel@mail.com", active: true, role: "admin" },
//     { email: "juan@mail.com", active: true, role: "user" }
//   ],
//   allActive: true,
//   hasAdmin: true
// }

// Solution 1 — Step by step
function validateUsers(users) {
    const cleaned = users.map(user => ({
        ...user,
        email: user.email.trim().toLowerCase()
    }));

    const cleanedUsers = cleaned.filter(user =>
        user.email.includes("@") && user.email.includes(".")
    );

    const allActive = cleanedUsers.every(user => user.active);

    const hasAdmin = cleanedUsers.some(user => user.role === "admin");

    return { cleanedUsers, allActive, hasAdmin };
}

// Input: validateUsersReduce([
//   { email: "  ANGEL@mail.com  ", active: true, role: "admin" },
//   { email: "juan@mail.com", active: true, role: "user" },
//   { email: "invalidEmail", active: false, role: "user" }
// ])
// Output: {
//   cleanedUsers: [
//     { email: "angel@mail.com", active: true, role: "admin" },
//     { email: "juan@mail.com", active: true, role: "user" }
//   ],
//   allActive: true,
//   hasAdmin: true
// }

// Solution 2 — Using reduce
function validateUsersReduce(users) {
    const cleanedUsers = users.reduce((acc, user) => {
        const email = user.email.trim().toLowerCase();
        if(email.includes("@") && email.includes(".")){
            acc.cleanedUsers.push({...user, email});
            if(!user.active) acc.allActive = false;
            if(user.role === "admin") acc.hasAdmin = true; 
        }
        return acc; 
    }, {cleanedUsers: [], allActive: true, hasAdmin: false});

    return cleanedUsers; 
}

module.exports = {
    validateUsers,
    validateUsersReduce
};