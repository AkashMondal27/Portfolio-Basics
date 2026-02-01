//******************** NAVBAR SECTION ********************** */

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("menuOverlay");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
  hamburger.classList.toggle("active");

  // lock body scroll
  document.body.style.overflow =
    navLinks.classList.contains("active") ? "hidden" : "auto";
});

// Close menu when clicking overlay
overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
  hamburger.classList.remove("active");
  document.body.style.overflow = "auto";
});

// close on link click
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});



//name in different languages changing effect
const names = [
  "Akash Mondal",        // English
  "आकाश मंडल",          // Hindi
  "আকাশ মন্ডল",         // Bengali
  "ಆಕಾಶ ಮಂಡಲ್",     // Kannada
  "આકાશ મંડલ",      // Gujarati
  "ਆਕਾਸ਼ ਮੰਡਲ",      // Punjabi
  "아카쉬 몬달",         // Korean
  "アカシュ・モンダル",   // Japanese (Katakana)
  "阿卡什·蒙达尔",       // Chinese (Simplified)
  "Акаш Мондал"         // Russian
];

const nameEl = document.getElementById("nameRotate");
let index = 0;

setInterval(() => {
  nameEl.classList.add("fade-out");

  setTimeout(() => {
    index = (index + 1) % names.length;
    nameEl.textContent = names[index];
    nameEl.classList.remove("fade-out");
    nameEl.classList.add("fade-in");
  }, 400);

}, 2500);

//******************** CONTACT FORM SECTION ********************** */

//pop up notification for contact form submission
const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
    });

    if(response.ok){
        popup.classList.add("show");
        setTimeout(() => popup.classList.remove("show"), 2500);
        form.reset();
    }
});

//*******************************PROJRCT SECTION  ********************** */

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleViewBtn");
  const cardsWrap = document.getElementById("cardsWrap");

  toggleBtn.addEventListener("click", () => {
    const expanded = cardsWrap.classList.toggle("expanded");
    toggleBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
    toggleBtn.textContent = expanded ? "Show Less" : "View All";

    if (expanded) {
      // smooth scroll so the user sees new cards
      setTimeout(() => cardsWrap.scrollIntoView({ behavior: "smooth" }), 120);
    }
  });

  // keyboard accessibility
  toggleBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleBtn.click();
    }
  });
});


