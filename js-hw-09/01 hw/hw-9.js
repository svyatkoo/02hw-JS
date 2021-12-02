// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let divElement = document.createElement("div");
// divElement.classList.add("wrap");
// divElement.classList.add("collapse");
// divElement.classList.add("alpha");
// divElement.classList.add("beta");
// divElement.style.background = "silver";
// divElement.style.color = "red";
// divElement.style.fontSize = "24px";
// divElement.innerText = "Hello!"
// document.body.appendChild(divElement);
// document.body.appendChild(divElement.cloneNode(true));


// - Є масив: ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let content = ['Main','Products','About us','Contacts'];
// function liCreator(arr) {
//     let ulElement = document.createElement("ul");
//     ulElement.classList.add("myMenu");
//     let scriptElement = document.getElementsByTagName("script")[0];
//     for (const arrElement of arr) {
//         let liElement = document.createElement("li");
//         liElement.innerText = `${arrElement}`;
//         ulElement.appendChild(liElement);
//     }
//     document.body.insertBefore(ulElement, scriptElement);
// }
// liCreator(content);


// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// function infoBlock(arr) {
//     for (const arrElement of arr) {
//         let divElement = document.createElement("div");
//         let h3Element = document.createElement("h3");
//         h3Element.innerText = `${arrElement.title}`;
//         let pElement = document.createElement("p");
//         pElement.innerText = `Month Duration: ${arrElement.monthDuration}`;
//         divElement.appendChild(h3Element);
//         divElement.appendChild(pElement);
//         document.body.appendChild(divElement);
//     }
// }
// infoBlock(coursesAndDurationArray);


// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// function blockCreator(arr) {
//     for (const item of arr) {
//         let divElement = document.createElement("div");
//         divElement.classList.add("item");
//         let h1Element = document.createElement("h1");
//         h1Element.classList.add("heading");
//         h1Element.innerText = `${item.title}`;
//         let pElement = document.createElement("p");
//         pElement.classList.add("description");
//         pElement.innerText = `${item.monthDuration}`;
//         divElement.appendChild(h1Element);
//         divElement.appendChild(pElement);
//         document.body.appendChild(divElement);
//     }
// }
// blockCreator(coursesAndDurationArray);