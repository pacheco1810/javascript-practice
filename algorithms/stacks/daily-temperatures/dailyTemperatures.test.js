const { dailyTemperatures } = require('./dailyTemperatures');

describe('dailyTemperatures', () => {

    test('returns [1,1,4,2,1,1,0,0] for [73,74,75,71,69,72,76,73]', () => {
        expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
    });

    test('returns [1,1,1,0] for [30,40,50,60]', () => {
        expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
    });

    test('returns [0,0,0,0] for [60,50,40,30]', () => {
        expect(dailyTemperatures([60, 50, 40, 30])).toEqual([0, 0, 0, 0]);
    });

    test('returns [0] for single temperature', () => {
        expect(dailyTemperatures([75])).toEqual([0]);
    });

    test('handles empty array', () => {
        expect(dailyTemperatures([])).toEqual([]);
    });

    test('returns [1,0] for [50,60]', () => {
        expect(dailyTemperatures([50, 60])).toEqual([1, 0]);
    });

    test('returns [0,0] for [60,50]', () => {
        expect(dailyTemperatures([60, 50])).toEqual([0, 0]);
    });

    test('returns [1,1,0] for [55,56,57]', () => {
        expect(dailyTemperatures([55, 56, 57])).toEqual([1, 1, 0]);
    });

});