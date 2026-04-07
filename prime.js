function isPrime(num){
    if(num<2) return false;
    for (let i =2 ;i<num;i++){
        if( num%i==0)
            return false;
    }
    return true;
} 
console.log(isPrime("3","4","43","55","85","56","89"))
// is prime or not.