let salario = 6000;
let inss = "";
let receitaFederal = "";

if (salario < 1556.94) {
    inss = salario * (8 / 100);
    console.log('você deve ' + inss + ' de inss');
} else if (salario > 1556.94 && salario < 2594.92) {
    inss = salario * (9 / 100);
    console.log('você deve ' + inss + ' de inss');
} else if (salario > 2594.93 && salario < 5189.82) {
    inss = salario * (11 / 100);
    console.log('você deve ' + inss + ' de inss');
} else {
    console.log('você deve 570.88 de inss');
}
if (salario < 1903.98) {
    console.log("O leão da receita não te pegou");
} else if (salario > 1903.98 && salario < 2826.65) {
    receitaFederal = salario * (7.5 / 1000) + 142.80
    console.log("voce deve " + receitaFederal + " de imposto de renda, com uma parcela de 142.80 a deduzir ")
} else if (salario > 2826.66 && salario < 3751.05) {
    receitaFederal = salario * (15 / 1000) + 354.80
    console.log("voce deve " + receitaFederal + " de imposto de renda, com uma parcela de 354.80 a deduzir")
} else if (salario > 3751.06 && salario < 4664.68) {
    receitaFederal = salario * (22.5 / 1000) + 636.13
    console.log("voce deve " + receitaFederal + " de imposto de renda, com uma parcela de 636,13 a deduzir")
} else {
    receitaFederal = salario * (27.5 / 1000) + 869.36
    console.log("voce deve " + receitaFederal + " de imposto de renda, com uma parcela de 869.36 a deduzir")
}

let salarioFinal = salario - inss - receitaFederal
console.log('Restou ' + salarioFinal);
