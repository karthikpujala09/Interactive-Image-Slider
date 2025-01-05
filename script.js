// Selecting necessary DOM elements for the slider and its controls
const slider = document.querySelector('.slider'); // The main container of the slider
const slides = document.querySelectorAll('.slide'); // All images inside the slider
const prevBtn = document.querySelector('.prev-btn'); // Button for previous slide
const nextBtn = document.querySelector('.next-btn'); // Button for next slide
const playPauseBtn = document.getElementById('play-pause-btn'); // Play/Pause button
const dots = document.querySelectorAll('.dot'); // Dots navigation for the slider

// Setting initial states for the slider
let currentIndex = 0; // To keep track of the current slide
let isPlaying = true; // Boolean flag to check if autoplay is on
let interval = setInterval(showNextSlide, 3000); // Autoplay every 3 seconds

// Function to update the slider position when the index changes
function updateSliderPosition() {
  // Move the slider by changing the translateX property
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update the active dot to reflect the current slide
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Function to show the next slide
function showNextSlide() {
  // Loop back to the first slide when reaching the end
  currentIndex = (currentIndex + 1) % slides.length;
  updateSliderPosition(); // Update the slider position after changing the slide
}

// Function to show the previous slide
function showPrevSlide() {
  // Loop back to the last slide when reaching the beginning
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSliderPosition(); // Update the slider position after changing the slide
}

// Function to toggle between play and pause
function togglePlayPause() {
  if (isPlaying) {
    // If it's playing, stop the autoplay
    clearInterval(interval);
    playPauseBtn.textContent = '▶️'; // Change button text to Play
  } else {
    // If it's paused, start the autoplay again
    interval = setInterval(showNextSlide, 3000);
    playPauseBtn.textContent = '⏸'; // Change button text to Pause
  }
  isPlaying = !isPlaying; // Toggle the play/pause state
}

// Event listeners for button clicks
prevBtn.addEventListener('click', showPrevSlide); // Show the previous slide when clicked
nextBtn.addEventListener('click', showNextSlide); // Show the next slide when clicked
playPauseBtn.addEventListener('click', togglePlayPause); // Toggle play/pause on button click

// Event listeners for the dots to jump to a specific slide
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index; // Set the current index based on the clicked dot
    updateSliderPosition(); // Update the slider position to reflect the change
  });
});
