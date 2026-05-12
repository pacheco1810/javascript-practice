const { 
  capitalizeWordsByFor, 
  capitalizeWordsByFilterAndMap, 
  capitalizeWordsByReduce 
} = require('./capitalizeWords');

const solutions = [
  { name: 'capitalizeWordsByFor', fn: capitalizeWordsByFor },
  { name: 'capitalizeWordsByFilterAndMap', fn: capitalizeWordsByFilterAndMap },
  { name: 'capitalizeWordsByReduce', fn: capitalizeWordsByReduce }
];

solutions.forEach(({ name, fn }) => {

  describe(`${name}`, () => {

    test('capitalizes first letter of each word', () => {
      expect(fn(["apple", "banana", "orange"])).toEqual(["Apple", "Banana", "Orange"]);
    });

    test('handles mixed case input', () => {
      expect(fn(["aPPle", "bAnAna", "ORANGE"])).toEqual(["Apple", "Banana", "Orange"]);
    });

    test('handles single word array', () => {
      expect(fn(["hello"])).toEqual(["Hello"]);
    });

    test('ignores non-string elements', () => {
      const input = ["apple", 123, "banana", null, "orange"];
      expect(fn(input)).toEqual(["Apple", "Banana", "Orange"]);
    });

    test('ignores empty string elements', () => {
      const input = ["apple", "", "banana", "   ", "orange"];
      expect(fn(input)).toEqual(["Apple", "Banana", "Orange"]);
    });

    test('returns empty array for empty input', () => {
      expect(fn([])).toEqual([]);
    });

    test('returns empty array for non-array input', () => {
      expect(fn(null)).toEqual([]);
      expect(fn("not an array")).toEqual([]);
      expect(fn(123)).toEqual([]);
    });

    test('returns empty array for array with only invalid strings', () => {
      expect(fn(["", "   ", "  "])).toEqual([]);
    });

    test('handles single letter words', () => {
      expect(fn(["a", "b", "c"])).toEqual(["A", "B", "C"]);
    });

  });

});