const {
  countWordsClassic,
  countWordsForEach,
  countWordsReduce
} = require('./countWords');

const solutions = [
  countWordsClassic,
  countWordsForEach,
  countWordsReduce
];

solutions.forEach(fn => {

  test(`${fn.name} counts words correctly`, () => {
    expect(fn("hola mundo hola")).toEqual({
      hola: 2,
      mundo: 1
    });
  });

  test(`${fn.name} handles single word`, () => {
    expect(fn("hola")).toEqual({
      hola: 1
    });
  });

  test(`${fn.name} handles empty string`, () => {
    expect(fn("")).toEqual({});
  });

  test(`${fn.name} handles multiple spaces`, () => {
    expect(fn("hola   mundo")).toEqual({
      hola: 1,
      mundo: 1
    });
  });

});