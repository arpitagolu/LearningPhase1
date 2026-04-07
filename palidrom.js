function isPalidrome(str){
    let reverse =str.split(" ").reverse().join(" ");
    return str === reverse;
}
console.log(isPalidrome("madam"));
// this is palindrome check fn