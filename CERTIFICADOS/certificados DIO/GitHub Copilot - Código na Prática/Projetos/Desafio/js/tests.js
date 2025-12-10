// Testes simples — executar no navegador (Console)
(function(){
console.log('=== Carbon Calculator Tests ===');
const d = CarbonCalculator.getDistance('São Paulo','Rio de Janeiro');
console.assert(d === 429, 'Distância SP-RJ deveria ser 429km');
const e = CarbonCalculator.calculateEmission(429,'car');
console.assert(typeof e === 'number', 'Emissão deveria ser número');
const trees = CarbonCalculator.treesToOffset(e);
console.assert(Number.isInteger(trees), 'Árvores deveria ser inteiro');
console.log('Tests completos (avisos no console se algo falhar)');
})();