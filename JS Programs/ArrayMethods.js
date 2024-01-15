//Splice
let arr = ["a", "b", "c"];
arr.splice(1, 1); // from 1 remove 1
arr.splice(0, 3, "Let's", "dance");// remove 3 first elements and replace 
arr.splice(2, 0, "complex", "language"); // when no need to remove and need to add other elements
arr.splice(-1, 0, 3, 4); // negatives are allowed

// slice
arr.slice(1, 3) ; // e,s (copy from 1 to 3)
alert( arr.slice(-2) ); // s,t (copy from -2 till the end)


// concat
//let arr = [1, 2];
var nn =  arr.concat([3, 4]) // returns new array with 1 to 4
console.log(arr) // will not changed
console.log(nn)
// array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat
let arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
  }; // 1,2,something,else

// arr.find(fn)
// arr.findIndex(fn)
let array = [1,2,3,4,5]
let outcome = array.find(item => item > 3) // 4 bcs when 4(true) found iteration stops
array.findIndex(item => item > 3) // same as find but returns index of
array.findLastIndex(item => item > 3) // 4 scan from right to left

//arr.filter(fn)
const words = ["shubham", "vrinda", "someradom", "type", "test"];
const longWords = words.filter(word => word.length > 6);

const num = [1,2,3,4,5,6]
const res = num.filter((item) => item % 2===0) //  returns a new array with all elements that returned true

// arr.map(fn)
const res2 = num.map((item) => item * 2) 
// Note  map(transform) vs filter(condition)
// Creates a new array with the same length as the original array, but with each element transformed by the callback function.
// Creates a new array with only the elements that pass the conditions implemented by the callback function.