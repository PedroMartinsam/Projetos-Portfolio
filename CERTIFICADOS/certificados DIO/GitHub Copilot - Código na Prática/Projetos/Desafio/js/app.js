(function(){
const form = document.getElementById('calculator-form');
const originEl = document.getElementById('origin');
const destEl = document.getElementById('destination');
const distanceEl = document.getElementById('distance');


// init
CarbonUI.populateCities();
CarbonUI.loadTheme();


form.addEventListener('submit', async (e)=>{
e.preventDefault();
const origin = originEl.value.trim();
const destination = destEl.value.trim();
let distance = distanceEl.value ? Number(distanceEl.value) : null;
const transport = form.elements['transport'].value;


// Validação básica
if(!origin || !destination){
alert('Preencha origem e destino');
return;
}


// Se não for manual, tentar buscar distância automática
if(!document.getElementById('manual-distance').checked){
CarbonUI.showLoader();
const fetched = await CarbonAJAX.fetchDistanceAsync(origin, destination);
if(fetched !== null) distance = fetched;
else {
// permitir usuário completar manualmente
CarbonUI.renderResults({ origin,destination,distance:'Desconhecida',transport,emissionKg:null });
alert('Distância não encontrada automaticamente. Marque "Inserir distância manualmente" para informar a distância.');
return;
}
}


// agora temos distância
const emissionKg = CarbonCalculator.calculateEmission(distance, transport);


// salvar histórico
const entry = { time: Date.now(), origin, destination, distance, transport, emissionKg };
CarbonUI.saveToHistory(entry);


CarbonUI.renderResults({ origin,destination,distance,transport,emissionKg });
});


// reset
document.getElementById('btn-reset').addEventListener('click', ()=>{
distanceEl.value = '';
document.getElementById('manual-distance').checked = false;
CarbonUI.enableManualDistance(false);
document.getElementById('distance-help').textContent = 'A distância será preenchida automaticamente';
});


})();