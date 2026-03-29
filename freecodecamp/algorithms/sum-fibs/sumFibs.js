// Input: oddFibonacci(1000)
// Output: 1785
// Input: evenFibonacci(1000)
// Output: 798

function oddFibonacci(num){
    let prev = 0, curr = 1, next, sum = 0;
    
    if(num < 2) return num;
    
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
    oddFibonacci,
    evenFibonacci
};