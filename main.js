// Select all wrappers
const wrappers = document.querySelectorAll('.cards-wrapper');

// Loop through each wrapper section
wrappers.forEach(wrapper => {
  const leftBtn = wrapper.querySelector('.scroll-btn.left');
  const rightBtn = wrapper.querySelector('.scroll-btn.right');
  const container = wrapper.querySelector('.cards-container');

  const scrollAmount = 220; // adjust as needed

  leftBtn.addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});

// slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll(".slideshow .slide");
  slides.forEach(slide => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
