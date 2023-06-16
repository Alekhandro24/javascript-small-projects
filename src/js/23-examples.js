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

// const data = [100, 200, 500, 300, 5, 1];

// function getLargestNumber(n) {
//   const sortedData = data.sort((a, b) => a - b);
//   console.log(sortedData);
//   const length = sortedData.length;
//   console.log(length);
//   return sortedData[length - n];
// }

// console.log(getLargestNumber(6));

//6 Class

//----1
//   class Company {
//   constructor(name, country) {
//     this.name = name;
//     this.country = country;
//   }
// }

// const tesla = new Company('Tesla', 'USA');
// const honda = new Company('Honda', 'Japan');

// console.log(tesla.country);
// console.log(honda.country);

//----2
// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//   getFullName() {
//     return this.name + ' ' + this.surname;
//   }
// }

// const adam = new Person('Adam', 'USA');

// console.log(adam.name);
// console.log(adam.surname);
// console.log(adam.getFullName());

//----3 Class instatiation - what does it mean?
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
/*generating an object from a class is called class instantiation*/

const adam = new Person('Adam', 15);
/*adam object is an instance of Person class */
const eve = new Person('Eve', 18);
/*adam instance of Personclass */

//----4
// class Car {
//   constructor(emoji, speed) {
//     this.emoji = emoji;
//     this.speed = speed;
//   }
//   addToPage() {
//     let marquee = document.createElement('MARQUEE');
//     marquee.innerText = this.emoji;
//     marquee.scrollAmount = this.speed;
//     document.body.appendChild(marquee);
//   }
// }

// const automobile = new Car('🚗', 3);
// automobile.addToPage();

// const fireEngine = new Car('🚒', 6);
// fireEngine.addToPage();

// const policeCar = new Car('🚓	', 5);
// policeCar.addToPage();

// const truck = new Car('🚚	', 4);
// truck.addToPage();

// const bus = new Car('🚌', 2);
// bus.addToPage();

