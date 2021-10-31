var valorInicial = Number(prompt("Digite o valor inicial da progressão aritmética"));
var valorRaiz = Number(prompt("Digite o valor da raiz"));
var progressao = [];

for (var i = 0; i < 10; i++) {
    progressao[i] = valorInicial + valorRaiz;
    valorInicial = progressao[i];
}

alert(progressao);
