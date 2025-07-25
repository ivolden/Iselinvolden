document.addEventListener("DOMContentLoaded", () => {
    const slideshowFrame = document.getElementById("slideshow-frame");
    const totalSlides = 19; // Updated total number of slides
    const imagePaths = [];

    // Dynamically generate the image paths
    for (let i = 1; i <= totalSlides; i++) {
        imagePaths.push(`./Photo-slide/slide${i}.jpg`);
    }

    // Add images to the slideshow
    imagePaths.forEach((path, index) => {
        const img = document.createElement("img");
        img.src = path;
        img.alt = `Slide ${index + 1}`;
        img.className = "slide";
        if (index === 0) img.classList.add("active"); // Make the first image active
        slideshowFrame.appendChild(img);
    });
});

let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
}