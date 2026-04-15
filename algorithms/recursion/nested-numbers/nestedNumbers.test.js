const { 
    analyzeNestedNumbers, 
    groupNumbersByParityNested, 
    sumParityNested,
    countByConditionNested,
    sumByConditionNested,
    groupByConditionNested
} = require('./nestedNumbers');

const data = [3, [5, 1], [7, [2, 9]], 4];

describe('analyzeNestedNumbers', () => {
    test('analyzes nested array correctly', () => {
        const result = analyzeNestedNumbers(data);
        
        expect(result.max).toBe(9);
        expect(result.min).toBe(1);
        expect(result.sum).toBe(31);
        expect(result.count).toBe(7);
        expect(result.average).toBeCloseTo(4.428571428571429);
    });

    test('handles flat array', () => {
        const result = analyzeNestedNumbers([1, 2, 3, 4]);
        
        expect(result.max).toBe(4);
        expect(result.min).toBe(1);
        expect(result.sum).toBe(10);
        expect(result.count).toBe(4);
        expect(result.average).toBe(2.5);
    });

    test('handles empty array', () => {
        const result = analyzeNestedNumbers([]);
        
        expect(result.max).toBe(-Infinity);
        expect(result.min).toBe(Infinity);
        expect(result.sum).toBe(0);
        expect(result.count).toBe(0);
        expect(result.average).toBeNaN();
    });
});

describe('groupNumbersByParityNested', () => {
    test('groups even and odd numbers from nested array', () => {
        const result = groupNumbersByParityNested(data);
        
        expect(result.even).toEqual([2, 4]);
        expect(result.odd).toEqual([3, 5, 1, 7, 9]);
    });

    test('handles flat array', () => {
        const result = groupNumbersByParityNested([1, 2, 3, 4]);
        
        expect(result.even).toEqual([2, 4]);
        expect(result.odd).toEqual([1, 3]);
    });
});

describe('sumParityNested', () => {
    test('sums even and odd numbers from nested array', () => {
        const result = sumParityNested(data);
        
        expect(result.even).toBe(6);
        expect(result.odd).toBe(25);
    });

    test('handles flat array', () => {
        const result = sumParityNested([1, 2, 3, 4]);
        
        expect(result.even).toBe(6);
        expect(result.odd).toBe(4);
    });
});

describe('countByConditionNested', () => {
    test('counts even numbers in nested array', () => {
        const result = countByConditionNested([1, [2, 3, 4]], n => n % 2 === 0);
        expect(result).toBe(2);
    });

    test('counts numbers greater than 2', () => {
        const result = countByConditionNested([1, [2, 3, 4]], n => n > 2);
        expect(result).toBe(2);
    });

    test('handles empty array', () => {
        const result = countByConditionNested([], n => n > 0);
        expect(result).toBe(0);
    });
});

describe('sumByConditionNested', () => {
    test('sums even numbers in nested array', () => {
        const result = sumByConditionNested([1, [2, 3, 4]], n => n % 2 === 0);
        expect(result).toBe(6);
    });

    test('sums numbers greater than 2', () => {
        const result = sumByConditionNested([1, [2, 3, 4]], n => n > 2);
        expect(result).toBe(7);
    });

    test('handles empty array', () => {
        const result = sumByConditionNested([], n => n > 0);
        expect(result).toBe(0);
    });
});

describe('groupByConditionNested', () => {
    test('groups even and odd numbers', () => {
        const result = groupByConditionNested([1, [2, 3, 4]], n => n % 2 === 0);
        expect(result).toEqual({ true: [2, 4], false: [1, 3] });
    });

    test('groups numbers greater than 2', () => {
        const result = groupByConditionNested([1, [2, 3, 4]], n => n > 2);
        expect(result).toEqual({ true: [3, 4], false: [1, 2] });
    });

    test('handles empty array', () => {
        const result = groupByConditionNested([], n => n > 0);
        expect(result).toEqual({ true: [], false: [] });
    });
});