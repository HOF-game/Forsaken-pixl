// Main JavaScript
console.log("Forsaken Pixel Warriors website loaded!");

// Pixel Background Animation
const canvas = document.getElementById('pixelBackground');
const ctx = canvas.getContext('2d');

let stars = [];

function initStars() {
  stars = [];
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.5
    });
  }
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initStars();
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'white';
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();

    // Move the stars downward
    star.y += star.speed;

    // If star goes out of screen, reset it at the top
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animateStars);
}

// Initial Setup
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animateStars();
