const {
  groupByClassic,
  groupByForEach,
  groupByReduce
} = require('./groupBy');

const solutions = [
  groupByClassic,
  groupByForEach,
  groupByReduce
];

const users = [
  { name: "Angel", role: "admin" },
  { name: "Juan", role: "user" },
  { name: "Ana", role: "admin" }
];

solutions.forEach(fn => {

  test(`${fn.name} groups users correctly`, () => {
    expect(fn(users)).toEqual({
      admin: ["Angel", "Ana"],
      user: ["Juan"]
    });
  });

  test(`${fn.name} handles empty array`, () => {
    expect(fn([])).toEqual({});
  });

  test(`${fn.name} handles single element`, () => {
    const data = [{ name: "Angel", role: "admin" }];

    expect(fn(data)).toEqual({
      admin: ["Angel"]
    });
  });

  test(`${fn.name} handles multiple roles`, () => {
    const data = [
      { name: "Angel", role: "admin" },
      { name: "Juan", role: "user" },
      { name: "Ana", role: "admin" },
      { name: "Luis", role: "manager" }
    ];

    expect(fn(data)).toEqual({
      admin: ["Angel", "Ana"],
      user: ["Juan"],
      manager: ["Luis"]
    });
  });

});