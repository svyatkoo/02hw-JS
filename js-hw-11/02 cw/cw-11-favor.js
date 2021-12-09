

let favoriteWrap = document.createElement("div");
favoriteWrap.classList.add("favoriteWrap");
document.body.appendChild(favoriteWrap);

let favoritesArr = JSON.parse(localStorage.getItem("favUsers"));
favoritesArr.forEach(user => {
    let container = document.createElement("div");
    container.classList.add("container");
    container.innerText = `Name: ${user.name}; Age: ${user.age}; Status: ${user.status};\n`;;
    favoriteWrap.appendChild(container);
});

