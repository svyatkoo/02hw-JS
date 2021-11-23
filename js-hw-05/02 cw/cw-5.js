// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let minNumber = (a, b, c) => {
//     if (a < b && a < c ) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else if (c < a && c < b) {
//         console.log(c);
//     } else {
//         console.log('Enter three different numbers');
//     }
// }
// minNumber(10, 4, 30)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let maxNumber = (a, b, c) => {
//     if (a > b && a > c ) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else if (c > a && c > b) {
//         console.log(c);
//     } else {
//         console.log('Enter three different numbers');
//     }
// }
// maxNumber(300, 400, 300)


// - створити функцію яка повертає найбільше число з масиву

    // let maxNumOfArr = (arr) => Math.max(...arr);
    //
    // // let maxNumOfArr = (arr) => {
    // //     let maxValue = -Infinity;
    // //     for (const i of arr) {
    // //         if (i > maxValue) {
    // //             maxValue = i;
    // //         }
    // //     }
    // //     return maxValue;
    // // }
    //
    // let numbers = [1, 2, 30, 400, 5, 60, 7, 8, 90]
    // console.log(maxNumOfArr(numbers));


// - створити функцію яка повертає найменьше число з масиву

    // let minNumOfArr = (arr) => Math.min(...arr);
    //
    // // let minNumOfArr = (arr) => {
    // //     let minValue = Infinity;
    // //     for (const i of arr) {
    // //         if (i < minValue) {
    // //             minValue = i;
    // //         }
    // //     }
    // //     return minValue;
    // // }
    //
    // let numbers = [1, 2, 30, 400, -5, 60, 7, 8, 90]
    // console.log(minNumOfArr(numbers));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

    // let sumArr = (arr) => {
    //     let sum = 0;
    //     for (const num of arr) {
    //         sum += num;
    //     }
    //     return sum;
    // }
    // const numbers = [1, 5, 29, 4, 6, 5, 10, 11, 9, 3, 2, 6, 4, 4, 1]; //100
    // console.log(sumArr(numbers));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

    // let averageNum = (arr) => {
    //     let sum = 0;
    //     for (const num of arr) {
    //         sum += num;
    //     }
    //     return (sum / arr.length);
    // }
    // const numbers = [2, 10, 3, 5, 10];
    // console.log(averageNum(numbers));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

    // let minMaxNumber = (arr) => {
    //     let minValue = Infinity;
    //     let maxValue = -Infinity;
    //     for (const i of arr) {
    //         if (i < minValue) {
    //             minValue = i;
    //         } else if (i > maxValue) {
    //             maxValue = i;
    //         }
    //     }
    //     console.log('Max value: ' + maxValue);
    //     return minValue;
    // }
    // const numbers = [1, 5, 29, 4, -6, 5, 10, 11, 9, 3, 2, 6, 4, 4, 1]; //100
    // console.log('Min value: ' + minMaxNumber(numbers));


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

    // let randomArr = (size) => {
    //     const numbers = [];
    //     for (let i = 0; i < size; i++) {
    //         numbers.push(Math.round(Math.random()*100));
    //     }
    //     console.log(numbers);
    // }
    // randomArr(10);


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

    // let randomArr =(limit, size) => {
    //         const numbers = [];
    //         for (let i = 0; i < size; i++) {
    //             numbers.push(Math.round(Math.random() * limit));
    //         }
    //     console.log(numbers);
    // }
    // randomArr(10, 50);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

    // let abc = [0, 8 , 'str1', false, 7, 'str', 999, {id : 2, name : 'zzz'}, true, -21, [1, 2, 3]];
    // const arrReverse = (arr) => arr.reverse();
    // console.log(arrReverse(abc));