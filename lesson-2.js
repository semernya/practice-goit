//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

function caclculateAverage(...args) {
  let sum = 0;
  let count = 0;
  for (const arg of args) {
    if (typeof arg === "number") {
      count += 1;
      sum += arg;
    }
  }
  return sum / count;
}

console.log(caclculateAverage(1, 2, 3, "hello"));