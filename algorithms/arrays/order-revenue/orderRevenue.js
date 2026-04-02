// Input: getTotalRevenue(orders, "completed")
// Output: { total: 1650, Juan: 1100, Luis: 650 }
// Input: getTotalRevenue(orders, "pending")
// Output: { total: 80, Ana: 80 }

const orders = [
  {
    id: 1,
    user: "Juan",
    status: "completed",
    items: [
      { product: "Laptop", price: 1000, quantity: 1 },
      { product: "Mouse", price: 50, quantity: 2 }
    ]
  },
  {
    id: 2,
    user: "Ana",
    status: "pending",
    items: [
      { product: "Keyboard", price: 80, quantity: 1 }
    ]
  },
  {
    id: 3,
    user: "Luis",
    status: "completed",
    items: [
      { product: "Monitor", price: 300, quantity: 2 },
      { product: "Mouse", price: 50, quantity: 1 }
    ]
  }
];

function getOrders(orders){
    if(orders.status === "completed"){
        return orders.filter(order => order.status === "completed");
    }
    return orders.filter(order => order.status === "pending");
}

function getOrderTotal(items){
    return items.reduce((acc, item) => {
        return acc + item.price * item.quantity; 
    }, 0)
}

function addTotalToOrders(orders){
    return orders.map(order =>{
         return {...order, total: getOrderTotal(order.items)} 
    });
}

function getTotalRevenue(orders, status){
    return orders.filter(order => !status || order.status === status ).reduce((acc, order) =>{
        if(order.items.length === 0) return acc; 
        
        const orderTotal = getOrderTotal(order.items);
        acc[order.user] = (acc[order.user] || 0) + orderTotal;
        acc.total += orderTotal;
        
        return acc;
    },{total: 0});
}

module.exports = {
    orders,
    getOrders,
    getOrderTotal,
    addTotalToOrders,
    getTotalRevenue
};