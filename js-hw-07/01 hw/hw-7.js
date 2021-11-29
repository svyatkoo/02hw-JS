// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User (id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = [];
// users.push(new User(1, "Ivan", "Materkin", "ivan.mat@gm.com", +'0671230001'),
//             new User(2, "Ira", "Bananik", "ira.ban@gm.com", +'0671230002'),
//             new User(3, "Peter", "Kokos", "peter.kok@gm.com", +'0671230003'),
//             new User(4, "Liza", "Kolobok", "liza.kol@gm.com", +'0671230004'),
//             new User(5, "Dima", "Jarui", "dima.jar@gm.com", +'0671230005'),
//             new User(6, "Oksa", "Helik", "oksa.hel@gm.com", +'0671230006'),
//             new User(7, "Kolj", "Moped", "kolj.mop@gm.com", +'0671230007'),
//             new User(8, "Larisa", "Barbariska", "laris.bar@gm.com", +'0671230008'),
//             new User(9, "Pavlo", "Skorohod", "pavlo.sko@gm.com", +'0671230009'),
//             new User(10, "Darinka", "Ivanivna", "darinka@gm.com", +'0671230010'),
//             new User(11, "Darinka", "Ivanivna", "darinka@gm.com", +'0671230010'),
// );
// console.log(users);



// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(users.filter((user) => (user.id)%2 === 0));



// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(users.sort((user1, user2) => user2.id - user1.id));  //Чому (sort) по зростанню перебиває (sort) по спаданню?
//
// console.log(users.sort((user1, user2) => user1.id - user2.id));



// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let clients = [];
// clients.push(new Client(1, "Ivan", "Materkin", "ivan.mat@gm.com", +'0671230001', 2),
//             new Client(2, "Ira", "Bananik", "ira.ban@gm.com", +'0671230002', 45),
//             new Client(3, "Peter", "Kokos", "peter.kok@gm.com", +'0671230003', 5),
//             new Client(4, "Liza", "Kolobok", "liza.kol@gm.com", +'0671230004', 1),
//             new Client(5, "Dima", "Jarui", "dima.jar@gm.com", +'0671230005', 10),
//             new Client(6, "Oksa", "Helik", "oksa.hel@gm.com", +'0671230006', 100),
//             new Client(7, "Kolj", "Moped", "kolj.mop@gm.com", +'0671230007', 3),
//             new Client(8, "Larisa", "Barbariska", "laris.bar@gm.com", +'0671230008', 8),
//             new Client(9, "Pavlo", "Skorohod", "pavlo.sko@gm.com", +'0671230009', 21),
//             new Client(10, "Darinka", "Ivanivna", "darinka@gm.com", +'0671230010', 17),
//             new Client(11, "Darinka", "Ivanivna", "darinka@gm.com", +'0671230010', 4),
// );
// console.log(clients);
// console.log(clients.sort((client1, client2) => client1.order - client2.order));