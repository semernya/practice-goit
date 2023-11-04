// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10

function convertTime(globalMinutes) {
  const hours = Math.floor(globalMinutes / 60);
  const modifiedHours = String(hours).padStart(2, 0);

  const minutes = globalMinutes % 60;
  const modifiedMinutes = String(minutes).padStart(2, 0);

  return `${modifiedHours}:${modifiedMinutes}`;
}

console.log(convertTime(123));
