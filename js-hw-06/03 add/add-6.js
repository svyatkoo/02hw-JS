// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// let emilValidator = (str) => {
//     let emailNormalize = str.toLowerCase().trim();
//     if (emailNormalize.includes('@') && !(emailNormalize.includes(' '))) {
//         if (emailNormalize.indexOf('@') !== 0 && (emailNormalize.slice(emailNormalize.indexOf('@') + 3)).includes('.')) {
//             console.log('Valid!')
//         } else {
//             console.log("Don`t valid!");
//         }
//     } else {
//         console.log("Your email must include '@' symbol without eny empty places");
//     }
// }
// emilValidator('someemail@gmail.com');
// emilValidator('someeMAIL@gmail.com');
// emilValidator('someeMAIL@i.ua');
// emilValidator('some.email@gmail.com');


// - є масив
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'] //11
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced'] //11
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced'] //10
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC'] //7
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java'] //13
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'] //11
//     }
// ];
// let xxx = coursesArray.sort((val1, val2) => val1.modules.length - val2.modules.length);
// console.log(xxx);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// count = (str, stringsearch) => {
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === stringsearch) {
//             counter += 1;
//         }
//     }
//     console.log(counter);
// }
// let text = "Астрономия это наука о небесных объектах";
// count(text, 'о');


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// cutString = (str, n) => {
//     let strArr = str.split(' ');
//     console.log(strArr);
//     let xxx = strArr.splice(n, strArr.length-n);
//     console.log(strArr);
// }
// let text = "Сила тяжести приложена к центру масс тела";
// cutString(text, 5);