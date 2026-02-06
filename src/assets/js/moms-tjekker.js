const appState = {
  momsDatabase: {
    // 0% Moms (One Ingredient)
    æble: true,
    pære: true,
    banan: true,
    kartoffel: true,
    gulerod: true,
    løg: true,
    kylling: true,
    oksekød: true,
    fisk: true,
    laks: true,
    torsk: true,
    æg: true,
    mælk: true,
    fløde: true,
    smør: true,
    "usaltet smør": true,
    mel: true,
    havregryn: true,
    ris: true,
    bønner: true,
    linser: true,
    vand: true,
    // 25% Moms (Processed/Multi)
    "saltet smør": false,
    kiks: false,
    chips: false,
    sodavand: false,
    cola: false,
    pølser: false,
    spegepølse: false,
    kage: false,
    brød: false,
    rugbrød: false,
    pizza: false,
    færdigret: false,
    lasagne: false,
    slik: false,
    chokolade: false,
    "yoghurt med frugt": false,
    frugtyoghurt: false,
    "marineret kylling": false,
  },
};

// --- Interaction: Check Moms ---
function checkMoms() {
  const input = document
    .getElementById("momsCheckInput")
    .value.toLowerCase()
    .trim();
  const resultDiv = document.getElementById("momsResult");

  if (!input) {
    resultDiv.innerHTML = "";
    return;
  }

  // Simple logic check
  let isMomsFri = appState.momsDatabase[input];

  // Fallback heuristics if not in DB
  if (isMomsFri === undefined) {
    if (
      input.includes("kage") ||
      input.includes("ret") ||
      input.includes("mix") ||
      input.includes("sodavand")
    ) {
      isMomsFri = false;
    } else if (
      input.includes("frugt") ||
      input.includes("grønt") ||
      input.includes("fersk")
    ) {
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
document
  .getElementById("momsCheckInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      checkMoms();
    }
  });
