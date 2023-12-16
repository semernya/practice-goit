//Пошук елемента
/*
element.querySelector('selector') - знайде 1 унікальний ел. з селектором selector
element.querySelectorAll('selector') - поверне псевдомасив елементів списку з селкктором selector
('#selector') - ID-селектор
('selector') - селектор тега
('.selector') - селектор класу
*/
const menuList = document.querySelector("#menu");
console.log(menuList);
const menuItems = document.querySelectorAll(".menu-item");
console.log(menuItems);
const firstItem = document.querySelector(".menu-item");
console.log(firstItem);
//доступ до стилів і їх зміна 1го елемента списку
firstItem.style.color = "blue";

/*
НАВІГАЦІЯ ПО ДОМ-ДЕРЕВУ
elem.parentNode — лінк на батьківський вузол-елемент вузла elem
elem.childNodes — псевдомасив, у якому зібрані всі дочірні вузли-елементи і текстові вузли вузла elem
elem.children — псевдомасив, у якому зібрані всі дочірні вузли-елементи вузла elem, тобто ті, що відповідають тегам
elem.firstChild — лінк на перший дочірній вузол (вузол-елемент або текстовий вузол) вузла elem
elem.firstElementChild — лінк на перший дочірній вузол-елемент усередині elem, тобто той, що відповідає тегу
elem.lastChild — лінк на останній дочірній вузол (вузол-елемент або текстовий вузол) вузла elem
elem.lastElementChild — лінк на останній дочірній вузол-елемент усередині elem, тобто той, що відповідає тегу
elem.previousSibling — лінк на попередній сусідній вузол відносно елемента elem, і це може бути як елемент, так і текстовий вузол
elem.previousElementSibling — лінк на попередній сусідній вузол-елемент відносно елемента elem, тобто той, що відповідає тегу
elem.nextSibling — лінк на наступний сусідній вузол відносно елемента elem, і це може бути як елемент, так і текстовий вузол
elem.nextElementSibling — лінк на наступний сусідній вузол-елемент відносно елемента elem, тобто той, що відповідає тегу
*/
const lastListItem = menuList.lastElementChild;
lastListItem.style.color = "red";
console.log(lastListItem);

// Властивості та атрибути
//атрибут стають властивостями об'єктів ДОМ
const image = document.querySelector(".image");
image.width = 100;
image.alt = "River bank";
image.src = "https://picsum.photos/id/13/640/480";
console.log(image.width);
console.log(image.alt);
console.log(image.src);

//textContent - вл-сть, повертає весь текстовий контент усередині елементів (власних і вкладених елементів)
const el = document.querySelector(".text");
const nested = document.querySelector(".sub-text");
console.log(el.textContent);
console.log(nested.textContent);
nested.textContent = "Igor";
console.log(el.textContent);

//classList - вл-сть, зберігає об'єкт з методами для роботи з CSS-класами елемента.
//Спец. тип об'єкта, подібний псевдоматису, зберігає в собі весь перелік класів DOM-елемента, властивість length і властивість value.
console.log(el.classList);
/*  Методи classList
1. classList.contains(className) - чи є клас className в елементі. Поверне true/false
2. classList.add(className) - додасть 1 або більше класів в елемент
3. classList.remove(className) - видаляє клас. Якщо клас не знайдено - нічого не зробить
4. classList.toggle(className) - перемикач. якщо клас className відсутній, то додає його в кінець списку класів
    і навпаки, якщо клас className присутній — видаляє його
5. classList.replace(oldClassName, newClassName) - замінить клас oldClassName на newClassName. Якщо міняти неіснуючий клас, нічого не відбудеться.
*/
const someLink = document.querySelector(".link");
console.log(someLink.classList.contains("link"));
someLink.classList.add("added-class");
someLink.classList.remove("is-active");
someLink.classList.toggle("toggle-class");
console.log(someLink.classList);
console.log("replace some classes:");
someLink.classList.replace("toggle-class", "brand-new-class");
console.log(someLink.classList);

//Доступ до атрибутів тега:
/*
1. element.hasAttribute(nameAttribute) - перевіряє чи є атрибут в елементі. Поверне тру/фолс
2. element.getAttribute(nameAttribute) - поверне значення атрибута. null - якщо такого немає
3. element.setAttribute(nameAttribute, value) - value - значення атрибута, що треба присвоїти nameAttribute
4. element.removeAttribute(nameAttribute) - видаляє атрибут. Якщо такого немає, нічого не робить
*/
const img = document.querySelector(".img");
console.log(img.attributes); //псевдомасив атрибутів елемента img
console.log(img.hasAttribute("src"));
console.log(img.getAttribute("alt"));
img.setAttribute("alt", "Amazing nature");
console.log(img.getAttribute("alt"));

