const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function showSlide(index) {
  slides.forEach((s, i) => s.classList.toggle('active', i === index));
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
setInterval(nextSlide, 5000);
showSlide(currentSlide);

function toggleBrands(id) {
  document.getElementById(id).classList.toggle('hidden');
}
;