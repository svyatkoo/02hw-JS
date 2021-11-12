

// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

{
    let hello = 'hello';
    let owu = 'owu';
    let com = 'com';
    let ua = 'ua';
    let a = 1;
    let b = 10;
    let c = -999;
    let d = 123;
    let e = 3.14;
    let f = 2.7;
    let g = 16;
    let h = true;
    let i = false;

    console.log(hello);
    alert(hello);
    document.write(hello)

    console.log(owu);
    alert(owu);
    document.write(owu)

    console.log(com);
    alert(com);
    document.write(com)

    console.log(ua);
    alert(ua);
    document.write(ua)

    console.log(a);
    alert(a);
    document.write(a);

    console.log(b);
    alert(b);
    document.write(b);

    console.log(c);
    alert(c);
    document.write(c);

    console.log(d);
    alert(d);
    document.write(d);

    console.log(e);
    alert(e);
    document.write(e);

    console.log(f);
    alert(f);
    document.write(f);

    console.log(g);
    alert(g);
    document.write(g);

    console.log(h);
    alert(h);
    document.write(h);

    console.log(i);
    alert(i);
    document.write(i);
}



// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

{
    hello = 'qwerty';
    owu = 'ttttt';
    com = 'site';
    ua = 'country';
    a = 21;
    b = '10';
    c = 'ten';
    d = 1020;
    e = 'PI';
    f = -12;
    g = 74.879;
    h = 'truetruetrue';
    i = 'iter';

    console.log(hello);
    alert(hello);
    document.write(hello)

    console.log(owu);
    alert(owu);
    document.write(owu)

    console.log(com);
    alert(com);
    document.write(com)

    console.log(ua);
    alert(ua);
    document.write(ua)

    console.log(a);
    alert(a);
    document.write(a);

    console.log(b);
    alert(b);
    document.write(b);

    console.log(c);
    alert(c);
    document.write(c);

    console.log(d);
    alert(d);
    document.write(d);

    console.log(e);
    alert(e);
    document.write(e);

    console.log(f);
    alert(f);
    document.write(f);

    console.log(g);
    alert(g);
    document.write(g);

    console.log(h);
    alert(h);
    document.write(h);

    console.log(i);
    alert(i);
    document.write(i);
}



// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

{
    let firstName = 'Sviatoslav';
    let middleName = 'Sviat';
    let lastName = 'Hel';

    let person = firstName + ' ' + middleName + ' ' + lastName;
    console.log(person);
}



// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

{
    let firstName = prompt("Enter your name...");
    let surName = prompt("Enter your surname...");
    let age = prompt("Enter your age...");

    console.log(`Вітаю ${firstName} ${surName}. Тобі ${age} років.`)
}



// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

{
    let a = 100;
    let b = '100';
    let c = true;
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}



// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!

{
    console.log(5 < 6); //5 ? 6 -> true
    console.log(5 > 6); // 5 ? 6 -> false
    console.log(5 === 6); // 5 ? 6 -> false
    console.log(5 >= 6); // 5 ? 6 -> false
    console.log(10 === 10); // 10 ? 10 -> true
    console.log(10 <= 10); // 10 ? 10 -> true
    console.log(10 < 10); // 10 ? 10 -> false
    console.log(10 > 10); // 10 ? 10 -> false
    console.log(10 !== 10); // 10 ? 10 -> false
    console.log(123 > 123); // 123 ? '123' -> false
    console.log(123 === 123); // 123 ? '123' -> true
}



// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?



{
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");        205 (спершу змінна "а" перетворюється в стрінгу)
// document.write(str - a + "<br/>");        15 (змінна "str" перетворюється в тип number)
// document.write(str * "2" + "<br/>");      40 (змінна "str" і "2" перетворюється в тип number)
// document.write(str / 2 + "<br/>");        10 (змінна "str" і "2" перетворюється в тип number)
}

