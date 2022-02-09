var numero1 = document.querySelector("#numero1");
var numero2 = document.querySelector("#numero2");
var resultado = document.querySelector("#resultadoOp");

var soma = document.querySelector("#btn-soma");
soma.addEventListener("click", somar);

var subtracao = document.querySelector("#btn-subtracao");
subtracao.addEventListener("click", subtrair);

var multiplicacao = document.querySelector("#btn-multiplicacao");
multiplicacao.addEventListener("click", multiplicar);

var divisao = document.querySelector("#btn-divisao");
divisao.addEventListener("click", dividir);

function somar() {
    let soma = parseInt(numero1.value) + parseInt(numero2.value);
    resultado.value = soma;
    
}
function subtrair() {
    let subtracao = parseInt(numero1.value) - parseInt(numero2.value);
    resultado.value = subtracao;
}
function multiplicar() {
    let multiplicacao = parseInt(numero1.value) * parseInt(numero2.value);
    resultado.value = multiplicacao;
}
function dividir() {
    let divisao = parseInt(numero1.value) / parseInt(numero2.value);
    resultado.value = divisao;
}