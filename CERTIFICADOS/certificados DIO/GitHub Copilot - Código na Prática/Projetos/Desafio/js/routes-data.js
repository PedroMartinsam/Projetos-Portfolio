// Lista de cidades e distâncias (km) entre pares — simples base local
// Estrutura: cities = ["Cidade A", "Cidade B", ...]
// distances = {"Cidade A|Cidade B": 120, ...}


window.CARBON_ROUTES = (function(){
const cities = [
'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Campinas', 'Santos', 'Vitória'
];


const distances = {
'São Paulo|Rio de Janeiro': 429,
'Rio de Janeiro|São Paulo': 429,
'São Paulo|Belo Horizonte': 586,
'Belo Horizonte|São Paulo': 586,
'Campinas|Santos': 90,
'Santos|Campinas': 90,
'São Paulo|Campinas': 100,
'Campinas|São Paulo': 100,
'Rio de Janeiro|Vitória': 520,
'Vitória|Rio de Janeiro': 520
};


return { cities, distances };
})();