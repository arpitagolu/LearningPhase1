function findMax(...arr){
    let max= arr[0];
    for(let num of arr){
        if( num >max )
            max= num ;
    }
    return max;
}
console.log(findMax("1","2","3","63","64","87","92"))
// finding the max. num.
