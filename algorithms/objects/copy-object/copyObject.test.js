const { 
    copyObjBySpread, 
    copyObjByAssign, 
    copyObjByJSON, 
    copyObjByStructured 
} = require('./copyObject');

const solutions = [
    { name: 'copyObjBySpread', fn: copyObjBySpread },
    { name: 'copyObjByAssign', fn: copyObjByAssign },
    { name: 'copyObjByJSON', fn: copyObjByJSON },
    { name: 'copyObjByStructured', fn: copyObjByStructured }
];

solutions.forEach(({ name, fn }) => {

    describe(`${name}`, () => {

        test('creates a copy of a simple object', () => {
            const original = { a: 1, b: 2 };
            const copy = fn(original);
            
            expect(copy).toEqual(original);
            expect(copy).not.toBe(original);
        });

        test('creates a copy of an object with nested properties', () => {
            const original = { a: 1, b: { c: 2 } };
            const copy = fn(original);
            
            expect(copy).toEqual(original);
            expect(copy).not.toBe(original);
        });

        test('copy does not affect original when modified (shallow)', () => {
            const original = { a: 1, b: 2 };
            const copy = fn(original);
            
            copy.a = 99;
            
            expect(original.a).toBe(1);
            expect(copy.a).toBe(99);
        });

        test('handles empty object', () => {
            const original = {};
            const copy = fn(original);
            
            expect(copy).toEqual({});
            expect(copy).not.toBe(original);
        });

        test('handles object with array property', () => {
            const original = { a: [1, 2, 3] };
            const copy = fn(original);
            
            expect(copy).toEqual(original);
            expect(copy).not.toBe(original);
        });

    });

});

// Tests específicos para JSON (no puede copiar funciones o undefined)
describe('copyObjByJSON specific', () => {
    
    test('JSON method cannot copy functions', () => {
        const original = { a: 1, fn: () => 'hello' };
        const copy = copyObjByJSON(original);
        
        expect(copy.fn).toBeUndefined();
    });

    test('JSON method cannot copy undefined', () => {
        const original = { a: 1, b: undefined };
        const copy = copyObjByJSON(original);
        
        expect(copy.b).toBeUndefined();
    });

});