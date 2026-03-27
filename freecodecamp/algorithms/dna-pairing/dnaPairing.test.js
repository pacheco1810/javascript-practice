const { pairElement } = require('./dnaPairing');

const solutions = [
  pairElement
];

solutions.forEach(fn => {

  test(`${fn.name} pairs "ATCGA" correctly`, () => {
    expect(fn("ATCGA")).toEqual([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
  });

  test(`${fn.name} pairs "TTGAG" correctly`, () => {
    expect(fn("TTGAG")).toEqual([["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]);
  });

  test(`${fn.name} pairs "CTCTA" correctly`, () => {
    expect(fn("CTCTA")).toEqual([["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]);
  });

  test(`${fn.name} handles single character`, () => {
    expect(fn("A")).toEqual([["A","T"]]);
    expect(fn("C")).toEqual([["C","G"]]);
  });

  test(`${fn.name} handles empty string`, () => {
    expect(fn("")).toEqual([]);
  });

});