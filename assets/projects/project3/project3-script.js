document.addEventListener("DOMContentLoaded", () => {
    const slideshowFrame = document.getElementById("slideshow-frame");
    const imagePaths = [
        "paintings/IMG_3021.jpeg",
        "paintings/IMG_3022.jpeg",
        "paintings/IMG_3023.jpg"
    ];

    imagePaths.forEach((path, index) => {
        const img = document.createElement("img");
        img.src = path;
        img.alt = `Painting ${index + 1}`;
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