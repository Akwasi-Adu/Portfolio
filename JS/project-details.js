function loadProjectDetails() {
    const id = getProjectId();
    const project = projects.find(p => p.id === id);

    if (project) {
        document.getElementById("project-title").innerText = project.title;
        document.getElementById("project-client").innerText = project.client;
        document.getElementById("project-duration").innerText = project.duration;
        document.getElementById("project-name").innerText = project.name;
        document.getElementById("project-industry").innerText = project.industry;

        // Populate project details
        const detailsContainer = document.getElementById("project-details");
        detailsContainer.innerHTML = project.details
            .map(detail => `<p>${detail}</p>`)
            .join("");

        // Add screenshot
        const screenshotElement = document.getElementById("project-screenshot");
        if (screenshotElement) {
            screenshotElement.src = project.screenshot;
            screenshotElement.alt = `Screenshot for ${project.title}`;
        }
    } else {
        console.error("Project not found");
        document.getElementById("project-details-page").innerHTML = "<p>Project not found.</p>";
    }
}

window.onload = loadProjectDetails;
