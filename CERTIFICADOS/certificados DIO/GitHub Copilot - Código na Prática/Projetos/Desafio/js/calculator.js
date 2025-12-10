// Funções puras de cálculo
(function(global){
const cfg = global.CARBON_CONFIG;


function getDistance(origin, destination){
const key = `${origin}|${destination}`;
const rev = `${destination}|${origin}`;
const routes = global.CARBON_ROUTES.distances;
if(routes[key]) return routes[key];
if(routes[rev]) return routes[rev];
return null; // desconhecido
}


function calculateEmission(distanceKm, transport){
const rate = cfg.emissionsPerKm[transport];
if(rate === undefined || distanceKm === null) return null;
return +(distanceKm * rate).toFixed(3); // kg CO2
}


function scoreByEmission(kgCO2){
// score por 100km equivalente em nível simples — ajustável
if(kgCO2 === null) return { score: null, label: 'Desconhecido', color: 'gray' };
if(kgCO2 <= 5) return { score: 3, label: '🟢 Excelente', color: 'green' };
if(kgCO2 <= 20) return { score: 2, label: '🟡 Médio', color: 'orange' };
return { score: 1, label: '🔴 Alto impacto', color: 'red' };
}


function treesToOffset(kgCO2){
const perTree = cfg.treeAbsorptionKgPerYear;
if(kgCO2 === null) return null;
return Math.ceil(kgCO2 / perTree);
}


function costToOffset(kgCO2){
const tons = kgCO2 / 1000;
const cost = tons * cfg.offsetCostPerTonUSD;
return +cost.toFixed(2);
}


global.CarbonCalculator = {
getDistance,
calculateEmission,
scoreByEmission,
treesToOffset,
costToOffset
};


})(window);