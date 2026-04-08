const { users, groupActiveUsersByAge, getMostCommonActiveAge } = require('./userAnalytics');

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

    test('handles multiple users with same age', () => {
        const sameAgeUsers = [
            { id: 1, name: "Juan", age: 25, active: true },
            { id: 2, name: "Carlos", age: 25, active: true }
        ];
        const result = groupActiveUsersByAge(sameAgeUsers);
        expect(result).toEqual({
            25: ["Juan", "Carlos"]
        });
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

    test('handles tie - returns first encountered', () => {
        const tiedUsers = [
            { id: 1, name: "Juan", age: 25, active: true },
            { id: 2, name: "Maria", age: 30, active: true }
        ];
        expect(getMostCommonActiveAge(tiedUsers)).toBe(25);
    });

    test('handles no active users', () => {
        const inactiveUsers = [
            { id: 1, name: "Juan", age: 25, active: false },
            { id: 2, name: "Maria", age: 30, active: false }
        ];
        expect(getMostCommonActiveAge(inactiveUsers)).toBe(null);
    });

    test('handles empty array', () => {
        expect(getMostCommonActiveAge([])).toBe(null);
    });
});