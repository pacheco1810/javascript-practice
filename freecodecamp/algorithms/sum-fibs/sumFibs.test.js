const { sumFibs } = require('./sumFibs');

const solutions = [
  sumFibs
];

solutions.forEach(fn => {

  test(`${fn.name} sums odd Fibonacci numbers up to 1000`, () => {
    expect(fn(1000)).toBe(1785);
  });

  test(`${fn.name} sums odd Fibonacci numbers up to 1`, () => {
    expect(fn(1)).toBe(1);
  });

  test(`${fn.name} sums odd Fibonacci numbers up to 2`, () => {
    expect(fn(2)).toBe(2);
  });

  test(`${fn.name} sums odd Fibonacci numbers up to 10`, () => {
    expect(fn(10)).toBe(10);
  });

  test(`${fn.name} sums odd Fibonacci numbers up to 100`, () => {
    expect(fn(100)).toBe(188);
  });

  test(`${fn.name} sums odd Fibonacci numbers up to 4000000`, () => {
    expect(fn(4000000)).toBe(4613732);
  });

  test(`${fn.name} handles zero`, () => {
    expect(fn(0)).toBe(0);
  });

});