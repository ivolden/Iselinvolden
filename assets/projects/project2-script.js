document.addEventListener("DOMContentLoaded", () => {
    const slideshowFrame = document.getElementById("slideshow-frame");
    const totalSlides = 19;
    const imagePaths = [];

    // If images are in assets/projects/project2/Photo-slide/
    for (let i = 1; i <= totalSlides; i++) {
        imagePaths.push(`project2/Photo-slide/slide${i}.jpg`);
    }

    imagePaths.forEach((path, index) => {
        const img = document.createElement("img");
        img.src = path;
        img.alt = `Slide ${index + 1}`;
        img.className = "slide";
        if (index === 0) img.classList.add("active");
        slideshowFrame.appendChild(img);
    });
});