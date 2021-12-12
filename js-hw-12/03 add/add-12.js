//
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


let wrap = document.createElement("div");
wrap.classList.add("wrap");
document.body.append(wrap);
fetch("https://jsonplaceholder.typicode.com/users")
    .then(usersArr => usersArr.json())
    .then(usersArr => {
        for (const user of usersArr) {
            let userContainer = document.createElement("div");
            userContainer.classList.add("userContainer");
            let userContainerBody = document.createElement("div");
            userContainerBody.classList.add("userContainerBody");
            let postsWrap = document.createElement("div");
            postsWrap.classList.add("postsWrap");
            let btnPosts = document.createElement("button");
            btnPosts.innerText = "Show Posts";
            btnPosts.onclick = () => {
                postsWrap.innerText = "";
                let header = document.createElement("h3");
                header.innerText = "Posts";
                postsWrap.append(header);
                fetch("https://jsonplaceholder.typicode.com/users/" + user.id + "/posts")
                    .then(postsArr => postsArr.json())
                    .then(postsArr => {
                        for (const post of postsArr) {
                            let postsContainer = document.createElement("div");
                            postsContainer.classList.add("postsContainer");
                            let btnComments = document.createElement("button");
                            btnComments.innerText = "Show Comments";
                            postsContainer.innerHTML = `
                                <h4>Id: ${post.id}</h4>
                                <h4>Title: ${post.title}</h4>
                                <p>Body: ${post.body}</p>                         
                            `;
                            postsContainer.append(btnComments);
                            postsWrap.append(postsContainer);
                            let commentsWrap = document.createElement("div");
                            commentsWrap.classList.add("commentsWrap");
                            postsContainer.append(commentsWrap);
                            btnComments.onclick = () => {
                                    commentsWrap.innerText = "";
                                    // let commentsWrap = document.createElement("div");
                                    // commentsWrap.classList.add("commentsWrap");
                                    commentsWrap.innerHTML = "<h3>Comments</h3>";
                                    // postsContainer.append(commentsWrap);
                                    fetch("https://jsonplaceholder.typicode.com/posts/" + post.id + "/comments")
                                        .then(commentsArr => commentsArr.json())
                                        .then(commentsArr => {
                                            console.log(commentsArr);
                                            for (const comment of commentsArr) {
                                                let commentsContainer = document.createElement("div");
                                                commentsContainer.classList.add("commentsContainer");
                                                commentsContainer.innerHTML = `
                                                <h4>Id: ${comment.id}</h4>
                                                <h4>Name: ${comment.name}</h4>
                                                <h4>Email: ${comment.email}</h4>
                                                <p>Body: ${comment.body}</p>
                                            `;
                                                commentsWrap.append(commentsContainer);
                                            }
                                        });
                                    commentsWrap.classList.toggle("showComments");
                                };
                        }
                    });
                postsWrap.classList.toggle("showPosts");
            };
            userContainer.append(userContainerBody, btnPosts, postsWrap);
            wrap.append(userContainer);
            function openObject(objectItem) {
                for (const key in objectItem) {
                    if (typeof(objectItem[key]) === "object") {
                        let p = document.createElement("p");
                        p.innerText = `${key}:`;
                        userContainerBody.append(p);
                        openObject(objectItem[key]);
                    } else {
                        let p = document.createElement("p");
                        p.innerText = `${key} : ${objectItem[key]}`;
                        userContainerBody.append(p);
                    }
                }
            }
            openObject(user);
        }
    });
