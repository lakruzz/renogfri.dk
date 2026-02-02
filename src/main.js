import './styles/main.scss'
import { checkMoms } from './js/moms.js'
import { initCostChart } from './js/charts.js'
import { initSmoothScroll } from './js/scroll.js'
import { initPriceCalculator } from './js/calculator.js'

console.log('src/main.js loaded')

document.addEventListener('DOMContentLoaded', () => {
    // Wire up moms checker
    const input = document.getElementById('momsCheckInput');
    const resultDiv = document.getElementById('momsResult');
    const checkBtn = document.getElementById('momsCheckBtn');

    if (input && resultDiv) {
        const runCheck = () => {
            const res = checkMoms(input.value);
            if (res.type === 'empty') {
                resultDiv.innerHTML = '';
                return;
            }
            if (res.type === 'unknown') {
                resultDiv.innerHTML = `<span class="text-slate-400">Varen findes ikke i vores demo-database. Men spørg dig selv: Har den én ingrediens?</span>`;
                return;
            }
            if (res.type === 'zero') {
                resultDiv.innerHTML = `<span class="text-emerald-400 text-2xl">✓ 0% MOMS</span> <span class="text-xs ml-2 text-emerald-100/60 uppercase tracking-wider">Ren råvare</span>`;
            } else {
                resultDiv.innerHTML = `<span class="text-orange-400 text-2xl">✕ 25% MOMS</span> <span class="text-xs ml-2 text-orange-100/60 uppercase tracking-wider">Forarbejdet</span>`;
            }
        }

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') runCheck();
        });

        if (checkBtn) {
            checkBtn.addEventListener('click', runCheck);
        }
    }

    // Init charts (matching ID in index.html)
    initCostChart('cost-chart');

    // Init price simulator
    initPriceCalculator();

    // Smooth scroll
    initSmoothScroll();
});
