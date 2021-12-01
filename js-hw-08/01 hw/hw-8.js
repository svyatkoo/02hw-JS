// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :


// //     -- отримує текст з параграфа з id "content"
// let pText = document.getElementById("content");
// console.log(pText.innerText);


// //     -- отримує текст з блоку з id "rules"
// console.log(document.getElementById("rules").innerText);


// //     -- замініть текст параграфа з id 'content' на будь-який інший
// document.getElementById("content").innerText = "замініть текст параграфа з id 'content'";


// //     -- замініть текст параграфа з id 'rules' на будь-який інший
// document.getElementById("rules").innerText = "замініть текст блоку з id 'rules'";


// //     -- змініть кожному елементу колір фону на червоний
// //     -- змініть кожному елементу колір тексту на синій
// let bodyElements = document.getElementsByTagName("body");
// for (const element of bodyElements) {
//     element.style.background = "red";
//     element.style.color = "blue";
// }
//
// for (const element of document.body.children) {
//     element.style.background = "red";
//     element.style.color = "blue";
// }


// //     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let classListOfRulesId = document.getElementById("rules");
// console.log(classListOfRulesId.classList);


// //     -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let liTag = document.getElementsByClassName("fc_rules");
// for (const item of liTag) {
//     item.style.background = "yellow";
// }

