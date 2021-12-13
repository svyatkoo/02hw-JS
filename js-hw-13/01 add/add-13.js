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
f1.append(inputName, inputQuantity, inputPrice, inputPhoto, btnSaveForm);
document.body.append(f1);


f1.onsubmit = (e) => {
    e.preventDefault();
    this.name = inputName.value;
    this.quantity = inputQuantity.value;
    this.price = inputPrice.value;
    this.photo = inputPhoto.value;
    let goodsArr = JSON.parse(localStorage.getItem("favoriteGoods")) || [];
    goodsArr.push({name, quantity, price, photo});
    localStorage.setItem("favoriteGoods", JSON.stringify(goodsArr));
    console.log(goodsArr);
}