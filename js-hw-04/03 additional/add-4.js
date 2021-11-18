// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function oneOrSum() {
//     if (arguments.length === 1) {
//         console.log(arguments[0]);
//     } else if (arguments.length === 2) {
//         return arguments[0] + arguments[1]
//     }
// }
// oneOrSum('str1');
// console.log(oneOrSum(10, 'xxx'));


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// const abc1 = [1,2,3,4];
// const abc2 = [2,3,4,5];
// function sumIndexArr(arr1, arr2) {
//     const newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         newArr.push(arr1[i] + arr2[i]);
//     }
//     console.log(newArr);
// }
// sumIndexArr(abc1, abc2);


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function keyArr(arr) {
//     const keyArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (const arrKey in arr[i]) {
//             keyArr.push(arrKey);
//         }
//     }
//     return keyArr;
// }
// const names = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// console.log(keyArr(names));


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function valueArr(arr) {
//     const valueArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (const k in arr[i]) {
//             valueArr.push(arr[i][k]);
//         }
//     }
//     return valueArr;
// }
// const names = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// console.log(valueArr(names));