/**
 * Problem: Analyze nested arrays of numbers (max, min, sum, average, parity)
 * Topic: Recursion
 * Difficulty: Medium
 */

// Input: analyzeNestedNumbers([3, [5, 1], [7, [2, 9]], 4])
// Output: { max: 9, min: 1, sum: 31, count: 7, average: 4.428571428571429 }

function analyzeNestedNumbers(numbers){
    const result = numbers.reduce((acc, number) => {
        if(Array.isArray(number)){
            const result = analyzeNestedNumbers(number);
            acc.max = Math.max(acc.max, result.max);
            acc.min = Math.min(acc.min, result.min);
            acc.sum += result.sum;
            acc.count += result.count;
        } else {
            if(number > acc.max) acc.max = number;
            if(number < acc.min) acc.min = number;
            acc.sum += number;
            acc.count++;
        }
        return acc;
    }, {max: -Infinity, min: Infinity, sum: 0, count: 0});
    
    return {...result, average: result.sum / result.count};
}

// Input: groupNumbersByParityNested([3, [5, 1], [7, [2, 9]], 4])
// Output: { even: [2, 4], odd: [3, 5, 1, 7, 9] }

function groupNumbersByParityNested(numbers){
    return numbers.reduce((acc, number) => {
        if(Array.isArray(number)){
            const result = groupNumbersByParityNested(number);
            acc.even.push(...result.even);
            acc.odd.push(...result.odd);
        } else {
            if(number % 2 === 0) acc.even.push(number);
            else acc.odd.push(number); 
        }
        return acc;
    }, {even: [], odd: []});
}

// Input: sumParityNested([3, [5, 1], [7, [2, 9]], 4])
// Output: { even: 6, odd: 25 }

function sumParityNested(numbers){
    return numbers.reduce((acc, number) => {
        if(Array.isArray(number)){
            const result = sumParityNested(number);
            acc.even += result.even;
            acc.odd += result.odd;
        } else {
            if(number % 2 === 0) acc.even += number;
            else acc.odd += number;
        }
        return acc;
    }, {even: 0, odd: 0});
}

module.exports = {
    analyzeNestedNumbers,
    groupNumbersByParityNested,
    sumParityNested
};