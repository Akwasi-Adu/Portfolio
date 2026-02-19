function getBlogId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}

function loadBlogDetails() {
    const id = getBlogId();
    const blog = blogs.find(b => b.id === id);

    if (blog) {
        document.getElementById("blog-title").innerText = blog.title;
        document.getElementById("blog-date").innerText = new Date(blog.date).toLocaleDateString();

        const categories = blog.categories.map(category => `<span>${category}</span>`).join(", ");
        document.getElementById("blog-category").innerHTML = categories;

        document.getElementById("blog-content").innerHTML = blog.content;

        // Related posts logic (optional improvement to match any category)
        const relatedPosts = blogs.filter(b => b.id !== id && b.categories.some(cat => blog.categories.includes(cat))).slice(0, 3);
        const relatedContainer = document.getElementById("related-posts-container");

        relatedContainer.innerHTML = ""; // Clear previous related posts
        relatedPosts.forEach(post => {
            const div = document.createElement("div");
            div.classList.add("related-post");

            div.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.summary}</p>
                <a href="blog-details.html?id=${post.id}" class="read-more">Read More</a>
            `;
            relatedContainer.appendChild(div);
        });
    } else {
        document.getElementById("blog-details").innerHTML = "<p>Blog not found.</p>";
    }
}


document.addEventListener("DOMContentLoaded", loadBlogDetails);
