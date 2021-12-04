// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let form1 = document.createElement("form");
// let form2 = document.createElement("form");
// let btn = document.createElement("button");
// let input1 = document.createElement("input");
// let input2 = document.createElement("input");
// let input3 = document.createElement("input");
// let input4 = document.createElement("input");
// form1.name = "form1";
// form2.name = "form2";
// btn.innerText = "Read info";
// input1.name = "text1";
// input2.name = "text2";
// input3.name = "text3";
// input4.name = "text4";
// form1.append(input1, input2);
// form2.append(input3, input4);
// document.body.append(form1, form2, btn);
// btn.onclick = function ()  {
//     let text1 = form1.text1.value;
//     let text2 = form1.text2.value;
//     let text3 = form2[0].value;
//     let text4 = document.forms[1][1].value;
//     console.log("Field 1: " + text1 + ";");
//     console.log("Field 2: " + text2 + ";");
//     console.log("Field 3: " + text3 + ";");
//     console.log("Field 4: " + text4 + ";");
//     // for (const form of document.forms) {
//     //     for (const element of form) {
//     //         console.log(element.value);
//     //     }
//     // }
// }



// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let form = document.createElement("form");
// let btn = document.createElement("button");
// let container = document.createElement("div");
// let rowQuantity = document.createElement("input");
// let columnQuantity = document.createElement("input");
// let text = document.createElement("input");
// btn.innerText = "Build table";
// rowQuantity.placeholder = "Row";
// columnQuantity.placeholder = "Column";
// text.placeholder = "Text";
// form.append(rowQuantity, columnQuantity, text, btn);
// document.body.append(form, container);
// form.onsubmit = function (e) {
//     e.preventDefault();
//     let rowQuantity = this[0].value;
//     let columnQuantity = this[1].value;
//     let text = this[2].value;
//     console.log(text);
//     let table = document.createElement("table");
//     for (let i = 0; i < rowQuantity; i++) {
//         let row = document.createElement("tr");
//         table.appendChild(row);
//         for (let j = 0; j < columnQuantity; j++) {
//             let column = document.createElement("td");
//             column.innerText = `${text}`;
//             row.appendChild(column);
//             if (i === 0) {
//                 column.classList.add("tableHeader");
//             }
//         }
//     }
//     document.body.appendChild(table);
// };


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let input = document.createElement("input");
// let btn = document.createElement("button");
// input.type = "text";
// btn.innerText = "Check";
// document.body.append(input, btn);
// let badWords = ["stupid", "awful", "ugly", "loser", "coward", "cry-baby"];
// input.oninput = () => {
//     for (const word of badWords) {
//         if (input.value.includes(word)) {
//             alert(word + " is a bad word!");
//         }
//     }
// };



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let input = document.createElement("input");
// let btn = document.createElement("button");
// input.type = "text";
// btn.innerText = "Check";
// document.body.append(input, btn);
// let badWords = ["stupid", "awful", "ugly", "loser", "coward", "cry-baby"];
// btn.onclick = () => {
//     for (const word of badWords) {
//         if (input.value.includes(word)) {
//             alert(word + " is a bad word!");
//         }
//     }
// };