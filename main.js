// Wait until everything (images, audio, etc.) is fully loaded
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
  });





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


// Testimonials slideshow functionality
let testimonialIndex = 0;
showTestimonials();

function showTestimonials() {
  const testimonials = document.querySelectorAll(".testimonials-slideshow .testimonial-slide");
  
  // hide all slides
  testimonials.forEach(slide => (slide.style.display = "none"));
  
  // move to next slide
  testimonialIndex++;
  if (testimonialIndex > testimonials.length) { testimonialIndex = 1; }
  
  // show current slide
  testimonials[testimonialIndex - 1].style.display = "block";
  
  // change slide every 5 seconds
  setTimeout(showTestimonials, 5000);
}


document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});


document.getElementById('copyEmail').addEventListener('click', () => {
  const email = 'dianatorongei@gmail.com';
  navigator.clipboard.writeText(email)
    .then(() => alert('Email copied to clipboard!'))
    .catch(() => alert('Could not copy email. Please copy manually.'));
});


// const audioCard = document.getElementById("audio-card");
// const audioDemo = document.getElementById("audio-demo");
// const playIcon = document.querySelector(".audio-play-btn");

// audioCard.addEventListener("click", () => {
//   if (audioDemo.paused) {
//     audioDemo.play();
//     playIcon.classList.add("pulse");
//     audioCard.classList.add("playing");
//   } else {
//     audioDemo.pause();
//     audioDemo.currentTime = 0;
//     playIcon.classList.remove("pulse");
//     audioCard.classList.remove("playing");
//   }
// });

// // Update progress bar as audio plays
// audioDemo.addEventListener("timeupdate", () => {
//   if (audioDemo.duration > 0) {
//     const progress = (audioDemo.currentTime / audioDemo.duration) * 100;
//     progressBar.style.width = `${progress}%`;
//   }
// });

// // Reset when audio ends
// audioDemo.addEventListener("ended", () => {
//   playIcon.classList.remove("pulse");
//     audioCard.classList.remove("playing");
//     progressBar.style.width = "0%";
// });

const audioCard = document.getElementById("audio-card");
const audioDemo = document.getElementById("audio-demo");
const playIcon = document.querySelector(".audio-play-btn");
const progressBar = document.getElementById("audio-progress-bar");
const currentTimeDisplay = document.getElementById("current-time");
const totalTimeDisplay = document.getElementById("total-time");

audioCard.addEventListener("click", () => {
  if (audioDemo.paused) {
    audioDemo.play();
    playIcon.classList.add("pulse");
    audioCard.classList.add("playing");
  } else {
    audioDemo.pause();
    playIcon.classList.remove("pulse");
    audioCard.classList.remove("playing");
  }
});

// 📈 Update progress bar & current time
audioDemo.addEventListener("timeupdate", () => {
  if (audioDemo.duration > 0) {
    const progress = (audioDemo.currentTime / audioDemo.duration) * 100;
    progressBar.style.width = `${progress}%`;
    currentTimeDisplay.textContent = formatTime(audioDemo.currentTime);
  }
});

// ⏳ Display total duration once loaded
audioDemo.addEventListener("loadedmetadata", () => {
  totalTimeDisplay.textContent = formatTime(audioDemo.duration);
});

// 🔁 Reset when audio ends
audioDemo.addEventListener("ended", () => {
  playIcon.classList.remove("pulse");
  audioCard.classList.remove("playing");
  progressBar.style.width = "0%";
  currentTimeDisplay.textContent = "0:00";
});

// ⏱️ Helper function to format time
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}
