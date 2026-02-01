Projektdokumentation: Ren & Fri (Borgerforslag om 0-moms)

Dette dokument fungerer som den centrale kontekst for AI-assistenter (Gemini Code Assist / GitHub Copilot) i VS Code. Det opsummerer visionen, de økonomiske data og den tekniske logik bag "Ren & Fri" SPA-applikationen.

1. Vision & Kernekoncept

Mission: At gøre det sunde valg til det billigste valg ved at fjerne moms på rene råvarer.
Definition af 0-moms (Én-Ingrediens-Reglen): Varen skal bestå af præcis én ingrediens for at være momsfri. Dette er en radikal simplificering af bureaukratiet.

Momsfri (0%): Æbler, fersk kylling, mælk, mel, tørrede bønner, æg.

Momspligtig (25%): Saltet smør (2 ingredienser), marineret kød, færdigretter, kiks, sodavand.

2. Videnskabeligt Fundament: NOVA-Klassificering

Applikationen bruger NOVA-systemet som objektiv målestok:

NOVA 1 (Uforarbejdede/minimalt forarbejdede): 0% Moms.

NOVA 2-3 (Kulinariske ingredienser/forarbejdede): 25% Moms (undtaget hvis de er rene råvarer som olie/smør uden tilsætning).

NOVA 4 (Ultra-forarbejdede): Altid 25% Moms.

3. Økonomiske Nøgletal (Source Report Data)

Disse data skal bruges i grafer og beregnere:

Provenu-tab: Estimeret til 17-19 mia. kr. årligt ved fuld implementering.

Eksisterende ramme: Der er pt. kun afsat ca. 6 mia. kr. til grøn skattereform/momsdifferentiering.

Omkostninger ved overvægt: Svær overvægt koster det danske samfund >10-12 mia. kr. årligt (tabt produktivitet + sundhedsudgifter).

Adfærdseffekt: Teorien er, at en prisforskel på 25% er nødvendig for at skabe et reelt "tipping point" i forbrugeradfærd (modsat de foreslåede 12%).

4. Teknisk Arkitektur (index.html)

Framework: Vanilla HTML5, Tailwind CSS (CDN).

Visualisering: Chart.js (CDN). Ingen SVG eller Mermaid JS.

State Management: En simpel appState.momsDatabase objekt-struktur i JavaScript.

Responsivitet: Mobil-først design med fokus på chart-container constraints (max-height: 400px).

5. Brugerrejse (App Flow)

Exploration: Forståelse af NOVA-modellen via interaktive kort.

Simulation: "Tids-skatterabatten" – Brugeren ser, hvordan prisen på hjemmelavet mad falder markant i forhold til færdigretter.

Validation: "Moms-Tjekkeren" – En søgefunktion der validerer varer mod én-ingrediens-reglen.

Action: Call-to-action til borgerforslag.dk.

6. Særlige AI-instruktioner til kodning

Tone of voice: Professionel, faktuel, men med en underliggende tone af "sund fornuft" og optimisme.

Farvepalette: organic-base (#F7F5F0), organic-green (#2F855A), organic-red (#C05621).

Logik: Når der tilføjes nye funktioner, skal de altid respektere "én-ingrediens"-princippet. Hvis en vare har salt, krydderier eller konserveringsmidler, er den NOVA 3/4 og dermed 25% moms.

Status: Applikationen er i prototype-fasen. Næste skridt er udvidelse af produktdatabasen og mere avancerede pris-sammenligninger.