const { bouncer } = require('./bouncer');

const solutions = [
    bouncer
];

solutions.forEach(fn => {

    test(`${fn.name} removes all falsy values from array`, () => {
        expect(fn([7, "ate", "", false, 9])).toEqual([7, "ate", 9]);
    });

    test(`${fn.name} handles array with only falsy values`, () => {
        expect(fn([false, null, 0, "", undefined, NaN])).toEqual([]);
    });

    test(`${fn.name} handles empty array`, () => {
        expect(fn([])).toEqual([]);
    });

    test(`${fn.name} handles array with no falsy values`, () => {
        expect(fn([1, "hello", true, 42])).toEqual([1, "hello", true, 42]);
    });

    test(`${fn.name} handles null and undefined`, () => {
        expect(fn([null, undefined, "keep", 0, "me"])).toEqual(["keep", "me"]);
    });

});