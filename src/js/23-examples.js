// 1. Question: check string has valid parentheses ?
// ✔️Open brackets must be closed by same type of brackets

// ✔️Open Brackets must be closed in correct order

// Implementation approach 👇👇

// ✔️arr is an array where we push (‘(‘, ‘{‘, [‘)
// ✔️arr[arr.length - 1] checks for the last element in the array.
// ✔️when the char = “)”and if the last element in the array (stack) matches with the opposite of “(“, then pop the element.
// ✔️if the stack has no char left in the array, then the string is valid.

// function isValid(str) {
//   let brackets = {
//     '}': '{',
//     ']': '[',
//     ')': '(',
//   };

//   let arr = [];

//   for (let i = 0; i < str.length; i++) {
//     console.log(str);
//     if (str[i] === '}' || str[i] === ']' || str[i] === ')') {
//       arr.push(str[i]);
//     } else {
//       if (arr[arr.length - 1] === brackets[str[i]]) {
//         arr.pop();
//       } else return false;
//     }
//   }
//   return arr.length === 0 ? true : false;
// }

// console.log(isValid('()')); //true
// console.log(isValid('(}})')); //false
// console.log(isValid('({[]})')); //true

// 2. Find duplicates in Array
// const arr = [1, 8, 4, 8, 1, 2, 3, 5, 6, 5];

// function findDuplicates(arr) {
//   return arr.filter(
//     (currentValue, currentIndex) => arr.indexOf(currentValue) !== currentIndex
//   );
// }
// console.log(findDuplicates(arr)); //[8, 1, 5]

// //3.// ✔️Create a new array and push the unique values in it.
// // ✔️Loop through the array and check if the element is present in the new array.

// const arr2 = [1, 8, 4, 8, 1, 2, 3, 5, 6, 5];

// function uniqueValues(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) === -1) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(uniqueValues(arr2)); // [1, 8, 4, 2, 3, 5, 6]

// 4. Write a util function that can format string like this(replace capital letter with whiteSpace)
//let create a util function that will format string with regular expression

// function replaceCamelWithSpace(name) {
//   return name.replace(/\B([A-Z])\B/g, ' $1');
// }

// console.log(replaceCamelWithSpace('ali'));
// console.log(replaceCamelWithSpace('aliKate'));
// console.log(replaceCamelWithSpace('aliKatePara'));

//5 find the largest element
//if n=2 => result should be 300
//if n=1 => result should be 500

const data = [100, 200, 500, 300, 5, 1];

function getLargestNumber(n) {
  const sortedData = data.sort((a, b) => a - b);
  console.log(sortedData);
  const length = sortedData.length;
  console.log(length);
  return sortedData[length - n];
}

console.log(getLargestNumber(6));
