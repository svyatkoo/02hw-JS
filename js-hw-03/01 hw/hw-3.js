// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// {
//     let arr = [1, 2, 3, 4, 5, 'str1', 'str2', 'str3', 'str4', 'str5', false, 22, true, 'string', 0];
//     console.log(arr);
// }

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// {
//     let arr = [];
//     arr[0] = 25;
//     arr[4] = 'str';
//     arr[5] = false;
//     arr[6] = -2;
//     arr[7] = true;
//     console.log(arr);
//     console.log(arr[5]);
//     console.log(arr[6]);
//     console.log(arr[7]);
//     console.log(arr[0]);
//     console.log(arr[1]);
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// {
//     for (i = 0; i < 10; i++) {
//         document.write('<div>block</div>');
//     }
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// {
//     {
//         for (i = 1; i <= 10; i++) {
//             document.write(`<div>hello ${i}</div>`);
//         }
//     }
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// {
//     i = 0;
//     while (i < 20) {
//         document.write('<h1>abc</h1>');
//         i++;
//     }
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// {
//     i = 1;
//     while (i <= 20) {
//         document.write(`<h1>header ${i}</h1>`);
//         i++;
//     }
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// {
//     let arr = [100, 8, -2, 23, 87, 10, 45, 0, 38, -99];
//     for (i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// {
//     let arr = ['abc', 'str1', 'kyt', 'str4', 'ttt', 'fox', 'jon', 'target', 'name', 'str10',];
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// {
//     let arr = ['q', 21, true, {name: 'petro', age: 12}, 'str', -100, false, 'abc', 'oooo', 0];
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// {
//     let arr = [21, false, 76, 'ste', true, 'abc', 'q', false, -22, true];
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof(arr[i]) === 'boolean') {
//             console.log(arr[i]);
//         }
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// {
//     let arr = ['q', 21, true, {name: 'petro', age: 12}, 'str', -100, false, 'abc', 'oooo', 0];
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof (arr[i]) === 'number') {
//             console.log(arr[i]);
//         }
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// {
//     let arr = ['q', 21, true, {name: 'petro', age: 12}, 'str', -100, false, 'abc', 'oooo', 0];
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof (arr[i]) === 'string') {
//             console.log(arr[i]);
//         }
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// {
//     let arr = [];
//     arr[0] = true;
//     arr[1] = 21;
//     arr[2] = 'time';
//     arr[3] = {id : 21, name : 'ira'};
//     arr[4] = false;
//     arr[5] = 'number';
//     arr[6] = 0.1;
//     arr[7] = 0;
//     arr[8] = true;
//     arr[9] = 'str10';
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// {
//     for (i = 0; i < 10; i++) {
//         console.log(i);
//         document.write(i);
//     }
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// ---Зробив через декремент

// {
//     for (i = 100; i > 0; i--) {
//         console.log(i);
//         document.write(i);
//     }
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// {
//     for (i = 0; i < 100; i+=2) {
//         console.log(i);
//         document.write(i);
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// {
//     for (i = 0; i < 100; i++) {
//         if (!(i%2) && (i !== 0)) {
//             console.log(i);
//             document.write(i);
//         }
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// {
//     for (i = 0; i < 100; i++) {
//         if (i%2) {
//             console.log(i);
//             document.write(i);
//         }
//     }
// }