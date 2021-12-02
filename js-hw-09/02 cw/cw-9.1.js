// - Є масив
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let wrap = document.createElement("div");
wrap.classList.add("wrap");
let scriptFirstElement = document.getElementsByTagName("script")[0];
document.body.insertBefore(wrap, scriptFirstElement);

for (const course of coursesArray) {
    let container = document.createElement("div");
    container.classList = "container";
    wrap.appendChild(container);
    let divDuration = document.createElement("div");
    divDuration.classList = "divDuration";
    container.appendChild(divDuration);


    for (const key in course) {
        if (key === "title") {
            let h1 = document.createElement("h1");
            h1.innerText = `${course[key]}`
            container.insertBefore(h1, divDuration);
        } else if (key === "monthDuration") {
            let pDuration = document.createElement("p");
            pDuration.innerText = `Month duration: ${course[key]}`;
            divDuration.appendChild(pDuration);
        } else if (key === "hourDuration") {
            let pDuration = document.createElement("p");
            pDuration.innerText = `Hour duration: ${course[key]}`;
            divDuration.appendChild(pDuration);
        } else if (key === "modules") {
            let h4 = document.createElement("h4");
            h4.innerText = "Modules";
            container.appendChild(h4);
            let ulModules = document.createElement("ul");
            container.appendChild(ulModules);
            for (const moduleItem of course[key]) {
                let li = document.createElement("li");
                li.innerText = `${moduleItem}`;
                ulModules.appendChild(li);
            }
        }

    }



}

// else if (key === "monthDuration" || key === "hourDuration") {
//     let pDuration = document.createElement("p");
//     pDuration.innerText = `${course[key]}`;
//     divDuration.appendChild(pDuration);
//     let xxx = document.getElementsByClassName("divDuration")
//     console.log(xxx);
//     // if ()
// }