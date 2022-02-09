function CalculaIdade() {
    let hoje = Date.parse(new Date());
    let dNasc = Date.parse(document.getElementById("dataNasc").value);
    let diferenca = Math.abs(hoje - dNasc);
    let convEmDias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
    let idade = (convEmDias / 365.25).toFixed();

    if (isNaN(idade)) {
        alert("Para calcular, informe uma data válida!");
    } else {
        var p = document.querySelector("#paragrafo");
        p.textContent = `Você tem ${idade} anos`;
    }
}