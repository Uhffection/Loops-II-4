// Write your code below
function findCumulativeSum(number) {
    let sum = 0;
    
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    
    return sum;
}

console.log(findCumulativeSum(10))

// While Loop form (for practice)

function findCumulativeSum2(number) {
    let sum = 0
    let i = 0

    while (i <= number) {
        sum += i;
        i++;
    }
    
    return sum;
}

console.log(findCumulativeSum2(10))

// Can also write both without console logging the function and instead changing the return sum lines to 
// console.log(sum) and just directly invoking the function outside of the function declaration