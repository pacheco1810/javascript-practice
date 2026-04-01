const { orders, summarizeOrders } = require('./orderSummary');

describe('Order Summary', () => {

    test('summarizeOrders calculates total correctly', () => {
        const summary = summarizeOrders(orders);
        expect(summary.total).toBe(1450);
    });

    test('summarizeOrders returns all product names', () => {
        const summary = summarizeOrders(orders);
        expect(summary.products).toEqual(["Laptop", "Mouse", "Keyboard", "Monitor"]);
        expect(summary.products.length).toBe(4);
    });

    test('summarizeOrders identifies expensive orders (price > 100)', () => {
        const summary = summarizeOrders(orders);
        expect(summary.expensiveOrders.length).toBe(2);
        expect(summary.expensiveOrders[0]).toEqual({ id: 1, product: "Laptop", price: 1000 });
        expect(summary.expensiveOrders[1]).toEqual({ id: 4, product: "Monitor", price: 300 });
    });

    test('summarizeOrders excludes orders with price <= 100', () => {
        const summary = summarizeOrders(orders);
        const hasMouse = summary.expensiveOrders.some(order => order.product === "Mouse");
        const hasKeyboard = summary.expensiveOrders.some(order => order.product === "Keyboard");
        expect(hasMouse).toBe(false);
        expect(hasKeyboard).toBe(false);
    });

    test('summarizeOrders handles empty array', () => {
        const summary = summarizeOrders([]);
        expect(summary.total).toBe(0);
        expect(summary.products).toEqual([]);
        expect(summary.expensiveOrders).toEqual([]);
    });

    test('summarizeOrders with single order', () => {
        const singleOrder = [{ id: 1, product: "Book", price: 20 }];
        const summary = summarizeOrders(singleOrder);
        expect(summary.total).toBe(20);
        expect(summary.products).toEqual(["Book"]);
        expect(summary.expensiveOrders).toEqual([]);
    });

    test('summarizeOrders with all expensive orders', () => {
        const expensiveOrders = [
            { id: 1, product: "TV", price: 500 },
            { id: 2, product: "Console", price: 400 }
        ];
        const summary = summarizeOrders(expensiveOrders);
        expect(summary.total).toBe(900);
        expect(summary.products).toEqual(["TV", "Console"]);
        expect(summary.expensiveOrders.length).toBe(2);
    });

});