// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
    
    let stack = [];
    
    stack.push(H[0]);
    let count = 1;
    
    for (let i = 1; i < H.length; i++){
        let topo = top(stack);
        
        if (H[i] > topo){
            stack.push(H[i]);
            count++;
            
        }else if (H[i] < topo){
            
            while(topo != null && H[i] < topo){
                stack.pop();
                topo = top(stack);
            }
            
            if (topo == null || H[i] != topo){
                stack.push(H[i]);
                count++;
            }
        }
    }
    
    return count;
}

function top(stack){
    if (stack.length == 0) return null;
    return stack[stack.length-1];
}
