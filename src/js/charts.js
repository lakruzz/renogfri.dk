// Chart initialization logic (uses global Chart from CDN)
export function initCostChart(canvasId = 'costChart') {
  const el = document.getElementById(canvasId);
  if (!el || typeof Chart === 'undefined') return;
  const ctx = el.getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Årlige Udgifter til Overvægt', 'Tabt Moms-provenu (Estimat)'],
      datasets: [{
        label: 'Milliarder DKK',
        data: [17, 11],
        backgroundColor: [
          '#C05621', // accent-terra-cotta
          '#2F855A'  // organic-green
        ],
        borderColor: [
          '#A0401A',
          '#246B4A'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Sammenligning af Omkostninger (i mia. DKK)',
          font: {
            size: 16,
            family: "'Merriweather', serif"
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return value + ' mia.';
            }
          }
        }
      }
    }
  });
}
