// Arquivo placeholder para futuras chamadas reais (geocoding / APIs)
// Atualmente aqui podemos simular chamadas assíncronas se necessário


window.CarbonAJAX = (function(){
function fetchDistanceAsync(origin, destination){
return new Promise((resolve) => {
setTimeout(()=>{
const d = window.CarbonCalculator.getDistance(origin, destination);
resolve(d);
}, 500);
});
}


return { fetchDistanceAsync };
})();