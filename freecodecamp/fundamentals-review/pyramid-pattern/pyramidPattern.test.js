const { pyramid } = require('./pyramid');

const solutions = [
  pyramid
];

solutions.forEach(fn => {

  test(`${fn.name} generates pyramid with vertex up (invertida = false)`, () => {
    expect(fn("p", 3, false)).toBe("\n  p\n ppp\nppppp\n");
  });

  test(`${fn.name} generates pyramid with vertex down (invertida = true)`, () => {
    expect(fn("p", 3, true)).toBe("\nppppp\n ppp\n  p\n");
  });

  test(`${fn.name} handles single row`, () => {
    expect(fn("*", 1, false)).toBe("\n*\n");
    expect(fn("*", 1, true)).toBe("\n*\n");
  });

  test(`${fn.name} handles different character`, () => {
    expect(fn("*", 2, false)).toBe("\n *\n***\n");
  });

});