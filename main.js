// Write your code below
function findCumulativeSum(number) {
    let sum = 0;
    
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    
    return sum;
}

console.log(findCumulativeSum(500))