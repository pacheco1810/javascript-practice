const { 
    users, 
    groupActiveUsersByAge, 
    getMostCommonActiveAge,
    getInactiveUserNames,
    groupUsersByActiveStatus,
    getAgeStats,
    getTopActiveUsersByAge
} = require('./userAnalytics');

describe('groupActiveUsersByAge', () => {
    test('groups active users by age', () => {
        const result = groupActiveUsersByAge(users);
        expect(result).toEqual({
            25: ["Juan"],
            22: ["Pedro"],
            30: ["Ana"]
        });
    });

    test('handles empty array', () => {
        expect(groupActiveUsersByAge([])).toEqual({});
    });

    test('handles no active users', () => {
        const inactiveUsers = [
            { id: 1, name: "Juan", age: 25, active: false },
            { id: 2, name: "Maria", age: 30, active: false }
        ];
        expect(groupActiveUsersByAge(inactiveUsers)).toEqual({});
    });
});

describe('getMostCommonActiveAge', () => {
    test('returns most common age among active users', () => {
        expect(getMostCommonActiveAge(users)).toBe(25);
    });

    test('handles single active user', () => {
        const singleUser = [
            { id: 1, name: "Juan", age: 25, active: true }
        ];
        expect(getMostCommonActiveAge(singleUser)).toBe(25);
    });

    test('handles no active users', () => {
        const inactiveUsers = [
            { id: 1, name: "Juan", age: 25, active: false },
            { id: 2, name: "Maria", age: 30, active: false }
        ];
        expect(getMostCommonActiveAge(inactiveUsers)).toBe(null);
    });
});

describe('getInactiveUserNames', () => {
    test('returns names of inactive users', () => {
        expect(getInactiveUserNames(users)).toEqual(["Maria", "Luis"]);
    });

    test('handles empty array', () => {
        expect(getInactiveUserNames([])).toEqual([]);
    });
});

describe('groupUsersByActiveStatus', () => {
    test('groups users by active status', () => {
        const result = groupUsersByActiveStatus(users);
        expect(result).toEqual({
            active: ["Juan", "Pedro", "Ana"],
            inactive: ["Maria", "Luis"]
        });
    });

    test('handles empty array', () => {
        expect(groupUsersByActiveStatus([])).toEqual({ active: [], inactive: [] });
    });
});

describe('getAgeStats', () => {
    test('returns statistics by age', () => {
        const result = getAgeStats(users);
        expect(result).toEqual({
            25: { active: 1, inactive: 1 },
            30: { active: 1, inactive: 1 },
            22: { active: 1, inactive: 0 }
        });
    });

    test('handles empty array', () => {
        expect(getAgeStats([])).toEqual({});
    });
});

describe('getTopActiveUsersByAge', () => {
    test('groups active users by age with names array and total', () => {
        const result = getTopActiveUsersByAge(users);
        expect(result).toEqual({
            25: { name: ["Juan"], total: 1 },
            22: { name: ["Pedro"], total: 1 },
            30: { name: ["Ana"], total: 1 }
        });
    });

    test('handles multiple active users with same age', () => {
        const multipleUsers = [
            { id: 1, name: "Juan", age: 25, active: true },
            { id: 2, name: "Carlos", age: 25, active: true },
            { id: 3, name: "Ana", age: 30, active: true }
        ];
        const result = getTopActiveUsersByAge(multipleUsers);
        expect(result).toEqual({
            25: { name: ["Juan", "Carlos"], total: 2 },
            30: { name: ["Ana"], total: 1 }
        });
    });

    test('handles no active users', () => {
        const inactiveUsers = [
            { id: 1, name: "Juan", age: 25, active: false }
        ];
        expect(getTopActiveUsersByAge(inactiveUsers)).toEqual({});
    });

    test('handles empty array', () => {
        expect(getTopActiveUsersByAge([])).toEqual({});
    });
});