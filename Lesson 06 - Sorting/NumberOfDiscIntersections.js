// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// Obs.: Correctness: 100%
//       Performance: 75%
//       Task Score:  87%
// Continuar.

function solution(A) {
    
    let leftOrdered = [];
    
    A.forEach((value, index) => {
        let leftValue = index-value;
        if (leftOrdered[leftValue] == null){
            leftOrdered[leftValue] = [];
        }
        leftOrdered[leftValue].push(index);
    });

    let leftValues = Object.keys(leftOrdered).sort((a,b) => a-b);

    let count = 0;
    for (let i = 0; i < A.length; i++){
        
        let achouI = false;
        for (let j = 0; j < leftValues.length; j++){
            
            if (leftValues[j] <= i+A[i]){
                
                count += leftOrdered[leftValues[j]].length;
                
                if (!achouI && leftValues[j] == i-A[i]){
                    count -= 1;
                    
                    let indexOf = leftOrdered[leftValues[j]].indexOf(i);
                    leftOrdered[leftValues[j]].splice(indexOf, 1);
                    if (leftOrdered[leftValues[j]].length == 0){
                        leftValues.splice(j, 1);
                        j--;
                    }
                    
                    achouI = true;
                }
                
                if (count > 10000000){
                    return -1;
                }
            }else{
                break;
            }
        }
    }
    
    return count;
}
