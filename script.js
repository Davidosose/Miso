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

document.getElementById("paymentForm").addEventListener("submit", function(e){
  e.preventDefault();
            
  let name = document.getElementById("name").value;
  let amount = document.getElementById("amount").value;
  let details = document.getElementById("details").value;

  let message = `Hello, I want to confirm my payment.%0A%0AName: ${name}%0AAmount Paid: ${amount}%0ADetails: ${details}%0A%0AI will attach my payment proof below.`;
            
   // Replace with your WhatsApp number (international format without +)
    let phone = "2349129378349"; 
            
    let url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
 });