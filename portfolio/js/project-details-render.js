// Extract project ID from URL
function getProjectId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}

// Load project details dynamically
function loadProjectDetails() {
    const id = getProjectId();
    const project = projects.find(p => p.id === id);

    if (project) {
        document.getElementById("project-screenshot").src = project.screenshot;
        document.getElementById("project-title").innerText = project.title;
        document.getElementById("project-duration").innerText = project.duration;
        document.getElementById("project-name").innerText = project.name;
        document.getElementById("project-industry").innerText = project.industry;

        // Populate details
        const detailsContainer = document.getElementById("project-details");
        detailsContainer.innerHTML = project.details
            .map(detail => `<li>${detail}</li>`)
            .join("");

        // Populate highlights
        const highlightsContainer = document.getElementById("project-highlights");
        highlightsContainer.innerHTML = project.highlights
            .map(highlight => `<li>${highlight}</li>`)
            .join("");

        // Set outcome
        document.getElementById("project-outcome").innerText = project.outcome;
    } else {
        document.getElementById("project-details-page").innerHTML = "<p>Project not found.</p>";
    }
}

window.onload = loadProjectDetails;
