// - Дано натуральное число n. Выведите все числа от 1 до n.

// let writeNumbers = (n) => {
//     let numArr = [];
//     for (let i = 1; i < n; i++) {
//         numArr.push(i);
//     }
//     console.log(numArr);
// }
// writeNumbers(20);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let numbersRange = (a, b) => {
//     let numArr = [];
//     if (a < b) {
//         for (; a <= b; a++) {
//             numArr.push(a);
//         }
//     } else {
//         for (; a >= b; a--) {
//             numArr.push(a);
//         }
//     }
//     return numArr;
// }
// console.log(numbersRange(5, 1));


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let changePosition = (arr, i) => {
//     let newArr = [];
//     for (let j = 0; j < arr.length; j++) {
//         if (j === i) {
//             let a = arr[j+1];
//             let b = arr[j];
//             arr[j] = a;
//             arr[j+1] = b;
//         }
//         newArr.push(arr[j])
//     }
//     console.log(newArr);
// }
// changePosition([9,8,0,4], 2);

// let changePosition = (arr, i) => {
//     arr.splice(i, 2, (arr[i+1]), (arr[i]));
//     console.log(arr);
// }
// changePosition([9,8,0,4], 0);


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let itemTransfer = (arr) => {
//     for (let i = 0, s = 0; s < arr.length; s++) {
//         if (arr[i] === 0) {
//             arr.push(arr[i]);
//             arr.splice(i, 1);
//         } else {i= i+1;}
//     }
//     console.log(arr);
// }
// const numbers = [0,0,1,0];
// itemTransfer(numbers);
// const numbers2 = [0, 0, 1, 0, 2, 4, 3, 0, 0, 14, 5, 10];
// itemTransfer(numbers2);