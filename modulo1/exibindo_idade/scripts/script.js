var anoAtual = prompt("Digite o ano atual");
var anoNascimento = prompt("Digite o ano de nascimento");
var x = anoAtual - anoNascimento;
var y = x - 1;

if (anoAtual >= anoNascimento) {
    alert(`Sua idade é ${x} ou ${y} anos`);
} else {
    alert("Ops, você ainda não nasceu.");
}