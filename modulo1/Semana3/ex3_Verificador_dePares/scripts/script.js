let numero = document.querySelector("#numero");
let resposta = document.querySelector("#paragrafo");

const ehPar = () => {
    if (numero.value % 2 === 0) {
        resposta.textContent = `${numero.value} é um número par!`;
    } else {
        resposta.textContent = `${numero.value} é um número ímpar!`;
    }
}