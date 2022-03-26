let titulo = document.querySelector('#titulo');
let paragrafo1 = document.querySelector('#paragrafo1');
let paragrafo2 = document.querySelector('#paragrafo2');

const mostrarData = () => {
    let data = new Date();
    let dia = data.getDay()+20;
    let mes = data.getMonth()+1;
    let ano = data.getFullYear();

    if (dia <10) {
        dia = '0' + dia;
    }
    if (mes <10) {
        mes = '0' + mes;
    }
    
    let hoje = `Hoje é ${dia}/${mes}/${ano}`;
    paragrafo1.textContent = `${hoje}`;
}

const estacaoDoAno = () => {
    let data = new Date();
    let dia = data.getDay()+20;
    let mes = data.getMonth() +1;
    let img = document.querySelector('#img');
    
    if (mes === 12 && dia >= 22 || mes <= 03 && dia <= 21) {
        titulo.textContent = `Verão`;
        paragrafo2.textContent = `A estação do ano é: Verão`;
        img.src = './img/verao.jpg';
    } else if (mes >= 03 && dia >= 22 || mes === 06 && dia <= 21) {
        titulo.textContent = `Outono`;
        paragrafo2.textContent = `A estação do ano é: Outono`;
        img.src = './img/outono.jpg';
    } else if (mes >= 06 && dia >= 22 || mes === 09 && dia <= 21) {
        titulo.textContent = `Inverno`;
        paragrafo2.textContent = `A estação do ano é: Inverno`;
        img.src = './img/inverno.jpg';
    } else { (mes >= 09 && dia >= 22 || mes === 12 && dia <= 21) 
        titulo.textContent = `Primavera`;
        paragrafo2.textContent = `A estação do ano é: Primavera`;
        img.src = './img/primavera.jpg';
    }
}


