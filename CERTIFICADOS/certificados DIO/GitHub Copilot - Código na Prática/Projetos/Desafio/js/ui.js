// DOM + renderização + histório + loader + tema
(function(global){
const form = document.getElementById('calculator-form');
const originEl = document.getElementById('origin');
const destEl = document.getElementById('destination');
const distanceEl = document.getElementById('distance');
const manualCheckbox = document.getElementById('manual-distance');
const resultsSection = document.getElementById('results');
const resultsContent = document.getElementById('results-content');
const comparisonSection = document.getElementById('comparison');
const comparisonContent = document.getElementById('comparison-content');
const carbonSection = document.getElementById('carbon-credits');
const carbonContent = document.getElementById('carbon-credits-content');
const citiesList = document.getElementById('cities-list');
const themeToggle = document.getElementById('theme-toggle');
const viewHistoryBtn = document.getElementById('view-history');


// Preenche datalist com cidades
function populateCities(){
const cities = window.CARBON_ROUTES.cities;
citiesList.innerHTML = '';
cities.forEach(c => {
const opt = document.createElement('option');
opt.value = c;
citiesList.appendChild(opt);
});
}
// Loader
function showLoader(message = 'Calculando impacto ambiental...'){
resultsContent.innerHTML = `<div class="loader">${message}</div>`;
resultsSection.classList.remove('hidden');
}


function hideLoader(){ /* noop - overwritten by renderResults */ }


function renderResults(data){
const { origin, destination, distance, transport, emissionKg } = data;
const score = window.CarbonCalculator.scoreByEmission(emissionKg);
resultsContent.innerHTML = `
<h3>Resultado</h3>
<p><strong>${origin}</strong> → <strong>${destination}</strong></p>
<p>Distância: <strong>${distance} km</strong></p>
<p>Transporte: <strong>${transport}</strong></p>
<p>Emissão estimada: <strong>${emissionKg} kg CO₂</strong></p>
<p>Score ambiental: <strong>${score.label}</strong></p>
`;


// comparação (simples) — compara com carro padrão
const emissionCar = window.CarbonCalculator.calculateEmission(distance, 'car');
comparisonContent.innerHTML = `
<p>Comparação com carro: <strong>${emissionCar} kg CO₂</strong></p>
`;
// compensação
const trees = window.CarbonCalculator.treesToOffset(emissionKg);
const cost = window.CarbonCalculator.costToOffset(emissionKg);
carbonContent.innerHTML = `
<p>Para neutralizar essa emissão seriam necessárias <strong>${trees}</strong> árvores (ano)</p>
<p>Custo estimado para compensação: <strong>$${cost} USD</strong></p>
`;


// Exibir seções
resultsSection.classList.remove('hidden');
comparisonSection.classList.remove('hidden');
carbonSection.classList.remove('hidden');


// Gráfico simples se Chart.js disponível
try{
if(window.Chart){
renderChart(emissionKg, emissionCar);
}
}catch(e){/* ignore */}
}


function renderChart(emission, compare){
// inserir canvas
comparisonContent.innerHTML += `<canvas id="emission-chart" width="400" height="200"></canvas>`;
const ctx = document.getElementById('emission-chart').getContext('2d');
new Chart(ctx, {
type: 'bar',
data: {
labels: ['Selecionado','Carro'],
datasets:[{label: 'kg CO₂', data:[emission, compare]}]
},
options:{responsive:true,maintainAspectRatio:false}
});
}


// Histórico no localStorage
const HISTORY_KEY = 'carbon_calc_history_v1';


function saveToHistory(entry){
const raw = localStorage.getItem(HISTORY_KEY);
const arr = raw ? JSON.parse(raw) : [];
arr.unshift(entry);
localStorage.setItem(HISTORY_KEY, JSON.stringify(arr.slice(0,50)));
}


function getHistory(){
const raw = localStorage.getItem(HISTORY_KEY);
return raw ? JSON.parse(raw) : [];
}


function clearHistory(){
localStorage.removeItem(HISTORY_KEY);
}


function showHistory(){
const list = getHistory();
const html = list.length ? `<ul>` + list.map(item=>`<li>${new Date(item.time).toLocaleString()} — <strong>${item.origin}</strong> → <strong>${item.destination}</strong> — ${item.transport} — <em>${item.emissionKg} kg CO₂</em></li>`).join('') + `</ul>` : '<p>Nenhum histórico ainda</p>';
// colocar no resultsContent temporariamente
resultsContent.innerHTML = `<h3>Histórico de cálculos</h3>${html}<div class="calculator__actions"><button id="btn-clear-history" class="k-btn k-btn--ghost">Limpar histórico</button></div>`;
resultsSection.classList.remove('hidden');
const btn = document.getElementById('btn-clear-history');
if(btn) btn.addEventListener('click', ()=>{
clearHistory();
showHistory();
});
}


// Tema
const THEME_KEY = 'carbon_theme_pref';
function loadTheme(){
const t = localStorage.getItem(THEME_KEY) || 'light';
document.body.classList.toggle('theme-dark', t === 'dark');
themeToggle.setAttribute('aria-pressed', t === 'dark');
}
function toggleTheme(){
const isDark = document.body.classList.toggle('theme-dark');
localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
themeToggle.setAttribute('aria-pressed', isDark);
}
// Form helpers
function enableManualDistance(yes){
distanceEl.readOnly = !yes;
if(yes) distanceEl.classList.add('editable'); else distanceEl.classList.remove('editable');
}


// Expor funções
global.CarbonUI = {
populateCities,
showLoader,
renderResults,
saveToHistory,
showHistory,
loadTheme,
toggleTheme,
enableManualDistance
};


// Eventos UI
themeToggle.addEventListener('click', () => global.CarbonUI.toggleTheme());
viewHistoryBtn.addEventListener('click', () => global.CarbonUI.showHistory());
manualCheckbox.addEventListener('change', (e)=>{
global.CarbonUI.enableManualDistance(e.target.checked);
document.getElementById('distance-help').textContent = e.target.checked ? 'Digite a distância manualmente' : 'A distância será preenchida automaticamente';
});


})(window);