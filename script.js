//print odd numbers in an array

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0; i<numbers.length; i++) {
//     if (numbers[i] % 2 !==0) {
//         console.log(numbers[i]);
//     }
// }//output:[1,3,5,7,9]

//print odd numbers in an array in IIFE(Immediately Invoked Function Expression)
//  (function() {
//     let numbers = [1,2,3,4,5,6,7,8,9,10];
//     for(let i=0; i<numbers.length; i++) {
//         if (numbers[i] % 2 !==0) {
//             console.log(numbers[i]);
//         }
//     }
// })();//output:[1,3,5,7,9]

//1.print odd numbers in an array in anonymous function

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// (function(arr){
//     arr.forEach(function(num){
//         if(num%2 !==0){
//             console.log(num);
//         }
//     });
// })(numbers);//output:[1,3,5,7,9]

// 2.Convert all the strings to title caps in a string array in IIFE

//   (function(){
//       let stringArray = ["raja bhaii" , "Rakesh bhaii" , "deepak bhaii" , "dinesh bhaii"];
    
//       for (let i = 0; i<stringArray.length; i++){
//           stringArray[i] = stringArray[i].toLowerCase().split(' ').map(function(word) {
//               return word.charAt(0).toUpperCase() + word.slice(1);

//           }).join(' ');

//       }
//       console.log(stringArray);
//       console.log("Bond Will Never End");
//   })(); //output:[ 'Raja Bhaii', 'Rakesh Bhaii', 'Deepak Bhaii', 'Dinesh Bhaii' ]

// 3.Sum of all numbers in an array in IIFE

// (function(){
//     let numbers = [1,2,3,4,5,6,7];
//     sum = 0
//     for (let i = 0; i<numbers.length; i++) {
//         sum += numbers[i];
//     }
//     console.log("The sum of all numbers in an array:"+sum)
// })();

// 4.Return all the prime numbers in an array in IIFE

//  (function() {
//      var numbers = [13,15,16,17,18,19,20];
//      var primeNumbers = [];

//      for (var i = 0; i < numbers.length; i++) {
//          if (isPrime(numbers[i])) {
//              primeNumbers.push(numbers[i]);
//          }
//      }

//      console.log("Prime numbers in the array:", primeNumbers);

//      function isPrime(num) {
//          if (num <= 1) {
//              return false;
//          }
//          for (var i = 2; i <= Math.sqrt(num); i++) {
//              if (num % i === 0) {
//                  return false;
//              }
//          }
//          return true;
//      }
//  })(); //output: [ 13, 17, 19 ]

// 5.Return all the palindromes in an array in IIFE

// (function(){
//     function isPalindrome (str){
//         str = str.toLowerCase().replace(/[^a-z0-9]/g,'');
//         return str === str.split('').reverse().join('');
//     }
//     function findPalindromesInArray(arr) {
//         return arr.filter(word => isPalindrome(word));

//     }
//     let wordsArray = ["radar", "level", "hello", "Funny", "civic"];
//     console.log("Palinddrome in an array:",findPalindromesInArray(wordsArray));
   
// })(); // output : [ 'radar', 'level', 'civic' ]

// 6.median of two sorted arrays in IIFE
// what is median=>For example, in the dataset [1, 3, 5, 7, 9]:
// The median is 5 because it is the middle value.
// In the dataset [2, 4, 6, 8]:
// The median is (4 + 6) / 2 = 5 because there is no single middle value, 
// so the average of the two middle values is taken.

//  let arr1 = [1, 34, 90];
//  let arr2 = [2, 4, 6];

//  let median = (function(arr1, arr2) {
//      let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
//      let length = mergedArray.length;
    
//      if (length % 2 === 0) {
//          return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
//      } else {
//          return mergedArray[Math.floor(length / 2)];
//      }
//  })(arr1, arr2);

//  console.log("Median of the two sorted arrays:", median); //output:VMedian of the two sorted arrays: 5

// 7.Remove duplicates from an array in IIFE javascript

//  let array = [1, 2, 2, 3, 4, 4, 5];

//  let uniqueArray = (function(arr) {
//      return arr.filter((value, index, self) => self.indexOf(value) === index);
//  })(array);

//  console.log("Array with duplicates removed:", uniqueArray); // output:[ 1, 2, 3, 4, 5 ]


//8. Rotate an array by k times

// let array = [1, 2, 3, 4, 5,8,9];
// let k = 3

// let rotatedArray = (function(arr, rotations) {
//     let len = arr.length;
//     rotations %= len;

   
//     return arr.slice(rotations).concat(arr.slice(0, rotations));
// })(array, k);

// console.log("Array after rotation:", rotatedArray);// output:[4,5,,8,9,1,2,3]

//2.a) Print odd numbers in an array in arrow function

// what is arrow function
// An arrow function is a concise way to write anonymous function expressions in JavaScript. 
// It was introduced in ECMAScript 6 (ES6) and provides a shorter syntax compared to traditional function expressions.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// array.filter(number => number % 2 !== 0).forEach(oddNumber => console.log(oddNumber));

// b)Convert all the strings to title caps in a string array

// const stringArray = ["raja bhaii" , "Rakesh bhaii" , "deepak bhaii" , "dinesh bhaii"];

// const titleCapsArray = stringArray.map(string => {
//     return string.toLowerCase().split(' ').map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
// });

// console.log(titleCapsArray); // output:[ 'Raja Bhaii', 'Rakesh Bhaii', 'Deepak Bhaii', 'Dinesh Bhaii' ]

// c) Sum of all numbers in an array


//  const array = [1, 2, 3, 4, 5];

//  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

//  console.log(sum); //output:

// d) Return all the prime numbers in an array

//  let array = [13,15,16,17,18,19,20];

//  let isPrime = num => {
//      for (let i = 2; i <= Math.sqrt(num); i++) {
//          if (num % i === 0) return false;
//      }
//      return num > 1;
//  };

//  let primeNumbers = array.filter(num => isPrime(num));

//  console.log(primeNumbers);// output:[ 13, 17, 19 ]

// e)Return all the palindromes in an array


// let array = ["radar", "level", "hello", "Funny", "civic"];

// let isPalindrome = str => {
//     let reversedStr = str.split("").reverse().join("");
//     return str === reversedStr;
// };

// let palindromes = array.filter(str => isPalindrome(str));

// console.log(palindromes); // Output: [ 'radar', 'level', 'civic' ]



