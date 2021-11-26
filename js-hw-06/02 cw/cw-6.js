// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

    // normalizeNames = (str, symbol) => {
    //     if (str.includes(symbol)) {
    //         let strArr = str.split((symbol));
    //         let normArr = [];
    //         strArr.forEach((item) => {
    //             if (item) normArr.push(item)
    //         });
    //         console.log(normArr.join(' '));
    //     }
    // }
    // let n1 = 'Harry..Potter'
    // let n2 = 'Ron---Whisley'
    // let n3 = 'Hermione__Granger'
    // normalizeNames(n1, '.');
    // normalizeNames(n2, '-');
    // normalizeNames(n3, '_');

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

    // let rundomNum = () => {
    //     let rundomArr = [];
    //     rundomArr.push(Math.round(Math.random() * 100));
    //     console.log(rundomArr);
    // };
    // rundomNum();


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let rundomNum = (min, max, size) => {
//     let rundomArr = [];
//     let i = 0;
//     while (i < size) {
//         rundomArr.push(Math.round(min + Math.random() * (max - min)));
//         i++
//     }
//     console.log(rundomArr);
//     let xxx = rundomArr.sort((num1, num2) => num1 - num2);
//     console.log(xxx);
// };
// rundomNum(0, 100, 30);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let rundomNum = (min, max, size) => {
//     let rundomArr = [];
//     let i = 0;
//     while (i < size) {
//         rundomArr.push(Math.round(min + Math.random() * (max - min)));
//         i++
//     }
//     console.log(rundomArr);
//     let xxx = rundomArr.filter((num) => {
//         if (!(num%2)) {
//             return num;
//         }
//     });
//     console.log(xxx);
// };
// rundomNum(0, 100, 10);


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let rundomNum = (min, max, size) => {
//     let rundomArr = [];
//     for (let i = 0; i < size; i++) {
//         rundomArr.push(Math.round(min + Math.random() * (max - min)));
//     }
//     console.log(rundomArr);
//     // let xxx = rundomArr.map(num => num.join(' '));
//     let xxx = rundomArr.map(value => value + '');
//     console.log(xxx);
//     console.log(typeof xxx[1]);
// };
// rundomNum(0, 100, 10);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

    // let nums = [11,21,3];
    // sortNums = (direction, arr) => {
    //     if (direction === 'ascending') {
    //         console.log(arr.sort((num1,num2) => num1 - num2));
    //     } else if (direction === 'descending') {
    //         console.log(arr.sort((num1,num2) => num2 - num1));
    //     } else {
    //         console.log('Choose only \'ascending\' or \'descending\' direction.');
    //     }
    // }
    // sortNums('ascending', nums);
    // sortNums('descending', nums);
    // sortNums('123', nums);

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4},
//     {title: 'Java Complex', monthDuration: 6}
// ];
//
// // console.log(coursesAndDurationArray.sort((num1, num2) => num1.monthDuration - num2.monthDuration));
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
// console.log(coursesAndDurationArray.sort((num1, num2) => num1.monthDuration - num2.monthDuration).filter(value => value.monthDuration > 5));


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// // let names = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, nobis.';
// let word = 'наслаждение';
// cutString = (str, n) => {
//     let xxx = [];
//     // while (str.length);
//     while (str.length) {
//         xxx.push(str.substr(0, n));
//         str = str.slice(n);
//     }
//     console.log(xxx);
//     return xxx;
// }
// document.write(cutString(word,3));
// // document.write(cutString(names,3));