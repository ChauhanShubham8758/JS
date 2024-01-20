// not done 4,8,16,12

//  1
// let str = "js string exercises"

// console.log(str.split(" ")
//     .map((item => item.charAt(0).toUpperCase() + item.substring(1))));

//  2
// let str = "COeeOlt"
// const vowels = ["a", "e", "i", "o", "u"];
// const initialCounts = {
//     a: 0,
//     e: 0,
//     i: 0,
//     o: 0,
//     u: 0
// }

// const counts = str.toLowerCase().split("").reduce((res, char) => {
//     if(vowels.includes(char)) {
//         res[char] += 1
//     }
//     return res
// }, initialCounts)

// console.log(counts)

//  3
// let arr = [
//   { name: "Ram", age: 17 },
//   { name: "Mohan", age: 30 },
//   { name: "Shyam", age: 15 },
//   { name: "Shyam", age: 17 },
// ];
// var res = 
// console.log(arr.sort((a, b) => a.age - b.age))

//  4
// let persons = [
//     { name: "Ram", age: 17, bdate: "12/06/2005", city: "Pune" },
//     { name: "Shyam", age: 18, bdate: "17/01/2024", city: "Delhi" },
//     { name: "Mohan", age: 30, bdate: "23/10/1998", city: "Mumbai" },
//     { name: "Shyam", age: 15, bdate: "29/04/1985", city: "Kolkata" },
//   ];
  
// console.log(persons.filter(person => person.age >= 18));

//  5
// const numbers = [1, 2, 625, 4, 99, 5, 16, 25, 17, 789, 20, 6, 36, 100];

// for (const num of numbers) {
//     const squared = num * num;
//     if (numbers.includes(squared)) {
//         console.log(`number ${num} => squared number ${squared}`);
//     }
// }


//  6
// const heros = [
//     { name: 'Spider-Man' },
//     { name: 'Thor' },
//     { name: 'Black Panther' },
//     { name: 'Captain Marvel' },
//     { name: 'Silver Surfer' }
//   ];
  
//   console.log( heros.map((hero, index) => ({
//     id: index,
//     hero: hero.name,
//   })));
  
//  7
// let nums = [11, 22, 33, 46, 75, 86, 97, 98];

// console.log(nums.filter((item) => item%2===0).map((item) => item*item))

// 9
// function filterObjects(inputArray, propName, targetValue) 
// {
//     return inputArray.filter(obj => obj.hasOwnProperty(propName) && obj[propName] === targetValue);
// }

// const users = [
//     { name: 'John', age: 30 },
//     { name: 'Mary', age: 25 },
//     { name: 'Bob', age: 40 }
// ];

// console.log(filterObjects(users, 'age', 30));

// 10
// function maxDiff(array) 
// {
//     if (array.length < 2) 
//     {
//         return null;
//     }

//     let maxDifference = array[1] - array[0];
//     let minElement = array[0];

//     for (let i = 1; i < array.length; i++) 
//     {
//         const currentDifference = array[i] - minElement;

        
//         if (currentDifference > maxDifference) 
//             maxDifference = currentDifference;

        
//         if (array[i] < minElement) 
//             minElement = array[i];
//     }
//     return maxDifference;
// }

// const maxDiff = (numbers = []) => {
//     if (numbers.length < 2)
//         return null;

//     const minNumber = Math.min(...numbers);
//     const maxNumber = Math.max(...numbers);
//     return maxNumber - minNumber;
// }

// console.log(maxDiff([2, 5, 7, 1, 9, 3]));

//11
// function first(array, n) 
// {
//     if (array.length === 0) 
//         return [];

//     return array.slice(0, n);
// }


// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));

//13
// function swapCase(inputString) 
// {
//     const swappedString = inputString.split('').map(char => 
//         {
//             if (char === char.toLowerCase()) {
//                 return char.toUpperCase();
//             } else {
//                 return char.toLowerCase();
//             }
//         }).join('');

//     return swappedString;
// }
// console.log(swapCase('Javascript IS nOt ReLated TO JAva.'));

//14
// function filterFalsyValues(inputArray)
// {
//     return inputArray.filter(value => ![null, 0, "", false, undefined, NaN].includes(value));
// }

// const filterFalsyValues = (values) => values.filter(Boolean);
// const testArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
// console.log(filterFalsyValues(testArray));

//15
// function findPairWithSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) 
//         for (let j = i + 1; j < nums.length; j++) 
//             if (nums[i] + nums[j] === target) 
//                 return [i, j];

//     return null;
// }

// const findPair = (nums, target) => nums.reduce((res, num, numIndex, arr) => {
//     const matchInd = arr.findIndex(elem => elem === target-num);
//     if (num < target && matchInd !== -1)
//         return [numIndex, matchInd].join(", ")

//     return res;
// }, "");

// const inputArray = [10, 20, 10, 40, 50, 60, 70];
// const targetSum = 50;
// // console.log(findPairWithSum(inputArray, targetSum)); 
// console.log(findPair(inputArray, targetSum)); 

// const obj1 = { "name": "John Doe", "age": 30 }
// const obj2 = { "address": { "street": "123 Main St", "city": "Anytown", "state": "CA", "zip": "12345" }
// }
// const res = {...obj1, ...obj2}
// console.log(res)

// const arr = [
//   { name: "Ram", age: 17, bdate: "12/06/2005", city: "Pune" },
//   { name: "Shyam", age: 17, bdate: "17/01/1989", city: "Delhi" },
//   { name: "Mohan", age: 30, bdate: "23/10/2000", city: "Pune" },
//   { name: "Shyam", age: 15, bdate: "29/04/1989", city: "Kolkata" },
//   { name: "Satish", age: 30, bdate: "17/01/1989", city: "Delhi" },
//   { name: "Sundar", age: 15, bdate: "29/04/1989", city: "Surat" },
// ];

// const groupBy = (array, key) =>
//   array.reduce(
//     (res, obj, _, arr) => ({
//       ...res,
//       [obj[key]]: arr.filter((item) => item[key] === obj[key]),
//     }),
//     {}
//   );
// console.log(groupBy(arr, "age"));

