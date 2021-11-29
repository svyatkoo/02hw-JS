// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// function Car (model, producer,  year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function() {
//         return (`їдемо зі швидкістю ${maxSpeed} на годину`);
//     };
//     this.info = function() {
//         console.log(`Model - ${this.model};`);
//         console.log(`Producer - ${this.producer};`);
//         console.log(`Year - ${this.year};`);
//         console.log(`Max speed - ${this.maxSpeed};`);
//         console.log(`Engine capacity - ${this.engineCapacity};`);
//     };
//     this.increaseMaxSpeed = (newSpeed) => this.maxSpeed = this.maxSpeed + newSpeed;
//     this.changeYear = (newValue) => (this.year = newValue);
//     this.addDriver = function(driver) {
//         this.driver = driver;
//     }
// }
// let car = (new Car("x5", "bmv", 2021, 325, 3.0));

// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// console.log(car.drive());

// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// car.info();

// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// console.log(car.increaseMaxSpeed(100));

// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// car.changeYear(1981);
// car.info();

// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// let = newDriver = {name : "Pedro", age : 22, sex : "men", email : "pedro@gm.com", phobe : 380671234567};
// car.addDriver(newDriver);
// console.log(car.driver);
// console.log(car);



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// class Car {
//     constructor(model, producer,  year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//     drive() {
//             return (`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         };
//     info() {
//             console.log(`Model - ${this.model};`);
//             console.log(`Producer - ${this.producer};`);
//             console.log(`Year - ${this.year};`);
//             console.log(`Max speed - ${this.maxSpeed};`);
//             console.log(`Engine capacity - ${this.engineCapacity};`);
//         };
//     increaseMaxSpeed(newSpeed) {this.maxSpeed = this.maxSpeed + newSpeed};
//     changeYear(newValue) {this.year = newValue}
//     addDriver(driver) {this.driver = driver}
// }

// let car = (new Car("x5", "bmv", 2021, 325, 3.0));
// console.log(car);

// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// console.log(car.drive());

// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// car.info();

// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// car.increaseMaxSpeed(100);
// console.log(car.maxSpeed);

// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// car.changeYear(3041);
// console.log(car.year);

// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// let = newDriver = {name : "Pedro", age : 22, sex : "men", email : "pedro@gm.com", phobe : 380671234567};
// car.addDriver(newDriver);
// console.log(car.driver);
// console.log(car);



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Cinderella (girlName, girlAge, girlFootSize) {
//     this.name = girlName;
//     this.age = girlAge;
//     this.footSize = girlFootSize;
// };
//
// let girls = [];
// girls.push(new Cinderella("Olga", 28, 31),
//             new Cinderella("Lida", 32, 32),
//             new Cinderella("Ira", 24, 33),
//             new Cinderella("Tamara", 18, 30),
//             new Cinderella("Oksa", 33, 36),
//             new Cinderella("Darka", 32, 35),
//             new Cinderella("Jaruna", 40, 37),
//             new Cinderella("Solomia", 35, 30),
//             new Cinderella("Orusj", 29, 38),
//             new Cinderella("Zlata", 18, 29),
//             );
// console.log(girls);
//
// class Prince {
//     constructor(princeName, princeAge, findFootSize) {
//         this.princeName = princeName;
//         this.princeAge = princeAge;
//         this.findFootSize = findFootSize;
//     };
// };
// let newPrince = new Prince("Ivan", 30, 29);
// console.log(newPrince);

// function findCinderella (prince, girlsArr) {
//     for (const girl of girlsArr) {
//         if (girl.footSize === prince.findFootSize) {
//             console.log(`${prince.princeName} found his cinderella named ${girl.name}!`);
//         }
//     }
// }
// findCinderella(newPrince, girls)

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let cinderella = girls.find(value => newPrince.findFootSize === value.footSize);
// console.log(cinderella);
