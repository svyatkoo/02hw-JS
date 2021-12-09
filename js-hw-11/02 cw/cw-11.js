// є масив -

// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let wrap = document.createElement("div");
wrap.classList.add("wrap");
let favorUsersLink = document.createElement("a");
favorUsersLink.innerText = "List of favorite users";
favorUsersLink.href = "cw-11-favor.html";
document.body.append(wrap, favorUsersLink);

// localStorage.clear();
for (const user of users) {
    let container = document.createElement("div");
    container.classList.add("container");
    container.innerText = `Name: ${user.name}; Age: ${user.age}; Status: ${user.status};\n`;
    let btn = document.createElement("button");
    btn.innerText = "Add to favorite";
    container.append(btn);
    wrap.append(container);

    btn.onclick = function() {
        let favorites = JSON.parse(localStorage.getItem("favUsers")) || [];
        favorites.push(user);
        localStorage.setItem("favUsers", JSON.stringify(favorites));
        btn.onclick = function() {
            console.log("The user is oleady in favorites");
        }
    }

}