//----5 What is tupeof for a class
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   getarea() {
//     return Math.PI * this.radius ** 2;
//   }
// }
// console.log(typeof Circle); // function

// // Let's use it
// const circle1 = new Circle(4);
// console.log(circle1.getarea()); //50.26548245743669
// console.log(circle1); // object

//----6 class constructor default values
// class Player {
//   constructor(name, points = 0) {
//     this.name = name;
//     this.points = points;
//   }
// }

// const tatum = new Player('Tatum', 600);
// const curry = new Player('Curry', 850);
// const me = new Player('Ali');
// console.log(tatum.points);
// console.log(curry.points);
// console.log(me.points);

// //----7 class  super keyword
// class Person1 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class footballer extends Person1 {
//   constructor(name, age, position) {
//     super(name, age);
//     this.position = position;
//   }
// }

// const bale = new footballer('Gareth Bale', 33, 'Right Winger');
// console.log('age', bale.age);
// console.log('name', bale.name);
// console.log('position', bale.position);

//----8 class  super keyword2

// class Person2 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class FootBaller2 extends Person2 {
//   constructor(name, age, position) {
//     super(name, age);
//     this.position = position;
//   }
// }
// console.log(new FootBaller2('Lionel', 35, 'Forward'));

// class President extends Person2 {
//   constructor(name, age, country) {
//     super(name, age);
//     this.country = country;
//   }
// }
// console.log(new President('Recep', 68, 'Turkiye'));

//----9 static property in a class

// class Fruit {
//   static count = 0;
//   constructor() {
//     Fruit.count++;
//   }
// }
// const apple = new Fruit();
// const pear = new Fruit();

// console.log('Fruit.count', Fruit.count);

//----10 static method2 in a class
// class Car2 {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   static comparePrice(a, b) {
//     if (a.price > b.price) {
//       return `${a.name} costs more`;
//     } else if (b.price > a.price) {
//       return `${b.name} costs more`;
//     } else return `both same price`;
//   }
// }

// const audi = new Car2('Audi', 11);
// const tata = new Car2('Tata', 9);
// const togg = new Car2('Togg', 9);
// //togg is an object
// console.log('Car.com', Car2.comparePrice(tata, togg));
// //static belongs to class not to object

//----11 calling a static method
// class Person3 {
//   constructor(name, age) {
//     this.name - name;
//     this.age = age;
//   }
//   static compareAges(person1, person2) {
//     if (person1.age == person2.age) return true;
//     return false;
//   }
// }

// const alil = new Person3('Many', 81);
// const lea = new Person3('Bruce', 20);

// console.log(Person3.compareAges(alil, lea));

//----12
// class Vehicle {
//   hasEngine = true;
// }

// class Bus extends Vehicle {}

// class Boat extends Vehicle {}

// const a = new Bus();
// console.log('a.hasEngine', a.hasEngine);

// const b = new Boat();
// console.log('b.hasEngine', b.hasEngine);

//-------------13
// const p1 = new Promise(function () {
//   //pending
//   //fulfilled
//   //rejected
// });
// console.log('p1', p1);

// const p2 = new Promise((resolve, reject) => {
//   fetch('https://api.itgid.info/api/delay')
//     .then(res => {
//       // console.log('res', res);
//       if (res.ok) resolve(res.json());
//       else reject(res);
//     })
//     .catch(error => reject(error));
// });
// console.log('p2', p2);

// p2.then(f1, f2);

// function f1(data) {
//   console.log('p2', p2);
//   console.log('success');
//   console.log('data', data);
// }
// function f2() {
//   console.log('p2', p2);
//   console.log('problem');
//   console.log('data', data);
// }

// console.log('p2', p2);
// console.log('======');

//////////////
// const f = fetch('https://api.itgid.info/api/test');
// console.log('f', f);
// f.then(res => res.json()).then(data => console.log('data', data));

// fetch('https://api.itgid.info/api/delay')
//   .then(res => {
//     // console.log('res', res);
//     return res.json();
//   })
//   .then(data => {
//     console.log('data', data);
//     return fetch('https://api.itgid.info/api/test');
//   })
//   .then(res => res.json())
//   .then(data => console.log('data', data));

//////////////
// const API_KEY = '6b76ab7dc1d4a505';
// const requestHeaders = new Headers();
// requestHeaders.append('apikey', API_KEY);

// fetch('https://api.itgid.info/api/27/random/random-number?min=1&max=10', {
//   headers: requestHeaders,
// })
//   .then(res => res.json())
//   .then(data => {
//     console.log('res.data', data);
//     return fetch(
//       'https://api.itgid.info/api/27/employee/read/' +
//         data[('random-number', { headers: requestHeaders })]
//     );
//   })
//   .then(res => res.json())
//   .then(data => console.log('data', data));

//PromiseAll

// const promise_3 = new Promise((resolve, reject) => {
//   fetch('https://api.itgid.info/api/test').then(data => resolve(data.json()));
// });

// const promise_4 = new Promise((resolve, reject) => {
//   fetch('https://api.itgid.info/api/delay').then(data => resolve(data.json()));
// });

// Promise.all([promise_3, promise_4]).then(data => {
//   console.log('data', data);
// });

//-----------14. Fetch countries

// fetch('https://restcountries.com/v3.1/all')
//   .then(res => res.json())
//   .then(data => showInfo(data));

// function showInfo(countries) {
//   countries.sort((country1, country2) => {
//     country1 = country1.name.common;
//     country2 = country2.name.common;
//     if (country1 < country2) {
//       return -1;
//     } else if (country1 > country2) {
//       return 1;
//     }
//     return 0;
//   });
//   for (let i = 0; i < 10; i++) {
//     console.log('country', countries[i].name.common);
//   }
// }

// const b = [4, 5, 8, 9, 6, 3, 2];
// b.sort((a, b) => a - b);
// console.log('b', b);

//-----------15. Fetch countries
// let countries = ['USA', 'Ukraine', 'Great BritaIn', 'Italy', 'Spain', 'Greece'];

// countries.sort();
// countries.forEach(function (item) {
//   let opt = document.createElement('option');
//   opt.text = item;
//   opt.value = item;
//   slctCoiuntries.appendChild(opt);
// });

// //-----------15.1 => JS filtering in an api response with textbox
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then(users => showUsers(users));

// function showUsers(users) {
//   const ul = document.createElement('ul');
//   for (let user of users) {
//     const li = document.createElement('li');
//     li.innerText = user.name;
//     ul.appendChild(li);
//   }
//   result.appendChild(ul);
// }
// textBox.oninput = filterUsers;

// function filterUsers() {
//   const liElements = document.querySelectorAll('li');
//   for (let li of liElements) {
//     const currentName = li.innerText.toLowerCase();
//     const searchText = this.value.toLowerCase();

//     if (!currentName.includes(searchText)) {
//       li.setAttribute('hidden', true);
//     } else li.removeAttribute('hidden');
//   }
// }

//-----------16. Some method for array
// const nestedArray = [1, [2, 3], [4, [5, 6]]];

// const flattened = nestedArray.flat(1);
// console.log('flattened', flattened); //[1, 2, 3, 4, Array(2)]

//-----------17.radio buttons
// let radios = document.getElementsByName('color');

// for (let i = 0; i < radios.length; i++) {
//   radios[i].onclick = function () {
//     let target = document.body;
//     target.style.backgroundColor = radios[i].value;
//   };
// }

// //-----------18. Задачі на JavaScript рекурсивна функція чисел Фібоначчі - числова послідовність, де кожне наступне число, починаючи з 3-го, == сумі двох попередніх

// const fib = e => {
//   if (e <= 1) {
//     return e;
//   } else {
//     return fib(e - 1) + fib(e - 2);
//   }
// };
// console.log('fib', fib(3));

// 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610

//-----------19 Числа привести до квадрату та додати
// function squareSum(numbers) {
//   let mas = [];
//   for (let i = 0; i < numbers.length; i++) {
//     let num = numbers[i] * numbers[i];
//     mas.push(num);
//     console.log('num', num);
//   }
//   let sum = mas.reduce((a, b) => a + b);
//   console.log('sum', sum);
// }

// squareSum([2, 4]); // 20
// squareSum([3, 4, 5]); // 50
// squareSum([5, 6, 7]); // 110

// function squareSum(numbers) {
//   return numbers
//     .map(item => (item *= item))
//     .reduce((sum, counter) => sum + counter);
// }
// console.log(squareSum([2, 4])); // 20

//-----------20 How To Solve This Apple Coding Interview Question With Recursion

// const str = 'hello';

// function solution(str) {
//   //base case
//   if (str.length === 0) return '';

//   //recursion
//   return str[str.length - 1] + solution(str.slice(0, str.length - 1));
// }
// console.log(solution(str));

//-----------21
// let species = ['Animals', 'Vegetables'];
// let animals = ['Lion', 'Cow', 'Horse', 'Turtle'];
// let vegetables = ['Cucumber', 'Pukin', 'Potato', 'Tomato'];

// let slct1 = document.getElementById('slct1');
// let slct2 = document.getElementById('slct2');

// species.forEach(function addSpecies(item) {
//   let option = document.createElement('option');
//   option.text = item;
//   option.value = item;
//   slct1.appendChild(option);
// });

// slct1.onchange = function () {
//   slct2.innerHTML = '<option></option>';
//   if (this.value === 'Animals') {
//     addToSlct2(animals);
//   }
//   if (this.value === 'Vegetables') {
//     addToSlct2(vegetables);
//   }
// };

// function addToSlct2(arr) {
//   arr.forEach(function (item) {
//     let option = document.createElement('option');
//     option.text = item;
//     option.text = item;
//     slct2.appendChild(option);
//   });
// }

//-----------22 Object
//Partial Shallow Copy, Shallow Copy, Deep Copy

// const person = {
//   name: 'Adam',
//   friends: ['Can', 'Atin'],
// };

// //Shallow Copy
// const sc = person;
// console.log('sc', sc);

// //Partial Shallow Copy
// const psc = { ...person };
// console.log('psc', psc);

// // Deep Copy
// dc = JSON.parse(JSON.stringify(person));
// console.log('dc', dc);

// //testing

// person.name = 'Buscan';
// console.log('person.name', person.name); //person.name Buscan
// console.log('sc.name', sc.name); //sc.name Buscan
// console.log('psc.name', psc.name); //psc.name Adam
// console.log('dc.name', dc.name); //dc.name Adam

// person.friends.push('Ali');
// console.log('person.friends', person.friends); //['Can', 'Atin', 'Ali']
// console.log('sc.friends', sc.friends); //['Can', 'Atin', 'Ali']
// console.log('psc.friends', psc.friends); //['Can', 'Atin', 'Ali']
// console.log('dc.friends', dc.friends); //['Can', 'Atin']

////*---2  const a = {
//   test: { t: '11' },
// };

// const b = structuredClone(a);
// b.test.t = '22';
// console.log('a', a.test.t);
// console.log('b', b.test.t);

////*---3
//shallow copy object

// const object = { name: 'Ali' };
// const newObject = object;
// object.name = 'Eva';
// console.log('object', object); // {name: 'Eva'}
// console.log('newObject', newObject); //{name: 'Eva'}

// //deep object
// const obj = { name: 'Anna', surname: 'Evalin' };
// const newObj = { ...obj };
// obj.name = 'Eva';
// console.log('obj', obj); // {name: 'Eva', surname: 'Evalin'}
// console.log('newObj', newObj); //{name: 'Anna', surname: 'Evalin'}

// obj.lastname = 'Clarson';
// console.log('obj', obj); //{name: 'Eva', surname: 'Evalin', lastname: 'Clarson'}
// console.log('newObj', newObj); //{name: 'Anna', surname: 'Evalin'}

////*---4 array
//shallow copy
// const array = ['Adam'];
// const newArray = array;
// array[0] = 'Eva';
// console.log('array', array); //['Eva']
// console.log('newArray', newArray); //['Eva']

// //deep
// const arr = ['Adam'];
// const newArr = [...arr];
// arr[0] = 'Eva';
// arr.push('Lin');
// console.log('arr', arr); //['Eva', 'Lin'];
// console.log('newArr', newArr); //['Adam'];

// -----------
// const animal = ['1', '2', '3'];
// const copy = animal.slice();
// copy.fill('7');
// console.log('copy', copy); //['7', '7', '7']
// console.log('animal', animal); // ['1', '2', '3']

// copy.push('9');
// console.log('copy', copy); //['7', '7', '7', '9']
// console.log('animal', animal); // ['1', '2', '3']

// const wrongCopy = animal;
// wrongCopy.fill('8');
// console.log('wrongCopy', wrongCopy); // ['8', '8', '8']
// console.log('animals', animal); // ['8', '8', '8']

// ------- copyWithin =>  target, start, end
// const e = ['7', '7', '9', '8', '10', '10', '11', '11'];
// e.copyWithin(0, 2, 4);
// //target, start => (until)end
// console.log('e', e); //['9', '8', '9', '8', '10', '10', '11', '11']

// const flo = ['1', '2', '3', '4'];
// // flo.copyWithin(1, 0);
// // // copy index 0 to index 1
// // console.log('flo', flo); //['1', '1', '2'];

// // flo.copyWithin(2, 0);
// // //copy index 0 to index 2
// // console.log('flo', flo); // ['1', '2', '1', '2']

// flo.copyWithin(0, 2, 4);
// console.log('flo', flo); //['3', '4', '3', '4']

// ------- with
// const bc = ['1', '2', '3'];
// //indexes    0    1    2
// const ad = bc.with(1, '4');
// console.log('bc', bc);
// console.log('ad', ad);

// ------- fill => value,start,end
// const adc = ['1', '2', '3', '5', '6'];
// //indexes     0    1    2
// adc.fill('4');
// console.log('adc', adc); // ['4', '4', '4', '4', '4']

// adc.fill('4', 1); //from index 1
// console.log('adc', adc); // ['1', '4', '4', '4', '4']

// adc.fill('4', 0, 3); //from 0 until 3
// console.log('adc', adc); // ['4', '4', '4', '5', '6']

//-----------23
// let month = 1;

// switch (month) {
//   case 1:
//   case 2:
//   case 12:
//     console.log('Winter');
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log('Spring');
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log('Summer');
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log('Autumn');
//     break;

//   default:
//     console.log('error', error);
// }

//-----------24 Нові методи масивів в JavaScript
const numbers = [5, 8, 1, 3, 4, 7, 9];

//sort && toSorted
//change
// const sorted = numbers.sort((a, b) => a - b);
// console.log('sorted', sorted); //[1, 3, 4, 5, 7, 8, 9]
// console.log('numbers', numbers); //[1, 3, 4, 5, 7, 8, 9]

//doesn't change original array
// const sortedNumbers = numbers.toSorted((a, b) => a - b);
// console.log('sortedNumbers', sortedNumbers);//[1, 3, 4, 5, 7, 8, 9]
// console.log('numbers', numbers);//[5, 8, 1, 3, 4, 7, 9]

//revers && toReversed
//change
// const reversed = numbers.reverse();
// console.log('reversed', reversed); //[9, 7, 4, 3, 1, 8, 5]
// console.log('numbers', numbers); //[9, 7, 4, 3, 1, 8, 5]

//doesn't change original array
// const reversedNumbers = numbers.toReversed();
// console.log('reversedNumbers', reversedNumbers);//[9, 7, 4, 3, 1, 8, 5]
// console.log('numbers', numbers);//[5, 8, 1, 3, 4, 7, 9]

//splice && toSpliced
//change
// const spliced = numbers.splice(2, 2);
// console.log('spliced', spliced); //[1, 3]
// console.log('numbers', numbers); //[5, 8, 4, 7, 9]

//doesn't change original array
// const splicedNumbers = numbers.toSpliced(2, 2);
// console.log('splicedNumbers', splicedNumbers); //[5, 8, 4, 7, 9]
// console.log('numbers', numbers); //[5, 8, 1, 3, 4, 7, 9]

//with
const replaceWithNumbers = numbers.with(3, 6);
console.log('replaceWithNumbers', replaceWithNumbers); //[5, 8, 1, 6, 4, 7, 9]
console.log('numbers', numbers); //[5, 8, 1, 3, 4, 7, 9]
