/**
 * Problem: Find the top spender from orders
 * Topic: Arrays
 * Difficulty: Medium
 */

// Input: getTopSpenderByReduce(orders)
// Output: "Pedro"

function calculateTotalSpentByUser(orders){
    return orders.reduce((acc, order) => {
        acc[order.user] = (acc[order.user] ?? 0) + order.total;
        return acc;
    }, {})
}

function getTopSpender(orders){
    const spenders = calculateTotalSpentByUser(orders); 
    let maxSpent = 0;
    let topSpender = null;
    for(let spender in spenders){
        if(maxSpent < spenders[spender]) {
            maxSpent = spenders[spender];
            topSpender = spender;
        }
    }
    return topSpender;
}

function getTopSpenderByReduce(orders){
    let result = [];
    let users = orders.reduce((acc, {user, total}) => {
        acc.totals[user] = (acc.totals[user] ?? 0) + total;
        if(acc.totals[user] > acc.maxSpent){
            acc.maxSpent = acc.totals[user];
        }
        return acc;
    }, {totals: {}, maxSpent: 0});
    
    for(let user in users.totals){
        if(users.totals[user] === users.maxSpent) result.push(user);
    }
    
    return result.join('');
}

const orders = [
  { id: 1, user: "Juan", total: 120 },
  { id: 2, user: "Maria", total: 80 },
  { id: 3, user: "Juan", total: 50 },
  { id: 4, user: "Pedro", total: 200 },
  { id: 5, user: "Maria", total: 150 }
];

module.exports = {
    orders,
    calculateTotalSpentByUser,
    getTopSpender,
    getTopSpenderByReduce
};