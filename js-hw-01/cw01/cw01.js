// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

// function random() {
//     return Math.floor();
// };
// console.log(random());

// function random(min, max) {
//     return Math.floor(min + Math.random() * (max - min));
// };
let random = (min, max) => Math.floor(min + Math.random() * (max - min));
console.log(random(1, 300));

let arr = [];
while (arr.length < 10) {
    arr.push(random(0, 100));
}
console.log(arr.length);
console.log(arr);

function sum() {
    let arrSum = 0;
    for (let i=0; i < arr.length; i++) {
        arrSum += arr[i];
    }
    return arrSum;
}

console.log(sum());

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book = {
    name: 'story of',
    pages: 257,
    genre: 'story',
}

console.log(book);

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    name: 'your point',
    pages: 523,
    genre: 'poem',
    author: 'Jack Tree'
}

console.log(book2);

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let library = [{
    name: 'Harry Potter and the Philosopher\'s Stone',
    pages: 352,
    genre: 'Bloomsbury Children\'s',
    author: 'J. K. Rowling'
},
    {
        name: '12 Rules for Life: An Antidote to Chaos',
        pages: 448,
        genre: 'Self development',
        author: 'Jordan B. Peterson'
    },
    {
        name: 'My First Keyboard Book',
        pages: 20,
        genre: 'Early learning and development',
        author: 'Rachel Green Sam Taplin'
    },
    {
        name: 'Atomic Habits',
        pages: 320,
        genre: 'Psychology',
        author: 'James Clear'
    },
    {
        name: 'The Subtle Art of Not Giving a F*ck',
        pages: 224,
        genre: 'Philosophy',
        author: 'Mark Manson'
    },
    {
        name: 'Van Gogh: The Complete Paintings',
        pages: 744,
        genre: 'Painting and art',
        author: 'Ingo F. Walther Rainer Metzger'
    },
]

console.log (library);
console.log (library.length);
console.log (library[0]);
console.log (library[1]);
console.log (library[2]);
console.log (library[3]);
console.log (library[library.length - 2]);
console.log (library[5]);
console.log (library[2].name);
console.log (library[4].pages);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = height * width;
console.log(`Площа трикутника = ${s}`);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let v = Math.PI * (dC / 2) * heightC;
console.log(`Об'єм циліндра = ${v}`);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2))
console.log(`Значення гіпотенузи = ${k}`);