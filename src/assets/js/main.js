// --- State Management ---
const appState = {
    momsDatabase: {
        // 0% Moms (One Ingredient)
        'æble': true, 'pære': true, 'banan': true, 'kartoffel': true, 'gulerod': true, 'løg': true,
        'kylling': true, 'oksekød': true, 'fisk': true, 'laks': true, 'torsk': true,
        'æg': true, 'mælk': true, 'fløde': true, 'smør': true, 'usaltet smør': true,
        'mel': true, 'havregryn': true, 'ris': true, 'bønner': true, 'linser': true, 'vand': true,
        // 25% Moms (Processed/Multi)
        'saltet smør': false, 'kiks': false, 'chips': false, 'sodavand': false, 'cola': false,
        'pølser': false, 'spegepølse': false, 'kage': false, 'brød': false, 'rugbrød': false,
        'pizza': false, 'færdigret': false, 'lasagne': false, 'slik': false, 'chokolade': false,
        'yoghurt med frugt': false, 'frugtyoghurt': false, 'marineret kylling': false
    }
};

// --- Interaction: Check Moms ---
function checkMoms() {
    const input = document.getElementById('momsCheckInput').value.toLowerCase().trim();
    const resultDiv = document.getElementById('momsResult');
    
    if (!input) {
        resultDiv.innerHTML = '';
        return;
    }

    // Simple logic check
    let isMomsFri = appState.momsDatabase[input];
    
    // Fallback heuristics if not in DB
    if (isMomsFri === undefined) {
        if (input.includes('kage') || input.includes('ret') || input.includes('mix') || input.includes('sodavand')) {
            isMomsFri = false;
        } else if (input.includes('frugt') || input.includes('grønt') || input.includes('fersk')) {
            isMomsFri = true;
        } else {
            resultDiv.innerHTML = `<span class="text-gray-500">Varen findes ikke i vores demo-database. Men spørg dig selv: Har den én ingrediens?</span>`;
            return;
        }
    }

    if (isMomsFri) {
        resultDiv.innerHTML = `<span class="text-organic-green text-2xl">✓ 0% MOMS</span> <span class="text-sm block text-gray-600">Dette er en ren råvare (1 ingrediens).</span>`;
    } else {
        resultDiv.innerHTML = `<span class="text-organic-red text-2xl">✕ 25% MOMS</span> <span class="text-sm block text-gray-600">Dette er forarbejdet eller har tilsætning.</span>`;
    }
}

// --- Interaction: Keyboard support for check ---
document.getElementById('momsCheckInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkMoms();
    }
});

// --- Charts Initialization ---
document.addEventListener('DOMContentLoaded', function() {
    initCostChart();
});

function initCostChart() {
    const ctx = document.getElementById('costChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Nuværende Moms-Ramme', 'Overvægtens Pris (Årligt)', 'Pris for 0-Moms Forslag'],
            datasets: [{
                label: 'Milliarder DKK',
                data: [6, 12, 18], // Data approximations from text
                backgroundColor: [
                    '#C05621', // Red for current framework (problem)
                    '#C05621', // Red for obesity cost (problem)
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
                    enabled: true,
                    backgroundColor: '#2D3748',
                    titleFont: { size: 14, weight: 'bold' },
                    bodyFont: { size: 12 },
                    padding: 10,
                    cornerRadius: 4
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) { return value + ' mia.'; }
                    }
                }
            }
        }
    });
}

// --- Smooth Scroll Logic ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
