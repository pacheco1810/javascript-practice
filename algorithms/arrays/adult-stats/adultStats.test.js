const { users, getAdults, getUserAdultsNames, countAdultsAges, getAdultStats } = require('./adultStats');

describe('getAdults', () => {
  test('filters users with age >= 18', () => {
    const adults = getAdults(users);
    expect(adults.length).toBe(3);
    expect(adults).toEqual([
      { name: "Ana", age: 22 },
      { name: "Luis", age: 30 },
      { name: "Maria", age: 22 }
    ]);
  });

  test('handles empty array', () => {
    expect(getAdults([])).toEqual([]);
  });
});

describe('getUserAdultsNames', () => {
  test('returns names of adult users', () => {
    expect(getUserAdultsNames(users)).toEqual(["Ana", "Luis", "Maria"]);
  });

  test('handles empty array', () => {
    expect(getUserAdultsNames([])).toEqual([]);
  });
});

describe('countAdultsAges', () => {
  test('returns sum of ages of adult users', () => {
    expect(countAdultsAges(users)).toBe(74);
  });

  test('handles empty array', () => {
    expect(countAdultsAges([])).toBe(0);
  });
});

describe('getAdultStats', () => {
  test('returns statistics for adult users', () => {
    const stats = getAdultStats(users);
    expect(stats).toEqual({
      totalAdults: 3,
      names: ["Ana", "Luis", "Maria"],
      averageAge: 24.67
    });
  });

  test('handles when no adults', () => {
    const minors = [
      { name: "Juan", age: 17 },
      { name: "Pedro", age: 15 }
    ];
    const stats = getAdultStats(minors);
    expect(stats.totalAdults).toBe(0);
    expect(stats.names).toEqual([]);
    expect(stats.averageAge).toBeNaN();
  });

  test('handles empty array', () => {
    const stats = getAdultStats([]);
    expect(stats.totalAdults).toBe(0);
    expect(stats.names).toEqual([]);
    expect(stats.averageAge).toBeNaN();
  });
});