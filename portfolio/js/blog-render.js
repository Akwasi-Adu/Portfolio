let filteredBlogs = [...blogs];

function renderBlogs() {
    const container = document.getElementById("blog-posts");
    container.innerHTML = ""; // Clear existing posts

    filteredBlogs.forEach(blog => {
        const post = document.createElement("div");
        post.classList.add("blog-post");

        post.innerHTML = `
            <h2>${blog.title}</h2>
            <p><em>${new Date(blog.date).toLocaleDateString()}</em></p>
            <p>${blog.summary}</p>
            <a href="blog-details.html?id=${blog.id}" class="read-more" onclick="trackBlogClick('${blog.title}')">Read More</a>
        `;
        

        container.appendChild(post);
    });
}

function searchBlogs(query) {
    filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(query.toLowerCase()));
    renderBlogs();
}

function filterBlogsByCategory(category) {
    filteredBlogs = category === "all" 
        ? [...blogs] 
        : blogs.filter(blog => blog.category === category);
    renderBlogs();
}

function sortBlogs(criteria) {
    if (criteria === "date-desc") {
        filteredBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (criteria === "date-asc") {
        filteredBlogs.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (criteria === "title-asc") {
        filteredBlogs.sort((a, b) => a.title.localeCompare(b.title));
    } else if (criteria === "title-desc") {
        filteredBlogs.sort((a, b) => b.title.localeCompare(a.title));
    }
    renderBlogs();
}

document.addEventListener("DOMContentLoaded", () => {
    // Sort by newest first by default
    filteredBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    renderBlogs();
    
    const searchInput = document.getElementById("search-blog");
    const filterCategory = document.getElementById("filter-category");
    const sortBlog = document.getElementById("sort-blog");

    searchInput.addEventListener("input", (e) => searchBlogs(e.target.value));
    filterCategory.addEventListener("change", (e) => filterBlogsByCategory(e.target.value));
    sortBlog.addEventListener("change", (e) => sortBlogs(e.target.value));
});

// Track blog clicks
function trackBlogClick(title) {
    gtag('event', 'click', {
        'event_category': 'Blog',
        'event_label': title,
        'event_action': 'Read More',
        'page_location': window.location.href // Logs the current page
    });
}
