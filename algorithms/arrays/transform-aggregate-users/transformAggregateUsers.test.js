const {
  transformUsersForEach,
  transformUsersMap,
  transformUsersReduce
} = require('./transformAggregateUsers');

const solutions = [
  transformUsersForEach,
  transformUsersMap,
  transformUsersReduce
];

const users = [
  { name: "Angel", age: 23, active: true },
  { name: "Juan", age: 30, active: false },
  { name: "Ana", age: 25, active: true }
];

solutions.forEach(fn => {

  test(`${fn.name} processes users correctly`, () => {
    expect(fn(users)).toEqual({
      totalAge: 48,
      activeNames: ["ANGEL", "ANA"]
    });
  });

  test(`${fn.name} handles no active users`, () => {
    const data = [
      { name: "Juan", age: 30, active: false }
    ];

    expect(fn(data)).toEqual({
      totalAge: 0,
      activeNames: []
    });
  });

  test(`${fn.name} handles empty array`, () => {
    expect(fn([])).toEqual({
      totalAge: 0,
      activeNames: []
    });
  });

  test(`${fn.name} handles single active user`, () => {
    const data = [
      { name: "Angel", age: 23, active: true }
    ];

    expect(fn(data)).toEqual({
      totalAge: 23,
      activeNames: ["ANGEL"]
    });
  });

});