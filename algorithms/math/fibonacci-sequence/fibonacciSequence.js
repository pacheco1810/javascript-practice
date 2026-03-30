// Input: Fibonacci(10, false)
// Output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// Input: Fibonacci(10, true)
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

function Fibonacci(count, includeZero){
    let prev = 0, curr = 1, next, result=[];
    if(count <= 0) return result; 
    if(includeZero === true) {
        result.push(prev);
        count--;
    }
    for(let i = 0; i < count; i++){
        result.push(curr);
        next = curr + prev;
        prev = curr;
        curr = next;
    }
    return result;
}

module.exports = {
    Fibonacci
};