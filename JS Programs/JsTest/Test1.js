// qs 1
// let str = "js string exercises"

// console.log(str.split(" ")
//     .map((item => item.charAt(0).toUpperCase() + item.substring(1))));

// qs 2
// let str = "COeeOlt"
// console.log(
//     str.toLowerCase().split("").reduce((acc,curr) =>
//     {
//         if(curr==='a' || curr==='e'|| curr==='i' || curr==='o' || curr==='u')
//         {
//             if(acc[curr])
//             {
//                 acc[curr] = acc[curr] +1;
//             }
//             else
//             {
//                 acc[curr] =1
//             }
//         }
//         return acc
//     },{})
// )

// qs 3
// let arr = [
//   { name: "Ram", age: 17 },
//   { name: "Mohan", age: 30 },
//   { name: "Shyam", age: 15 },
//   { name: "Shyam", age: 17 },
// ];
// var res = 
// console.log(arr.sort((a, b) => a.age - b.age))

// qs 4
// let persons = [
//     { name: "Ram", age: 17, bdate: "12/06/2005", city: "Pune" },
//     { name: "Shyam", age: 18, bdate: "17/01/2024", city: "Delhi" },
//     { name: "Mohan", age: 30, bdate: "23/10/1998", city: "Mumbai" },
//     { name: "Shyam", age: 15, bdate: "29/04/1985", city: "Kolkata" },
//   ];
  
// console.log(persons.filter(person => person.age >= 18));

// qs 5
// const numbers = [1, 2, 625, 4, 99, 5, 16, 25, 17, 789, 20, 6, 36, 100];

// for (const num of numbers) {
//     const squared = num * num;
//     if (numbers.includes(squared)) {
//         console.log(`number ${num} => squared number ${squared}`);
//     }
// }


// qs 6
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
  
// qs 7
// let nums = [11, 22, 33, 46, 75, 86, 97, 98];

// console.log(nums.filter((item) => item%2===0).map((item) => item*item))