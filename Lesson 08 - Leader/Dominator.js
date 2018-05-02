// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    
    let counters = [];
    
    let maxIndex = -1;
    let maxCount = -1;
    
    let max = Math.floor((A.length/2)+1);
    
    for (let i = 0; i < A.length; i++){
        
        if (counters[A[i]] == null){
            counters[A[i]] = 0;
        }
        counters[A[i]]++;
        
        if (counters[A[i]] > maxCount){
            maxIndex = i;
            maxCount = counters[A[i]];
            
            if (maxCount == max){
                break;
            }
        }
    }
    
    if (maxCount == max){
        return maxIndex;
    }
    
    return -1;
}
