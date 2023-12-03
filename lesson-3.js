// ЗАМИКАННЯ ФУНКЦІЇ

//Виконай рефакторинг makeDish так, щоб не потрібно було
// Щоразу передавати ім'я шефа.
//Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), що пам'ятає ім'я шефа під час її виклику

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

const makeShef = (shefName) => {
  return function (dish) {
    console.log(`${shefName} is cooking ${dish}`);
  };
};

const mango = makeShef("Mango");
mango("borsh");
console.dir(mango);
console.log(mango);
