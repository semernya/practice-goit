//LESSON-1
// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10
// function convertTime(globalMinutes) {
//   const hours = Math.floor(globalMinutes / 60);
//   const modifiedHours = String(hours).padStart(2, 0);
//   const minutes = globalMinutes % 60;
//   const modifiedMinutes = String(minutes).padStart(2, 0);
//   return `${modifiedHours}:${modifiedMinutes}`;
// }
// console.log(convertTime(123));

//LESSON-2
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caclculateAverage(...args) {
//   let sum = 0;
//   let count = 0;
//   for (const arg of args) {
//     if (typeof arg === "number") {
//       count += 1;
//       sum += arg;
//     }
//   }
//   return sum / count;
// }
// console.log(caclculateAverage(1, 2, 3, "hello"));

// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value, який точно є числом.
// function changeEven(numbers, value) {
//   const newNumbers = [];
//   numbers.forEach((el, i) => {
//     if (numbers[i] % 2 === 0) {
//       el = numbers[i] + value;
//     }
//     newNumbers.push(el);
//   });

//   return newNumbers;
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map((title) => books.title);
// console.log(titles);
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];
// const names = students.map((student) => student.name);
// console.log(names);

//LESSON-3
// ЗАМИКАННЯ ФУНКЦІЇ
//Виконай рефакторинг makeDish так, щоб не потрібно було
// Щоразу передавати ім'я шефа.
//Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), що пам'ятає ім'я шефа під час її виклику
// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// const makeShef = (shefName) => {
//   return function (dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// };
// const mango = makeShef("Mango");
// mango("borsh");
// console.dir(mango);
// console.log(mango);
