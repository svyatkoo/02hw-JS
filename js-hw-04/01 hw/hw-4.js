// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// const square = function (a, b) {
//     return  a * b;
// }

// const square = (a, b) => a * b;
// console.log(square(2, 5));


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// const square = function (r) {
//     return Math.PI * Math.pow(r, 2);
// }

// const square = (r) => Math.PI * Math.pow(r, 2);
// console.log(square(4));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// const square = function (h, r) {
//     return (2 * Math.PI * r * (h + r));
// }

// const square = (h, r) => 2 * Math.PI * r * (h + r);
// console.log(square(3, 1));


// - створити функцію яка приймає масив та виводить кожен його елемент

// const showArr = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// const abc = [1, 45, true, {id : 1}, 'str1', false, 22, 'str2'];
// console.log(abc);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

//  function articleCreator(text, quantity) {
//      for (let i = 0; i < quantity; i++) {
//          document.write(`<p>${text} - ${i + 1}</p>`);
//      }
// }
// articleCreator('hello', 6);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function nawCreator(text) {
//     document.write(`<ul>`)
//     for (let i = 1; i <= 3; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// nawCreator('nav-item');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function nawCreator(size, text) {
//     document.write(`<ul>`)
//     for (let i = 1; i <= size; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// nawCreator(3, 'navnavnav');


// function liCreator(size, text) {
//     for (let i = 1; i <= size; i++) {
//         document.write(`<li>${text} - ${i}</li>`)
//     }
// }
//
// function nawCreator(size, text) {
//     document.write(`<ul>`);
//         `${liCreator(size, text)}`;
//     document.write(`</ul>`);
// }
// nawCreator(5, 'nav');


// function liCreator(tegName, size, text) {
//     for (let i = 1; i <= size; i++) {
//         document.write(`<${tegName}>${text} - ${i}</${tegName}>`);
//     }
// }
//
// function nawCreator(tegName, size, text) {
//     document.write(`<ul>`);
//         `${liCreator(tegName, size, text)}`;
//     document.write(`</ul>`);
// }
// nawCreator('h1',4, 'nav');


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let abc = [true, 45, 'str1', 'str2', -5, false, true, 21, 7, 89];
// function arrConstructor (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<ul>`)
//         document.write(`<li>${arr[i]}</li>`)
//         document.write(`</ul>`)
//     }
// }
// arrConstructor(abc);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// const abc = [
//     {id : 1, name: 'Ira', age : 22},
//     {id : 2, name: 'Taras', age : 45},
//     {id : 3, name: 'Kolj', age : 18},
//     {id : 4, name: 'Oksa', age : 31},
//     {id : 5, name: 'Nazik', age : 10},
//     {id : 6, name: 'Sofka', age : 28},
// ];
//
// function arrWriter (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<div>`)
//             for (let key in arr[i]) {
//                 document.write(`${key + '---' + arr[i][key]}</br>`)
//             }
//         document.write(`</div>`)
//         document.write(`<div>--------------------</div>`)
//     }
// }
// arrWriter(abc)



