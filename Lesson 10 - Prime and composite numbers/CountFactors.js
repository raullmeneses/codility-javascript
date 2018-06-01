// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    
    let i = 1;
    let result = 0;
    
    while (i * i < N){
        if (N % i == 0){
            result += 2;
        }
        i++;
    }
    
    if (i * i == N)
        result++;
        
    return result;
}
