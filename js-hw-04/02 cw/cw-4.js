// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function middleNumber(a, b, c) {
//     if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number'){
//         if (a > b && a < c || a > c && a < b) {
//             console.log(a);
//         } else if (b > a && b < c || b > c && b < a) {
//             console.log(b);
//         } else if (c > a && c < b || c > b && c < b) {
//             console.log(c);
//         } else {
//             console.log('Enter three different numbers!');
//         }
//     } else {
//         console.log('You can use only numbers');
//     }
// }
// middleNumber(10,11, 15)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNumber (a, b, c) {
//     if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
//         if (a > b && a > c) {
//             console.log(a);
//         } else if (b > a && b > c) {
//             console.log(b);
//         } else if (c > a && c > b) {
//             console.log(c);
//         } else {
//             console.log('Enter only three different numbers!');
//         }
//     } else {
//         console.log('You can use only numbers');
//     }
// }
// maxNumber(-2,11, 0)


// - створити функцію яка повертає найбільше число з масиву

// const numbers = [9, 5, -21, 0, 14, 34, 100, 8, 54, 37, 88, 4.5, 69, 1000.5, 564];
// function muxNumber (arr) {
//     return Math.max.apply(null, arr);
//     }
// console.log(muxNumber(numbers));


// - створити функцію яка повертає найменьше число з масиву

// const numbers = [9, 5, -21, 0, 14, 34, 100, 8, 54, 37, 88, 4.5, 69, 1000.5, 564];
// function muxNumber (arr) {
//     // return Math.min.apply(null, arr);
//     return Math.min(...numbers);
// }
// console.log(muxNumber(numbers));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// const num = [1, 5, 29, 4, 6, 5, 10, 11, 9, 3, 2, 6, 4, 4, 1]; //100
// function sumNumbers (arr) {
//     let sum = +'';
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumNumbers(num));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// const num = [1, 5, 29, 4, 6, 5, 10, 11, 9, 3, 2, 6, 4, 4, 1];
// function sumNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log('Arr sum: ' + sumNumbers(num));
// console.log('Arr lenght: ' + num.length);
//
// function averageNumber (arr) {
//     return sumNumbers(arr) / arr.length;
//     //return Math.round(sumNumbers(arr) / arr.length);
// }
// console.log('Average number: ' + averageNumber(num));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function min(arr) {
//     let minValue = Infinity;
//     for (const i in arr) {
//         if (arr[i] < minValue) {
//             minValue = arr[i];
//         }
//     }
//     return minValue;
// }
// // console.log(min(10, -6, 20, 9));
// function max(arr) {
//     let maxValue = -Infinity;
//     for (const i in arr) {
//         if (arr[i] > maxValue) {
//             maxValue = arr[i];
//         }
//     }
//     return maxValue;
// }
// // console.log(max(10, -6, 20, 9));
//
// function minMaxNumber() {
//     console.log(max(arguments));
//     return min(arguments);
// }
//
// minMaxNumber(10, 20, 3, 4);
// minMaxNumber(1, 2, 3, 4, 5, 5);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function rundomArr(size) {
//     const numbers = [];
//     for (let i = 0; i < size; i++) {
//         numbers.push(Math.round(Math.random()*100));
//     }
//     console.log(numbers);
// }
// rundomArr(20);


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// const rundomNumber = (limit) => Math.round(Math.random() * limit);
// function rundomRangeArr(limit, size) {
//     const numbers = [];
//     for (let i = 0; i < size; i++) {
//         numbers.push(rundomNumber(limit));
//     }
//     console.log(numbers);
// }
// rundomRangeArr(3, 10)


// function rundomRangeArr(min, limit, size) {
//     const numbers = [];
//     for (let i = 0; i < size; i++) {
//         numbers.push(Math.round(min + Math.random() * limit));
//     }
//     console.log(numbers);
// }
// rundomRangeArr(0, 3, 20)


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let abc = [0, 8 , 'str1', false, 7, 'str', 999, {id : 2, name : 'zzz'}, true, -21, [1, 2, 3]];
// const arrReverse = (arr) => arr.reverse();
// console.log(arrReverse(abc));

// function arrReverse(arr) {
//     const newArr = [];
//     let i = arr.length - 1;
//     while (i >= 0) {
//         newArr.push(arr[i]);
//         i--;
//     }
//     console.log(newArr);
// }
// arrReverse(abc);

