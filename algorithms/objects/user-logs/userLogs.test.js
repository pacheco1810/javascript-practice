const { 
    logs, 
    generateUserAnalytics, 
    getMostActiveUser, 
    getUserActionCountMap,
    getTopUserByAction,
    getTopDevicePerUser
} = require('./userLogs');

describe('generateUserAnalytics', () => {
    test('generates complete analytics for all users', () => {
        const result = generateUserAnalytics(logs);
        
        expect(result[1]).toEqual({
            totalActions: 3,
            actions: { login: 1, purchase: 1, logout: 1 },
            devices: ["mobile"]
        });
        
        expect(result[2]).toEqual({
            totalActions: 2,
            actions: { purchase: 1, login: 1 },
            devices: ["desktop", "mobile"]
        });
        
        expect(result[3]).toEqual({
            totalActions: 2,
            actions: { login: 1, purchase: 1 },
            devices: ["desktop"]
        });
    });

    test('handles empty array', () => {
        expect(generateUserAnalytics([])).toEqual({});
    });
});

describe('getMostActiveUser', () => {
    test('returns user with most actions', () => {
        expect(getMostActiveUser(logs)).toBe(1);
    });

    test('handles empty array', () => {
        expect(getMostActiveUser([])).toBe(null);
    });

    test('handles single user', () => {
        const singleLog = [{ userId: 1, action: "login", device: "mobile" }];
        expect(getMostActiveUser(singleLog)).toBe(1);
    });
});

describe('getUserActionCountMap', () => {
    test('returns count of actions per user', () => {
        expect(getUserActionCountMap(logs)).toEqual({
            1: 3,
            2: 2,
            3: 2
        });
    });

    test('handles empty array', () => {
        expect(getUserActionCountMap([])).toEqual({});
    });
});

describe('getTopUserByAction', () => {
    test('returns user with most purchase actions', () => {
        const result = getTopUserByAction(logs);
        // Como todos tienen 1 purchase, retorna el primero encontrado (userId 1)
        expect(result).toBe(2);
    });

    test('handles no purchase actions', () => {
        const noPurchases = [
            { userId: 1, action: "login", device: "mobile" },
            { userId: 2, action: "logout", device: "desktop" }
        ];
        const result = getTopUserByAction(noPurchases);
        expect(result).toBe(null);
    });

    test('handles empty array', () => {
        const result = getTopUserByAction([]);
        expect(result).toBe(null);
    });

    test('returns user with most purchases when there is a clear winner', () => {
        const purchaseLogs = [
            { userId: 1, action: "purchase", device: "mobile" },
            { userId: 1, action: "purchase", device: "mobile" },
            { userId: 2, action: "purchase", device: "desktop" }
        ];
        const result = getTopUserByAction(purchaseLogs);
        expect(result).toBe(1);
    });
});

describe('getTopDevicePerUser', () => {
    test('returns most used device per user', () => {
        const result = getTopDevicePerUser(logs);
        expect(result).toEqual({
            1: "mobile",
            2: "desktop",
            3: "desktop"
        });
    });

    test('handles tie - returns first encountered', () => {
        const tiedLogs = [
            { userId: 1, action: "login", device: "mobile" },
            { userId: 1, action: "purchase", device: "desktop" }
        ];
        const result = getTopDevicePerUser(tiedLogs);
        expect(result[1]).toBe("mobile");
    });

    test('handles empty array', () => {
        expect(getTopDevicePerUser([])).toEqual({});
    });

    test('handles single user with multiple devices', () => {
        const multiDeviceLogs = [
            { userId: 1, action: "login", device: "mobile" },
            { userId: 1, action: "purchase", device: "mobile" },
            { userId: 1, action: "logout", device: "desktop" }
        ];
        const result = getTopDevicePerUser(multiDeviceLogs);
        expect(result[1]).toBe("mobile");
    });
});