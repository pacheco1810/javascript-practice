/**
 * Problem: Various Fibonacci sequence operations
 * Topic: Math
 * Difficulty: Medium
 */

// Input: fibonacciSequence(10)
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

function fibonacciSequence(count){
    let prev = 0, curr = 1, next, sequence = [];
    
    sequence.push(prev, curr); 
    if(count > 2){
        for(let i = 0; sequence.length < count; i++){
            next = curr + prev;
            sequence.push(next);
            prev = curr;
            curr = next; 
        }
    }
    
    return sequence.slice(0, count);
}

// Input: fibonacciSequenceSumNumber(10)
// Output: 20 (Fibonacci numbers less than 10: 1, 1, 2, 3, 5, 8 = 20)

function fibonacciSequenceSumNumber(count){
    let prev = 0, curr = 1, next, sum = 0;
    
    while(curr < count){
        sum += curr;
        next = curr + prev;
        prev = curr;
        curr = next;
    }
    
    return sum;
}

// Input: fibonacciEvenSequence(10)
// Output: [0, 2, 8, 34, 144, 610, 2584, 10946, 46368, 196418]

function fibonacciEvenSequence(count){
    let prev = 0, curr = 1, next, sequence = [];
    for(let i = 0; sequence.length < count; i++){
        if(prev % 2 === 0){
            sequence.push(prev);
        }
        next = curr + prev;
        prev = curr;
        curr = next; 
    }
    
    return sequence;
}

// Input: fibonacciEvenSequenceSumNumber(10)
// Output: 10 (Even Fibonacci numbers less than 10: 2, 8 = 10)

function fibonacciEvenSequenceSumNumber(count){
    let prev = 0, curr = 1, next, sum = 0;
    
    while(curr < count){
        if(curr % 2 === 0) sum += curr;
        next = curr + prev;
        prev = curr;
        curr = next;
    }
    
    return sum;
}

// Input: fibonacciOddSequence(10)
// Output: [1, 1, 3, 5, 13, 21, 55, 89, 233, 377]

function fibonacciOddSequence(count){
    let prev = 0, curr = 1, next, sequence = [];
    for(let i = 0; sequence.length < count; i++){
        if(prev % 2 !== 0){
            sequence.push(prev);
        }
        next = curr + prev;
        prev = curr;
        curr = next;
    }
    return sequence;
}

// Input: fibonacciOddSequenceSumNumber(10)
// Output: 10 (Odd Fibonacci numbers less than 10: 1, 1, 3, 5 = 10)

function fibonacciOddSequenceSumNumber(count){
    let prev = 0, curr = 1, next, sum = 0;
    
    while(curr < count){
        if(curr % 2 !== 0) sum += curr;
        next = curr + prev;
        prev = curr;
        curr = next;
    }
    
    return sum;
}

module.exports = {
    fibonacciSequence,
    fibonacciSequenceSumNumber,
    fibonacciEvenSequence,
    fibonacciEvenSequenceSumNumber,
    fibonacciOddSequence,
    fibonacciOddSequenceSumNumber
};