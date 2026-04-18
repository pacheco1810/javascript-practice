const {
  validateUsers,
  validateUsersReduce
} = require('./validateUsers');

const solutions = [
  validateUsers,
  validateUsersReduce
];

const users = [
  { email: "  ANGEL@mail.com ", active: true, role: "admin" },
  { email: "juan@mail.com", active: true, role: "user" },
  { email: "invalidEmail", active: false, role: "user" }
];

solutions.forEach(fn => {

  test(`${fn.name} validates and cleans users correctly`, () => {
    expect(fn(users)).toEqual({
      cleanedUsers: [
        { email: "angel@mail.com", active: true, role: "admin" },
        { email: "juan@mail.com", active: true, role: "user" }
      ],
      allActive: true,
      hasAdmin: true
    });
  });

  test(`${fn.name} handles no valid users`, () => {
    const data = [
      { email: "invalid", active: false, role: "user" }
    ];

    expect(fn(data)).toEqual({
      cleanedUsers: [],
      allActive: true,
      hasAdmin: false
    });
  });

  test(`${fn.name} handles all inactive valid users`, () => {
    const data = [
      { email: "test@mail.com", active: false, role: "user" }
    ];

    expect(fn(data)).toEqual({
      cleanedUsers: [
        { email: "test@mail.com", active: false, role: "user" }
      ],
      allActive: false,
      hasAdmin: false
    });
  });

  test(`${fn.name} handles empty array`, () => {
    expect(fn([])).toEqual({
      cleanedUsers: [],
      allActive: true,
      hasAdmin: false
    });
  });

});