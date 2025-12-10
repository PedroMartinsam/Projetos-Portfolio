// Constantes de emissão (kg CO2 por km) — valores ilustrativos
window.CARBON_CONFIG = {
emissionsPerKm: {
bicycle: 0.0, // bicicleta praticamente zero (não consideramos produção do equipamento)
car: 0.192, // carro por pessoa (kg CO2 / km)
bus: 0.105, // ônibus por passageiro
truck: 0.27 // caminhão por tonelada padrão (estimativa)
},
treeAbsorptionKgPerYear: 21, // estimativa média por árvore (kg CO2 / ano)
offsetCostPerTonUSD: 10 // custo aproximado de compensação por tonelada (USD)
};