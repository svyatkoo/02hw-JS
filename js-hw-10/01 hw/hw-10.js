// // - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let pText = document.createElement("p");
// pText.id = "text";
// pText.innerText = "First line";
// let pText2 = pText.cloneNode();
// pText2.innerText = "Second line!";
// let btn = document.createElement("button");
// btn.innerText = "Hide first";
// document.body.append(pText, pText2, btn);
// // btn.onclick = (() => pText.hidden = true);
// btn.onclick = (function () {
//     pText.hidden = true;
//     btn.onclick = (() => pText.hidden = false);
// });


// //     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.createElement("button");
// btn.innerText = "Hide btn";
// let btn2 = document.createElement("button");
// btn2.innerText = "Show btn";
// document.body.append(btn, btn2);
// btn.onclick = (() => btn.hidden = true);
// btn2.onclick = (() => btn.hidden = false);


// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form = document.createElement("form");
// document.body.appendChild(form);
// let inputAge = document.createElement("input");
// inputAge.name = "age";
// let btn = document.createElement("button");
// btn.innerText = "Check age"
// form.append(inputAge, btn)
// form.onsubmit = function (e) {
//     e.preventDefault();
//     let age = this.age.value;
//     console.log(age);
//     if (age < 18) {
//         alert ("You are too young!");
//     } else {
//         alert ("Access granted!");
//     }
// };


// // - Создайте меню, которое раскрывается/сворачивается при клике
// let container = document.createElement("div");
// container.classList.add("container");
// let btn = document.createElement("button");
// btn.innerText = "Menu"
// let ulTag = document.createElement("ul");
// document.body.appendChild(container);
// container.append(btn, ulTag);
// for (let i = 0; i < 10; i++) {
//     let liTag = document.createElement("li");
//     liTag.innerText = `Page ${i}`;
//     ulTag.appendChild(liTag);
// };
// btn.onclick = function (){
//     ulTag.classList.toggle("open");
// };


// // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// //     Вывести список комментариев в документ, каждый в своем блоке.
// //     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
//
// let comments = [{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem1', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem2', body:'lorem ipsum dolo sit ameti lorem ipsum dolo sit ameti'},
//     {title : 'lorem3', body:'lorem ipsum dolo sit ametilorem i'},
//     {title : 'lorem4', body:'lorem ipsum dolo sit ameti lorem ipsum dolo lorem ipsum dolo sit ameti'},
//     {title : 'lorem5', body:'lorem ipsum '},
//     {title : 'lorem6', body:'lorem ipsum dolo sit ameti lorem ipsum dolo sit ametilorem ipsum dolo sit ameti'},
// ];
// let wrap = document.createElement("div");
// wrap.classList.add("wrap");
// document.body.append(wrap);
// function showComments(arr) {
//     for (const arrElement of arr) {
//         let comment = document.createElement("div");
//         comment.classList.add("comment");
//         let h3 = document.createElement("h3");
//         h3.innerText = arrElement.title;
//         let p = document.createElement("p");
//         p.innerText = arrElement.body;
//         let btn = document.createElement("button");
//         btn.innerText = "Hide comment";
//         btn.onclick = function () {
//             p.classList.toggle("bodyHide");
//         }
//         comment.append(h3, p, btn);
//         wrap.appendChild(comment);
//     }
// }
// showComments(comments);
