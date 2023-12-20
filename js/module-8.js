/* 
Поширення подій(event propagation) - термін, описує життєвий цикл події, що ділиться на 3 етапи:
1. Capturing phase(занурення) - подія стартує з window і тоне до найглибшого цільового ел., на якому відбулась подія.
2. Target phase (таргетинг) - етап, на якому ел. повідомляють, що на ньому відбулась подія.
3. Bubbling phase (спливання) - кінцева фаза, спливає від найглибшого ел через усі ел.-предки до window.
    Обробники спрацьовують від цільов. ел. по всім предкам і до window.
Приклад:
*/
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

// тут показано як це працює
parent.addEventListener("click", () => {
  console.log("Parent click handler");
});

child.addEventListener("click", () => {
  console.log("Child click handler");
});

descendant.addEventListener("click", () => {
  console.log("Descendant click handler");
});
//при кліку на descendant спрацюють події на child, потім на parent
/*
Елемент, на якому відбулася подія, називається цільовим, або вихідним. 
event.target - це завжди найглибший елемент, з якого починається спливання.
 - event.target - лінк на вихідний ел, на якому сталась подія (у процесі спливання вона незмінна)
 - event.currentTarget - лінк на поточний ел., до якого прив'язаний поточний обробник події, і до якого в результаті спливання дішла прослуховувана подія
    ел., де подія фактично відбулася (event.target)
    ел., до якого подія спливла, і обробник її перехопив (event.currentTarget).
*/
parent.addEventListener("click", (event) => {
  console.log("event.target: ", event.target);//виведе child
  console.log("event.currentTarget: ", event.currentTarget);//виведе parent
});
/*
Проміжні обробники можуть зупинити спливання подій
1. event.stopPropagation() - метод, зупиняє "спливання" події в DOM-дереві. Жоден батьківський ел. не зможе відловити цю подію.
    Не заважає іншим обробникам подій виконуватися на тому ж самому елементі.
2. event.stopImmediatePropagation() - метод, Зупиняє "спливання" події так само.
    Також зупиняє виконання всіх інших обробників подій, які слухають цю ж подію на даному елементі, 
    навіть якщо вони були зареєстровані перед цим.
Без необхідності не треба зупиняти події.
*/
/* 
Делегування подій (event delegation) - додавання 1 слухача на вспільного предка цих елементів.
Кроки делегування:
1. Визначити спільного предка групи елементів для відстеження подій.
2. Зареєструвати на елементі-предку обробник події, яку ми хочемо відловлювати з групи елементів.
3. В обробнику використовувати event.target для вибору цільового елемента, на якому безпосередньо відбулась подія.
*/
const box = document.querySelector("div.box");
box.addEventListener("click", function (event) {
  console.log(event.target);
});
/*
Перевірка цільового елемента події
- nodeName - вл-сть, що перевіряє тип елемента.
Приклад:
if (event.target.nodeName !== "BUTTON") {
    return; // користувач клікнув між кнопками, нічого не відбувається
  }
  або
if (event.target === event.currentTarget) {
    return; // користувач клікнув між кнопками, нічого не відбувається
  }
*/

/*
Бібліотеки - це набір попередньо написаних функцій, методів і класів, який надає розробнику готові інструменти для вирішення певних завдань.
CDN (Content Delivery Network) — це географічно розподілена мережева інфраструктура. Вона забезпечує швидку доставку контенту (такого як стилі, скрипти, зображення та інші ресурси) користувачам вебсервісів і сайтів. 
    Сервери, що входять до складу CDN, географічно розташовуються в різних частинах світу таким чином, щоб зробити час відповіді для користувачів сайту/сервісу мінімальним.
    Мета CDN - поліпшити продуктивність і доступність вебсайту для користувачів, зменшивши затримки під час завантаження контенту.

Приклад підключення бібліотеки:
1. async додати в скрипт бібліотеки, щоб та швидко підвантажилась
2. скрипт бібліотеки завжди перед моїм скриптом
<body>
    <!-- HTML-markup -->

    <!-- Lodash library script file -->
		<script async src="<https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js>"></script>
    <!-- Your script file -->
    <script defer src="path/to/script.js"></script>
  </body>
*/


