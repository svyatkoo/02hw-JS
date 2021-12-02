// // - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// //     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// //     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// let content = document.getElementById("content");
// let ul = document.createElement("ul");
// content.appendChild(ul);
// let h2Collection = document.getElementsByTagName("h2");
// for (const item of h2Collection) {
//     let li = document.createElement("li");
//     li.innerText = `${item.innerText}`;
//     ul.appendChild(li);
// }


// // -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// //     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// //     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
// let wrap = document.createElement("div");
// wrap.style.background = "silver";
// wrap.innerHTML = "<h1>--- Правила бойцовского клуба ---</h1>"
// document.body.appendChild(wrap);
//
// for (const rule of rules) {
//     let container = document.createElement("div");
//     wrap.appendChild(container);
//     let title = document.createElement("h2");
//     container.appendChild(title);
//     let text = document.createElement("p");
//     container.appendChild(text);
//     console.log(rule);
//     for (const key in rule) {
//         if (key === "title") {
//             title.innerText = `${rule[key]}`;
//         } else {
//             text.innerText = `${rule[key]}`;
//         }
//     }
// }