//Власні атрибути (data-атрибути)
//dataset
//дозволяють додати до тегу довільний атрибут і отримати його значення в JavaScript.
const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action);
const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action);
//заміна значення існуючого data-атрибута
saveBtn.dataset.action = "update and save";
console.log(saveBtn.dataset.action);
// Додаємо новий data-атрибут data-role
saveBtn.dataset.role = "role";
console.log(saveBtn.dataset.role);
// Видаляємо data-атрибут data-action
delete saveBtn.dataset.action;
console.log(
  "data-атрибут data-action після видалення: ",
  saveBtn.dataset.action
);
saveBtn.dataset.userRole = "admin";
console.log(saveBtn.attributes);

//Створення та видалення елементів
const heading = document.createElement("h1"); // <h1></h1>, створили новий елемент, але його ще немає в ДОМ
heading.classList.add("title");
heading.textContent = "This is heading";
console.log(heading);
//Додавання елементів
/*
1. elem.append(el1, el2, ...) — додає один або декілька елементів після всіх дітей елемента elem.
2. elem.prepend(el1, el2, ...) — додає один або декілька елементів перед усіма дітьми елемента elem.
3. elem.after(el1, el2, ...) — додає один або декілька елементів після елемента elem.
4. elem.before(el1, el2, ...) — додає один або декілька елементів перед елементом elem.
*/
const nameList = document.querySelector(".usernames");
const lastName = document.createElement("li");
lastName.textContent = "Ajax";
nameList.append(lastName); //додали Ajax в кінець списку
const firstName = document.createElement("li");
firstName.textContent = "Poly";
nameList.prepend(firstName); //додали Poly в початок списку
const beforeHeading = document.createElement("h2");
beforeHeading.textContent = "Usernames";
nameList.before(beforeHeading); //додали Usernames перед списком
const afterPar = document.createElement("p");
afterPar.textContent =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! Praesentium accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non.";
nameList.after(afterPar); //додали параграф після списку
//Видалення елементів - element.remove()

// innerHTML - вл-сть, зберігає вміст елемента, включно з тегами, у вигляді рядка. Значення, що повертається, — це завжди валідний HTML-код.
// element.innerHTML = ''; - щвидке видалення вмісту елемента
//Юзаємо, коли:
// елемент element порожній
//якщо потрібно повністю замінити вміст element
const article = document.querySelector(".article");
const link = document.querySelector(".article .link");
const title = document.querySelector(".article .title");
console.log(article.innerHTML); //вивели вміст тегів article і а
console.log(link.innerHTML);
title.innerHTML = 'New and <span class="accent">improved</span> title'; //перезаписали вміст заголовка

//el.insertAdjacentHTML(position, string) - метод, додає рядок з HTML-тегами перед, після або всередину елемента
/*
position - визначає позицію string-рядка відносно елемента el:
1."beforebegin" — перед el
2. "afterbegin" — всередині el, перед усіма дітьми
3. "beforeend" — всередині el, після усіх дітей
4. "afterend" — після el 
*/
const techList = document.querySelector(".tech-list");
const newTechnologies = ["React", "TypeScript", "Node.js"];
const marcup = newTechnologies
  .map((technology) => `<li class="tech-list-item">${technology}</li>`)
  .join("");
techList.insertAdjacentHTML("beforeend", marcup);
techList.insertAdjacentHTML("afterbegin", "<h2>Popular technologies</h2>");

//Події
/*
1. element.addEventListener(event, handler, options) - метод, додає слухача події на елемент
        event — рядок, що містить ім'я події, наприклад, "click"
        handler — колбек-функція, яка буде викликана під час настання події
        options — необов'язковий об'єкт параметрів із розширеними налаштуваннями
2. element.removeEventListener(event, handler, options) - видаляє слухача події на елементі
! На одному елементі може бути будь-яка кількість обробників подій, навіть подій одного типу. 
Колбек-функції будуть викликатися в порядку їхньої реєстрації в коді.
*/
const singleBtn = document.querySelector("#single");
const handleClick = () => {
  console.log("click event listener callback");
};
singleBtn.addEventListener("click", handleClick); //додали 1 подію на кнопку. коли клік на цю кнопку = виводиться строка в консоль

