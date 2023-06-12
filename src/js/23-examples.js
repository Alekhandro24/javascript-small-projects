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
class Vehicle {
  hasEngine = true;
}

class Bus extends Vehicle {}

class Boat extends Vehicle {}

const a = new Bus();
console.log('a.hasEngine', a.hasEngine);

const b = new Boat();
console.log('b.hasEngine', b.hasEngine);
