const { countDown } = require('./countdown');

describe('countDown', () => {
    
    test('returns "takeoff!" when n is 0', () => {
        expect(countDown(0)).toBe("takeoff!");
    });

    test('returns "takeoff!" when counting down from 1', () => {
        expect(countDown(1)).toBe("takeoff!");
    });

    test('returns "takeoff!" when counting down from 3', () => {
        expect(countDown(3)).toBe("takeoff!");
    });

});