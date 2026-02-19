let filteredProjects = [...projects]; // Start with all projects

// Render projects dynamically
function renderProjects() {
    const container = document.getElementById("projects-container");
    container.innerHTML = ""; // Clear existing projects

    filteredProjects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
            <img src="${project.logo}" alt="${project.name} Logo" class="project-logo">
            <h2>${project.title}</h2>
            <p><strong>Duration:</strong> ${project.duration}</p>
            <p><strong>Project Name:</strong> ${project.name}</p>
            <p><strong>Industries:</strong> ${project.industry.join(", ")}</p>
            <p>${project.summary}</p>
            <a href="project-details.html?id=${project.id}" class="project-link" onclick="trackProjectClick('${project.name}')">View Details</a>
        `;

        container.appendChild(card);
    });
}

// Filter projects by industry
function filterProjectsByIndustry(industry) {
    filteredProjects = industry === "all"
        ? [...projects]
        : projects.filter(project => project.industry.includes(industry));
    renderProjects();
}

// Sort projects
function sortProjects(criteria) {
    if (criteria === "name-asc") {
        filteredProjects.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === "name-desc") {
        filteredProjects.sort((a, b) => b.name.localeCompare(a.name));
    } else if (criteria === "duration-asc") {
        filteredProjects.sort((a, b) => new Date(a.duration.split("–")[0]) - new Date(b.duration.split("–")[0]));
    } else if (criteria === "duration-desc") {
        filteredProjects.sort((a, b) => new Date(b.duration.split("–")[0]) - new Date(a.duration.split("–")[0]));
    }
    renderProjects();
}

// Populate filter dropdown dynamically with unique industries
function populateIndustryFilter() {
    const filterIndustry = document.getElementById("filter-industry");
    const uniqueIndustries = new Set();

    projects.forEach(project => {
        project.industry.forEach(ind => uniqueIndustries.add(ind));
    });

    filterIndustry.innerHTML = '<option value="all">All Industries</option>';
    uniqueIndustries.forEach(industry => {
        const option = document.createElement("option");
        option.value = industry;
        option.textContent = industry;
        filterIndustry.appendChild(option);
    });
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    populateIndustryFilter(); // Populate filter dropdown
    renderProjects(); // Initial render

    const filterIndustry = document.getElementById("filter-industry");
    const sortProjectsControl = document.getElementById("sort-projects");

    filterIndustry.addEventListener("change", (e) => filterProjectsByIndustry(e.target.value));
    sortProjectsControl.addEventListener("change", (e) => sortProjects(e.target.value));
});

// Track project clicks
function trackProjectClick(name) {
    gtag('event', 'click', {
        'event_category': 'Project',
        'event_label': name,
        'event_action': 'View Details',
        'page_location': window.location.href // Logs the current page
    });
}