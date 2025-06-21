// Navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Profile redirection
const profileIcon = document.querySelector(".profile-icon");
profileIcon.addEventListener("click", () => {
  window.location.href = "pdetails.html";
});
// Movie card
const movieCards = document.querySelectorAll(".content-card");
movieCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});
