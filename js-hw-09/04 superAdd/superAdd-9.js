let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
},
    {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
},
    {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];


// // - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let usersAddress = [];
// for (const user of users) {
//     for (const userKey in user) {
//         if (userKey === "address") {
//             usersAddress.push(user[userKey]);
//         }
//     }
// }
// console.log(usersAddress);


// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for (const user of users) {
//     let userDiv = document.createElement("div");
//     userDiv.style.border = "2px solid black";
//     userDiv.style.marginBottom = "20px";
//     document.body.appendChild(userDiv);
//     for (const userKey in user) {
//         if (userKey !== "address") {
//             userDiv.append(userKey, " : ", user[userKey], "; ");
//         } else {
//             for (const key in user[userKey]) {
//                 userDiv.append(key, " : ", user[userKey][key], "; ");
//             }
//         }
//     }
// }


// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (const user of users) {
//     let container = document.createElement("div");
//     container.style.marginBottom = "20px";
//     document.body.appendChild(container);
//     for (const userKey in user) {
//         let box = document.createElement("div");
//         box.style.border = "2px solid silver";
//         container.appendChild(box);
//         if (userKey !== "address") {
//             box.append(userKey, " : ", user[userKey], "; ");
//         } else {
//             for (const key in user[userKey]) {
//                 box.append(key, " : ", user[userKey][key], "; ");
//             }
//         }
//     }
// }


// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// let wrap = document.createElement("div");
// wrap.classList.add("wrap");
// document.body.appendChild(wrap);
//
// for (const user of users) {
//     let container = document.createElement("div");
//     container.classList.add("container");
//     wrap.appendChild(container);
//     for (const userKey in user) {
//         if (userKey !== "address") {
//             let box = document.createElement("div");
//             box.classList.add("box");
//             container.appendChild(box);
//             if (userKey !== "address") {
//                 box.append(userKey, " : ", user[userKey], "; ");
//             }
//         } else {
//             let address = document.createElement("div");
//             address.classList.add("address");
//             container.appendChild(address);
//             for (const key in user[userKey]) {
//                 let addressItemDiv = document.createElement("div");
//                 addressItemDiv.classList.add("addressItemDiv");
//                 addressItemDiv.innerText = `${key} : ${user[userKey][key]}`;
//                 address.appendChild(addressItemDiv);
//             }
//         }
//     }
// }





