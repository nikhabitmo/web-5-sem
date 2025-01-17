document.addEventListener("DOMContentLoaded", async () => {
    const postsSection = document.querySelector(".posts");
    const preloader = document.createElement("div");
    preloader.className = "preloader";
    preloader.innerHTML = "<p>Loading...</p>";
    postsSection.appendChild(preloader);

    try {
        await Promise.all([fetchRandomPost(postsSection), fetchRandomPost(postsSection)]);
    } catch (error) {
        console.error("There was a problem loading posts:", error);
    } finally {
        preloader.style.display = "none";
    }
});

function getRandomPostId() {
    return Math.floor(Math.random() * 100) + 1;
}

async function fetchRandomPost(postsSection) {
    const randomPostId = getRandomPostId();
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomPostId}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch post with ID ${randomPostId}`);
        }

        const data = await response.json();

        const article = document.createElement("article");
        article.className = "article";
        article.innerHTML = `
            <h2 class="article__title">${data.title}</h2>
            <p class="article__content">${data.body}</p>
        `;
        postsSection.appendChild(article);
    } catch (error) {
        const errorMessage = document.createElement("p");
        errorMessage.className = "error";
        errorMessage.innerHTML = "Something went wrong";
        postsSection.appendChild(errorMessage);
        console.error("Error fetching post:", error);
    }
}
