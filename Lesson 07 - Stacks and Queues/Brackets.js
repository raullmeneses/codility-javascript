// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    
    Array.prototype.top = function(){
        if (this.length == 0)
            return null;
        return this[this.length-1];  
    };
        
    let stack = [];
    
    for (let i = 0; i < S.length; i++){
        let charToCompare = null;
        
        switch (stack.top()){
            case '(':
                charToCompare = ')';
                break;
            case '{':
                charToCompare = '}';
                break;
            case '[':
                charToCompare = ']';
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
