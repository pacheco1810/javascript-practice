const { 
    purchases, 
    getTopProducts, 
    getTopProductPerUser, 
    getUserProductCounts,
    getUsersTopProductWithCount,
    getGlobalTopProductFromTopUsers
} = require('./userPurchases');

describe('getTopProducts', () => {
    test('returns top 2 most purchased products', () => {
        expect(getTopProducts(purchases)).toEqual(["laptop", "phone"]);
    });

    test('handles empty array', () => {
        expect(getTopProducts([])).toEqual([]);
    });
});

describe('getTopProductPerUser', () => {
    test('returns most purchased product per user', () => {
        expect(getTopProductPerUser(purchases)).toEqual({
            1: "laptop",
            2: "phone",
            3: "tablet"
        });
    });

    test('handles empty array', () => {
        expect(getTopProductPerUser([])).toEqual({});
    });
});

describe('getUserProductCounts', () => {
    test('returns product counts per user', () => {
        expect(getUserProductCounts(purchases)).toEqual({
            1: { laptop: 2, mouse: 1, phone: 1 },
            2: { phone: 2, laptop: 1 },
            3: { tablet: 2, laptop: 1 }
        });
    });

    test('handles empty array', () => {
        expect(getUserProductCounts([])).toEqual({});
    });
});

describe('getUsersTopProductWithCount', () => {
    test('returns top product and count per user', () => {
        expect(getUsersTopProductWithCount(purchases)).toEqual({
            1: { product: "laptop", count: 2 },
            2: { product: "phone", count: 2 },
            3: { product: "tablet", count: 2 }
        });
    });

    test('handles empty array', () => {
        expect(getUsersTopProductWithCount([])).toEqual({});
    });
});

describe('getGlobalTopProductFromTopUsers', () => {
    test('returns global top products from users top products', () => {
        expect(getGlobalTopProductFromTopUsers(purchases)).toEqual({
            topProduct: ["laptop", "phone", "tablet"],
            max: 2
        });
    });

    test('handles empty array', () => {
        expect(getGlobalTopProductFromTopUsers([])).toEqual({
            topProduct: [],
            max: 0
        });
    });
});