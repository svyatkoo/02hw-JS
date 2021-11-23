// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висото

// let squareRectangle = (a, b) => a*b;
// console.log(squareRectangle(3,4));


// - створити функцію яка обчислює та повертає площу кола

// let squareCircle = (r) => Math.PI * Math.pow(r, 2);
// console.log(squareCircle(3));


// - створити функцію яка обчислює та повертає площу циліндру

// let squareCylinder = (r, h) => (2 * Math.PI * Math.pow(r, 2)) + (2 * Math.PI * r * h);
// console.log(squareCylinder(2,4));


// - створити функцію яка приймає масив та виводить кожен його елемент

// let listArr = (arr) => {for (let i of arr) {console.log(i)}};
// const num = [1, 2, 3, 4, 5, true];
// listArr(num);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let paragraphCeator = (text) => document.write(`<p>${text}</p>`);
// let xxx = '!!!!!!!';
// paragraphCeator('Hello' + xxx);


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let unorderedListCreator = (text) => {document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)};
// unorderedListCreator('XXX');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let unorderedListCreatorWithSize = (text, size) => {
//     document.write(`<ul>`);
//     for (i = 1; i <= size; i++) {document.write(`<li>${text} - ${i}</li>`)}
//     document.write(`</ul>`)};
// unorderedListCreatorWithSize('QWERTY', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let itemListCreator = (arr) => {
//     document.write(`<ol>`);
//     for (let item of arr) {document.write(`<li>${item}</li>`)}
//     document.write(`</ol>`);};
// let xxx = [false, 22, 5, true, 'str1', 7, 'str2', 'str3', true];
// itemListCreator(xxx);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let itemArrayBlockCreator = (arr) => {
//                                     for (let item of arr) {
//                                         document.write(`<div>`);
//                                         for (let k in item) {
//                                             document.write(`${k}: ${item[k]}; `);
//                                         }
//                                         document.write(`</div>`);
//                                     }
//                                 }
// let xXx = [
//     {id : 1, name : 'Ira', age : 24},
//     {id : 2, name : 'Taras', age : 15},
//     {id : 3, name : 'Nazar', age : 40},
//     {id : 4, name : 'Oksana', age : 19},
//     {id : 5, name : 'Peter', age : 33},
//     {id : 6, name : 'Ulj', age : 28},
//     {id : 7, name : 'Lida', age : 14},
// ];
// itemArrayBlockCreator(xXx);