const multiBtn = document.querySelector("#multiple");
const firstCallback = () => {
  console.log("First callback!");
};
const secondCallback = () => {
  console.log("Second callback!");
};
const thirdCallback = () => {
  console.log("Third callback!");
};
multiBtn.addEventListener("click", firstCallback);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", thirdCallback); //додали 3 події на цю кнопку. коли клік на неї = виведено 3 строки
/*Об'єкт події
Подія - об'єкт, містить інфу про деталі події і автоматом передається 1 аргументом в обробник події
Усі події відбуваються з базового класу Event.

Приклад:
const handleClick = event => {
  console.log(event);
};
button.addEventListener("click", handleClick);

event - об'єкт події, автоматом передається 1 аргументом в колбек
Властивості event:
1. event.type — тип події.
2. event.currentTarget — елемент, на якому виконується обробник події.
*/
const ClickMeButton = document.querySelector(".click-me-btn");
const newHandleClick = (event) => {
  console.log("event: ", event);
  console.log("event type: ", event.type); //click
  console.log("currentTarget: ", event.currentTarget); //<button type="button" class="click-me-btn">Click me</button>
};
ClickMeButton.addEventListener("click", newHandleClick);
/* Події клавіатури (обробляються на документі, не на елементі). Походять від базового класу KeyboardEvent
1. keydown - подія, відбувається при кліку на клавіші (частіше юзаємо її, бо вона швидше)
2. keyup - подія, відбувається коли клавішу відпустили
// document.addEventListener("keydown", (event) => {
//   console.log("Keydown: ", event);
// });
*/

/* Властивості key і code
1. key - поверне символ, згенерований кліком клавіші на клавіатурі (залежить від мови, від регістру)
2. code - поверне код фіз. клавіші (не залежить від мови)
Клавіші-модифікатори 
1. ctrlKey
2. altKey                       <- вл-сті для обробки комбінацій клавіш (типу Ctrl+S)
3. shiftkey                        зберігають тру/фолс, які вказують чи була затиснута відповідна клавіша
4. metaKey - чек на клавішу Cmd
*/

/* Події елементів форм
1. submit - подія, відправка форми. Слухач встановлювати на тегу form. 
    Відправка форми відбувається:
        - клік на кнопку з атрибутом type="submit"
        - клік на Enter під час перебування в будь-якому її текстовому полі форми
2. preventDefault() - метод, скасовує автоматичні реакції браузера на певну подію
    const form = document.querySelector("form");
    form.addEventListener("submit", event => {
	    event.preventDefault();
    });
*/
const registerForm = document.querySelector(".form");
registerForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault(); //скасувати автом. реації браузера на цю подію
  const form = event.target;
  const login = form.elements.login.value; //elements - вл-сть DOM-елемента форми, містить об'єкт з лінком на всі її елементи, які мають атрибут name
  const password = form.elements.password.value;
  if (login === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }
  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}
/*
3. change - подія, відбувається після зміни елемента форми.
    Для текстових полів або textarea подія відбудеться не на кожному введенні символу, а після втрати фокусу. 
    Це не завжди зручно. Уяви, що користувач набирає щось у текстовому полі — подія відсутня. Щойно фокус пропав, відбудеться подія change.
    Для інших елементів, наприклад, select, чекбоксів і радіокнопок, подія change спрацьовує відразу під час вибору значення.
*/
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");
const select = document.querySelector(".pizza-select");
select.addEventListener("change", setOutput); //подію зміни додали до впадаючого списку

function setOutput(event) {
  const selectedOptionValue = event.currentTarget.value;
  const selectedOptionIndex = event.currentTarget.selectedIndex; // selectedIndex - допомагає встановити індекс обраного елемента option
  const selectedOptionText =
    event.currentTarget.options[selectedOptionIndex].text; //в цю змінну записано значення елемента з випадаючого списку з індексом selectedOptionIndex

  textOutput.textContent = selectedOptionText; // 1 абзац отримує значення обраного варіанта з впадаючого списку
  valueOutput.textContent = selectedOptionValue; // аналогічно до 1 абзацу
}
/*
4. input - подія, відбувається тільки на текстових полях і textarea.
    Створюється щоразу при зміні значення елемента, не чекаючи втрати фокусу. 
    На практиці input — це найголовніша подія для роботи з текстовими полями форми.
*/
const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");
textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});
/*
подія focus відбувається під час фокусування на елементі
подія blur відбувається при втраті фокусу, наприклад, користувач клікає в іншому місці екрана
5. focus() - метод, активує фокус на елементі
6. blur() - метод, скасовує фокус
document.activeElement - доступ до поточного елемента, на якому зараз фокус
*/
const focusTextInput = document.querySelector(".focus-text-input");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
  //коли клік на першу кнопку - фокус на полі вводу
  focusTextInput.focus();
});
removeFocusBtn.addEventListener("click", () => {
  //коли клік на другу кнопку - фокус втрачено
  focusTextInput.blur();
});
focusTextInput.addEventListener("focus", () => {
  //коли фокус на полі вводу - виведено текст
  focusTextInput.value = "This input has focus";
});
focusTextInput.addEventListener("blur", () => {
  //коли нема фокусу на полі вводу - поле пусте
  focusTextInput.value = "";
});
