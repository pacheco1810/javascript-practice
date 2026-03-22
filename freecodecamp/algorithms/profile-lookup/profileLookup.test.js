const { lookUpProfile } = require('./profileLookup');

test("returns correct property for valid contact", () => {
  expect(lookUpProfile("Akira", "likes")).toEqual([
    "Pizza",
    "Coding",
    "Brownie Points"
  ]);
});

test("returns number correctly", () => {
  expect(lookUpProfile("Harry", "number")).toBe("0994372684");
});

test("returns 'No such contact'", () => {
  expect(lookUpProfile("Bob", "number")).toBe("No such contact");
});

test("returns 'No such property'", () => {
  expect(lookUpProfile("Akira", "address")).toBe("No such property");
});