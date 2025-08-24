/* NavMenu */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

/* BackgroundSlider */
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((s, i) => s.classList.toggle('active', i === index));
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// auto-slide every 5 seconds
setInterval(nextSlide, 5000);
showSlide(currentSlide);



/* Services */
const serviceSlides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
const container = document.getElementById("carousel");

let currentServiceIndex = 0;

function showServiceSlide(index) {
  container.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle("active", i === index));
  currentServiceIndex = index;
}

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    showServiceSlide(parseInt(dot.dataset.index));
  });
});

// auto-slide every 5s
setInterval(() => {
  let nextIndex = (currentServiceIndex + 1) % serviceSlides.length;
  showServiceSlide(nextIndex);
}, 5000);

/* Payment */
document.getElementById("paymentForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  
  let name = document.getElementById("name").value;
  let amount = document.getElementById("amount").value;
  let details = document.getElementById("details").value;

  let message = `Hello, I want to confirm my payment.%0A%0AName: ${name}%0AAmount Paid: ${amount}%0ADetails: ${details}%0A%0AI will attach my payment proof below.`;
  
  let phone = "2349129378349"; 
  let url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, "_blank");
});
 const showBankBtn = document.getElementById("showBankBtn");
  const bankDetails = document.getElementById("bankDetails");

  showBankBtn.addEventListener("click", () => {
    if (bankDetails.style.display === "none") {
      bankDetails.style.display = "block";
      showBankBtn.textContent = "Hide Bank Details"; // change button text
    } else {
      bankDetails.style.display = "none";
      showBankBtn.textContent = "Show Bank Details"; // revert text
    }
  });
 