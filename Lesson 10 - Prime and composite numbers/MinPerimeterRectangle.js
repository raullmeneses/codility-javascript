// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    
    let i = 1;
    let minValue = Number.POSITIVE_INFINITY;
    
    while (i * i <= N){
        if (N % i == 0){
            let A = N / i;
            let value = 2 * (A + i);
            
            if (value < minValue);
                minValue = value;
        }
        i++;
    }
        
    return minValue;
}
