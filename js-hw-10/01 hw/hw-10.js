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
// let form = document.createElement("form");
// form.classList.add("form1");
// let wrap = document.createElement("div");
// wrap.classList.add("wrap");
// let inputTitle = document.createElement("input");
// inputTitle.name = "title";
// inputTitle.placeholder = "Title";
// let inputText = document.createElement("textarea");
// inputText.name = "text";
// inputText.maxlength = "300";
// inputText.placeholder = "Your comment";
// let btnDiv = document.createElement("div");
// btnDiv.classList.add('btnDiv')
// let btn = document.createElement("button");
// btn.innerText = "Save comment";
// let showCommentsButton = document.createElement("button");
// showCommentsButton.classList.add("showCommentsButton");
// showCommentsButton.innerText = "Show comments";
// btnDiv.append(btn, showCommentsButton);
// form.append(inputTitle, inputText, btnDiv);
// document.body.append(form, wrap);
// const commentsArr = [];
// form.onsubmit = function (e) {
//     e.preventDefault();
//     let title = this.title.value;
//     let text = this.text.value;
//     if (title.length > 0 || text.length > 0) {
//         commentsArr.push({title : title, text : text});
//         console.log(commentsArr);
//     }
// }
// function showComments(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//         let comment = document.createElement("div");
//         comment.classList.add("comment");
//         wrap.appendChild(comment);
//         for (const key in arrElement) {
//             let p = document.createElement("p");
//             let title = key[0].toUpperCase() + key.slice(1);
//             p.innerText = `${title} : ${arrElement[key]}`;
//             console.log(key);
//             console.log(arrElement[key]);
//             comment.appendChild(p);
//         }
//     }
// }
// showCommentsButton.onclick = () => {
//     if (commentsArr.length > 0) {
//         showComments(commentsArr);
//     } else {
//         console.log("No comments!")
//     }
// }

