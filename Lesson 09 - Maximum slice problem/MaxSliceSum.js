// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    
    let maxEnding = 0;
    let maxSlice = 0;
    let maxValue = Number.NEGATIVE_INFINITY;
    
    for (let i = 0; i < A.length; i++){
        maxEnding = Math.max(0, maxEnding+A[i]);
        maxSlice = Math.max(maxEnding, maxSlice);
        
        if(A[i] > maxValue){
            maxValue = A[i];
        }
    }
    
    if (maxValue < 0)
        return maxValue;
        
    return maxSlice;
}
