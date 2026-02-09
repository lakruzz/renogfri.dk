// --- Cost Chart Initialization ---
document.addEventListener("DOMContentLoaded", function () {
  initCostChart();
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
