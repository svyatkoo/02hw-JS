// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

//     d) отримує текст який зберігається в елементі з класом listElement2
//     e) отримує всі елементи li та змінює ім колір фону на сірий
//     f) отримує всі елементи 'a' та додає їм клас anchor
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     l) отримати елементи p та змінити їм padding на 20px
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// // a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// let main_headerElement = document.getElementById("main_header");
// main_headerElement.classList.add("sep-2021");


// // b) робить шириниу елементу ul 400px
// let ulElement = document.getElementsByTagName("ul");
// ulElement[0].style.width = "400px";
// ulElement[0].style.background = "red";


// // c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList = document.getElementsByClassName("linkList");
// for (const item of linkList) {
//     item.style.width = "50%";
//     item.style.background = "yellow";
// }


// // d) отримує текст який зберігається в елементі з класом listElement2
// let listElement2 = document.getElementsByClassName("listElement2");
// for (const element of listElement2) {
//     console.log(element.innerText);
// }


// // e) отримує всі елементи li та змінює ім колір фону на сірий
// let liList = document.getElementsByTagName("li");
// for (i = 0; i < liList.length; i++) {
//     liList[i].style.background = "silver";
// };


// // f) отримує всі елементи 'a' та додає їм клас anchor
// let aTagList = document.getElementsByTagName("a");
// for (i = 0; i < aTagList.length; i++) {
//     aTagList[i].classList.add("anchor");
// };
// console.log(aTagList);


// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let aTagList = document.getElementsByTagName("a");
// for (i = 0; i < aTagList.length; i++) {
//     if (aTagList[i].innerText.includes("link3")) {
//         aTagList[i].style.fontSize = "40px";
//     }
// };


// // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let aTagList = document.getElementsByTagName("a");
// for (i = 0; i < aTagList.length; i++) {
//     aTagList[i].classList.add("element_" + aTagList[i].innerText);
// };
// console.log(aTagList);


// // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subHeaderElementsList = document.getElementsByClassName("sub-header");
// if (subHeaderElementsList.length > 0) {
//     let textColor = prompt("Enter color...");
//     for (const item of subHeaderElementsList) {
//         item.style.background = textColor;
//     }
// }


// // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let subHeaderElementsList = document.getElementsByClassName("sub-header");
// for (const item of subHeaderElementsList) {
//     if (item.innerText.includes("content 2 segment")) {
//         let textColor = prompt("Enter color...");
//         item.style.color = textColor;
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content1ClassElement = document.getElementsByClassName("content_1");
// for (const element of content1ClassElement) {
//     element.innerText = prompt("Enter your text...");
// }


// // l) отримати елементи p та змінити їм padding на 20px
// let pTagList = document.getElementsByTagName("p");
// for (i = 0; i < pTagList.length; i++) {
//     pTagList[i].style.padding = "20px";
// };


// // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// // document.getElementsByClassName("text2").innerText = "sep-2021"; //не працює
// let elementsText2List = document.getElementsByClassName("text2");
// for (const el of elementsText2List) {
//     el.innerText = "sep-2021";
// }
