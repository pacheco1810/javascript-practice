const { 
    users, 
    filterUsersActive, 
    getActiveUserNames, 
    filterUsersAdults, 
    groupUsers 
} = require('./userFilters');

describe('User Filters', () => {

    test('filterUsersActive returns only active users', () => {
        const activeUsers = filterUsersActive(users);
        expect(activeUsers.length).toBe(3);
        expect(activeUsers.every(user => user.active === true)).toBe(true);
        expect(activeUsers[0].name).toBe("Ana");
        expect(activeUsers[1].name).toBe("Carlos");
        expect(activeUsers[2].name).toBe("Marta");
    });

    test('getActiveUserNames returns names of active users', () => {
        const activeNames = getActiveUserNames(users);
        expect(activeNames).toEqual(["Ana", "Carlos", "Marta"]);
        expect(activeNames.length).toBe(3);
    });

    test('filterUsersAdults returns formatted string for adults', () => {
        const adults = filterUsersAdults(users);
        expect(adults).toEqual([
            "Ana (25) - ACTIVE",
            "Carlos (30) - ACTIVE",
            "Sofía (22) - INACTIVE"
        ]);
        expect(adults.length).toBe(3);
    });

    test('filterUsersAdults excludes minors', () => {
        const adults = filterUsersAdults(users);
        expect(adults.some(adult => adult.includes("Luis"))).toBe(false);
        expect(adults.some(adult => adult.includes("Marta"))).toBe(false);
    });

    test('groupUsers groups users by active status', () => {
        const grouped = groupUsers(users);
        
        expect(grouped.active.length).toBe(3);
        expect(grouped.inactive.length).toBe(2);
        
        expect(grouped.active[0].name).toBe("Ana");
        expect(grouped.active[1].name).toBe("Carlos");
        expect(grouped.active[2].name).toBe("Marta");
        
        expect(grouped.inactive[0].name).toBe("Luis");
        expect(grouped.inactive[1].name).toBe("Sofía");
    });

    test('groupUsers preserves user properties', () => {
        const grouped = groupUsers(users);
        
        expect(grouped.active[0]).toHaveProperty('id', 1);
        expect(grouped.active[0]).toHaveProperty('name', 'Ana');
        expect(grouped.active[0]).toHaveProperty('age', 25);
        expect(grouped.active[0]).toHaveProperty('active', true);
        
        expect(grouped.inactive[0]).toHaveProperty('id', 2);
        expect(grouped.inactive[0]).toHaveProperty('name', 'Luis');
        expect(grouped.inactive[0]).toHaveProperty('age', 16);
        expect(grouped.inactive[0]).toHaveProperty('active', false);
    });

});