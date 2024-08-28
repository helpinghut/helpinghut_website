document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slidercommon');
    const totalSlides = slides.length;
  
    function showSlide(n) {
      slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === n) {
          slide.classList.add('active');
        }
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    }
  
    // Automatic slide change interval
    const slideInterval = setInterval(nextSlide, 5000);
  
    // Add event listeners for navigation buttons
    document.getElementById('nextBtn').addEventListener('click', function() {
      clearInterval(slideInterval); // Clear the interval to prevent overlap
      nextSlide();
    });
    document.getElementById('prevBtn').addEventListener('click', function() {
      clearInterval(slideInterval); // Clear the interval to prevent overlap
      prevSlide();
    });
  
    // Initial display
    showSlide(currentSlide);
  });



  

