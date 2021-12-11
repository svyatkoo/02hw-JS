// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(postsArr => postsArr.json())
    .then(postsArr => {
        let wrap = document.createElement("div");
        wrap.classList.add("wrap");
        document.body.append(wrap);
        for (const post of postsArr) {
            let container = document.createElement("div");
            container.classList.add("container");
            let containerBody = document.createElement("div");
            containerBody.classList.add("containerBody");
            containerBody.innerHTML = `
                <h4>UserId: ${post.userId};</h4>
                <h4>Id: ${post.id};</h4>
                <h4>Title: ${post.title}</h4>
                <p>Body: ${post.body}</p>
            `;
            let wrapComments = document.createElement("div");
            wrapComments.classList.add("wrapComments");
            let btn = document.createElement("button");
            btn.innerText = "Open comment";

            btn.onclick = () => {
                wrapComments.innerHTML = "<h4>Comments</h4>";
                fetch("https://jsonplaceholder.typicode.com/comments")
                    .then(commentsArr => commentsArr.json())
                    .then(commentsArr => {
                        for (const comment of commentsArr) {
                            if (post.id === comment.postId) {
                                let commentsDiv = document.createElement("div");
                                commentsDiv.classList.add("commentsDiv");
                                commentsDiv.innerHTML = `
                                        <h4 class="noDecor">PostId: ${comment.postId};</h4>
                                        <h4 class="noDecor">Id: ${comment.id};</h4>
                                        <h4 class="noDecor">Name: ${comment.title}</h4>
                                        <h4 class="noDecor">Email: ${comment.email}</h4>
                                        <p class="noDecor">Body: ${comment.body}</p>
                                    `;
                                wrapComments.append(commentsDiv);
                            }

                        }
                        wrapComments.classList.toggle("commentsSwitch");
                    });
            };
            containerBody.append(wrapComments);
            container.append(containerBody, btn);
            wrap.append(container);
        }
    });

