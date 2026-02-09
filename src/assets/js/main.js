// --- Charts Initialization ---
document.addEventListener("DOMContentLoaded", function () {
  initCostChart();
  initMobileMenu();
});

function initCostChart() {
  const chartElement = document.getElementById("costChart");
  if (!chartElement) return; // Chart not on this page
  
  const ctx = chartElement.getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Nuværende Moms-Ramme",
        "Moms indtægt på fødevareinflation",
        "Overvægtens Pris (Årligt)",
        "Pris for 0-Moms Forslag",
      ],
      datasets: [
        {
          label: "Milliarder DKK",
          data: [6, 6, 12, 17], // Data approximations from text
          backgroundColor: [
            "#9DA2AE", // Grey for current framework (problem)
            "#4d69aa", // Blue for unintended VAT based on inflation (problem)
            "#C05621", // Red for obesity cost (problem)
            "#2F855A", // Green for Proposal (Investment)
          ],
          borderWidth: 0,
          borderRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
          backgroundColor: "#2D3748",
          titleFont: { size: 14, weight: "bold" },
          bodyFont: { size: 12 },
          padding: 10,
          cornerRadius: 4,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return value + " mia.";
            },
          },
        },
      },
    },
  });
}

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
