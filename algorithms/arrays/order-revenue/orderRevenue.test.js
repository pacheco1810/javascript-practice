const { 
    orders, 
    getOrders, 
    getOrderTotal, 
    addTotalToOrders, 
    getTotalRevenue 
} = require('./orderRevenue');

describe('Order Revenue Functions', () => {

    test('getOrderTotal calculates total for items', () => {
        const items = [
            { product: "Laptop", price: 1000, quantity: 1 },
            { product: "Mouse", price: 50, quantity: 2 }
        ];
        expect(getOrderTotal(items)).toBe(1100);
    });

    test('getOrderTotal handles single item', () => {
        const items = [{ product: "Keyboard", price: 80, quantity: 1 }];
        expect(getOrderTotal(items)).toBe(80);
    });

    test('getOrderTotal handles empty items', () => {
        expect(getOrderTotal([])).toBe(0);
    });

    test('addTotalToOrders adds total property to each order', () => {
        const ordersWithTotal = addTotalToOrders(orders);
        
        expect(ordersWithTotal[0].total).toBe(1100);
        expect(ordersWithTotal[1].total).toBe(80);
        expect(ordersWithTotal[2].total).toBe(650);
        
        expect(ordersWithTotal[0]).toHaveProperty('id', 1);
        expect(ordersWithTotal[0]).toHaveProperty('user', 'Juan');
        expect(ordersWithTotal[0]).toHaveProperty('total', 1100);
    });

    test('addTotalToOrders preserves original orders', () => {
        const ordersWithTotal = addTotalToOrders(orders);
        
        expect(ordersWithTotal.length).toBe(3);
        expect(orders[0]).not.toHaveProperty('total');
    });

    test('getTotalRevenue calculates total revenue for all orders', () => {
        const revenue = getTotalRevenue(orders);
        
        expect(revenue.total).toBe(1830);
        expect(revenue.Juan).toBe(1100);
        expect(revenue.Ana).toBe(80);
        expect(revenue.Luis).toBe(650);
    });

    test('getTotalRevenue filters by completed status', () => {
        const revenue = getTotalRevenue(orders, "completed");
        
        expect(revenue.total).toBe(1750);
        expect(revenue.Juan).toBe(1100);
        expect(revenue.Luis).toBe(650);
        expect(revenue.Ana).toBeUndefined();
    });

    test('getTotalRevenue filters by pending status', () => {
        const revenue = getTotalRevenue(orders, "pending");
        
        expect(revenue.total).toBe(80);
        expect(revenue.Ana).toBe(80);
        expect(revenue.Juan).toBeUndefined();
        expect(revenue.Luis).toBeUndefined();
    });

    test('getTotalRevenue handles empty orders array', () => {
        const revenue = getTotalRevenue([], "completed");
        
        expect(revenue.total).toBe(0);
    });

});