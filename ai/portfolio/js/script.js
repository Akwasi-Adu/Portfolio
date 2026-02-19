function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission

    // Show the spinner
    document.getElementById("spinner").style.display = "block";
    document.getElementById("success-message").style.display = "none";

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const phone = document.getElementById("phone").value; // Optional phone field

    // Prepare parameters for EmailJS
    const templateParams = {
        from_name: name,
        message: message,
        reply_to: email,
    };

    if (phone) {
        templateParams.phone = phone;
    }

    // Send the email
    emailjs.send("service_9hvqsd3", "template_yk503fe", templateParams)
        .then((response) => {
            console.log("SUCCESS!", response.status, response.text);

            // Hide the spinner
            document.getElementById("spinner").style.display = "none";

            // Show the success message
            document.getElementById("success-message").style.display = "block";

            // Clear the form fields
            document.getElementById("contact-form").reset();
        })
        .catch((error) => {
            console.error("FAILED...", error);

            // Hide the spinner
            document.getElementById("spinner").style.display = "none";

            alert("Failed to send message. Please try again.");
        });
        
}

// Show/Hide Back to Top Button
window.onscroll = function () {
    const button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Smooth Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// // Function to display projects
// function loadProjects() {
//     const container = document.getElementById("projects-container");

//     projects.forEach((project, index) => {
//         const card = document.createElement("div");
//         card.classList.add("project-card");

//         card.innerHTML = `
//             <img src="${project.screenshot}" alt="${project.title}">
//             <h2>${project.title}</h2>
//             <p><strong>Client:</strong> ${project.client}</p>
//             <p><strong>Industry:</strong> ${project.industry}</p>
//             <p>${project.description}</p>
//             <button onclick="viewDetails(${index})">View Details</button>
//         `;

//         container.appendChild(card);
//     });
// }

// // Function to view project details in a modal
// function viewDetails(index) {
//     const project = projects[index];

//     // Populate modal content
//     document.getElementById("modal-title").innerText = project.title;
//     document.getElementById("modal-client").innerText = project.client;
//     document.getElementById("modal-industry").innerText = project.industry;
//     document.getElementById("modal-details").innerText = project.details;
//     document.getElementById("modal-screenshot").src = project.screenshot;

//     // Show the modal
//     document.getElementById("project-modal").style.display = "flex";
// }

// // Function to close the modal
// function closeModal() {
//     document.getElementById("project-modal").style.display = "none";
// }

// // Load projects on page load
// window.onload = loadProjects;

// // Close modal when clicking outside the content
// window.onclick = function(event) {
//     const modal = document.getElementById("project-modal");
//     if (event.target === modal) {
//         closeModal();
//     }
// };

document.addEventListener("DOMContentLoaded", () => {
    // Function to render the latest blogs
    function renderLatestBlogs() {
        const blogsContainer = document.getElementById("latest-blogs");

        // Sort blogs by descending ID and pick the last 3
        const latestBlogs = blogs
            .sort((a, b) => b.id - a.id)
            .slice(0, 3);

        // Generate HTML for each blog
        latestBlogs.forEach(blog => {
            const blogCard = document.createElement("div");
            blogCard.classList.add("blog-post");

            blogCard.innerHTML = `
                <h3>${blog.title}</h3>
                <p>${blog.summary}</p>
                <a href="blog-details.html?id=${blog.id}" class="blog-link">Read More</a>
            `;

            blogsContainer.appendChild(blogCard);
        });
    }

    // Call the function to render blogs
    renderLatestBlogs();
});

// Scroll fade-in animations
document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-in");
  
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        appearOnScroll.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => appearOnScroll.observe(fader));
  });
  
  // Scroll to top button
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  

