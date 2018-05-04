// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
/*
Realizei essa solução depois que descobri que:
Se eu tenho um array A com um líder x, então pra qualquer
divisão de A em duas partes - A(0, i), A(i, N-1) - se as
duas partes tiverem líderes e esses líderes forem
iguais, os líderes têm que ser x.
Essa solução computou 100%.
*/

function solution(A) {
        
    let counters = [];
    
    let max = Math.floor((A.length/2)+1);
    let leader = -1;
    
    for (let i = 0; i < A.length; i++){
        if (counters[A[i]] == null){
            counters[A[i]] = 0;
        }
        counters[A[i]]++;
        
        if (counters[A[i]] == max){
            leader = A[i];
        }
    }
    
    if (leader == -1) return 0;
   
    let leaderCount = counters[leader];
    let leadersOnLeft = 0;
    
    let matches = 0;
    
    for (let i = 0; i < A.length-1; i++){
        if (A[i] == leader){
            leadersOnLeft++;
        }
        
        let leadersOnRight = leaderCount - leadersOnLeft;
        
        let moreThanHalfLeft = Math.floor( ((i+1)/2)+1 );
        let moreThanHalfRight = Math.floor( ( (A.length-(i+1))/2 )+1 );
        
        if (leadersOnLeft >= moreThanHalfLeft && leadersOnRight >= moreThanHalfRight){
            matches++;
        }
    }
    
    return matches;
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// Task Score: 88%
// Correctness: 100%
// Performance: 75%
// Acho que eu conseguiria melhorar pra 100%, mas aí
//descobrí a lógica do código anterior.

function solution(A) {
        
    let counters = [];
    
    for (let i = 0; i < A.length; i++){
        
        if (counters[A[i]] == null){
            counters[A[i]] = 0;
        }
        counters[A[i]]++;
    }
    
    let keys = Object.keys(counters).sort((a,b) => counters[a]-counters[b]);
    
    let newCounters = [];
    let maxNewValue = -1;
    let maxNewCount = -1;
    
    let result = 0;
    
    for (let i = 0; i < A.length-1; i++){
        
        if (newCounters[A[i]] == null){
            newCounters[A[i]] = 0;
        }
        newCounters[A[i]]++;
        
        if (newCounters[A[i]] > maxNewCount){
            maxNewValue = A[i];
            maxNewCount = newCounters[A[i]];
        }
        
        counters[A[i]]--;
        if (counters[A[i]] == 0){
            keys.splice(keys.indexOf(String(A[i])), 1);
        }
        
        let max = Math.floor(((A.length-(i+1))/2)+1);
        let maxNew = Math.floor(((i+1)/2)+1);
        
        if (counters[keys[keys.length-1]] >= max &&
            maxNewCount >= maxNew &&
            maxNewValue == keys[keys.length-1]){
            result++
        }
    }
    
    return result;
}
