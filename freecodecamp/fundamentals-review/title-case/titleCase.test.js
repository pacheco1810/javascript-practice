const { titleCase } = require('./titleCase');

const solutions = [
    titleCase
];

solutions.forEach(fn => {

    test(`${fn.name} converts "sHoRt AnD sToUt" to title case`, () => {
        expect(fn("sHoRt AnD sToUt")).toBe("Short And Stout");
    });

    test(`${fn.name} handles single word`, () => {
        expect(fn("hello")).toBe("Hello");
    });

    test(`${fn.name} handles all lowercase`, () => {
        expect(fn("hello world")).toBe("Hello World");
    });

    test(`${fn.name} handles all uppercase`, () => {
        expect(fn("HELLO WORLD")).toBe("Hello World");
    });

    test(`${fn.name} handles empty string`, () => {
        expect(fn("")).toBe("");
    });

});