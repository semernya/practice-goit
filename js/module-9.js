/* JSON
JSON (JavaScript Object Notation) — сучасний текстовий формат зберігання 
й передачі структурованих даних у текстовій формі. 
Саме в цьому форматі дані будуть приходити і відправлятися на сервер, 
зберігатися в локальному сховищі і тд.
Синтаксис JSON - об'єктоподібний, але JSON - не об'єкт, а його рядкове відображення.

Приклад:
{
  "name": "Josh",
  "weight": 175,
  "age": 30,
  "eyecolor": "brown",
  "isHappy": true,
  "cars": ["Chevy", "Honda"],
  "favoriteBook": {
    "title": "The Last Kingdom",
    "author": "Bernard Cornwell",
    "rating": 8.38
  }
}

- ключи - тільки рядки, в подвійних лапках
- значення ключів — також тільки в подвійних лапках.
- тру/фолс записуються як і в JavaScript
- числа - буль-які рацінальні
- у JSON немає коми після останньої вл-сті об'єкта
- значення властивостей може бути спеціальним значенням null, але не може бути undefined.
- ф-ції не можна зберігати у JSON, так як JSON передбачений лише для даних, 
    а не для методів обробки даних.

Перетворення в JSON:
JSON.stringify(value) - метод, перетворює прийняте значення у JSON.
                        Значенням може бути число, буль, null, масив, об'єкт. 
- методи об'єкта в JSON не потраплять, вони будуть проігноровані.
- undefined - буде при спрбі перетворити ф-цію в JSON
*/
const dog = {
  name: "Mango",
  age: 3,
  isGoodBoy: true,
  bark() {
    console.log("Woof!");
  },
};
const json = JSON.stringify(dog);
console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

const json1 = JSON.stringify(() => console.log("Well, this is awkward"));
console.log(json); // undefined

/* Парсинг із JSON - зворотня дія
JSON.parse(value) - метод, приймє JSON-рядок і перетворить його у JavaScript дані. */
console.log(JSON.parse("5")); // 5
console.log(JSON.parse("false")); // false
console.log(JSON.parse("null")); // null
//отримаємо об'єкт після парсингу складного типу даних json2:
const json2 = '{"name":"Mango","age":3,"isGoodBoy":true}';
const dog2 = JSON.parse(json);
console.log(dog2); // {name: "Mango", age: 3, isGoodBoy: true}
console.log(dog2.name); // "Mango"

/* Обробка помилок:
Якщо методу  JSON.parse() передати невалідний JSON, буде помилка, після якої код не виконається.
1. парсинг рядка:
    const data = JSON.parse("Well, this is awkward");
2. парсинг невалідного об'єкта:
    const data = JSON.parse('{username: "Mango"}'); - немає подв. лапок

try...catch - конструкція, що дозволить ловити, обробляти помилки в скрипті
try {
  // Code that may throw a runtime error
} catch (error) {
  // Error handling
}
1. виконується код в try
2. якщо немає помилок, catch ігнорується
3. якщо в try помилки, його виконання зупиняється, перехід до catch
Використовуючи try...catch, можна обробити цей виняток так, щоб скрипт за межами цієї конструкції
продовжив працювати, навіть у разі помилки.

Приклад:
try {
  const data = JSON.parse("Well, this is awkward");
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
}
console.log("✅ This is fine, we handled parsing error in try...catch");

Помилки
error - об'єкт помилки з інфою про те, що сталося. Має такі вл-сті:
1. name — тип помилки. Для помилки парсингу — це SyntaxError.
2. message — повідомлення про деталі помилки.
3. stack — стек викликів функцій на момент помилки. Юзається для налагодження.

В JavaScript код виконується тільки тоді, коли інтерпретатор його прочитав 
і переконався, що його можна виконати.
*/

/* Локальне сховище - механізм для сейву даних у браузері  клієнта в режимі лок.сховища
Дані в ньому зберігаються в JSON форматі під певним ключем. (дані розміром від 5 Мб до 10 Мб)
Дані видаляються зі сховища тільки через налаштування браузера/вручну.
Дані зберігаються при закритті вкладки/вікна браузера і тд.
У кожного сайта своє локальне сховище.
*/

//Доступ до сховища через об'єкт window:
console.log(window.localStorage); //поверне довжину сховища і об'єкт
console.log(localStorage); //Доступ до сховища напряму
//цей тип сховища має цілу низку застосувань. Це той випадок, коли потрібно зберігати деякі глобальні дані, до яких часто звертаються у програмі.
//Наприклад, зміна теми кольорів між світлою і темною, перегляд відео, додавання товару в кошик і тд.

//Методи локального сховища:

//setItem(key, value) - метод, додає новий запис у localStorage
//                      якщо такий запис існує, метод його перезапише
localStorage.setItem("ui-theme", "light");
console.log(localStorage);
//якщо треба зберегти щось, окрім рядка, юзаємо метод JSON.stringify():
const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};
localStorage.setItem("settings", JSON.stringify(settings));

//getItem(key) - метод, зчитує зі сховища запис з ключем key, повертає його в JSON - форматі
//               null - якщо запису з такм ключем немає
const savedTheme = localStorage.getItem("ui-theme");
console.log(savedTheme);
const savedItem = localStorage.getItem("key-that-does-not-exist");
console.log(savedItem);
//Примітивні типи парсити не потрібно. Об'єкти, масиви - парсимо методом JSON.parse():
const savedSettings = localStorage.getItem("settings");
console.log(savedSettings); // <- JSON-string
const parseSettings = JSON.parse(savedSettings);
console.log(parseSettings); // <- object

//removeItem(key) - метод, видаляє зі сховища запис. Нічого не повертає.
//clear() - метод, повністю очищає сховище. (Небезпечна дія)

/*Сховище сесії (sessionStorage)
Зберігає дані лише доти, поки відкрита вкладка браузера.
тобто кожного разу, коли відкривається нова вкладка або нове вікно браузера, створюється нове сховище сесії.
Методи ті самі, що і у localStorage.

Унікальні випадки використання сховища сеансу:
1. Зберігання сеансів можна використовувати в багатоетапних процесах: 
    бронювання авіаквитків, готелів, квитків у кіно, поїздів тощо.
2. Вебсайти для ведення блогів, інформаційні бюлетені, навчальні вебсайти тощо. 
    Такі сторінки мають безліч відвідувачів, які читають вміст, не створюючи облікового запису. 
    У таких сценаріях можна попросити відвідувача створити обліковий запис.
*/

//Форма з повідомленням
const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;
const localStorageKey = "goit-example-message";

textarea.value = localStorage.getItem(localStorageKey) ?? "";

//записуємо поточне значення поля в сховище:
form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value); //вивід значення текстового поля
  localStorage.removeItem(localStorageKey);//очищаємо збережене значення ключа зі сховища
  form.reset(); //очистка форми
});
//Зробимо так, щоб при релоад сторінки зберігалося введений меседж.
