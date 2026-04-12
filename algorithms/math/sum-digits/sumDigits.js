/**
 * Problem: Sum all digits of a number
 * Topic: Math
 * Difficulty: Easy
 */

// Input: sumDigitsByFor("2222")
// Output: 8

function sumDigitsByFor(numbers){
    let response = 0;
    for(let num = 0; num < numbers.length; num++){
        response += +numbers[num]; 
    }
    return response;
}

// Input: sumDigitsByWhile(2222)
// Output: 8

function sumDigitsByWhile(numbers){
    let response = 0;
    while(numbers > 0){
        response += numbers % 10; 
        numbers = Math.floor(numbers / 10);
    }
    return response;
}

// Input: sumDigitsByForEach("2222")
// Output: 8

function sumDigitsByForEach(numbers){
    let response = 0;
    numbers.split("").forEach((number) => {
        response += parseInt(number);
    });
    return response; 
}

// Input: sumDigitsByReduce("2222")
// Output: 8

function sumDigitsByReduce(numbers){
    return numbers.split("").reduce((acc, number) => {
        acc += Number(number);
        return acc; 
    }, 0);
}

module.exports = {
    sumDigitsByFor,
    sumDigitsByWhile,
    sumDigitsByForEach,
    sumDigitsByReduce
};