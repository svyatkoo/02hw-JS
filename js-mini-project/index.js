// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

fetch("https://jsonplaceholder.typicode.com/users")
    .then(usersArr => usersArr.json())
    .then(usersArr => {
        console.log(usersArr);
        let wrapUsers = document.createElement("div");
        wrapUsers.classList.add("wrapUsers");

        document.body.appendChild(wrapUsers);
        for (const user of usersArr) {
            let userContainer = document.createElement("div");
            userContainer.classList.add("userContainer");



            let userContainerHeader = document.createElement("div");
            userContainerHeader.classList.add("userContainerHeader");
            userContainerHeader.innerHTML = `
                <h4>Id: <span>${user.id}</span></h4>
                <h3>Name: <span>${user.name}</span></h3>
            `;

            let linkDetails = document.createElement("a");
            linkDetails.href = `./user-details.html?id=${user.id}`;

            let btnUserDetails = document.createElement("button");
            btnUserDetails.innerText = "Details";
            linkDetails.append(btnUserDetails)
            userContainer.append(userContainerHeader, linkDetails)
            wrapUsers.append(userContainer);
        }
    })