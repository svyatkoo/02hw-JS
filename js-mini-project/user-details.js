
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let url = new URL(location.href);
let idOfUser = url.searchParams.get("id");
fetch("https://jsonplaceholder.typicode.com/users/" + idOfUser)
    .then(objectUser => objectUser.json())
    .then(objectUser => {
        let wrapUserInfo = document.createElement("div");
        wrapUserInfo.classList.add("wrapUserInfo");


        let header = document.createElement("div");
        header.classList.add("header");
        let headerInfo = document.createElement("div");
        headerInfo.classList.add("headerInfo");

        let contactInfo = document.createElement("div");
        contactInfo.classList.add("contactInfo");

        let addressBox = document.createElement("div");
        addressBox.classList.add("addressBox");

        let companyBox = document.createElement("div");
        companyBox.classList.add("companyBox");


        let titleOfPostsContainer = document.createElement("div");
        titleOfPostsContainer.classList.add("titleOfPostsContainer");

// create button to show the Posts container
        let btnTitleOfPosts = document.createElement("button");
        btnTitleOfPosts.classList.add("btnTitleOfPosts");
        btnTitleOfPosts.innerText = "Post of current user";
        btnTitleOfPosts.onclick = () => {
            fetch("https://jsonplaceholder.typicode.com/users/" + idOfUser + "/posts")
                .then(receivePostsArr => receivePostsArr.json())
                .then(receivePostsArr => {
                    wrapUserInfo.append(titleOfPostsContainer);
                    titleOfPostsContainer.innerText = "";
                    for (const posts of receivePostsArr) {
                        let postBox = document.createElement("div");
                        postBox.classList.add("postBox");
                        let postTitle = document.createElement("p");
                        postTitle.innerText = `${posts.title}`;

                        let linkDetails = document.createElement("a");
                        linkDetails.href = `./post-details.html?id=${posts.id}`;
                        // linkDetails.href = `./post-details.html?data=` + JSON.stringify(posts);

                        let btnPostInfo = document.createElement("button");
                        btnPostInfo.classList.add("btnPostInfo");
                        btnPostInfo.innerText = "Post info";

                        linkDetails.append(btnPostInfo);
                        postBox.append(postTitle, linkDetails);
                        titleOfPostsContainer.append(postBox);
                    }
                    // btnTitleOfPosts.disabled = true;
                    titleOfPostsContainer.classList.toggle("visibilityChanger")
                });
        }

        wrapUserInfo.append(header, contactInfo, addressBox, companyBox, btnTitleOfPosts);
        document.body.append(wrapUserInfo);


// write Users info and create HTML elements
        for (const userKey in objectUser) {
            let titleName = userKey.slice(0, 1).toUpperCase() + userKey.slice(1);
            if (userKey === "id") {
                let idNumber = document.createElement("h2");
                idNumber.classList.add("idNumber");
                idNumber.innerText = `${objectUser[userKey]}`;
                header.append(idNumber);
            }

            if (userKey === "name" || userKey === "username") {
                let nameInfo = document.createElement("h3");
                nameInfo.innerText = `${titleName}: ${objectUser[userKey]}`;
                headerInfo.append(nameInfo);
                header.append(headerInfo);
            }

            if (userKey === "address") {
                addressBox.innerHTML = `<h4>${titleName}:</h4>`;
                let addressInfo = document.createElement("div");
                addressInfo.classList.add("addressInfo");
                addressBox.append(addressInfo);

                for (const key in objectUser[userKey]) {
                    let titleName = key.slice(0, 1).toUpperCase() + key.slice(1);

                    if (key !== "geo") {
                        let pAddress = document.createElement("li");
                        pAddress.innerHTML = `${titleName}: ${objectUser[userKey][key]}`;
                        addressInfo.append(pAddress);
                    } else {
                        let geoInfo = document.createElement("div");
                        geoInfo.classList.add("geoInfo");
                        geoInfo.innerHTML = `<li>${titleName}:</li>`;
                        addressInfo.append(geoInfo);

                        for (const geoKey in objectUser[userKey][key]) {
                            let pGeo = document.createElement("p");
                            pGeo.innerText = `${geoKey}: ${objectUser[userKey][key][geoKey]}`;
                            geoInfo.append(pGeo);
                        }
                    }
                }
            }

            if (userKey === "email" || userKey === "phone" || userKey === "website"){
                let pContactInfo = document.createElement("p");
                pContactInfo.innerText = `${titleName}: ${objectUser[userKey]}`;
                contactInfo.append(pContactInfo);
            }

            if (userKey === "company") {
                companyBox.innerHTML = `<h4>${titleName}:</h4>`;
                for (const key in objectUser[userKey]) {
                    let titleName = key.slice(0, 1).toUpperCase() + key.slice(1);
                    let pCompany = document.createElement("p");
                    pCompany.innerHTML = `${titleName}: ${objectUser[userKey][key]}`;
                    companyBox.append(pCompany);
                }
            }

        }
    })