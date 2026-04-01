// Input: summarizeOrders(orders)
// Output: {
//   total: 1450,
//   products: ["Laptop", "Mouse", "Keyboard", "Monitor"],
//   expensiveOrders: [
//     { id: 1, product: "Laptop", price: 1000 },
//     { id: 4, product: "Monitor", price: 300 }
//   ]
// }

const orders = [
  { id: 1, product: "Laptop", price: 1000 },
  { id: 2, product: "Mouse", price: 50 },
  { id: 3, product: "Keyboard", price: 100 },
  { id: 4, product: "Monitor", price: 300 }
];

function summarizeOrders(orders){
    return orders.reduce((acc, order) => {
        acc.total += order.price;
        acc.products.push(order.product); 
        if(order.price > 100) acc.expensiveOrders.push(order);
        return acc;
    }, {total: 0, products: [], expensiveOrders: []});
}

module.exports = {
    orders,
    summarizeOrders
};