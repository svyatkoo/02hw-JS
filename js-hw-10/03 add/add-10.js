// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.onclick = function (e) {
//     console.log("Tag name: " + e.target.nodeName);
//     (e.target.className) ? console.log("Class list: " + e.target.className) : console.log("Class list: This tag hasn`t class!");
//     (e.target.id) ? console.log("Id list: " + e.target.id) : console.log("Id list: This tag hasn`t id!");
//     let  elementHeight = e.target.getBoundingClientRect().height;
//     let  elementWidth = e.target.getBoundingClientRect().width;
//     console.log("Height x Wight: " + elementHeight + "px" + " x " + elementWidth + "px");
//     console.log("------------------------------------------")
// }


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.onclick = function (e) {
//         let wrap = document.createElement("div");
//         wrap.classList.add("wrap");
//         wrap.style.display = "block";
//         wrap.style.background = "steelblue";
//         wrap.style.width = "fit-content";
//         wrap.style.border = "2px solid black";
//         wrap.style.position = "fixed";
//         wrap.style.top = "20vh";
//         wrap.style.left = "45vh";
//         wrap.style.padding = "10px";
//         wrap.style.top = "20vh";
//
//         let pTagName = document.createElement("p");
//         let pClassNames = document.createElement("p");
//         let pIdNames = document.createElement("p");
//         let pHeightWidth = document.createElement("p");
//         let btn = document.createElement("button");
//         btn.innerText = "To close, move the mouse cursor here";
//         btn.style.marginTop = "50px";
//         btn.style.padding = "10px";
//         btn.style.boxSizing = "border-box";
//
//         pTagName.innerText = "Tag name: " + `${e.target.nodeName.toLowerCase()}`;
//         let classNames = (e.target.className) ? ("Class list: " + e.target.className.replaceAll(" ", ", ")) : "Class list: This tag hasn`t classes!";
//         pClassNames.innerText = `${classNames}`;
//         let idNames = (e.target.id) ? ("Id list: " + e.target.id.replaceAll(" ", ", ")) : "Id list: This tag hasn`t id!";
//         pIdNames.innerText = `${idNames}`;
//         let  elementHeight = e.target.getBoundingClientRect().height;
//         let  elementWidth = e.target.getBoundingClientRect().width;
//         pHeightWidth.innerText = "Height & Wight: " + `${Math.round(elementHeight)}` + "px" + " x " + `${Math.round(elementWidth)}` + "px";
//         wrap.append(pTagName, pClassNames, pIdNames, pHeightWidth, btn);
//         document.body.append(wrap);
//
//         btn.onmouseenter = function () {
//                 document.body.removeChild(wrap);
//         }
// }


// -- взять массив пользователей
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
//
// let form = document.createElement("form");
// let status = document.createElement("input");
// let age = document.createElement("input");
// let town = document.createElement("input");
// form.name = "filterForm";
// status.type = "checkbox";
// status.name = "status";
// age.type = "checkbox";
// age.name = "age";
// town.type = "checkbox";
// town.name = "city";
// form.append(status, age, town);
// document.body.append(form);
//
// const createArrContainer = function (arr) {
//     for (const user of arr) {
//         let liElement = document.createElement("li");
//         for (const userKey in user) {
//             if (typeof (user[userKey]) !== "object") {
//                 liElement.append(userKey + " : " + user[userKey] + "; ");
//             } else {
//                 for (const key in user[userKey]) {
//                     liElement.append(key + " : " + user[userKey][key] + "; ");
//                 }
//             }
//             document.body.append(liElement);
//         }
//     }
// }
//
// const cleanArrContainer = function () {
//     let liElementsCollection = document.getElementsByTagName("li");
//     for (let i = 0; i < liElementsCollection.length; i++) {
//         liElementsCollection[i].style.display = "none";
//     }
// }
//
// form.onclick = function () {
//     const filterForm = document.forms.filterForm;
//     let arrToFilter = usersWithAddress;
//     let filteredArr = [];
//     for (let i = 0; i < filterForm.length; i++) {
//         if (filterForm[i].checked) {
//             if (filterForm[i].name === "status") {
//                 if (filteredArr.length) {
//                     filteredArr = filteredArr.filter((users) => users.status);
//                 } else {
//                     console.log("status");
//                     cleanArrContainer();
//                     filteredArr = arrToFilter.filter((users) => users.status);
//                 }
//             } else if (filterForm[i].name === "age") {
//                 if (filteredArr.length) {
//                     filteredArr = filteredArr.filter((users) => users.age > 29);
//                 } else {
//                     cleanArrContainer();
//                     filteredArr = arrToFilter.filter((users) => users.age > 29);
//                 }
//             } else if (filterForm[i].name === "city") {
//                 if (filteredArr.length) {
//                     filteredArr = filteredArr.filter((users) => users.address.city === "Kyiv");
//                 } else {
//                     cleanArrContainer();
//                     filteredArr = arrToFilter.filter((users) => users.address.city === "Kyiv");
//                 }
//             }
//         } else {
//             cleanArrContainer();
//         }
//     }
//     createArrContainer(filteredArr);
// }


/////////////////<---in progress--->//////////////////////////////
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
///////////////////////////////////////////////////////////////





// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// const image = [{photo : "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"},
//     {photo : "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"},
//     {photo : "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"},
//     {photo : "https://st4.depositphotos.com/12982378/22072/i/600/depositphotos_220729084-stock-photo-smiling-adult-man-with-crossed.jpg"},
//     {photo : "https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg"},
//     {photo : "https://www.bkacontent.com/wp-content/uploads/2020/10/Depositphotos_336730000_l-2015.jpg"},
//     {photo : "http://thebodyisnotanapology.com/wp-content/uploads/2018/02/pexels-photo-459947.jpg"},
//     {photo : "https://en.amerikanki.com/wp-content/uploads/2013/01/8-Ways-to-Be-a-Sincere-Person.jpg"},
//     {photo : "https://liveboldandbloom.com/wp-content/uploads/2021/09/Untitled_design_3_1.png"}];
//
// const container = document.createElement("div");
// container.classList.add("container");
// const picture = document.createElement("img");
// picture.src = image[0].photo;
// container.appendChild(picture);
// document.body.appendChild(container);
// let imgElement = document.getElementsByTagName("img")
// let position = imgElement.src;
// console.log(imgElement[0]);
// let i = 0;
//
// window.addEventListener("keydown", function (event) {
//     switch (event.key) {
//         case "ArrowLeft":
//             i = i - 1;
//             if (i < 0) {
//                 i = image.length - 1;
//             }
//             picture.src = image[i].photo;
//             break;
//         case "ArrowRight":
//             i++;
//             if (i >= image.length) {
//                 i = 0;
//             }
//             picture.src = image[i].photo;
//             break;
//         default:
//             console.log("Use only left or right arrows!");
//     }
// });




//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// document.body.onselectstart = function (e) {
//     document.body.onclick = function (e) {
//         if (document.getSelection) {
//             let str = e.target.textContent;
//             let text = document.getSelection().toString();
//             e.target.innerHTML = str.replace(text, ((text) => e.target.append = `<span id="colorId">${text}</span>`));
//         }
//     }
// }

