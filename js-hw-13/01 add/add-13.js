// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

// localStorage.clear();
let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");


let f1 = document.createElement("form");
f1.name = "f1";
let inputName = document.createElement("input");
inputName.placeholder = "Name:";
let inputQuantity = document.createElement("input");
inputQuantity.placeholder = "Quantity:";
let inputPrice = document.createElement("input");
inputPrice.placeholder = "Price:";
let inputPhoto = document.createElement("input");
inputPhoto.placeholder = "Photo:";
let btnSaveForm = document.createElement("button");
btnSaveForm.innerText = "Save";

let link = document.createElement("a");
link.href = "./list.html";
let linkBtn = document.createElement("button");
linkBtn.classList.add("linkBtn");
linkBtn.innerText = "To the products page";

link.append(linkBtn);
f1.append(inputName, inputQuantity, inputPrice, inputPhoto, btnSaveForm);
// document.body.append(f1, link);

wrapper.append(f1, link);
document.body.append(wrapper);




f1.onsubmit = (e) => {
    // e.preventDefault();
    this.name = inputName.value;
    this.quantity = inputQuantity.value;
    this.price = inputPrice.value;
    this.photo = inputPhoto.value;
    let productsArr = JSON.parse(localStorage.getItem("favoriteProducts")) || [];
    productsArr.push({id : Date.now(), name, quantity, price, photo});
    localStorage.setItem("favoriteProducts", JSON.stringify(productsArr));
    console.log(productsArr);

}

let xxx = Date.now();
console.log(xxx);