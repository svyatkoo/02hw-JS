// // -створити форму з інпутами для name та age.
// // При відправці форми записати об'єкт в localstorage
// let f1 = document.createElement("form");
// let nameInput = document.createElement("input");
// nameInput.placeholder = "Name: ";
// let ageInput = document.createElement("input");
// ageInput.placeholder = "Age: ";
// let btn = document.createElement("button");
// btn.innerText = "Sent";
// f1.append(nameInput, ageInput, btn);
// document.body.appendChild(f1);
//
// f1.onsubmit = function (e) {
//     e.preventDefault();
//     let i = localStorage.length + 1;
//     localStorage.setItem("user" + i, JSON.stringify({name : nameInput.value, age : ageInput.value}));
//     console.log(localStorage);
//     console.log("New user:  " + localStorage.getItem("user" + i));
// }


// // -створити форму з інпутами для model,type та volume автівки.
// // при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
// // localStorage.clear();
// let f2 = document.createElement("form");
// let modelInput = document.createElement("input");
// modelInput.placeholder = "Model: ";
// let typeInput = document.createElement("input");
// typeInput.placeholder = "Type: ";
// let volumeInput = document.createElement("input");
// volumeInput.placeholder = "Volume: ";
// let btn2 = document.createElement("button");
// btn2.innerText = "Sent Cars";
// f2.append(modelInput, typeInput, volumeInput, btn2);
// document.body.appendChild(f2);
// f2.onsubmit = function (e) {
//     e.preventDefault();
//     let cars = JSON.parse(localStorage.getItem('cars')) || [];
//     cars.push({model : modelInput.value, type : typeInput.value, volume : volumeInput.value});
//     localStorage.setItem("cars", JSON.stringify(cars));
//     console.log(JSON.parse(localStorage.getItem('cars')));
// }


