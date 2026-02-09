// --- Site-wide Initialization ---
document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
});

// --- Smooth Scroll Logic ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// --- Mobile Menu Toggle ---
function initMobileMenu() {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");

  if (!mobileMenuButton || !mobileMenu) return;

  // Toggle menu on button click
  mobileMenuButton.addEventListener("click", function () {
    const isHidden = mobileMenu.classList.contains("hidden");
    if (isHidden) {
      mobileMenu.classList.remove("hidden");
      mobileMenuButton.setAttribute("aria-expanded", "true");
      // Switch to X icon
      hamburgerIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
      mobileMenuButton.setAttribute("aria-expanded", "false");
      // Switch back to hamburger icon
      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  });

  // Close menu when a link is clicked
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
      mobileMenuButton.setAttribute("aria-expanded", "false");
      // Switch back to hamburger icon
      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    const isClickInside =
      mobileMenu.contains(event.target) ||
      mobileMenuButton.contains(event.target);
    if (!isClickInside && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
      mobileMenuButton.setAttribute("aria-expanded", "false");
      // Switch back to hamburger icon
      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  });
}
