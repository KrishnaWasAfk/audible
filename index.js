const track = document.getElementById('slider-track');
const totalImages = track.children.length;
let currentIndex = 0;
const imageWidth = 360; // same as .slider width

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages;
  track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}, 1500);