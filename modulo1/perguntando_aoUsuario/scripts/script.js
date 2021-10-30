const nome = prompt("Qual o seu nome?");
const idade = Number(prompt("Qual a sua idade?"));

if (window.confirm("Você gosta de praticar algum esporte")){
    var resultado = true;
} else {
    var resultado = false;
}

var preferencia = resultado == true ? "gosta" : "não gosta";

var inf = alert(`Que interessante! ${nome}, tem ${idade} anos e ${preferencia} de esportes`);

console.log(nome);
console.log(idade);
console.log(preferencia);

