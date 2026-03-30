// Input: calculateFibonacci(10, "add")
// Output: 143
// Input: calculateFibonacci(10, "odd")
// Output: 10
// Input: calculateFibonacci(10, "even")
// Output: 10

function calculateFibonacci(num, cal){
    switch(cal){
        case "add":
            return addFibonacci(num);
        case "odd":
            return oddFibonacci(num);
        case "even":
            return evenFibonacci(num);
        default:
            return `The option ${cal} is incorrect. Please select "add"-"odd"-"even"`;
    }
}

function addFibonacci(num){
    let prev = 0, curr = 1, next, sum = 0;
    
    while(curr <= num){
        sum += curr;
        next = curr + prev; 
        prev = curr; 
        curr = next; 
    }
    
    return sum; 
}

function oddFibonacci(num){
    let prev = 0, curr = 1, next, sum = 0;
    
    while(curr <= num){
        if(curr % 2 !== 0) sum += curr;
        next = curr + prev;
        prev = curr;
        curr = next;
    }
    
    return sum;
}

function evenFibonacci(num){
    let prev = 2, curr = 8, next, sum = 0;
    while(prev <= num){
        sum += prev;
        next = 4 * curr + prev;
        prev = curr;
        curr = next;
    }
    return sum;
}

module.exports = {
    calculateFibonacci,
    addFibonacci,
    oddFibonacci,
    evenFibonacci
};