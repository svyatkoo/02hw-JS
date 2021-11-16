// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

// {
//     let arr = [];
//     for (let i = 2; arr.length < 50; i+=2) {
//        arr.push(i);
//     }
//     console.log(arr);
// }

// {
//     let arr = [];
//     for (let i = 2; arr.length < 50; i++) {
//         if (!(i%2)) {
//             arr.push(i);
//         }
//     }
//     console.log(arr);
// }

// {
//     let arr = [];
//     let i = 2;
//     while (arr.length < 50) {
//         if (!(i%2)) {
//             arr.push(i);
//         }
//         i++;
//     }
//     console.log(arr);
// }


//     b. заповнити його 50 непарними числами за допомоги циклу.

// {
//     let arr = [];
//     for (i=1; arr.length < 50; i++) {
//         if (i%2) {
//             arr.push(i);
//         }
//     }
//     console.log(arr);
// }


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// {
//     let arr = [];
//     while (arr.length < 20) {
//         let num = Math.floor(Math.random() * 101);
//         arr.push(num);
//     }
//     console.log(arr);
// }


//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// {
//     let arr = [];
//     function RandomNumber(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min)) + min;
//     }
//
//     while (arr.length < 20) {
//         arr.push(RandomNumber(8, 732));
//     }
//     console.log(arr);
// }

// {
//     let arr = [];
//     while (arr.length < 20) {
//         let num = Math.floor(Math.random() * 1000);
//             if (num >= 8 && num <= 732) {
//                 arr.push(num);
//             }
//     }
//     console.log(arr);
// }

// a. заповнити його 50 парними
// b. заповнити його 50 непарними
// c. Заповнити масив 20ма рандомними числами
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732

// let arr = [];
// while (arr.length < 50) {
//     let num = Math.floor(Math.random() * 101);
//         if (!(num % 2)) {
//             arr.push(num);
//         }
// }
// console.log(arr);
//
// while (arr.length < 100) {
//     let num = Math.floor(Math.random() * 101);
//     if (num % 2) {
//         arr.push(num);
//     }
// }
// console.log(arr);
//
// while (arr.length < 120) {
//     let num = Math.floor(Math.random() * 101);
//     arr.push(num);
// }
// console.log(arr);
//
// while (arr.length < 140) {
//     let num = Math.floor(Math.random() * 1000);
//         if (num >= 8 && num <= 732) {
//             arr.push(num);
//         }
// }
// console.log(arr);


// 2. Вивести за допомогою console.log кожен третій елемен

// {
//     for (i = 2 ; i < arr.length; i += 3){
//             console.log(arr[i]);
//     }
// }


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// {
//     for (i = 2; i < arr.length; i +=3 ) {
//         if (!(arr[i]%2)) {
//             console.log(arr[i]);
//         }
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// {
//     let evenArr = [];
//     for (i = 2; i < arr.length; i += 3) {
//         if (!(arr[i]%2)) {
//             evenArr.push(arr[i]);
//         }
//     }
//     console.log(evenArr);
// }


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// {
//     for (i = 0; i < arr.length; i++) {
//         if (!(arr[i]%2)) {
//             console.log(arr[i-1]);
//         }
//     }
// }


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// {
//     let price = [100,250,50,168,120,345,188];
//     sum = 0;
//     for (i = 0; i < price.length; i++) {
//         sum += price[i];
//     }
//     let average = sum/price.length;
//     console.log(average);
// }

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// {
//     let arr = [];
//     for (i = 0; i < 20; i++) {
//         let num = Math.floor(Math.random() * 20);
//         arr.push(num);
//     }
//     console.log(arr);
//
//     let arrNew = [];
//     for (i = 0; i < arr.length; i++) {
//         let num2 = arr[i] * 5;
//         arrNew.push(num2);
//     }
//     console.log(arrNew);
// }


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// {
//     let abc = ['vas', 2 , 45, 'ads', 9, 'str', 0, 12, -3, 'slovo', 'ttr', 1, {name: 'kolo'}, 21];
//     let arrNumber = [];
//     for (let item of abc) {
//         console.log(item);
//         if (typeof (item) === 'number') {
//             arrNumber.push(item);
//         }
//     }
//     console.log(arrNumber);
// }


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let usersWithCities = [];
// let a = usersWithId;
// let b = citiesWithId;
// let ttt = function fun(a,b) {
//     let newObj = {};
//     for (let key in a) {
//         if (a[key] === b[key]) {
//             newObj = a.merge(b);
//         }
//     }
//     return newObj;
// }
//
// // let ttt = fun(usersWithId, citiesWithId);
// usersWithCities.push(ttt);
// console.log(usersWithCities);

//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// {
//     let arr = [1,2,3,4,5,6,7,8,9,10];
//     for (i = 0; i < arr.length; i++) {
//         if (!(arr[i]%2)) {
//             console.log(arr[i]);
//         }
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// {
//     let arr = [1,2,3,4,5,6,7,8,9,10];
//     let newArr = [];
//     i = arr.length-1;
//     while (i >= 0) {
//         newArr.push(arr[i]);
//         i--;
//     }
//     console.log(newArr);
// }

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// {
//     let arr = [ 'a', 'b', 'c'];
//     word = '';
//     for (i = 0; i < arr.length; i++) {
//         word = word + arr[i];
//     }
//     console.log(word);
// }


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// {
//     let arr = [ 'a', 'b', 'c'];
//     word = '';
//     i = 0;
//     while (i < arr.length) {
//         word = word + arr[i];
//         i++
//     }
//     console.log(word);
// }

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// {
//     let arr = [ 'a', 'b', 'c'];
//     word = '';
//     for (const item of arr) {
//         word = word + item;
//     }
//     console.log(word);
// }