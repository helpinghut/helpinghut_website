const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');

let slideNumber = 0;

// Function to calculate the current width of the frame
function updateSlideWidth() {
    return document.querySelector('.frame').clientWidth;
}

function moveToSlide(slideIndex) {
    const slideWidth = updateSlideWidth();
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

right.addEventListener('click', () => {
    if (slideNumber < images.length - 1) {
        slideNumber++;
    } else {
        slideNumber = 0;
    }
    moveToSlide(slideNumber);
});

left.addEventListener('click', () => {
    if (slideNumber > 0) {
        slideNumber--;
    } else {
        slideNumber = images.length - 1;
    }
    moveToSlide(slideNumber);
});

// Update the slide position when the window is resized
window.addEventListener('resize', () => {
    moveToSlide(slideNumber);
});
