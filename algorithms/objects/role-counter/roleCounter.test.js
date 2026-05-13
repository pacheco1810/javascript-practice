const { countRoles, groupByRoles, filterByRole } = require('./roleCounter');

const users = [
  { name: "Juan", role: "admin" },
  { name: "Ana", role: "user" },
  { name: "Luis", role: "admin" },
  { name: "Maria", role: "user" },
  { name: "Pedro", role: "guest" }
];

describe('countRoles', () => {
  test('counts number of users per role', () => {
    const result = countRoles(users);
    expect(result).toEqual({ admin: 2, user: 2, guest: 1 });
  });

  test('handles empty array', () => {
    expect(countRoles([])).toEqual({});
  });

  test('handles non-array input', () => {
    expect(countRoles(null)).toEqual({});
    expect(countRoles("invalid")).toEqual({});
  });

  test('ignores invalid user objects', () => {
    const invalidUsers = [
      { name: "Juan", role: "admin" },
      null,
      { name: "Ana" },
      "not an object",
      { name: "Luis", role: "user" }
    ];
    expect(countRoles(invalidUsers)).toEqual({ admin: 1, user: 1 });
  });
});

describe('groupByRoles', () => {
  test('groups user names by role', () => {
    const result = groupByRoles(users);
    expect(result).toEqual({
      admin: ["Juan", "Luis"],
      user: ["Ana", "Maria"],
      guest: ["Pedro"]
    });
  });

  test('handles empty array', () => {
    expect(groupByRoles([])).toEqual({});
  });

  test('ignores invalid user objects', () => {
    const invalidUsers = [
      { name: "Juan", role: "admin" },
      null,
      { name: "Ana" },
      "not an object",
      { name: "Luis", role: "user" }
    ];
    const result = groupByRoles(invalidUsers);
    expect(result).toEqual({
      admin: ["Juan"],
      user: ["Luis"]
    });
  });
});

describe('filterByRole', () => {
  test('filters users by admin role', () => {
    const result = filterByRole(users, "admin");
    expect(result).toEqual([
      { name: "Juan", role: "admin" },
      { name: "Luis", role: "admin" }
    ]);
  });

  test('filters users by user role', () => {
    const result = filterByRole(users, "user");
    expect(result).toEqual([
      { name: "Ana", role: "user" },
      { name: "Maria", role: "user" }
    ]);
  });

  test('filters users by guest role', () => {
    const result = filterByRole(users, "guest");
    expect(result).toEqual([{ name: "Pedro", role: "guest" }]);
  });

  test('returns empty array for role not present', () => {
    expect(filterByRole(users, "moderator")).toEqual([]);
  });

  test('handles empty array', () => {
    expect(filterByRole([], "admin")).toEqual([]);
  });

  test('handles invalid role parameter', () => {
    expect(filterByRole(users, null)).toEqual([]);
    expect(filterByRole(users, 123)).toEqual([]);
  });
});