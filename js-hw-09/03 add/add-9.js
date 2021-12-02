// - Є масив :
// Створити під кожен елемент коремий блок. В цьому блоці, під кожну властивість, створити окремий блок. Для властивості modules зробити список в цьому ж  блоці (в якому знаходиться все)



    let courses = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
            logo: '',
            price: 0,
            rating: 5,
            avgResult: 99
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
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced'],
            logo: '',
            price: 0,
            rating: 4.998,
            avgResult: 97
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
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'python core',
                'python advanced'],
            logo: '',
            price: 0,
            rating: 4.812,
            avgResult: 98
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
            logo: '',
            price: 0,
            rating: 4.65,
            avgResult: 97
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
                'java'],
            logo: '',
            price: 0,
            rating: 4.772,
            avgResult: 100
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
            logo: '',
            price: 0,
            rating: 4.53,
            avgResult: 90
        }
    ];

let wrap = document.createElement("div")
wrap.classList.add("wrap");
document.body.appendChild(wrap);



for (const course of courses) {
    let container = document.createElement("div")
    container.classList.add("container");
    wrap.appendChild(container);

    let header = document.createElement("div")
    header.classList.add("header");
    container.appendChild(header);

    let duration = document.createElement("div")
    duration.classList.add("duration");
    container.appendChild(duration);

    let footer = document.createElement("div")
    footer.classList.add("footer");
    container.appendChild(footer);



    for (const courseKey in course) {
        if (courseKey === "title") {
            let h3 = document.createElement("h3");
            h3.innerText = `Title: ${course[courseKey]}`
            header.appendChild(h3);
        } else if (courseKey === "logo") {
            let img = document.createElement("img");
            img.src = `${course[courseKey]}`;
            header.appendChild(img);
        } else if (courseKey === "monthDuration") {
            let p = document.createElement("p");
            p.innerText = `Month duration: ${course[courseKey]}`
            duration.appendChild(p);
        } else if (courseKey === "hourDuration") {
            let p = document.createElement("p");
            p.innerText = `Hour duration: ${course[courseKey]}`
            duration.appendChild(p);
        } else if (courseKey === "modules") {
            let h4 = document.createElement("h4");
            h4.innerText = "Modules:";
            container.insertBefore(h4, footer);
            let ol = document.createElement("ol");
            container.insertBefore(ol, footer);
            for (const module of course[courseKey]) {
                let li = document.createElement("li");
                li.innerText = `${module}`;
                ol.appendChild(li);
            }
        } else if (courseKey === "price" || courseKey === "rating" || courseKey === "avgResult") {
            let p = document.createElement("p");
            p.innerText = `${courseKey}: ${course[courseKey]}`
            footer.appendChild(p);
        }
    }
}