// // 1.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// // Для кожного елементу свій блок div.post
// // Всі характеристики повинні мати свої блоки всередені div.post
// // https://jsonplaceholder.typicode.com/posts
//
// let script = document.body.getElementsByTagName("script");
// // console.log(script);
// let wrap = document.createElement("div");
// wrap.classList.add("wrap");
// document.body.append(wrap);
//
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(postsArr => postsArr.json())
//     .then(postsArr => {
//         for (const post of postsArr) {
//             let container = document.createElement("div");
//             container.classList.add("container");
//             let header = document.createElement("div");
//             header.classList.add("header");
//             container.append(header);
//             wrap.append(container);
//             for (const key in post) {
//                 let keyTitle = key.slice(0,1).toUpperCase() + key.slice(1);
//                 if (key === "userId" || key === "id") {
//                     let h3 = document.createElement("h3");
//                     h3.innerText = `${keyTitle}: ${post[key]};`;
//                     header.append(h3);
//                 } else {
//                     let p = document.createElement("p");
//                     p.innerHTML = `<span>${keyTitle}</span>: ${post[key]};`;
//                     container.append(p);
//                 }
//             }
//         }
//     });




// //     2.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// //     Для кожного елементу свій блок div.comment
// // Всі характеристики повинні мати свої блоки всередені div.comment
// // https://jsonplaceholder.typicode.com/comments
//
//
// let wrap = document.createElement("div");
// wrap.classList.add("wrap");
// document.body.append(wrap);
//
// fetch("https://jsonplaceholder.typicode.com/comments")
//     .then(commentsArr => commentsArr.json())
//     .then(commentsArr => {
//         for (const comment of commentsArr) {
//             let container = document.createElement("div");
//             container.classList.add("container");
//             let header = document.createElement("div");
//             header.classList.add("header");
//             container.append(header);
//             wrap.append(container);
//             for (const key in comment) {
//                 let keyTitle = key.slice(0,1).toUpperCase() + key.slice(1);
//                 if (key === "name") {
//                     let title = document.createElement("h3");
//                     title.classList.add("title");
//                     title.innerText = `${comment[key]};`;
//                     container.append(title);
//                 } else if (key === "postId" || key === "id") {
//                     let h3 = document.createElement("h3");
//                     h3.innerText = `${keyTitle}: ${comment[key]};`;
//                     header.append(h3);
//                 } else if (key === "email") {
//                     let email = document.createElement("h4");
//                     email.classList.add("email");
//                     email.innerText = `${keyTitle}: ${comment[key]};`;
//                     container.append(email);
//                 } else {
//                     let p = document.createElement("p");
//                     p.innerHTML = `<span>${keyTitle}</span>: ${comment[key]};`;
//                     container.append(p);
//                 }
//             }
//         }
//     });





















