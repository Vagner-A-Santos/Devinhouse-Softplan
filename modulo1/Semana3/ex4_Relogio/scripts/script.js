let paragrafo = document.querySelector('#paragrafo');
let btn = document.querySelector('#btn');

const mostraHora = () => {
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    
    if (hora < 10) {
        hora = '0' + hora;
    }

    if (minuto < 10) {
        minuto = '0' + minuto;
    }

    paragrafo.textContent = `Acessado às ${hora}:${minuto}`;
    }