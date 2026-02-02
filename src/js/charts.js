// Chart initialization logic (uses global Chart from CDN)
export function initCostChart(canvasId = 'costChart') {
  const el = document.getElementById(canvasId);
  if (!el || typeof Chart === 'undefined') return;
  const ctx = el.getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Nuværende Moms-Ramme', 'Overvægtens Pris (Årligt)', 'Pris for 0-Moms Forslag'],
      datasets: [{
        label: 'Milliarder DKK',
        data: [6, 12, 18], // Data approximations from was.index.html
        backgroundColor: [
          '#CBD5E0', // Grey for Current budget
          '#C05621', // Red for Cost of Obesity (Bad)
          '#2F855A'  // Green for Proposal (Investment)
        ],
        borderWidth: 0,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.raw + ' Milliarder kr.';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Milliarder DKK'
          }
        }
      }
    }
  });
}
