// Array of project data
const projects = [
    {
        title: "Project 3",
        description: "A new project featuring three JPEG images displayed in a box.",
        images: [
            "assets/projects/project3/img_3021.jpg",
            "assets/projects/project3/img_3022.jpg",
            "assets/projects/project3/img_3023.jpg"
        ]
    },
    {
        title: "Weather App",
        description: "A weather application that provides real-time weather updates using an API.",
        link: "https://github.com/your-username/weather-app"
    },
    {
        title: "E-commerce Store",
        description: "An online store built with React and Node.js, featuring a shopping cart and payment integration.",
        link: "https://github.com/your-username/ecommerce-store"
    }
];

// Function to render projects
const renderProjects = () => {
    const projectList = document.querySelector(".project-list");
    if (!projectList) return;

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        let imagesHtml = "";
        if (project.images && project.images.length) {
            imagesHtml = `
                <div class="project-images">
                    ${project.images.map(src => `<img src="${src}" alt="Project 3 image">`).join("")}
                </div>
            `;
        }

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${imagesHtml}
            ${project.link ? `<a href="${project.link}" class="button" target="_blank">View on GitHub</a>` : ""}
        `;

        projectList.appendChild(projectCard);
    });
};

// Call the function to render projects
renderProjects();

// Smooth scrolling for all anchor links on the same page
document.querySelectorAll('a[href^="#"], a[href*="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        const targetId = this.getAttribute('href').split('#')[1]; // Get the target ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Add a delay of 1 second before scrolling
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 500); // 500ms delay
        } else {
            // Navigate to the target page if the element is not on the current page
            const targetHref = this.getAttribute('href');
            const targetHash = targetHref.split('#')[1]; // Extract the hash (e.g., "perspectives")
            if (targetHash) {
                localStorage.setItem('scrollTo', targetHash); // Store the target section in localStorage
            }
            setTimeout(() => {
                window.location.href = targetHref.split('#')[0]; // Navigate to the top of the target page
            }, 500); // 500ms delay
        }
    });
});

// Handle navigation menu clicks
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetUrl = this.getAttribute('href'); // Get the target URL
        
        // Allow direct navigation to contact.html
        if (targetUrl.includes('contact.html')) {
            return; // Don't prevent default - let the browser handle the navigation
        }
        
        e.preventDefault(); // Prevent default link behavior for other pages
        
        const targetHash = targetUrl.includes('#') ? targetUrl.split('#')[1] : null; // Extract the hash (e.g., "perspectives")
        const currentPath = window.location.pathname;
        const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);

        if (targetUrl.includes('perspectives.html')) {
            // Handle "Perspectives" menu click
            if (currentPage === 'perspectives.html') {
                // Already on the Perspectives page
                window.scrollTo({ top: 0, behavior: 'auto' }); // Jump to the top of the page
                setTimeout(() => {
                    const perspectivesSection = document.getElementById('perspectives');
                    if (perspectivesSection) {
                        perspectivesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 500); // 0.5 second delay
            } else {
                // Navigate to Perspectives page
                localStorage.setItem('scrollTo', 'perspectives');
                window.location.href = targetUrl.split('#')[0]; // Navigate to the top of the Perspectives page
            }
        } else if (targetUrl.includes('about.html')) {
            // Handle "About Me" menu click
            if (currentPage === 'about.html') {
                // Already on the About Me page
                window.scrollTo({ top: 0, behavior: 'auto' }); // Jump to the top of the page
                setTimeout(() => {
                    const aboutSection = document.getElementById('about-info');
                    if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 500); // 0.5 second delay
            } else {
                // Navigate to About Me page
                localStorage.setItem('scrollTo', 'about-info');
                window.location.href = targetUrl.split('#')[0]; // Navigate to the top of the About Me page
            }
        } else if (targetUrl.includes('index.html') || targetUrl === '/' || targetUrl === './') {
            // Handle "Home" menu click
            if (currentPage === 'index.html' || currentPage === '') {
                // Already on the Home page
                window.scrollTo({ top: 0, behavior: 'auto' }); // Jump to the top of the page
                setTimeout(() => {
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 500); // 0,5 second delay
            } else {
                // Navigate to Home page
                localStorage.setItem('scrollTo', 'projects');
                window.location.href = targetUrl.split('#')[0]; // Navigate to the top of the Home page
            }
        }
    });
});

// Smooth scrolling after the page loads
window.addEventListener('DOMContentLoaded', () => {
    const scrollTo = localStorage.getItem('scrollTo');

    if (scrollTo) {
        const targetElement = document.getElementById(scrollTo);

        if (targetElement) {
            // Ensure we're at the top of the page
            window.scrollTo({ top: 0, behavior: 'auto' });

            // Add a delay before scrolling to the target section
            const delay = scrollTo === 'perspectives' ? 500 : 1000; // 0.5s for Perspectives, 1s for others
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                localStorage.removeItem('scrollTo'); // Clear the stored scroll position
            }, delay);
        }
    }
});

let currentSlideIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slideshow-container .slide');
    slides[currentSlideIndex].classList.remove('active'); // Hide the current slide

    currentSlideIndex += direction;

    // Wrap around if at the beginning or end
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    } else if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }

    slides[currentSlideIndex].classList.add('active'); // Show the new slide
}

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", event => {
        const href = link.getAttribute("href");

        // Allow navigation for links pointing to other pages
        if (!href || !href.startsWith("#")) {
            return; // Do not prevent default behavior for external links
        }

        // Prevent default behavior for anchor links
        event.preventDefault();

        // Handle smooth scrolling for anchor links
        const targetId = href.substring(1); // Remove the "#" to get the target ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }

    });
});

// Function to load all blog posts in reverse order (newest first)
function loadAllBlogPosts() {
    const perspectivesList = document.querySelector(".perspectives-list");
    if (!perspectivesList) return;

    // Explicitly list the posts you want to show, in the order you want (latest first)
    const postsToShow = [2, 1]; // post2.html above post1.html
    const postBasePath = "assets/blog/post1/post";
    const postSuffix = ".html";

    // Fetch and display posts in the specified order, sequentially to preserve order
    (async () => {
        for (const postNum of postsToShow) {
            const url = `${postBasePath}${postNum}${postSuffix}`;
            try {
                const response = await fetch(url);
                if (!response.ok) continue;
                const data = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, "text/html");
                const mainContent = doc.querySelector("main");
                if (!mainContent) continue;
                const postContainer = document.createElement("div");
                postContainer.classList.add("perspective-item");
                postContainer.innerHTML = mainContent.innerHTML;
                perspectivesList.appendChild(postContainer);
            } catch (e) {
                // Ignore missing or failed posts
            }
        }
    })();
}

document.addEventListener("DOMContentLoaded", loadAllBlogPosts);

// If you have any code that loads or fetches 'project1-content.html', remove or comment it out.
// For example, if you have something like this:
/*
fetch('assets/projects/project1/project1-content.html')
    .then(response => {
        if (!response.ok) throw new Error();
        return response.text();
    })
    .then(data => {
        // ...display project1 content...
    })
    .catch(() => {
        // Remove or comment out any code that displays an error box or message for project1
    });
*/