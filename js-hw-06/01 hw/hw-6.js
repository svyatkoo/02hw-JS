// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// console.log(str1.length);
//
// console.log('lorem ipsum'.length);
//
// let str3 = 'javascript is cool';
// console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'hello world';
// let strUpperCase = str1.toUpperCase();
// console.log(strUpperCase);
// console.log(strUpperCase.toLowerCase());
//
// let str2 = 'lorem ipsum';
// let strUpperCase2 = str2.toUpperCase();
// console.log(strUpperCase);
// console.log(strUpperCase.toLowerCase());
//
// let str3 = 'javascript is cool';
// let strUpperCase3 = str3.toUpperCase();
// console.log(strUpperCase);
// console.log(strUpperCase.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str + 'Length: ' + str.length);
// console.log(str.trim() + '    Length: ' + str.trim().length);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

// stringToarray = (anyStr) => str.split(' ');
//
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// console.log(arr);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.

// delete_characters = (anyStr, length) => str.substr(0, length);
//
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.

// insert_dash = (str) => str.replaceAll(' ', '-').toUpperCase();
// let str = "Html JavaScript Php";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let myStr = 'hello!!! javascript is cool';
// firstCharacterToUpperCase = (str) => {
//     let firstLetter = str.slice(0,1);
//     return str.replace(firstLetter, firstLetter.toUpperCase())
// }
// console.log(myStr);
// console.log(firstCharacterToUpperCase(myStr));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let myStr = 'hello!!! javascript is cool. the first letter, must be upper case';
// capitalize = (str) => {
//     let capitalizeStr = [];
//     const strArr = str.split(' ');
//     for (const item of strArr) {
//         let firstLetter = item.slice(0, 1);
//         let firstUpperLetter = item.replace(firstLetter, firstLetter.toUpperCase());
//         capitalizeStr.push(firstUpperLetter);
//     }
//     console.log(capitalizeStr.join(' '));
// }
// capitalize(myStr);

