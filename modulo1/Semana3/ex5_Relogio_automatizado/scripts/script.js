let paragrafo = document.querySelector('#paragrafo');
let btn = document.querySelector('#btn');

const mostraHora = () => {
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();
    
    if (hora < 10) {
        hora = '0' + hora;
    }

    if (minuto < 10) {
        minuto = '0' + minuto;
    }

    if (segundo <10) {
        segundo = '0' + segundo;
    }

    paragrafo.textContent = `${hora}:${minuto}:${segundo}`;

    setInterval(() => {
        mostraHora();
    }, 1000);

const paraHora = () => {
    clearInterval(mostraHora);
}
    }