// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    
    var stack = [].concat(0);
    
    for (let i = 1; i < A.length; i++){
        
        let topIndex = top(stack);
        
        if (B[topIndex] == 1 && B[i] == 0){
            
            while (topIndex != null && B[topIndex] == 1 && A[i] > A[topIndex]){
                stack.pop();
                topIndex = top(stack);
            }
            
            if (topIndex == null || B[topIndex] == 0){
                stack.push(i);
            }
            
        } else {
            stack.push(i);
        }
    }
    
    return stack.length;
}

function top (A){
    if (A.length == 0) return null;
    return A[A.length-1];
}
