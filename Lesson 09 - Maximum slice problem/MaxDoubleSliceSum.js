// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    
    let maxEnding = [];
    maxEnding.push(0);
    
    let maxBeginning = [];
    maxBeginning[A.length-1] = 0
    
    for (let i = 1; i < A.length-2; i++){
        maxEnding[i] = Math.max(0, maxEnding[i-1]+A[i]);
    }
    
    for (let i = A.length-2; i >= 2; i--){
        maxBeginning[i] = Math.max(0, maxBeginning[i+1]+A[i]);
    }
    
    let maxSum = 0;
    for (let i = 0; i < A.length-2; i++){
        let sum = maxEnding[i] + maxBeginning[i+2];
        if (sum > maxSum){
            maxSum = sum;
        }
    }
    
    return maxSum;
}