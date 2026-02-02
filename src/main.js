import './styles/main.scss'
import { checkMoms } from './js/moms.js'
import { initCostChart } from './js/charts.js'
import { initSmoothScroll } from './js/scroll.js'

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
                resultDiv.innerHTML = `<span class="text-gray-500">Varen findes ikke i vores demo-database. Men spørg dig selv: Har den én ingrediens?</span>`;
                return;
            }
            resultDiv.innerHTML = res.html;
        }

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') runCheck();
        });

        if (checkBtn) {
            checkBtn.addEventListener('click', runCheck);
        }
    }

    // Init charts (using id from was.index.html)
    initCostChart('costChart');

    // Smooth scroll
    initSmoothScroll();
});
