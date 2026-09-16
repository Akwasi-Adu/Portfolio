let activeProjectCategory = "all";
let activeIndustry = "all";
let activeSort = "name-asc";

function projectSlug(title) {
    let cleaned = String(title);
    if (cleaned.includes("|")) {
        const parts = cleaned.split("|").map(part => part.trim());
        cleaned = `${parts[0]} ${parts[parts.length - 1]}`;
    }
    const acronymMatch = cleaned.match(/\(([A-Z]{2,})\)/);
    if (acronymMatch) cleaned = cleaned.replace(/\([^)]*\)/, ` ${acronymMatch[1]}`);
    return cleaned
        .replace(/&/g, "and")
        .replace(/[(),]/g, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function projectUrl(project) {
    return `/projects/${project.slug || projectSlug(project.title || project.name)}/`;
}

function applyProjectFilters() {
    const productsShowcase = document.getElementById("products-showcase");
    const clientSection = document.getElementById("client-projects-section");
    const showProducts = activeProjectCategory === "all" || activeProjectCategory === "Products";
    const showClientWork = activeProjectCategory !== "Products";
    if (productsShowcase) productsShowcase.hidden = !showProducts;
    if (clientSection) clientSection.hidden = !showClientWork;
    if (!showClientWork) return;

    let filteredProjects = projects.filter(project =>
        activeProjectCategory === "all" || project.category === activeProjectCategory
    );
    if (activeIndustry !== "all") {
        filteredProjects = filteredProjects.filter(project => project.industry.includes(activeIndustry));
    }

    if (activeSort === "name-asc") filteredProjects.sort((a, b) => a.name.localeCompare(b.name));
    else if (activeSort === "name-desc") filteredProjects.sort((a, b) => b.name.localeCompare(a.name));
    else if (activeSort === "duration-asc") filteredProjects.sort((a, b) => Date.parse(a.startDate) - Date.parse(b.startDate));
    else if (activeSort === "duration-desc") filteredProjects.sort((a, b) => Date.parse(b.startDate) - Date.parse(a.startDate));
    renderProjects(filteredProjects);
}

function renderProjects(filteredProjects) {
    const container = document.getElementById("projects-container");
    if (!container) return;
    container.innerHTML = "";
    if (!filteredProjects.length) {
        container.innerHTML = '<p class="ai-projects-empty">No projects match these filters.</p>';
        return;
    }

    filteredProjects.forEach(project => {
        const card = document.createElement("article");
        card.className = "ai-project-card project-card";
        card.innerHTML = `
            <div class="ai-project-logo-frame"><img src="${project.logo}" alt="${project.clientName} logo" class="project-logo"></div>
            <span class="ai-project-category">${project.category}</span>
            <h2>${project.clientName}</h2>
            <p class="ai-project-name">${project.name}</p>
            <p class="ai-project-role">${project.role}</p>
            <p><strong>Duration:</strong> ${project.duration}</p>
            <p><strong>Industries:</strong> ${project.industry.join(", ")}</p>
            <p>${project.summary}</p>
            <a href="${projectUrl(project)}" class="project-link">View Details</a>`;
        card.querySelector(".project-link").addEventListener("click", () => trackProjectClick(project.name));
        container.appendChild(card);
    });
}

function populateIndustryFilter() {
    const filterIndustry = document.getElementById("filter-industry");
    if (!filterIndustry) return;
    const industries = [...new Set(projects.flatMap(project => project.industry))]
        .sort((a, b) => a.localeCompare(b));
    filterIndustry.innerHTML = '<option value="all">All Industries</option>';
    industries.forEach(industry => {
        const option = document.createElement("option");
        option.value = industry;
        option.textContent = industry;
        filterIndustry.appendChild(option);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    populateIndustryFilter();
    document.querySelectorAll("[data-project-category]").forEach(button => {
        button.addEventListener("click", () => {
            activeProjectCategory = button.dataset.projectCategory;
            activeIndustry = "all";
            const industryControl = document.getElementById("filter-industry");
            if (industryControl) industryControl.value = "all";
            document.querySelectorAll("[data-project-category]").forEach(candidate => {
                const selected = candidate === button;
                candidate.classList.toggle("active", selected);
                candidate.setAttribute("aria-pressed", String(selected));
            });
            applyProjectFilters();
        });
    });
    document.getElementById("filter-industry")?.addEventListener("change", event => {
        activeIndustry = event.target.value;
        applyProjectFilters();
    });
    document.getElementById("sort-projects")?.addEventListener("change", event => {
        activeSort = event.target.value;
        applyProjectFilters();
    });
    applyProjectFilters();
});

function trackProjectClick(name) {
    if (typeof gtag === "function") {
        gtag("event", "project_view", { project_name: name, page_location: window.location.href });
    }
}
