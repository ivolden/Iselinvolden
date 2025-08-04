document.addEventListener("DOMContentLoaded", () => {
    const slideshowFrame = document.getElementById("slideshow-frame");
    const totalSlides = 19;
    const imagePaths = [];

    // Images are in Photo-slide/ relative to this HTML file
    for (let i = 1; i <= totalSlides; i++) {
        imagePaths.push('Photo-slide/slide' + i + '.jpg');
    }

    imagePaths.forEach((path, index) => {
        const img = document.createElement("img");
        img.src = path;
        img.alt = `Slide ${index + 1}`;
        img.className = "slide";
        if (index === 0) img.classList.add("active");
        slideshowFrame.appendChild(img);
    });

    let currentSlide = 0;
    const slides = () => document.querySelectorAll(".slide");

    window.changeSlide = function(n) {
        slides()[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + n + imagePaths.length) % imagePaths.length;
        slides()[currentSlide].classList.add("active");
    };
});