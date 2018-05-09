// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    
    let stack = [];
    
    for (let i = 0; i < S.length; i++){
        let charToCompare = null;
        
        let top = stack.length > 0 ? stack[stack.length - 1] : null;
        
        switch (top){
            case '(':
                charToCompare = ')';
                break;
        }
        
        if (charToCompare == S[i]){
            stack.pop();
        }else{
            stack.push(S[i]);
        }
    }
    
    return stack.length == 0 ? 1 : 0;
}
