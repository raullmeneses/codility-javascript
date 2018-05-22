// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    
    let max = 0;
    let baseValue = A[0];
    
    for (let i = 1; i < A.length; i++){
        
        let slice = A[i] - baseValue;
        if (slice < 0){
            baseValue = A[i];
            continue;
        }
        if (slice > max){
            max = slice;
        }
    }
        
    return max;
}