// Деструктуризація(Destructuring) — це особливий синтаксис, що дозволяє витягти значення зі структур даних, такі як об'єкти або масиви, і присвоїти їх змінним.
// Деструктуризація дозволяє «розпакувати» значення властивостей об'єкта в локальні змінні.
//Це робить код у місці їх використання менш «шумним».
// undefined - якщо ім'я деструктуризованої змінної і ім'я властивості об'єкта не збігаються
//без деструктуризації:
const user = { 
	name: "Jacob", 
	age: 32 
};
console.log(user.name); // Jacob
console.log(user.age); // 32
//з деструктуризацією:
const user1 = { 
	firstName: "Jacob", 
	yo: 32 
};
const { firstName, yo } = user1;
console.log(firstName); // Jacob
console.log(yo); // 32
//Щоб уникнути undefined, задамо неіснуючbv змінним значення по дефолту через '='
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8,
};
const {
  title,
  author,
  rating: bookRating, //! перейменували змінну rating через ':' на bookRating
  coverImage = "<https://via.placeholder.com/640/480>", // Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
} = book;
console.log(title); // "The Last Kingdom"
console.log(author); // "Bernard Cornwell"
console.log(coverImage); // "<https://via.placeholder.com/640/480>"
console.log(bookRating); // 8
// Деструктуризація в циклах
/*для скорочення кількості повторень:
for (const book of books) {
  const { title, author, rating } = book;
  console.log(title);
  console.log(author);
  console.log(rating);
}
деструктуризацію можна виконати прямо в місці оголошення змінної book, якщо в об'єкті мало вл-стей
for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}
*/
// Деструктуризація параметрів
/*
1. з деструктуризацією об'єкта в тілі функції:
function printUserInfo(user) {
const { name, age, hobby } = user                               <------
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
}
printUserInfo({ 
	name: "Alice", 
	age: 25, 
	hobby: "dancing" 
}); // Name: Alice, Age: 25, Hobby: dancing

2. з деструктуризацією об'єкта в місці оголошення параметрів:

function printUserInfo({ name, age, hobby }) {                  <------
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
}
printUserInfo({ 
	name: "Alice", 
	age: 25, 
	hobby: "dancing" 
}); // Name: Alice, Age: 25, Hobby: dancing

3. Патерн «Об'єкт параметрів»
Якщо в ф-ції багато параметрів, щоб не заплутатись, можна їх всі замінити об'єктом з вл-стями.
Спосіб заміняє набір параметрів всього 1 — об'єктом з іменованими властивостями.
*/

// 4. Глибока деструктуризація
const usVer = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
const {
  name,
  tag,
  stats: { followers, views, likes }, //глибока деструктуризація вл-стей об'єкта stats.
} = usVer;
console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(views); // 4827
console.log(likes); // 1308

/* 5. Деструктуризація масивів
 - змінним у кв. дужках будуть послідовно присвоюватись значення е. масиву
*/
const color = [200, 255, 100];
const [ red, green, blue ] = color;
console.log(`rgb(${red}, ${green}, ${blue})`); // “rgb(200, 255, 100)"
/*
по дефолту - undefined - якщо змінних більше ніж ел. масиву
Щоб такого не траплялось, задаємо значення по дефолту:
*/
const age = [24, 47, 32];
const [age1, age2, age3, age4 = 18] = age;
console.log(`Anna: ${age1}, Tom: ${age2}, Poly: ${age3}, James: ${age4}`);

/* 6. Часткова деструктуризація
З масиву/об'єкта необхідно деструктуризувати тільки перші N елементів, 
а інші зберегти в одну змінну у вигляді масиву.
...rest - операція, що дозволить це зробити
*/
const color1 = [200, 255, 100];
const [ yellow, ...otherColors ] = color1;
console.log(yellow);//200
console.log(otherColors); // [255, 100] - новий масив з копіями зібраних значень
/* Пропуск значень елементів масиву */
const rgb = [200, 100, 255];
const [, , Blue] = rgb; //пропустили всі ел. масиву окрім останнього
console.log(`Blue: ${Blue}`); // "Blue: 255"

/* 7. Деструктуризація параметрів
Під час передачі масиву у функцію, можна деструктуризувати його елементи.
*/
//Без деструктуризації:
function printFruits(fruits) {
  console.log(fruits[0], fruits[1], fruits[2]);
}
printFruits(["apple", "banana", "orange"]); // "apple banana orange"
//Із деструктуризацією в місці оголошення параметрів:
function printFruits1([firstFruit, secondFruit, thirdFruit]) {
  console.log(firstFruit, secondFruit, thirdFruit);
}
printFruits1(["apple", "banana", "orange"]); // "apple banana orange"

//Висновки 
//Переваги деструктуризації
/*
1. Зручне вилучення значень з об'єктів і масивів: 
Замість того, щоб щоразу звертатися до полів об'єкта або елементів масиву за їхніми індексами або іменами, 
можна одразу витягти потрібні значення у змінні.
2. Короткий і читабельний код: 
Деструктуризація робить код коротшим і зрозумілішим. 
Замість довгих виразів доступу до полів об'єктів або елементів масиву, 
можна відразу присвоїти значення змінним зі зрозумілими іменами.
3. Параметри функцій: 
При передачі об'єктів у функції, можна деструктуризувати об'єкти, щоб отримати доступ до потрібних даних. 
Це дозволяє явно вказати, які поля об'єкта використовуються у функції.
4. Робота з функціями, що повертають об'єкти: 
Якщо функція повертає об'єкт, можна відразу деструктуризувати цей об'єкт, щоб витягти з нього значення.
*/