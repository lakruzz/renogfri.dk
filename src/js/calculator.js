export function initPriceCalculator() {
  const ingredients = [
    { name: 'Hakket Oksekød (500g)', price: 45.00 },
    { name: 'Løg (2 stk)', price: 5.00 },
    { name: 'Gulerødder (3 stk)', price: 6.00 },
    { name: 'Hvidløg (1 fed)', price: 2.00 },
    { name: 'Flåede Tomater (1 dåse)', price: 8.00 },
    { name: 'Pasta (500g)', price: 12.00 }
  ];

  const ingredientsList = document.getElementById('ingredients-list');
  if (!ingredientsList) return;

  let subtotal = 0;
  ingredientsList.innerHTML = ''; // Clear for re-init

  ingredients.forEach(item => {
    subtotal += item.price;
    const li = document.createElement('li');
    li.className = 'flex justify-between items-center text-gray-700';
    li.innerHTML = `
      <span>${item.name}</span>
      <span class="font-mono">${item.price.toFixed(2)} kr.</span>
    `;
    ingredientsList.appendChild(li);
  });

  const vat = subtotal * 0.25;
  const totalWithVat = subtotal + vat;

  const subtotalEl = document.getElementById('subtotal-homemade');
  const vatEl = document.getElementById('vat-homemade');
  const totalEl = document.getElementById('total-homemade');
  const noVatEl = document.getElementById('total-no-vat');

  if (subtotalEl) subtotalEl.textContent = subtotal.toFixed(2);
  if (vatEl) vatEl.textContent = vat.toFixed(2);
  if (totalEl) totalEl.textContent = totalWithVat.toFixed(2);
  if (noVatEl) noVatEl.textContent = subtotal.toFixed(2);

  // Toggle logic
  const toggle = document.getElementById('price-toggle');
  const homemadeView = document.getElementById('meal-homemade');
  const processedView = document.getElementById('meal-processed');

  if (toggle && homemadeView && processedView) {
    toggle.addEventListener('change', () => {
      if (toggle.checked) {
        homemadeView.classList.add('hidden');
        processedView.classList.remove('hidden');
      } else {
        homemadeView.classList.remove('hidden');
        processedView.classList.add('hidden');
      }
    });
  }
}
