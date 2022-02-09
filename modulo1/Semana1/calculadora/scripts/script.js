var operacao = prompt("Digite a operação desejada:\n +\n -\n *\n /");
var numero1 = Number(prompt("Digite o primeiro número:"));
var numero2 = Number(prompt("Digite o segundo número:"));

switch (operacao) {
    case "+":
        let x = numero1 + numero2;
        alert(`O resultado do seu cálculo é: ${x}`);
        break;
    case "-":
        let y = numero1 - numero2;
        alert(`O resultado do seu cálculo é: ${y}`);
        break;
    case "*":
        let z = numero1 * numero2;
        alert(`O resultado do seu cálculo é: ${z}`);
        break;
    case "/":
        let w = numero1 / numero2;
        alert(`O resultado do seu cálculo é: ${w}`);
        break;
    default:
        alert("Operação inválida!");
        break;
}
alert("Obrigado por utilizar nossa calculadora!");