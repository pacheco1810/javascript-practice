const { 
    orders, 
    calculateTotalSpentByUser, 
    getTopSpender, 
    getTopSpenderByReduce 
} = require('./topSpender');

describe('calculateTotalSpentByUser', () => {
    test('calculates total spent per user', () => {
        const result = calculateTotalSpentByUser(orders);
        expect(result).toEqual({
            Juan: 170,
            Maria: 230,
            Pedro: 200
        });
    });

    test('handles empty orders array', () => {
        expect(calculateTotalSpentByUser([])).toEqual({});
    });
});

describe('getTopSpender', () => {
    test('returns user who spent the most', () => {
        expect(getTopSpender(orders)).toBe("Maria");
    });

    test('handles single order', () => {
        const singleOrder = [{ id: 1, user: "Juan", total: 100 }];
        expect(getTopSpender(singleOrder)).toBe("Juan");
    });

    test('handles tie - returns first found', () => {
        const tiedOrders = [
            { id: 1, user: "Juan", total: 100 },
            { id: 2, user: "Maria", total: 100 }
        ];
        expect(getTopSpender(tiedOrders)).toBe("Juan");
    });

    test('returns null for empty orders', () => {
        expect(getTopSpender([])).toBe(null);
    });
});

describe('getTopSpenderByReduce', () => {
    test('returns top spender using reduce', () => {
        expect(getTopSpenderByReduce(orders)).toBe("Maria");
    });

    test('handles tie - returns both users', () => {
        const tiedOrders = [
            { id: 1, user: "Juan", total: 100 },
            { id: 2, user: "Maria", total: 100 }
        ];
        expect(getTopSpenderByReduce(tiedOrders)).toBe("JuanMaria");
    });

    test('handles single order', () => {
        const singleOrder = [{ id: 1, user: "Juan", total: 100 }];
        expect(getTopSpenderByReduce(singleOrder)).toBe("Juan");
    });

    test('handles empty orders', () => {
        expect(getTopSpenderByReduce([])).toBe("");
    });
});