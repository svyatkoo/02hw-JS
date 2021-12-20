// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


let url = new URL(location.href);
let idOfPost = url.searchParams.get("id");

fetch("https://jsonplaceholder.typicode.com/posts/" + idOfPost)
    .then(post => post.json())
    .then(post => {
        console.log(post);
        let postWrap = document.createElement("div");
        postWrap.classList.add("postWrap");
        postWrap.innerHTML = `
                <p><span>UserId:</span> ${post.userId}</p>
                <p><span>Id:</span> ${post.id}</p>
                <p><span>Title:</span> ${post.title}</p>
                <p><span>Text:</span> ${post.body}</p>
            `;
        let commentsOfPost = document.createElement("div");
        commentsOfPost.classList.add("commentsOfPost");

        let btnComments = document.createElement("button");
        btnComments.classList.add("btnComments");
        btnComments.innerText = "Show comments";
        btnComments.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${idOfPost}/comments`)
                .then(coomentsArr => coomentsArr.json())
                .then(coomentsArr => {
                    commentsOfPost.innerText = "";
                    for (const comment of coomentsArr) {
                        let commentBox = document.createElement("div");
                        commentBox.classList.add("commentBox");
                        commentBox.innerHTML = `
                            <h4>Name: ${comment.name}</h4>
                            <h4>Email: ${comment.email}</h4>
                            <p>${comment.body}</p>
                        `;
                        commentsOfPost.append(commentBox);
                    }
                })
            // btnComments.disabled = true;
            commentsOfPost.classList.toggle("visibilityChanger");
        };

        postWrap.append(btnComments, commentsOfPost);
        document.body.append(postWrap);
    });

