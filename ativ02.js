//#1
var tabuada = [];

for (let i = 1; i < 11; i++) {
    let resultado = i * 5;
    tabuada.push(resultado);
}

var tabuada_string = tabuada.toString();
console.log(tabuada_string);

//#2
var temperaturas = [54, 78, 56, 98, 0, 12, 11, 37];

for (let r = 0; r < temperaturas.length; r++) {
    var calcular_temp = (temperaturas[r] - 32) / 1.8;
    console.log(calcular_temp);
}