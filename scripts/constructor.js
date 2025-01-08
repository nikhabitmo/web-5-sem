document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('postForm');
    const postContainer = document.getElementById('postContainer');
    const postText = document.getElementById('postText');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    function createPostElement(content) {
        const article = document.createElement('article');
        article.classList.add('article');

        const paragraph = document.createElement('p');
        paragraph.classList.add('article__content');
        paragraph.textContent = content;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            article.remove();

            const index = posts.indexOf(content);
            if (index > -1) {
                posts.splice(index, 1);
                localStorage.setItem('posts', JSON.stringify(posts));
            }
        });

        article.appendChild(paragraph);
        article.appendChild(deleteButton);

        return article;
    }


    posts.forEach(post => {
        const postElement = createPostElement(post);
        postContainer.appendChild(postElement);
    });

    postForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const postContent = postText.value.trim();
        if (postContent !== '') {
            const newPost = createPostElement(postContent);
            postContainer.appendChild(newPost);
            posts.push(postContent);
            localStorage.setItem('posts', JSON.stringify(posts));
            postText.value = '';
        }
    });
});