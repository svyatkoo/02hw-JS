// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

// function Person (id, name, username, email, addressSteet, addressSuite, addressCity,
//     addressZipcode, addressGeoLat, addressGeoLng, phone, website,
//     companyName, companyCatchPhrase, companyBs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {
//             steet : addressSteet,
//             suite : addressSuite,
//             city : addressCity,
//             zipcode : addressZipcode,
//             addressGeo : {lat : addressGeoLat, lng : addressGeoLng}
//         };
//         this.phone = phone;
//         this.website = website;
//         this.company = {name : companyName, catchPhrase : companyCatchPhrase, bs : companyBs};
// }
//
// let newPerson = new Person(1, "Ivan", "Kokos", "kokos@gm.com",
//                     "Kulas Light", "Apt. 556", "Gwenborough", "92998-3874", "-37.3159", "81.1496",
//                     "1-770-736-8031 x56442", "hildegard.org",
//                     "Romaguera-Crona", "Multi-layered client-server neural-net", "harness real-time e-markets"
//                     );
// console.log(newPerson);



//<---------- In progress ----------->

// // -  Створити функцію конструктор / клас  який описує об'єкт тегу
// // Поля :
// // - назва тегу ()
// // - опис його дій
// // - масив з атрибутами (2-3 атрибути максимум)
// // Кожен атрибут описати як окремий який буде містити
// // -назву атрибуту
// // -опис дії атрибуту
// // інформацію брати з htmlbook.ru
// //
// // Таким чином описати теги
// // -a
// // -div
// // -h1
// // -span
// // -input
// // -form
// // -option
// // -select
// // Приклад результуючого об'єкту
// // {
// //     titleOfTag: 'area',
// //         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// //     attrs: [
// //     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// //     {/*some props and values*/},
// //     {/*...*/},
// //     {/*...*/},
// // ]
// //
// // }
//
// // class Tag {
// //     constructor(titleOfTag, action, attrsTitleOfAttr, attrsActionOfAttr) {
// //         this.titleOfTag = titleOfTag;
// //         this.action = action;
// //         this.attrs = {
// //             titleOfAttr : attrsTitleOfAttr,
// //             actionOfAttr : attrsActionOfAttr,
// //         };
// //     }
// // }
//
// function Tag (titleOfTag, action, attrsTitleOfAttr, attrsActionOfAttr, attrs2TitleOfAttr, attrs2ActionOfAttr) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = {
//         titleOfAttr : attrsTitleOfAttr,
//         actionOfAttr : attrsActionOfAttr,
//     };
//     this.attrs2 = {
//         titleOfAttr : attrs2TitleOfAttr,
//         actionOfAttr : attrs2ActionOfAttr,
//     };
//
// }
//
// let tags = [];
// tags.push(new Tag("a", "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.",
//                     "accesskey" , "Активация ссылки с помощью комбинации клавиш.",
//                     "coords" , "Устанавливает координаты активной области."),
//         // new Tag("div", "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.",
//         //             {"align" : "Задает выравнивание содержимого тега <div>."},
//         //             {"title" : "Добавляет всплывающую подсказку к содержимому."}),
//         // new Tag("h1", "Тег <h1> представляет собой наиболее важный заголовок первого уровня.",
//         //             {"align" : "Определяет выравнивание заголовка."}),
//         // new Tag("span", "с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.",
//         //             {"class" : "Определяет имя класса, которое позволяет связать тег со стилевым оформлением."},
//         //             {"contenteditable" : "Сообщает, что элемент доступен для редактирования пользователем."}),
//         // new Tag("input", "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.",
//         //             {"accept" : "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов."},
//         //             {"autofocus" : "Устанавливает фокус в поле формы."}),
//         // new Tag("form", "Тег <form> устанавливает форму на веб-странице.",
//         //             {"action" : "Адрес программы или документа, который обрабатывает данные формы."},
//         //             {"target" : "Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат."}),
//         // new Tag("option", "Элемент <object> сообщает браузеру, как загружать и отображать объекты, которые исходно браузер не понимает.",
//         //             {"archive" : "Устанавливает путь к файлам, необходимым для работы объекта."},
//         //             {"data" : "Адрес файла для его отображения в окне браузера."}),
//         // new Tag("select", "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.",
//         //             {"disabled" : "Блокирует доступ и изменение элемента."},
//         //             {"required" : "Список обязателен для выбора перед отправкой формы."})
//         );
// console.log(tags);



